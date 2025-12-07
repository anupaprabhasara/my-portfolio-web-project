import type { EmailPayload, EmailResponse } from "../types/email";
import { validateEmailConfig } from "../utils/validation";

const BREVO_API_URL = "https://api.sendinblue.com/v3/smtp/email";

export async function sendEmail(data: EmailPayload): Promise<EmailResponse> {
  try {
    validateEmailConfig();

    const recipientEmailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">🚨 New Contact Form Submission</h2>
        <p style="font-size: 16px; line-height: 1.6;">You have received a new message from your contact form.</p>
        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 20px;">
          <p style="margin: 5px 0;"><strong>👤 Name:</strong> ${data.name}</p>
          <p style="margin: 5px 0;"><strong>📧 Email:</strong> <a href="mailto:${data.email}" style="color: #007bff; text-decoration: none;">${data.email}</a></p>
          <p style="margin: 5px 0;"><strong>📝 Message:</strong></p>
          <p style="white-space: pre-wrap; background-color: #fff; padding: 10px; border: 1px solid #eee; border-radius: 3px; font-style: italic;">${data.message}</p>
        </div>
        <p style="margin-top: 20px; font-size: 14px; color: #666;">This submission was sent via your website contact form.</p>
      </div>
    `;

    const recipientResponse = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": import.meta.env.VITE_BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          email: import.meta.env.VITE_BREVO_EMAIL,
          name: data.name,
        },
        to: [
          {
            email: import.meta.env.VITE_TO_EMAIL,
            name: "Recipient",
          },
        ],
        replyTo: {
          email: data.email,
          name: data.name,
        },
        subject: `Contact Form Submission from ${data.name}`,
        htmlContent: recipientEmailTemplate,
      }),
    });

    if (!recipientResponse.ok) {
      const responseData = await recipientResponse.json();
      return {
        success: false,
        message:
          responseData.message ||
          "Failed to send email to the recipient. Please try again.",
      };
    }

    const confirmationEmailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #4CAF50; border-radius: 8px;">
        <h2 style="color: #4CAF50; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">👋 Thank You for Contacting Me!</h2>
        <p style="font-size: 16px; line-height: 1.6;">Dear ${data.name},</p>
        <p style="font-size: 16px; line-height: 1.6;">I have successfully received your message and appreciate you reaching out. I will review your inquiry and get back to you as soon as possible, typically within 24-48 hours.</p>
        <div style="background-color: #e8f5e9; padding: 15px; border-radius: 5px; margin-top: 20px;">
          <p style="margin: 5px 0;"><strong>Your Message Summary:</strong></p>
          <p style="white-space: pre-wrap; background-color: #fff; padding: 10px; border: 1px solid #c8e6c9; border-radius: 3px; font-style: italic;">${data.message}</p>
        </div>
        <p style="margin-top: 30px; font-size: 16px; line-height: 1.6;">Best regards,</p>
        <p style="font-size: 16px; line-height: 1.6; font-weight: bold; color: #333;">Anupa Prabhasara</p>
        <p style="margin-top: 30px; text-align: center; font-size: 12px; color: #999;">If you did not send this message, please disregard this email.</p>
      </div>
    `;

    const confirmationResponse = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": import.meta.env.VITE_BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          email: import.meta.env.VITE_BREVO_EMAIL,
          name: "Anupa Prabhasara",
        },
        to: [
          {
            email: data.email,
            name: data.name,
          },
        ],
        subject: "Thank you for contacting me!",
        htmlContent: confirmationEmailTemplate,
      }),
    });

    if (!confirmationResponse.ok) {
      const responseData = await confirmationResponse.json();
      return {
        success: false,
        message:
          responseData.message ||
          "Failed to send confirmation email to the user. Please try again.",
      };
    }

    return {
      success: true,
      message: "Emails sent successfully!",
    };
  } catch (error) {
    console.error("Email service error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
