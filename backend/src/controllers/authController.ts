import { googleOAuthLogin } from '../services/googleAuthService';
import { Request, Response } from 'express';
import {registerUser,verifyUserCode } from '../services/authService';

export const googleLogin=async(req:Request,res:Response)=>{
  const {token}=req.body;
  try {
    const user=await googleOAuthLogin(token);
    res.json({user})
  } catch (error) {
    res.status(500).json({error:'Google OAuth login failed'})
  }
};


export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const user = await registerUser(username, email, password);
    res.status(201).json({ message: 'User registered. Verification email sent.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const verifyEmail = async (req: Request, res: Response) => {
  try {
    const { email, code } = req.body;
    const message = await verifyUserCode(email, code);
    res.status(200).json({ message });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};