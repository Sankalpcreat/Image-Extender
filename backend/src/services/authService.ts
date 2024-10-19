import Resend from 'resend';
import { createUser, getUserByEmail } from '../models/userModel';

const resend = new Resend(process.env.RESEND_API_KEY!);

export const registerUser = async (username: string, email: string, password: string) => {
  const user = await createUser(username, email, password);
  await sendVerificationEmail(user.email, user.verification_code);
  return user;
};

const sendVerificationEmail = async (email: string, code: string) => {
  const verificationLink = `${process.env.FRONTEND_URL}/verify?code=${code}`;

  await resend.sendEmail({
    from: 'your-email@example.com',
    to: email,
    subject: 'Verify your email',
    html: `<p>Please click the link below to verify your email:</p>
           <a href="${verificationLink}">Verify Email</a>`,
  });
};
