import express from "express";
import dashboardController from "../controller/dashboard.controller";

const route = express.Router();
route.get("/", dashboardController.dashboard)

export default route