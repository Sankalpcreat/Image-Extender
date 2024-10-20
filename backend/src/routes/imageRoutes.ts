import express from 'express';
import { extendImage } from '../controllers/imageController';
import { requireAuth } from '../middlewares/authMiddleware';
import multer from 'multer';

const router = express.Router();
const upload = multer();  // For handling file uploads

router.post('/extend', requireAuth, upload.single('image'), extendImage);

export default router;
