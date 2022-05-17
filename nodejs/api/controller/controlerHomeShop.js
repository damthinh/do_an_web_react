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
exports.paginationHome = async (req, res) => {
    try {
        let activePage = parseInt(req.query.page)
        let limit = parseInt(req.query.limit)
        let textSearch = req.query.q
        let skip = (activePage - 1) * limit
        let getSanpham = await modelSanpham.find({ name: { $regex: textSearch, $options: 'i' } }).populate({
            path: 'id_cau_hinh'
        })
        totalPage = Math.ceil(getSanpham.length / limit)
        let listSanPham = await modelSanpham.find({ name: { $regex: textSearch, $options: 'i' } }).populate({
            path: 'id_cau_hinh'
        }).skip(skip).limit(limit)
        let lengthSanPham =  (await modelSanpham.find()).length
        
        let lengthSanPhamhHet =  (await modelSanpham.find({ so_luong: 0})).length
        let listLength={lengthSanPham,lengthSanPhamhHet}
        res.send({ totalPage, listSanPham,listLength })
    } catch (error) {
        res.send({ errorMessage: error })
    }
}