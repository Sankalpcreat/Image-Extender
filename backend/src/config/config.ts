import dotenv from 'dotenv'

dotenv.config();

export const AI_API_KEY=process.env.AI_API_KEY || '';
export const PORT=process.env.PORT || 5023;