const  Mongoose  = require("mongoose");

const todoSchema = Mongoose.Schema({
    ghi_chu:String,
    phuong_thuc_thanh_toan:String,
    trang_thai:{
        type:String,
        default:"Chờ xác nhận"
    },
    tong_tien:Number,
    so_san_pham:Number,
    id_user:{
        type: Mongoose.Schema.Types.ObjectId,
        ref:'userModel'
    },
    
    id_dia_chi:{
        type: Mongoose.Schema.Types.ObjectId,
        ref:'modelDiaChi'
    },
    
    id_gio_hang:[{
        type: Mongoose.Schema.Types.ObjectId,
        ref:'modelGioHang'
    }],
},{versionKey:false})
const modelDonHang = Mongoose.model("modelDonHang",todoSchema)

module.exports = modelDonHang