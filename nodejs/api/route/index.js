const { registerUser, loginUser } = require("../controller/AuthenController")
const { getIdSanpham, addGiohang } = require("../controller/controlerHomeShop")
const { addSanpham, paginationSanpham, updateSanpham, deleteSanPham } = require("../controller/controllerSanpham")
const { paginationDonHangAdmin } = require("../controller/DonHangAdminController")
const { paginationDonHang, huyDonHang } = require("../controller/DonHangController")
const { paginationGioHang, deleteGioHang, updateGioHang, addDonHang } = require("../controller/GioHangController")
const { getUser, addDiaChi, updateDiaChi, deleteDiaChi, updateThongTin } = require("../controller/TaiKhoanControler")

const Router = (app)=>{
    // san pham admin
    app.post('/addsanpham',addSanpham)
    app.get('/paginationSanpham',paginationSanpham)
    app.put('/updatesanpham/:id',updateSanpham)
    app.delete('/deletesanpham/:id',deleteSanPham)
    // donHangAdmin
    app.get('/donhangadmin',paginationDonHangAdmin)
    // authen

    app.post('/register',registerUser)
    app.post('/login',loginUser)
    // home
    app.get('/xemchitiet/:id',getIdSanpham)

    app.post('/addgiohang',addGiohang)
    // taiKhoan
    app.get('/taikhoan/:id',getUser)
    app.post('/diachi',addDiaChi)
    app.put('/diachi',updateDiaChi)
    app.delete('/diachi/:id',deleteDiaChi)  
    app.put('/taikhoan',updateThongTin)

    // giohang
    app.get('/giohang',paginationGioHang)
    app.delete('/giohang',deleteGioHang)
    app.put('/giohang',updateGioHang)
    app.post('/thanhtoan',addDonHang)
    // donhang
    app.get('/donhang',paginationDonHang)
    app.delete('/donhang/:id',huyDonHang)
}

module.exports=Router