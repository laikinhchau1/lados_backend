import express from "express";
import sanphamController from "../controller/sanpham.controller";
import multer from "multer"
import appRootPath from "app-root-path";
import path from 'path'
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, appRootPath + '/public/assets/img');
    },
    filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });
const upload = multer({storage: storage})
const route = express.Router();

route.get("/",sanphamController.renderProduct)

route.post("/add_new_product",
  upload.single('img1'),
  sanphamController.addNewProduct)

route.post("/edit_product",
  upload.single('img1'),
  sanphamController.updateProduct)


route.get("/:id/getdata",sanphamController.getProduct)
route.get("/:id/delete_product",sanphamController.deleteProduct)

export default route