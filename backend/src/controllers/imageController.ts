import { Request, Response } from 'express';
import { extendImageBackground } from '../services/openaiService';

export const extendImage = async (req: Request, res: Response) => {
  try {
    const imageBuffer = req.file?.buffer;
    if (!imageBuffer) {
      return res.status(400).json({ error: 'No image provided' });
    }

    const extendedImage = await extendImageBackground(imageBuffer);
    res.json({ extendedImage });
  } catch (error) {
    res.status(500).json({ error: 'Failed to extend the image background' });
  }
};
