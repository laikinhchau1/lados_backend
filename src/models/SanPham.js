import mongoose,{ Schema } from "mongoose";
const id = "LD" + Math.random().toString(16).slice(2)
const SanPham = new Schema({
    name: {type: String, maxLength: 255},
    info: {type: String, maxLength: 600},
    img1: {type: String},
    img2: {type: String},
    type: {type: Number},
    code: {type: String, default: id},
    price: {type: Number},
},{
    timestamps: true
})

export default mongoose.model('SanPham', SanPham)