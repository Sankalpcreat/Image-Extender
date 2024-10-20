import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, verificationCode: string) => {
  try {
    const response = await resend.emails.send({
      from: 'no-reply@yourapp.com',
      to: email,
      subject: 'Email Verification Code',
      html: `<p>Your verification code is: <strong>${verificationCode}</strong></p>`,
    });
    console.log('Verification email sent', response);
  } catch (error) {
    console.error('Failed to send verification email', error);
    throw new Error('Failed to send verification email');
  }
};
