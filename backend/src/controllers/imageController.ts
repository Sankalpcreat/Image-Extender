import { Request, Response } from 'express';
import { extendImageBackground } from '../services/openaiService';


export const extendImage = async (req: Request, res: Response): Promise<void> => {
  try {
    const imageBuffer = req.file?.buffer;
    if (!imageBuffer) {
      res.status(400).json({ error: 'No image provided' });
      return; // Ensure the function exits here
    }

    const extendedImageResponse = await extendImageBackground(imageBuffer);
    const extendedImageUrl = extendedImageResponse.url; // Adjust this line based on the actual response structure
    res.json({ extendedImage: extendedImageUrl });
  } catch (error) {
    console.error('Error extending image:', error); // Log error for debugging
    res.status(500).json({ error: 'Failed to extend the image background' });
  }
};
