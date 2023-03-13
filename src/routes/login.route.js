import express from "express";
import loginController from "../controller/login.controller";
const router = express.Router();

router.get("/", loginController.login)
router.post("/sign_in", loginController.signin)
export default router