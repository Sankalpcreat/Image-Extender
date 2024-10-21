import { Router } from "express";
import { googleLogin } from "../controller/authController";

const router=Router();

router.post("/google",googleLogin);
export default router;