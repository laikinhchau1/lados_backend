import SanPham from "../../models/SanPham";
import responseHandler from "../../handlers/response.handler";
const getProduct = async (req, res) => {
    try{
        let perPage = 10; // số lượng sản phẩm xuất hiện trên 1 page
        let page = req.query.page || 1; 
        SanPham
        .find({})
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec((error,item) =>{
            SanPham.countDocuments((err,count) =>{
                if (err) return next(err);
                responseHandler.ok(res, item)
            })
        })
    }catch(err){
        console.log('bi loi o dashboard', err);
    }
}   

export default {getProduct}