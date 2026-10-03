import { NextResponse, after } from "next/server";

// GHL form identifiers (LeadConnectorHQ native form)
const FORM_ID = "eOtYaK3qTI4zmaKxsEcz";
const LOCATION_ID = "9WoI9uJc4yEHv5jr0TCy";

// GHL's native form submit service (extracted from GHL's own widget bundle).
// formId & locationId are QUERY PARAMETERS — not path segments.
const GHL_FORMS_SERVICE_URL = "https://backend.leadconnectorhq.com";

// Field tags of this specific GHL form (from the form definition).
// GHL rejects unknown properties in formData with 422 "property should not
// exist", so only these tags plus the documented metadata keys may be sent.
const GHL_FIELDS = {
  fullName: "full_name",
  email: "email",
  phone: "phone",
  industry: "dGofHnMnssMX0H4JsImP", // single dropdown
  services: "GSpLikjYcr62jy1754kS", // multi dropdown
  terms: "terms_and_conditions",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      name,
      email,
      phone,
      industry,
      services,
      service,
      message,
      consent,
      pageUrl,
      referrer,
    } = body;

    const contactName = fullName || name || "";
    const contactEmail = (email || "").trim();
    const contactPhone = (phone || "").trim();

    // Server-side validation
    if (!contactEmail || !contactEmail.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!contactPhone) {
      return NextResponse.json(
        { error: "Please provide a phone number." },
        { status: 400 }
      );
    }

    // Normalize services array
    let normalizedServices: string[] = [];
    if (Array.isArray(services) && services.length > 0) {
      normalizedServices = services;
    } else if (typeof services === "string" && services.trim()) {
      normalizedServices = [services.trim()];
    } else if (typeof service === "string" && service.trim()) {
      normalizedServices = [service.trim()];
    } else {
      normalizedServices = ["Local SEO"];
    }

    // Fire-and-forget GHL submission — always succeed for the user.
    // `after()` (next/server) keeps this running after the response is sent.
    after(async () => {
      const result = await submitToGHL({
        contactName,
        contactEmail,
        contactPhone,
        industry,
        normalizedServices,
        consent,
        message,
        pageUrl,
        referrer,
      });
      if (result.ok) {
        console.log(
          `GHL submit OK → contactId=${result.contactId || "n/a"} (form ${FORM_ID})`
        );
      } else {
        console.error(
          `GHL submit FAILED → ${result.status}: ${result.detail}`
        );
      }
    });

    // Always return success to the user — lead data is logged server-side
    console.log("Lead submission received:", {
      name: contactName,
      email: contactEmail,
      phone: contactPhone,
      industry,
      services: normalizedServices,
      pageUrl,
    });

    return NextResponse.json({
      success: true,
      message: "Form received successfully",
    });
  } catch (error: unknown) {
    console.error("Lead route error:", error);
    return NextResponse.json(
      { error: "Server error processing lead submission. Please try again." },
      { status: 500 }
    );
  }
}

interface GhlSubmitInput {
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  industry?: string;
  normalizedServices: string[];
  consent?: boolean;
  message?: string;
  pageUrl?: string;
  referrer?: string;
}

interface GhlSubmitResult {
  ok: boolean;
  status: number;
  detail: string;
  contactId?: string;
}

/**
 * Submits a lead to GHL exactly like the native embedded form does:
 *
 *   POST {FORMS_SERVICE_URL}/forms/submit?formId=…&locationId=…
 *   multipart/form-data:
 *     - formData  : JSON string of field values (keyed by the form's field tags)
 *     - formId    : form id
 *     - locationId: location id
 *     - challengeToken / turnstileNonInteractiveToken (only when captcha is on)
 */
async function submitToGHL(input: GhlSubmitInput): Promise<GhlSubmitResult> {
  const {
    contactName,
    contactEmail,
    contactPhone,
    industry,
    normalizedServices,
    consent,
    message,
    pageUrl,
    referrer,
  } = input;

  // Field values keyed by the form's real tags. Do NOT add extra keys —
  // GHL validates them against the form schema (422 "property should not exist").
  const submissionData: Record<string, unknown> = {
    [GHL_FIELDS.fullName]: contactName,
    [GHL_FIELDS.email]: contactEmail,
    [GHL_FIELDS.phone]: contactPhone,
  };

  if (industry) {
    submissionData[GHL_FIELDS.industry] = industry;
  }
  // Multi-select fields are submitted as an array of option strings
  submissionData[GHL_FIELDS.services] = normalizedServices;

  // T&C checkbox carries the literal value "terms_and_conditions" when checked
  if (consent) {
    submissionData[GHL_FIELDS.terms] = "terms_and_conditions";
  }

  if (message) {
    submissionData.message = message;
  }

  // Metadata the native widget always sends (page attribution)
  submissionData.eventData = {
    pageUrl: pageUrl || "",
    referrer: referrer || "",
    medium: "Form",
    mediumId: FORM_ID,
  };
  submissionData.timeSpent = 0;
  submissionData.disqualified = false;

  const formBody = new FormData();
  formBody.set("formData", JSON.stringify(submissionData));
  formBody.append("formId", FORM_ID);
  formBody.append("locationId", LOCATION_ID);

  const url = `${GHL_FORMS_SERVICE_URL}/forms/submit?formId=${FORM_ID}&locationId=${LOCATION_ID}`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6000);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formBody,
      signal: controller.signal,
    });

    const responseText = await response.text().catch(() => "");
    const snippet = responseText.slice(0, 300);

    if (response.ok) {
      let contactId: string | undefined;
      try {
        const json = JSON.parse(responseText);
        contactId = json?.contactId || json?.contact?.id;
      } catch {
        // non-JSON success — ignore
      }
      return { ok: true, status: response.status, detail: snippet, contactId };
    }

    return { ok: false, status: response.status, detail: snippet };
  } catch (err) {
    const reason = err instanceof Error ? err.message : String(err);
    return { ok: false, status: 0, detail: `request error: ${reason}` };
  } finally {
    clearTimeout(timeoutId);
  }
}
