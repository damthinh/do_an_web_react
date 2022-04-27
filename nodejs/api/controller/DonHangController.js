const modelDonHang = require("../model/modelDonHang")

exports.paginationDonHang = async (req, res) => {
    try {
        let id_user = req.query.id_user
        let activePage = parseInt(req.query.page)
        let limit = parseInt(req.query.limit)
        let skip = (activePage - 1) * limit
        let getGioHang = await modelDonHang.find({ id_user: id_user })
        totalPage = Math.ceil(getGioHang.length / limit)
        let listDonHang = await modelDonHang.find({ id_user: id_user }).populate(
            [{path: 'id_dia_chi'}, {path: 'id_gio_hang',populate: { path: 'id_san_pham' }}]
        ).skip(skip).limit(limit)
        res.send({ totalPage, listDonHang })
    } catch (error) {
        res.send({ errorMessage: error.message })
    }
}

exports.huyDonHang = async (req, res) => {
    try {
        let id_don_hang = req.params.id
        let id_user = req.query.id_user
        let limit = parseInt(req.query.limit)
        
        
        let activePage
        let getAllDonHang = await modelDonHang.find({ id_user: id_user },{_id :1})
        for (let i = 0; i < getAllDonHang.length; i++) {
            if (getAllDonHang[i]._id.equals(id_don_hang)) {
                activePage= Math.ceil(((i+1))/limit)
            }
        }
        let skip = (activePage - 1) * limit
        
        let updateDonHang = await modelDonHang.findByIdAndUpdate(id_don_hang,{id_user:null,trang_thai:"Đã hủy"},{new:true})
        let listDonHang = await modelDonHang.find({ id_user: id_user }).skip(skip).limit(limit)
        res.send({ listDonHang,activePage ,updateDonHang})
    } catch (error) {
        res.send({ errorMessage: error.message })
    }
}