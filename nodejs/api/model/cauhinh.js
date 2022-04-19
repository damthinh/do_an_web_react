const Mongoose  = require("mongoose");

const todoSchema = Mongoose.Schema({
    he_dieu_hanh:String,
    chip:String,
    ram:String,
    bo_nho_trong:String,
    pin:String,
    sim:String  
},{versionKey:false})
const modelCauhinh = Mongoose.model("cauhinh",todoSchema)

module.exports = modelCauhinh