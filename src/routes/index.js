import express from "express";  
import loginRoute from "./login.route.js"
import dashboardRoute from "./dashboard.route.js"
import userRoute from "./user.route.js"
import sanphamRoute from "./sanpham.route.js"
import checkToken from "../middaleware/checkToken.js";
const router = express.Router();

router.use("/",loginRoute);
router.use("/dashboard", checkToken.checkToken,dashboardRoute);
router.use("/user",checkToken.checkToken, userRoute)
router.use("/sanpham",checkToken.checkToken, sanphamRoute);  

export default router;