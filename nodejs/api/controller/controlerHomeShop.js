const modelGioHang = require("../model/ModelGioHang")
const modelSanpham = require("../model/sanpham")

exports.getIdSanpham = async (req, res) => {
    try {
        let id = req.params.id
        let getId = await modelSanpham.findById(id).populate({
            path: 'id_cau_hinh',

        })
        res.send({ getId })
    } catch (error) {
        res.send({ errorMessage:error.message })
    }
}
exports.addGiohang = async (req, res) => {
    try {
        let { so_luong, id_san_pham, id_user } = req.body
        let checkUser = await modelGioHang.find({ id_user: id_user })
        var  checksanpham =''
        let id_gio_hang=''
        let addGiohang =''
        if (checkUser != []) {
            for (let i in checkUser) {
                if (checkUser[i].id_san_pham.equals(id_san_pham)) {
                    id_gio_hang=checkUser[i]._id
                }
            }
            if (id_gio_hang != []) {
                let getGiohang = await modelGioHang.findById(id_gio_hang)
                checksanpham = await modelGioHang.findByIdAndUpdate(id_gio_hang, { so_luong: parseInt(getGiohang.so_luong)+parseInt(so_luong) },{new:true})
                console.log("checksanpham",checksanpham);
            }else{
                addGiohang = await modelGioHang.create({so_luong,id_san_pham,id_user})
            }
        }else{
            addGiohang = await modelGioHang.create({so_luong,id_san_pham,id_user})
        }
        res.send({ checkUser, checksanpham ,addGiohang})
    } catch (error) {
        res.send({ errorMessage:error.message })
    }
}