import { Request, Response } from 'express';
import { extendImage } from '../services/openaiService';
import { handleFileUpload } from '../utils/fileUpload';

export const handleImageUpload=async(req:Request,res:Response)=>{
    try {
        const imageFile=req.file;
        if(!imageFile){
            return res.status(400).json({message:'No image file uploaded'})
        }
        const extendedImage = await extendImage(imageFile.buffer);
        res.status(200).json({ message: 'Image processed successfully', data: extendedImage });
    } catch (error) {
      res.status(500).json({ message: 'Failed to process image', error: error.message });
    }
  };