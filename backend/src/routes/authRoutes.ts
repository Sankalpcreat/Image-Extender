import express from 'express';
import { googleLogin, register, verifyEmail } from '../controllers/authController';


const router = express.Router();

router.post('/google-login', googleLogin);
router.post('/manual-login', register);
router.post('/verify-email', verifyEmail);

export default router;
