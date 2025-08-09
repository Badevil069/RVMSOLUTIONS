'use server';
/**
 * @fileOverview An OTP generation and sending flow.
 *
 * - sendOtp - Generates and "sends" an OTP to a user's email.
 * - SendOtpInput - The input type for the sendOtp function.
 * - SendOtpOutput - The return type for the sendOtp function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const SendOtpInputSchema = z.object({
  email: z.string().email().describe('The email address to send the OTP to.'),
});
export type SendOtpInput = z.infer<typeof SendOtpInputSchema>;

const SendOtpOutputSchema = z.object({
  otp: z.string().length(6).describe('The 6-digit one-time password.'),
  status: z.string().describe('The status of the OTP sending process.'),
});
export type SendOtpOutput = z.infer<typeof SendOtpOutputSchema>;

// This is a placeholder for a real OTP generation and sending service.
// In a real application, you would use a secure method to generate
// and send the OTP, and you would not return the OTP in the response.
const sendOtpFlow = ai.defineFlow(
  {
    name: 'sendOtpFlow',
    inputSchema: SendOtpInputSchema,
    outputSchema: SendOtpOutputSchema,
  },
  async ({ email }) => {
    console.log(`Generating OTP for ${email}`);
    
    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    console.log(`Sending OTP ${otp} to ${email}`);
    // In a real app, you would integrate with an email service like SendGrid or AWS SES here.
    // For now, we just log it and return it for the demo.
    
    return {
      otp,
      status: 'success',
    };
  }
);

export async function sendOtp(input: SendOtpInput): Promise<SendOtpOutput> {
  return sendOtpFlow(input);
}
