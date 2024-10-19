
import { Request, Response } from 'express';
import { registerUser, verifyUser } from '../services/authService';

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    const user = await registerUser(username, email, password);
    return res.status(201).json({ message: 'User registered. Check your email for verification.' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const verifyEmail = async (req: Request, res: Response) => {
  const { code } = req.params;
  try {
    const user = await verifyUser(code);
    return res.status(200).json({ message: 'Email verified successfully!', user });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
