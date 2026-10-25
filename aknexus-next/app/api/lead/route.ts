import { NextResponse } from "next/server";
import { INDUSTRY_OPTIONS, SERVICE_OPTIONS } from "@/data/lead-options";

const GHL_URL = "https://services.leadconnectorhq.com/contacts/upsert";
const INDUSTRY_FIELD_ID = "dGofHnMnssMX0H4JsImP";
const SERVICES_FIELD_ID = "GSpLikjYcr62jy1754kS";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    const parsed = await req.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error();
    body = parsed;
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const industry = typeof body.industry === "string" ? body.industry : "";
  const services = Array.isArray(body.services) ? [...new Set(body.services)] : [];

  if (!fullName || fullName.length > 200 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Please provide your name and a valid email address." }, { status: 400 });
  }
  if (!/^\+[1-9]\d{6,14}$/.test(phone.replace(/[\s()-]/g, ""))) {
    return NextResponse.json({ error: "Please include your country code, for example +971, in your phone number." }, { status: 400 });
  }
  if (!INDUSTRY_OPTIONS.some((option) => option.id === industry) || !services.length || services.some((value) => typeof value !== "string" || !SERVICE_OPTIONS.includes(value))) {
    return NextResponse.json({ error: "Please select a valid industry and services." }, { status: 400 });
  }
  if (typeof body.consent !== "boolean") {
    return NextResponse.json({ error: "Please specify your communication preference." }, { status: 400 });
  }

  const token = process.env.GHL_PRIVATE_INTEGRATION_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;
  const pipelineId = process.env.GHL_PIPELINE_ID;
  const pipelineStageId = process.env.GHL_PIPELINE_STAGE_ID;
  if (!token || !locationId || !pipelineId || !pipelineStageId) {
    console.error("Lead integration is not configured.");
    return NextResponse.json({ error: "The form is temporarily unavailable. Please try again later." }, { status: 503 });
  }

  try {
    const response = await fetch(GHL_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Version: "v3",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        locationId,
        name: fullName,
        email,
        phone: phone.replace(/[\s()-]/g, ""),
        source: "AK Nexus Website — Free Audit",
        createNewIfDuplicateAllowed: false,
        customFields: [
          { id: INDUSTRY_FIELD_ID, fieldValue: industry },
          { id: SERVICES_FIELD_ID, fieldValue: services },
        ],
        // Never clear an existing opt-out when updating a contact.
        ...(body.consent === false ? { dnd: true } : {}),
      }),
      signal: AbortSignal.timeout(15000),
      cache: "no-store",
    });
    const result = await response.json().catch(() => null);
    if (!response.ok || typeof result?.contact?.id !== "string" || !result.contact.id) {
      // Keep credentials, contact details, and upstream response bodies out of logs.
      console.error("GHL contact save failed", { status: response.status, traceId: result?.traceId });
      return NextResponse.json({ error: "We could not save your request. Please try again or contact us directly." }, { status: 502 });
    }
    const contactId = result.contact.id;
    const opportunityHeaders = {
      Authorization: `Bearer ${token}`,
      Version: "v3",
      "Content-Type": "application/json",
    };
    // Preserve an existing deal's stage/status instead of resetting it on resubmission.
    const query = new URLSearchParams({ locationId, pipelineId, contactId, limit: "1" });
    const lookup = await fetch(`https://services.leadconnectorhq.com/opportunities/search?${query}`, {
      headers: opportunityHeaders, signal: AbortSignal.timeout(15000), cache: "no-store",
    });
    const existing = await lookup.json().catch(() => null);
    if (!lookup.ok || !Array.isArray(existing?.opportunities)) {
      console.error("GHL opportunity lookup failed", { status: lookup.status, contactId });
      return NextResponse.json({ error: "Your contact was saved, but we could not complete your audit request. Please try again." }, { status: 502 });
    }
    if (!existing.opportunities.length) {
      const created = await fetch("https://services.leadconnectorhq.com/opportunities/", {
        method: "POST", headers: opportunityHeaders,
        body: JSON.stringify({
          locationId, pipelineId, pipelineStageId, contactId,
          name: `${fullName} — Free Audit`, status: "open",
        }),
        signal: AbortSignal.timeout(15000), cache: "no-store",
      });
      const opportunity = await created.json().catch(() => null);
      if (!created.ok || !opportunity?.opportunity?.id) {
        console.error("GHL opportunity creation failed", { status: created.status, contactId });
        return NextResponse.json({ error: "Your contact was saved, but we could not complete your audit request. Please try again." }, { status: 502 });
      }
    }
    console.info("GHL contact and opportunity saved", { contactId });
    return NextResponse.json({ success: true, message: "Your request has been saved successfully." });
  } catch {
    console.error("GHL contact save request failed or timed out.");
    return NextResponse.json({ error: "We could not confirm your request. Please try again." }, { status: 502 });
  }
}
