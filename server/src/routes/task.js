import express from "express";
import verifyToken from "../midleware/auth.js";
import { getTasks } from "../controllers/task.js";
const router = express.Router();

router.use(verifyToken);
router.get("/getTask", getTasks);

export default router;
