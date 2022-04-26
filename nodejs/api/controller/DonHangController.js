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