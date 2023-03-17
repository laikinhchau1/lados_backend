import express from "express";
import getProductController from "../../controller/apiRouter/getProduct.controller";
const router = express.Router();

router.get("/get_product", getProductController.getProduct)
export default router