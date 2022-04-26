const modelDiaChi = require("../model/modelDiaChi")
const modelDonHang = require("../model/modelDonHang")
const modelGioHang = require("../model/ModelGioHang")


exports.paginationGioHang = async (req, res) => {
    try {
        let id_user = req.query.id_user
        let activePage = parseInt(req.query.page)
        let limit = parseInt(req.query.limit)
        let skip = (activePage - 1) * limit
        let getGioHang = await modelGioHang.find({ id_user: id_user })
        totalPage = Math.ceil(getGioHang.length / limit)
        let listGioHang = await modelGioHang.find({ id_user: id_user }).populate({
            path: 'id_san_pham'
        }).skip(skip).limit(limit)
        
        let listDiaChi = await modelDiaChi.find({id_user:id_user})
        res.send({ totalPage, listGioHang,listDiaChi })
    } catch (error) {
        res.send({ errorMessage: error.message })
    }
}
exports.deleteGioHang = async(req,res)=>{
    try {
        let id_user = req.query.id_user
        let id_gio_hang = req.query.id_gio_hang
        let limit = parseInt(req.query.limit)
        let activePage
        let getGioHang = await modelGioHang.find({ id_user: id_user },{_id :1})
        for (let i = 0; i < getGioHang.length; i++) {
            if (getGioHang[i]._id.equals(id_gio_hang)) {
                activePage= Math.ceil(((i+1))/limit)
            }
        }
        let deleteGioHang = await modelGioHang.findByIdAndDelete(id_gio_hang)
        let skip = (activePage - 1) * limit
        let listGioHang = await modelGioHang.find({ id_user: id_user }).skip(skip).limit(limit)
        res.send({listGioHang,activePage })
    } catch (error) {
        res.send({ errorMessage: error.message })
    }
}

exports.updateGioHang = async(req,res)=>{
    try {
        console.log("voday");
        let id_user = req.query.id_user
        let {id_gio_hang,so_luong} = req.body
        let limit = parseInt(req.query.limit)
        let activePage
        let getGioHang = await modelGioHang.find({ id_user: id_user },{_id :1})
        for (let i = 0; i < getGioHang.length; i++) {
            if (getGioHang[i]._id.equals(id_gio_hang)) {
                activePage= Math.ceil(((i+1))/limit)
            }
        }
        let updateGioHang = await modelGioHang.findByIdAndUpdate(id_gio_hang,{so_luong},{new:true})
        res.send({updateGioHang,activePage,getGioHang })
    } catch (error) {
        res.send({ errorMessage: error.message })
    }
}

exports.addDonHang = async(req,res)=>{
    try {
        let {id_gio_hang,id_dia_chi,id_user,ghi_chu,phuong_thuc_thanh_toan,so_san_pham,tong_tien} = req.body
        let addDonHang = await modelDonHang.create({id_gio_hang,id_dia_chi,id_user,ghi_chu,phuong_thuc_thanh_toan,so_san_pham,tong_tien,ngay_dat:Date.now()})
        for (let i = 0; i < id_gio_hang.length; i++) {
           await modelGioHang.findByIdAndUpdate(id_gio_hang[i],{id_user:null},{new:true})
        }
        res.send({addDonHang})
    } catch (error) {
        res.send({ errorMessage: error.message })
    }
}