import { NextResponse } from "next/server";

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

    const FORM_ID = "eOtYaK3qTI4zmaKxsEcz";
    const LOCATION_ID = "9WoI9uJc4yEHv5jr0TCy";

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

    // Format payload for GHL / LeadConnector API
    const ghlPayload: Record<string, any> = {
      formId: FORM_ID,
      location_id: LOCATION_ID,
      full_name: contactName,
      name: contactName,
      firstName: contactName.split(" ")[0] || contactName,
      lastName: contactName.split(" ").slice(1).join(" ") || "",
      email: contactEmail,
      phone: contactPhone,
      dGofHnMnssMX0H4JsImP: industry || "PROPERTY & PROFESSIONAL (Law Firms, Auto Repairs, etc.)",
      GSpLikjYcr62jy1754kS: normalizedServices.join(", "),
      terms_and_conditions: "terms_and_conditions",
      pageUrl: pageUrl || "https://aknexus.co/free-audit",
      referrer: referrer || "",
    };

    if (message) {
      ghlPayload.message = message;
    }

    // Fire-and-forget GHL submission — always succeed for the user
    const forwardToGHL = async () => {
      const endpoints = [
        `https://backend.leadconnectorhq.com/forms/${FORM_ID}/submit`,
        "https://backend.leadconnectorhq.com/appengine/forms/submit",
        "https://services.leadconnectorhq.com/forms/submit",
      ];

      for (const url of endpoints) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 5000);

          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(ghlPayload),
            signal: controller.signal,
          });

          clearTimeout(timeoutId);

          const responseText = await response.text().catch(() => "");
          console.log(`GHL [${url}] → ${response.status}: ${responseText.slice(0, 200)}`);

          if (response.ok) {
            return true;
          }
        } catch (e) {
          console.warn(`GHL submit attempt failed for ${url}:`, e);
        }
      }
      return false;
    };

    // Execute forwarding without blocking user success
    forwardToGHL().catch((e) => console.error("GHL forwarding error:", e));

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
  } catch (error: any) {
    console.error("Lead route error:", error);
    return NextResponse.json(
      { error: "Server error processing lead submission. Please try again." },
      { status: 500 }
    );
  }
}
