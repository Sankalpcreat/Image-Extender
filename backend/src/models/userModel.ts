// src/models/userModel.ts
import pool from '../config/database';
import { v4 as uuidv4 } from 'uuid';

export const createUser = async (username: string, email: string, password: string) => {
  const verificationCode = uuidv4(); 
  const result = await pool.query(
    'INSERT INTO users (username, email, password, verification_code) VALUES ($1, $2, $3, $4) RETURNING *',
    [username, email, password, verificationCode]
  );
  return result.rows[0];
};


export const getUserByEmail = async (email: string) => {
  const result = await pool.query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  );
  return result.rows[0];
};

export const getUserByVerificationCode = async (code: string) => {
  const result = await pool.query(
    'SELECT * FROM users WHERE verification_code = $1',
    [code]
  );
  return result.rows[0];
};

export const verifyUser = async (code: string) => {
  const user = await getUserByVerificationCode(code);
  if (!user) throw new Error('Invalid verification code');

 
  await pool.query(
    'UPDATE users SET is_verified = true WHERE verification_code = $1',
    [code]
  );
  return user;
};
