import mongoose,{ Schema } from "mongoose";

const User = new Schema({
    user: {type: String, maxLength: 100},
    pas: {type: String, maxLength: 100},
    username: {type: String},
    role: {type: Array, default: 'read'},
    email: {type: String, maxLength: 500}
},{
    timestamps: true
})

export default mongoose.model('User', User)