import { OAuth2Client } from 'google-auth-library';
import prisma from '../prisma/client';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { JWT_SECRET } from '../config';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleLogin = async (req: Request, res: Response) => {
  const { token } = req.body;

  try {
    
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    if (!payload) {
      return res.status(400).json({ message: 'Invalid token' });
    }

    const { sub: googleId, email, name } = payload;


    let user = await prisma.user.findUnique({ where: { googleId } });

   
    if (!user) {
      user = await prisma.user.create({
        data: {
          googleId,
          email: email || '',
          name: name || '',
        },
      });
    }


    const token = jwt.sign({ userId: user.id, googleId: user.googleId }, JWT_SECRET, {
      expiresIn: '1h',
    });

    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Authentication failed', error });
  }
};
