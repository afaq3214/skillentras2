import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';



const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT, 10),
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: true,
    ciphers: 'HIGH:!aNULL:!MD5',
  },
  logger: true,
  debug: true,
});

export async function POST(request) {
  try {
    const { firstName, lastName, email, company, service, message } = await request.json();

    if (!firstName || !lastName || !email || !service || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    console.log('Sending to user email:', email); // Debug user email

    const adminMailOptions = {
      from: `"Skillentras Contact" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    const userMailOptions = {
      from: `"Skillentras Team" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank You for Contacting Skillentras!',
      html: `
        <h2>Thank You, ${firstName}!</h2>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <p><strong>Your Message:</strong></p>
        <p>${message}</p>
        <p>Best regards,<br/>The Skillentras Team</p>
      `,
    };

    await transporter.verify();
    console.log('SMTP connection verified');

    const [adminResult, userResult] = await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    console.log('Admin email sent:', adminResult);
    console.log('User email sent:', userResult);

    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending emails:', error.stack);
    return NextResponse.json({ error: 'Failed to send emails', details: error.message }, { status: 500 });
  }
}