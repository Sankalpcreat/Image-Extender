import { Request, Response } from 'express';
import prisma from '../prisma/client';
import axios from 'axios'; 
import dotenv from 'dotenv';

dotenv.config();

export const extendImage = async (req: Request, res: Response) => {
  const { imageUrl } = req.body;
  const userId = req.user.userId;

  try {
  
    const openAiResponse = await axios.post(
      'https://api.openai.com/v1/images/generations', 
      {
        prompt: "Extend this image", 
        image_url: imageUrl,
        size: '1024x1024', 
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, 
          'Content-Type': 'application/json',
        },
      }
    );


    const extendedImageUrl = openAiResponse.data.data[0].url; 

   
    const newImage = await prisma.image.create({
      data: {
        url: imageUrl,
        extendedUrl: extendedImageUrl,
        userId,
      },
    });

   
    return res.json({ image: newImage });
  } catch (error) {
    console.error('Error extending image:', error);
    return res.status(500).json({ message: 'Failed to extend image', error });
  }
};
