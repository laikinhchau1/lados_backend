import SanPham from "../models/SanPham"

const renderProduct = async (req,res, next) => {
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
                res.render('sanpham.ejs',{
                    item,
                    current: page,
                    pages: Math.ceil(count / perPage)
                })
            })
        })

    }catch(err) {
        console.log('khong hien thi duoc danh sach user', err)
    }
}

const addNewProduct = async (req,res, next) => {
    try{
        const file = req.file
        const getData = req.body
        // console.log('xem file ra cai gi nao', req.body)
        const sanpham = new SanPham({
            name: getData?.name,
            info: getData?.info,
            img1: file.filename,
            type: getData?.type,
            code: getData?.code,
            price: getData.price
        })

        if (!file) {
            const error = new Error('Please upload a file')
            error.httpStatusCode = 400
            return next(error)
          }
          sanpham.save().then(item =>{
            console.log('da them dc san pham vao db', item)
            res.redirect('/sanpham')
          }).catch(error =>{
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: error.message,
            });
          })
    }catch(err) {
        console.log('them moi san pham that bai', err)
    }
}

const getProduct = async (req,res, next) => {
    try{
        SanPham.findById(req.params.id).then(
            item =>{
                res.json(item)
            }).catch(next)
    }catch(err){
        console.log('bi loi roi khong lay dc data theo id', err)
    }

}


const updateProduct = async (req,res, next) => {
    try{
        const file = req.file
        const getData = req.body
        if(file) getData.img1 = file.filename
        SanPham.updateOne({_id: getData.id}, getData)
        .then(()=> res.redirect('/sanpham'))
        .catch(next)
    }catch(err){
        console.log('bi loi roi khong sua', err)
    }
}

const deleteProduct = async (req,res, next) =>{
    try{
        SanPham.deleteOne({_id: req.params.id})
        .then(()=> res.redirect('/sanpham'))
        .catch(next)
    }catch(err){
        console.log('bi loi roi khong sua', err)
    }
}
export default {renderProduct,addNewProduct,getProduct, updateProduct,deleteProduct}