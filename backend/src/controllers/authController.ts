import { googleOAuthLogin } from '../services/googleAuthService';
import { Request, Response } from 'express';
import { manualLogin, sendVerificationCode } from '../services/authService';

export const googleLogin=async(req:Request,res:Response)=>{
  const {token}=req.body;
  try {
    const user=await googleOAuthLogin(token);
    res.json({user})
  } catch (error) {
    res.status(500).json({error:'Google OAuth login failed'})
  }
};


export const manualLoginController=async(req:Request,res:Response)=>{
  const {email,password}=req.body;
  try {
    const user=await manualLogin(email,password);
  } catch (error) {
    res.status(500).json({error:'Login Failed'})
  }
};


export const verifyEmail = async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const verificationCode = await sendVerificationCode(email);
    res.json({ message: 'Verification code sent', verificationCode });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send verification code' });
  }
};