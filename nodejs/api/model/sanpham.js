const  Mongoose  = require("mongoose");

const todoSchema = Mongoose.Schema({
    name:String,
    gia:String,
    img:Array,
    so_luong:Number,
    id_cau_hinh:{
        type: Mongoose.Schema.Types.ObjectId,
        ref:'cauhinh'
    }
},{versionKey:false})
const modelSanpham = Mongoose.model("sanpham",todoSchema)

module.exports = modelSanpham