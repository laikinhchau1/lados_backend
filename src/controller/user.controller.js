import User from "../models/User"
import jwt from "jsonwebtoken"
import deleteElementInObject from "../util/deleteElementInObject"
const renderUser = async (req,res) => {
    try{
        const token = req.cookies.token
        const checkToken = jwt.verify(token, 'hieulatoi')
        User.findById({
            _id: checkToken._id
        }).select('-pas').then(data =>{
            console.log(data)
            res.render('user.ejs',{item: data})
        }).catch(error=>{
            console.log('loi khong lay duoc user', error)
        })
    }catch(err) {
        console.log('khong hien thi duoc danh sach user', err)
    }
}

export default {renderUser}