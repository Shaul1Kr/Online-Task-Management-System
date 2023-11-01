import express from "express";
import { login, register, resetPassword } from "../controllers/auth.js";
const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/resetPassword", resetPassword);

export default router;
