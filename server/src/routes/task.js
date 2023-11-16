import express from "express";
import verifyToken from "../midleware/auth.js";
import { createTask, getTasks } from "../controllers/task.js";
const router = express.Router();

router.use(verifyToken);
router.get("/getTask", getTasks);
router.post("/createTask", createTask);

export default router;
