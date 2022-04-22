const  Mongoose  = require("mongoose");

const todoSchema = Mongoose.Schema({
    Email:String,
    Sdt:Number,
    id_user:{
        type: Mongoose.Schema.Types.ObjectId,
        ref:'userModel'
    }
},{versionKey:false})
const modelThongTinUser = Mongoose.model("modelThongTinUser",todoSchema)

module.exports = modelThongTinUser