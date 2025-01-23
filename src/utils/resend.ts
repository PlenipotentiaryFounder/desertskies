import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY!;
export const resend = new Resend(resendApiKey);
const domain = process.env.DOMAIN || 'desertskiesaviationaz.com';

export async function sendDiscoveryFlightEmail({ 
  name,
  email,
  phone,
  date,
  time,
  notes = ''
}: {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  notes?: string;
}) {
  const adminEmail = process.env.ADMIN_EMAIL!;
  const schoolName = process.env.SCHOOL_NAME || 'Desert Skies Aviation';
  const fromEmail = `Desert Skies Aviation <noreply@${domain}>`;

  try {
    // Send confirmation email to customer
    const customerEmail = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Your Discovery Flight with Desert Skies Aviation - Confirmation',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #1e3a8a; margin-bottom: 20px;">Welcome to Desert Skies Aviation!</h1>
          
          <p style="font-size: 16px; line-height: 1.5;">Dear ${name},</p>
          
          <p style="font-size: 16px; line-height: 1.5;">Thank you for booking your discovery flight! I'm Thomas Ferrier, and I'm looking forward to introducing you to the exciting world of aviation.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1e3a8a; margin-top: 0;">Your Flight Details</h2>
            <p style="margin: 5px 0;"><strong>Date:</strong> ${date}</p>
            <p style="margin: 5px 0;"><strong>Time:</strong> ${time}</p>
            <p style="margin: 5px 0;"><strong>Location:</strong> Falcon Field Airport (FFZ)</p>
            <p style="margin: 5px 0;"><strong>Address:</strong> 4800 E Falcon Dr, Mesa, AZ 85215</p>
          </div>

          <h2 style="color: #1e3a8a; margin-top: 30px;">Important Information</h2>
          
          <ul style="font-size: 16px; line-height: 1.5;">
            <li>Please arrive <strong>1.5 hours before</strong> your scheduled flight time</li>
            <li>You're welcome to bring a guest (combined weight limit of 500 lbs)</li>
            <li>No need to bring a headset - we'll provide one</li>
            <li>Bring a valid photo ID</li>
            <li>Wear comfortable clothing and closed-toe shoes</li>
          </ul>

          <div style="background-color: #e5e7eb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e3a8a; margin-top: 0;">Rescheduling Policy</h3>
            <p style="margin: 5px 0;">Need to reschedule? No problem! Just let us know at least 24 hours in advance.</p>
          </div>

          <p style="font-size: 16px; line-height: 1.5;">During your discovery flight, you'll experience:</p>
          <ul style="font-size: 16px; line-height: 1.5;">
            <li>Pre-flight aircraft inspection</li>
            <li>Basic flight principles</li>
            <li>Hands-on flying experience</li>
            <li>Spectacular views of the Valley</li>
          </ul>

          <p style="font-size: 16px; line-height: 1.5;">I'm excited to share my passion for aviation with you and answer any questions you may have about becoming a pilot.</p>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="font-size: 16px; line-height: 1.5;">Best regards,<br>
            Thomas Ferrier<br>
            Desert Skies Aviation<br>
            Phone: (480) 256-8355</p>
          </div>
        </div>
      `
    });

    // Send notification email to admin
    const adminNotification = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: 'New Discovery Flight Booking',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #1e3a8a;">New Discovery Flight Booking</h1>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1e3a8a; margin-top: 0;">Customer Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${time}</p>
            ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ''}
          </div>
        </div>
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

export async function sendContactEmail({ 
  name,
  email,
  phone = '',
  interest,
  message
}: {
  name: string;
  email: string;
  phone?: string;
  interest: string;
  message: string;
}) {
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
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #1e3a8a;">Thank you for contacting ${schoolName}!</h1>
          
          <p style="font-size: 16px; line-height: 1.5;">Dear ${name},</p>
          
          <p style="font-size: 16px; line-height: 1.5;">Thank you for reaching out to us. We've received your message and will get back to you as soon as possible, typically within 24 hours.</p>

          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1e3a8a; margin-top: 0;">Your Message Details</h2>
            <p><strong>Interest:</strong> ${interest}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>

          <p style="font-size: 16px; line-height: 1.5;">In the meantime, feel free to:</p>
          <ul style="font-size: 16px; line-height: 1.5;">
            <li>Visit our website to learn more about our training programs</li>
            <li>Follow us on social media for updates and aviation content</li>
            <li>Call us at (480) 256-8355 for immediate assistance</li>
          </ul>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="font-size: 16px; line-height: 1.5;">Best regards,<br>
            Thomas Ferrier<br>
            Desert Skies Aviation<br>
            Falcon Field Airport (FFZ)<br>
            4800 E Falcon Dr, Mesa, AZ 85215</p>
          </div>
        </div>
      `
    });

    // Send notification email to admin
    const adminNotification = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: 'New Contact Form Submission',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #1e3a8a;">New Contact Form Submission</h1>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1e3a8a; margin-top: 0;">Customer Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Interest:</strong> ${interest}</p>
          </div>

          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1e3a8a; margin-top: 0;">Message</h2>
            <p>${message}</p>
          </div>
        </div>
      `
    });

    console.log('User confirmation email sent:', userEmail);
    console.log('Admin notification email sent:', adminNotification);
    return { userEmail, adminNotification };
  } catch (error) {
    console.error('Error sending contact emails:', error);
    console.error('Error details:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
    throw error;
  }
} 