const  Mongoose  = require("mongoose");

const todoSchema = Mongoose.Schema({
    so_luong:Number,
    id_san_pham:{
        type: Mongoose.Schema.Types.ObjectId,
        ref:'sanpham'
    },
    id_user:{
        type: Mongoose.Schema.Types.ObjectId,
        ref:'userModel'
    }
},{versionKey:false})
const modelGioHang = Mongoose.model("modelGioHang",todoSchema)

module.exports = modelGioHang