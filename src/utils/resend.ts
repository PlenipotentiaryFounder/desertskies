import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY!;
export const resend = new Resend(resendApiKey);
const domain = process.env.DOMAIN || 'desertskiesaviationaz.com';

export async function sendDiscoveryFlightEmail({ name, email, phone, date, time, notes = '' }) {
  const adminEmail = process.env.ADMIN_EMAIL!;
  const schoolName = process.env.SCHOOL_NAME || 'Desert Skies Aviation';
  const fromEmail = `Desert Skies Aviation <noreply@${domain}>`;

  try {
    // Send confirmation email to customer
    const customerEmail = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Discovery Flight Booking Confirmation',
      html: `
        <h1>Thank you for booking a discovery flight with ${schoolName}!</h1>
        <p>We're excited to have you join us. Here are your booking details:</p>
        <ul>
          <li>Date: ${date}</li>
          <li>Time: ${time}</li>
        </ul>
        <p>We'll see you at our flight school. If you need to make any changes, please contact us.</p>
      `
    });

    // Send notification email to admin
    const adminNotification = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: 'New Discovery Flight Booking',
      html: `
        <h1>New Discovery Flight Booking</h1>
        <h2>Customer Details:</h2>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
          <li>Phone: ${phone}</li>
          <li>Date: ${date}</li>
          <li>Time: ${time}</li>
          ${notes ? `<li>Notes: ${notes}</li>` : ''}
        </ul>
      `
    });

    console.log('Admin email sent:', adminNotification);
    console.log('User email sent:', customerEmail);

    return { customerEmail, adminNotification };
  } catch (error) {
    console.error('Error sending emails:', error);
    throw error;
  }
}

export async function sendContactEmail({ name, email, phone = '', interest, message }) {
  const adminEmail = process.env.ADMIN_EMAIL!;
  const schoolName = process.env.SCHOOL_NAME || 'Desert Skies Aviation';
  const fromEmail = `Desert Skies Aviation <noreply@${domain}>`;

  try {
    // Send confirmation email to user
    const userEmail = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Thank you for contacting Desert Skies Aviation',
      html: `
        <h1>Thank you for contacting ${schoolName}!</h1>
        <p>We've received your message and will get back to you shortly.</p>
        <p>Here's a copy of your message:</p>
        <hr>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    // Send notification to admin
    const adminNotification = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `New Contact Form Submission - ${interest}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <h2>Contact Details:</h2>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
          ${phone ? `<li>Phone: ${phone}</li>` : ''}
          <li>Interest: ${interest}</li>
        </ul>
        <h2>Message:</h2>
        <p>${message}</p>
      `
    });

    console.log('Admin email sent:', adminNotification);
    console.log('User email sent:', userEmail);

    return { userEmail, adminNotification };
  } catch (error) {
    console.error('Error sending emails:', error);
    throw error;
  }
} 