import { Request, Response } from 'express';
import { extendImageBackground } from '../services/imageService';
import { validateImageUrl } from '../utils/validate';

export const uploadAndExtendImage = async (req: Request, res: Response) => {
  const { imageUrl } = req.body;

 
  if (!validateImageUrl(imageUrl)) {
    return res.status(400).json({ success: false, message: 'Invalid image URL' });
  }

  try {
    const extendedImage = await extendImageBackground(imageUrl);
    res.status(200).json({ success: true, extendedImage });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Image processing failed', error: error.message });
  }
};
