const modelDiaChi = require("../model/modelDiaChi")
const modelThongTinUser = require("../model/modelThongTinUser")
const userModel = require("../model/userModel")

const bcrypt = require('bcrypt')

exports.getUser = async (req, res) => {
    try {
        let id_user = req.params.id
        let listDiaChi = await modelDiaChi.find({id_user:id_user})
        let user = await modelThongTinUser.find({id_user:id_user})
        res.send({ listDiaChi ,user})
    } catch (error) {
        res.send({ errorMessage:error.message })
    }
}

exports.addDiaChi = async (req, res) => {
    try {
        let {id_user,dia_chi,Name,Sdt} = req.body
        let addDiaChi = await modelDiaChi.create({id_user,dia_chi,Name,Sdt})
        res.send({ addDiaChi})
    } catch (error) {
        res.send({ errorMessage:error.message })
    }
}

exports.updateDiaChi = async (req, res) => {
    try {
        let {id_dia_chi,dia_chi,Name,Sdt} = req.body
        let updateDiaChi = await modelDiaChi.findByIdAndUpdate(id_dia_chi,{dia_chi,Name,Sdt},{new:true})
        res.send({ updateDiaChi})
    } catch (error) {
        res.send({ errorMessage:error.message })
    }
}

exports.deleteDiaChi = async (req, res) => {
    try {
        let id_diaChi= req.params.id
        let deleteDiaCHi = await modelDiaChi.findByIdAndDelete(id_diaChi)
        res.send({ deleteDiaCHi})
    } catch (error) {
        res.send({ errorMessage:error.message })
    }
}
exports.updateThongTin = async(req,res)=>{
    try {
        let {Sdt,id_thong_tin} =req.body
        let updateThongTin = await modelThongTinUser.findByIdAndUpdate(id_thong_tin,{Sdt})
        res.send(updateThongTin)
    } catch (error) {
        res.send({ errorMessage:error.message })
    }
}
exports.doiPassword = async(req,res)=>{
    try {
        let {NewPassword,password,id_user} =req.body
        let getUser = await userModel.findById(id_user)
        
        const checkPassword = await bcrypt.compare(password, getUser.password)
        if (checkPassword) {
            
            const mahoaPassword = await bcrypt.hash(NewPassword, 10)
           let updateUser= await userModel.findByIdAndUpdate(id_user,{password:mahoaPassword})
           res.send(updateUser)
        } else {
           return res.send({ errorMessage:"Mật khẩu không đúng"})
        }

    } catch (error) {
        res.send({ errorMessage:error.message })
    }
}