import { OAuth2Client } from 'google-auth-library';
import { getUserByEmail, createUser } from '../models/userModel';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleOAuthLogin = async (token: string) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload || !payload.email) {
      throw new Error('Invalid Google token');
    }

    let user = await getUserByEmail(payload.email);
    if (!user) {
      user = await createUser(payload.name || '', payload.email, 'google-oauth');
    }

    return user;
  } catch (error) {
    throw new Error('Google OAuth login failed');
  }
};
