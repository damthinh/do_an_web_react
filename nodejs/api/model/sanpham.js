const  Mongoose  = require("mongoose");

const todoSchema = Mongoose.Schema({
    name:String,
    gia:Number,
    img:Array,
    so_luong:Number,
    giam_gia:{
        type:Number,
        default:null
    },
    id_cau_hinh:{
        type: Mongoose.Schema.Types.ObjectId,
        ref:'cauhinh'
    }
},{versionKey:false})
const modelSanpham = Mongoose.model("sanpham",todoSchema)

module.exports = modelSanpham