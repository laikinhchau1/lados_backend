import User from "../models/User";
import jwt from "jsonwebtoken"
const login = async (req, res) =>{
    
    try {
        const token = req?.cookies.token
        const checkToken = jwt.verify(token, 'hieulatoi')
        // console.log('co token trong nay ko', checkToken)
        if(checkToken){
            res.render('\danhsach.ejs')
        }
      } catch(err) {
        res.render('index.ejs')
        // console.log('bi loi roi b oi', err);
    }
}


const signin = async (req , res, next) => {
  try {
    const dataClient = req.body

    const user = dataClient.username
    const pas = dataClient.password
    User.findOne({
      user,pas
    }).then(data => {
      if(data){
        const token = jwt.sign({
          _id: data._id
        },'hieulatoi')
        // console.log('co vao day ko', data)
        return res.json({
          error_code: 0,
          data: {
            token: token,
            message: 'Login success'
          }

        })
      }else{
        res.json({
          error_code: 1,
          message: "Password or UserName was wrong !!!"
        })
      }
    }).catch(err => {
      console.log('khong lay duoc thong tin user ', err)
    })
  } catch (error) {
    res.status(500).json('loi sever')
    console.log('loi sever', error)
  }
}
export default {login, signin}