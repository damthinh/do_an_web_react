const  Mongoose  = require("mongoose");

const todoSchema = Mongoose.Schema({
    dia_chi:String,
    Name:String,
    Sdt:Number,
    id_user:{
        type: Mongoose.Schema.Types.ObjectId,
        ref:'userModel'
    }
},{versionKey:false})
const modelDiaChi = Mongoose.model("modelDiaChi",todoSchema)

module.exports = modelDiaChi