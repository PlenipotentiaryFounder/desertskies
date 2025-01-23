import { NextResponse } from 'next/server';
import { resend } from '@/utils/resend';
import { supabaseAdmin } from '@/utils/supabase';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const adminEmail = process.env.ADMIN_EMAIL!;
    const schoolName = process.env.SCHOOL_NAME!;

    if (!adminEmail || !schoolName) {
      console.error('Missing environment variables:', { adminEmail: !!adminEmail, schoolName: !!schoolName });
      throw new Error('Server configuration error');
    }

    // Store message in database
    const { error: dbError } = await supabaseAdmin
      .from('contact_messages')
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          interest: data.interest,
          message: data.message,
          status: 'unread'
        }
      ]);

    if (dbError) {
      console.error('Database error:', JSON.stringify(dbError));
      throw new Error('Failed to store message');
    }

    console.log('Sending admin notification email...');
    // Send notification email to admin
    const adminEmailResult = await resend.emails.send({
      from: `${schoolName} <noreply@desertskiesaviation.com>`,
      to: adminEmail,
      subject: `New Contact Form Submission - ${data.interest}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>From:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
        <p><strong>Interest:</strong> ${data.interest}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });

    console.log('Admin email sent:', adminEmailResult);

    console.log('Sending user confirmation email...');
    // Send confirmation email to user
    const userEmailResult = await resend.emails.send({
      from: `${schoolName} <noreply@desertskiesaviation.com>`,
      to: data.email,
      subject: 'Thank you for contacting Desert Skies Aviation',
      html: `
        <h1>Thank you for reaching out!</h1>
        <p>Dear ${data.name},</p>
        <p>We've received your message and will get back to you shortly.</p>
        <p>Best regards,<br>${schoolName} Team</p>
      `,
    });

    console.log('User email sent:', userEmailResult);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send message' },
      { status: 500 }
    );
  }
} 