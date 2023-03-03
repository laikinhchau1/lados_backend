import express from "express";  
import loginRoute from "./login.route.js"
import dashboardRoute from "./dashboard.route.js"
import userRoute from "./user.route.js"
import sanphamRoute from "./sanpham.route.js"
const router = express.Router();

router.use("/", loginRoute);
router.use("/dashboard", dashboardRoute);
router.use("/user", userRoute)
router.use("/sanpham", sanphamRoute);  

export default router;