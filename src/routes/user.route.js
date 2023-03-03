import express from "express";
import userController from "../controller/user.controller"
const route = express.Router();

route.get("/",userController.renderUser)
export default route