import { Router } from "express";
import { extendImage } from "../controller/imageController";
import {authMiddleware} from "../middleware/authMiddleware"

const router-Router();

router.post('/extend',authMiddleware,extendImage);

export default router;