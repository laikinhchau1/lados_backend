import jwt from "jsonwebtoken"

const checkToken = (req,res,next) => {
    try {
        const token = req.cookies.token
        const checkToken = jwt.verify(token, 'hieulatoi')

        if(checkToken){
            next()
        }
    } catch (error) {
        res.redirect('/')
        // console.log('ban chua dang nhap hay dang nhap de vao duoc ', error)
    }
}

export default {checkToken}