import express from "express";
import authController from "../controller/auth.controller.js";
import { loginValidation, registerValidation } from "../middleware/validate.js";

const router = express.Router();

router.post("/register", registerValidation, authController.register);
router.post("/login", loginValidation, authController.login);

export default router;
