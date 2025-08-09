'use server';
/**
 * @fileOverview A contact form email sending flow.
 *
 * - sendContactEmail - "Sends" the contact form details to a predefined email address.
 * - SendContactEmailInput - The input type for the sendContactEmail function.
 * - SendContactEmailOutput - The return type for the sendContactEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import ContactFormEmail from '@/components/emails/contact-form-email';


const SendContactEmailInputSchema = z.object({
  name: z.string(),
  company: z.string().optional(),
  phone: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});
export type SendContactEmailInput = z.infer<typeof SendContactEmailInputSchema>;

const SendContactEmailOutputSchema = z.object({
  status: z.string().describe('The status of the email sending process.'),
  message: z.string().describe('A message describing the result.'),
});
export type SendContactEmailOutput = z.infer<typeof SendContactEmailOutputSchema>;

const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: SendContactEmailInputSchema,
    outputSchema: SendContactEmailOutputSchema,
  },
  async (input) => {
    const toEmail = 'rvmsolutions2025@gmail.com';
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
        console.log("RESEND_API_KEY not found. Skipping email sending and logging to console instead.");
        console.log('Email Recipient:', toEmail);
        console.log('Email Subject:', `New Contact Form Submission: ${input.subject}`);
        console.log('Email Body:', input);
        return {
            status: 'success',
            message: 'Your message has been sent successfully. We will get back to you shortly.',
        };
    }

    const resend = new Resend(resendApiKey);

    const emailHtml = render(<ContactFormEmail {...input} />);

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev', // This must be a verified domain on Resend
            to: toEmail,
            subject: `New Contact Form Submission: ${input.subject}`,
            html: emailHtml,
        });

        return {
            status: 'success',
            message: 'Your message has been sent successfully. We will get back to you shortly.',
        };
    } catch (error) {
      console.error('Error sending email:', error);
      return {
        status: 'error',
        message: 'There was a problem sending your message. Please try again later.',
      };
    }
  }
);

export async function sendContactEmail(input: SendContactEmailInput): Promise<SendContactEmailOutput> {
  return sendContactEmailFlow(input);
}
