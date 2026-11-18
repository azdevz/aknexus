import { z } from "zod";
import { sendSubmissionEmail } from "@/lib/submission-email";

const contact = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.email().max(254),
  service: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1).max(10000),
});

export async function POST(request: Request) {
  const result = contact.safeParse(await request.json().catch(() => null));
  if (!result.success) return Response.json({ error: "Invalid contact details." }, { status: 400 });

  const { name, email, service, message } = result.data;
  try {
    await sendSubmissionEmail("AK Nexus consulting inquiry", email, [
      `Name: ${name}`, `Email: ${email}`, `Service: ${service || "Unspecified"}`, "", message,
    ].join("\n"));
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Unable to send your message." }, { status: 502 });
  }
}
