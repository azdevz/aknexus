import { MailService } from '@sendgrid/mail';
import { ContactSubmission } from '@shared/schema';

// Initialize the SendGrid mail service
const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function sendContactNotification(submission: ContactSubmission): Promise<boolean> {
  try {
    // Format message content
    const messageContent = `
      New Contact Form Submission
      ---------------------------
      Name: ${submission.name}
      Email: ${submission.email}
      Subject: ${submission.subject}
      Service of Interest: ${submission.service}
      Message: ${submission.message}
      Submitted at: ${submission.createdAt}
    `;

    // Setup email data
    const msg = {
      to: 'aknexus.uae@gmail.com',
      from: 'no-reply@aknexus.co', // This should be a verified sender in your SendGrid account
      subject: `New Contact Form: ${submission.subject}`,
      text: messageContent,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${submission.name}</p>
        <p><strong>Email:</strong> ${submission.email}</p>
        <p><strong>Subject:</strong> ${submission.subject}</p>
        <p><strong>Service of Interest:</strong> ${submission.service}</p>
        <p><strong>Message:</strong><br>${submission.message.replace(/\\n/g, '<br>')}</p>
        <p><strong>Submitted at:</strong> ${new Date(submission.createdAt).toLocaleString()}</p>
      `
    };

    // Send the email
    await mailService.send(msg);
    console.log('Contact notification email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending contact notification email:', error);
    return false;
  }
}