const modelDonHang = require("../model/modelDonHang")

exports.paginationDonHangAdmin = async (req, res) => {
    try {
        let textSearch = req.query.textSearch
        let activePage = parseInt(req.query.page)
        let limit = parseInt(req.query.limit)
        let skip = (activePage - 1) * limit
        let getDonHang = await modelDonHang.find({trang_thai:{ $regex: textSearch, $options: 'i' }})
        totalPage = Math.ceil(getDonHang.length / limit)
        let listDonHang = await modelDonHang.find({trang_thai:{ $regex: textSearch, $options: 'i' }}).populate(
            [{path: 'id_dia_chi'}, {path: 'id_gio_hang',populate: { path: 'id_san_pham' }}]
        ).skip(skip).limit(limit)
        let ChoXacNhan =  (await modelDonHang.find({trang_thai:{ $regex: "Chờ xác nhận", $options: 'i' }})).length
        let DonHang =getDonHang.length
        let DangChuanBi =  (await modelDonHang.find({trang_thai:{ $regex: "Đang chuẩn bị", $options: 'i' }})).length
        let DaGiao=  (await modelDonHang.find({trang_thai:{ $regex: "Đã giao", $options: 'i' }})).length

        let DaHuy =  (await modelDonHang.find({trang_thai:{ $regex: "Đã hủy", $options: 'i' }})).length
        let so_luong_don_hang =[{DaHuy,ChoXacNhan,DangChuanBi,DaGiao,DonHang}]
        res.send({ totalPage, listDonHang ,so_luong_don_hang})
    } catch (error) {
        res.send({ errorMessage: error.message })
    }
}
