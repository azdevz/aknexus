export async function sendSubmissionEmail(subject: string, replyTo: string, text: string) {
  const key = process.env.SENDGRID_API_KEY;
  if (!key) throw new Error("Email delivery is not configured.");

  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: "ayazchishti99@gmail.com" }] }],
      from: { email: process.env.SENDGRID_FROM_EMAIL || "no-reply@aknexus.co" },
      reply_to: { email: replyTo },
      subject,
      content: [{ type: "text/plain", value: text }],
    }),
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error("Email delivery failed.");
}
