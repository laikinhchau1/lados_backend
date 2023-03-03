import mongoose from "mongoose"

const connect = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/lados_backend')
    .then(() => console.log('Connected!')).catch((err)=> console.log('connect db fail', err))
    
}

export default connect