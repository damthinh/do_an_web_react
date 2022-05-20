const modelDonHang = require("../model/modelDonHang")
const modelGioHang = require("../model/ModelGioHang")
const modelSanpham = require("../model/sanpham")

exports.paginationDonHangAdmin = async (req, res) => {
    try {
        let textSearch = req.query.textSearch

        let trang_thai = req.query.trang_thai
        let activePage = parseInt(req.query.page)
        let limit = parseInt(req.query.limit)
        let skip = (activePage - 1) * limit
        let getDonHang = await modelDonHang.find({ trang_thai: { $regex: trang_thai, $options: 'i' }, name: { $regex: textSearch, $options: 'i' } })
        totalPage = Math.ceil(getDonHang.length / limit)
        let listDonHang = await modelDonHang.find({ trang_thai: { $regex: trang_thai, $options: 'i' }, name: { $regex: textSearch, $options: 'i' } }).populate(
            [{ path: 'id_dia_chi' }, { path: 'id_gio_hang', populate: { path: 'id_san_pham' } }]
        ).skip(skip).limit(limit)
        let ChoXacNhan = (await modelDonHang.find({ trang_thai: { $regex: "Chờ xác nhận", $options: 'i' } })).length
        let DonHang = getDonHang.length
        let DangChuanBi = (await modelDonHang.find({ trang_thai: { $regex: "Đang chuẩn bị", $options: 'i' } })).length
        let DangGiao = (await modelDonHang.find({ trang_thai: { $regex: "Đang giao", $options: 'i' } })).length
        let GiaoHangThanhCong = (await modelDonHang.find({ trang_thai: { $regex: "Giao hàng thành công", $options: 'i' } })).length
        let DaHuy = (await modelDonHang.find({ trang_thai: { $regex: "Đã hủy", $options: 'i' } })).length
        let so_luong_don_hang = [{ DaHuy, ChoXacNhan, DangChuanBi, DangGiao, DonHang,GiaoHangThanhCong }]
        res.send({ totalPage, listDonHang, so_luong_don_hang })
    } catch (error) {
        res.send({ errorMessage: error.message })
    }
}
exports.deleteDonHangAdmin = async (req, res) => {
    try {
        let id_don_hang = req.params.id
        let trang_thai = req.query.trang_thai
        let textSearch = req.query.q
        let limit = parseInt(req.query.limit)
        let activePage
        let getAllDonHang = await modelDonHang.find({ trang_thai: { $regex: trang_thai, $options: 'i' }, name: { $regex: textSearch, $options: 'i' } }, { _id: 1 })
        for (let i = 0; i < getAllDonHang.length; i++) {
            if (getAllDonHang[i]._id.equals(id_don_hang)) {
                activePage = Math.ceil(((i + 1)) / limit)
            }
        }
        let deleteDonHang = await modelDonHang.findByIdAndDelete(id_don_hang)
        for (let i = 0; i < deleteDonHang.id_gio_hang.length; i++) {
            await modelGioHang.findByIdAndDelete(deleteDonHang.id_gio_hang[i])

        }
        let skip = (activePage - 1) * limit
        let listDonHang = await modelDonHang.find({ trang_thai: { $regex: trang_thai, $options: 'i' }, name: { $regex: textSearch, $options: 'i' } }).skip(skip).limit(limit)
        res.send({listDonHang,activePage})
    } catch (error) {
        res.send({ errorMessage: error.message })
    }
}
exports.updateDonHangAdmin = async (req, res) => {
    try {
        let id_don_hang = req.params.id
        let trang_thai = req.body.trang_thai
        let trang_thaiSearch = req.query.trang_thai
        let textSearch = req.query.textSearch
        let limit = parseInt(req.query.limit)
        let updateSanPham = req.body.updateSanPham
        let activePage
        let updateDonHang
        if (trang_thai === 'Đã hủy') {
            for (let i = 0; i < updateSanPham.length; i++) {
                let getSanPham = await modelSanpham.findById(updateSanPham[i].id_san_pham)
                await modelSanpham.findByIdAndUpdate(updateSanPham[i].id_san_pham, { so_luong: getSanPham.so_luong + updateSanPham[i].so_luong }, { new: true })
            }
            updateDonHang = await modelDonHang.findByIdAndUpdate(id_don_hang, { trang_thai: trang_thai }, { new: true }).populate(
                [{ path: 'id_dia_chi' }, { path: 'id_gio_hang', populate: { path: 'id_san_pham' } }]
            )
        }else{
            updateDonHang = await modelDonHang.findByIdAndUpdate(id_don_hang, { trang_thai: trang_thai }, { new: true }).populate(
                [{ path: 'id_dia_chi' }, { path: 'id_gio_hang', populate: { path: 'id_san_pham' } }]
            )
        }
        let getAllDonHang = await modelDonHang.find({ trang_thai: { $regex: trang_thaiSearch, $options: 'i' }, name: { $regex: textSearch, $options: 'i' } }, { _id: 1 })
        for (let i = 0; i < getAllDonHang.length; i++) {
            if (getAllDonHang[i]._id.equals(id_don_hang)) {
                activePage = Math.ceil(((i + 1)) / limit)
            }
        }
        let getDonHang = await modelDonHang.find({ trang_thai: { $regex: trang_thaiSearch, $options: 'i' }, name: { $regex: textSearch, $options: 'i' } })
        let ChoXacNhan = (await modelDonHang.find({ trang_thai: { $regex: "Chờ xác nhận", $options: 'i' } })).length
        let DonHang = getDonHang.length
        let DangChuanBi = (await modelDonHang.find({ trang_thai: { $regex: "Đang chuẩn bị", $options: 'i' } })).length
        let DaGiao = (await modelDonHang.find({ trang_thai: { $regex: "Đã giao", $options: 'i' } })).length
        let DaHuy = (await modelDonHang.find({ trang_thai: { $regex: "Đã hủy", $options: 'i' } })).length
        let so_luong_don_hang = [{ DaHuy, ChoXacNhan, DangChuanBi, DaGiao, DonHang }]
        let listDonHang = [updateDonHang]
        res.send({ activePage, listDonHang,so_luong_don_hang })
    } catch (error) {
        res.send({ errorMessage: error.message })
    }
}