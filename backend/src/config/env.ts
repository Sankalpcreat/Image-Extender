import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 5000;
export const DATABASE_URL = process.env.DATABASE_URL || '';
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';
export const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
