import express from "express";
import loginController from "../controller/login.controller";
const router = express.Router();

router.get("/", loginController.login)
export default router