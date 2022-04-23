const modelDiaChi = require("../model/modelDiaChi")
const modelThongTinUser = require("../model/modelThongTinUser")


exports.getUser = async (req, res) => {
    try {
        let id_user = req.params.id
        let listDiaChi = await modelDiaChi.find({id_user:id_user})
        let user = await modelThongTinUser.find({id_user:id_user})
        res.send({ listDiaChi ,user})
    } catch (error) {
        res.send({ errorMessage: error })
    }
}

exports.addDiaChi = async (req, res) => {
    try {
        let {id_user,dia_chi,Name,Sdt} = req.body
        let addDiaChi = await modelDiaChi.create({id_user,dia_chi,Name,Sdt})
        res.send({ addDiaChi})
    } catch (error) {
        res.send({ errorMessage: error })
    }
}

exports.updateDiaChi = async (req, res) => {
    try {
        let {id_dia_chi,dia_chi,Name,Sdt} = req.body
        let updateDiaChi = await modelDiaChi.findByIdAndUpdate(id_dia_chi,{dia_chi,Name,Sdt},{new:true})
        res.send({ updateDiaChi})
    } catch (error) {
        res.send({ errorMessage: error })
    }
}

exports.deleteDiaChi = async (req, res) => {
    try {
        let id_diaChi= req.params.id
        let deleteDiaCHi = await modelDiaChi.findByIdAndDelete(id_diaChi)
        res.send({ deleteDiaCHi})
    } catch (error) {
        res.send({ errorMessage: error })
    }
}
exports.updateThongTin = async(req,res)=>{
    try {
        let {Sdt,id_thong_tin} =req.body
        let updateThongTin = await modelThongTinUser.findByIdAndUpdate(id_thong_tin,{Sdt})
        res.send(updateThongTin)
    } catch (error) {
        res.send({ errorMessage: error })
    }
}