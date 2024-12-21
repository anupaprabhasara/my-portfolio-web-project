import type { EmailPayload, EmailResponse } from '../types/email';
import { validateEmailConfig } from '../utils/validation';

const BREVO_API_URL = 'https://api.sendinblue.com/v3/smtp/email';

export async function sendEmail(data: EmailPayload): Promise<EmailResponse> {
  try {
    validateEmailConfig();

    const response = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': import.meta.env.VITE_BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: {
          email: import.meta.env.VITE_BREVO_EMAIL,
          name: data.name
        },
        to: [{
          email: import.meta.env.VITE_TO_EMAIL,
          name: 'Recipient'
        }],
        replyTo: {
          email: data.email,
          name: data.name
        },
        subject: `Contact Form Submission from ${data.name}`,
        htmlContent: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        `
      })
    });

    const responseData = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: responseData.message || 'Failed to send email. Please try again.'
      };
    }

    return {
      success: true,
      message: 'Email sent successfully!'
    };
  } catch (error) {
    console.error('Email service error:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.'
    };
  }
}