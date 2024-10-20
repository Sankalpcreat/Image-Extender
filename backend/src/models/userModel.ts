import pool from '../config/database';

export const createUser = async (username: string, email: string, password: string | null, verificationCode: string | null) => {
  const result = await pool.query(
    'INSERT INTO users (username, email, password, verification_code, is_verified) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [username, email, password, verificationCode, false] // `false` means user is not verified yet
  );
  return result.rows[0];
};

export const getUserByEmail = async (email: string) => {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0];
};

export const updateVerificationStatus = async (email: string) => {
  const result = await pool.query('UPDATE users SET is_verified = true WHERE email = $1 RETURNING *', [email]);
  return result.rows[0];
};
