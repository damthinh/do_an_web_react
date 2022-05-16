const { registerUser, loginUser, quenMKUser } = require("../controller/AuthenController")
const { getIdSanpham, addGiohang, paginationHome } = require("../controller/controlerHomeShop")
const { addSanpham, paginationSanpham, updateSanpham, deleteSanPham } = require("../controller/controllerSanpham")
const { paginationDonHangAdmin, deleteDonHangAdmin, updateDonHangAdmin } = require("../controller/DonHangAdminController")
const { paginationDonHang, huyDonHang } = require("../controller/DonHangController")
const { paginationGioHang, deleteGioHang, updateGioHang, addDonHang } = require("../controller/GioHangController")
const { getUser, addDiaChi, updateDiaChi, deleteDiaChi, updateThongTin, doiPassword } = require("../controller/TaiKhoanControler")
const { verify, verifyAuthor } = require("../middlewera/jwt")

const Router = (app)=>{
    // san pham admin
    app.post('/addsanpham',verifyAuthor,addSanpham)
    app.get('/paginationSanpham',verifyAuthor,paginationSanpham)
    app.put('/updatesanpham/:id',verifyAuthor,updateSanpham)
    app.delete('/deletesanpham/:id',verifyAuthor,deleteSanPham)
    // donHangAdmin
    app.get('/donhangadmin',verifyAuthor,paginationDonHangAdmin)
    app.delete('/donhangadmin/:id',verifyAuthor,deleteDonHangAdmin)
    app.put('/donhangadmin/:id',verifyAuthor,updateDonHangAdmin)
    // authen

    app.post('/register',registerUser)
    app.post('/login',loginUser)
    app.post('/quenmk',quenMKUser)
    // home
    app.get('/xemchitiet/:id',verify,getIdSanpham)
    app.get('/paginationhome',verify,paginationHome)

    app.post('/addgiohang',verify,addGiohang)
    // taiKhoan
    app.get('/taikhoan/:id',verify,getUser)
    app.post('/diachi',verify,addDiaChi)
    app.put('/diachi',verify,updateDiaChi)
    app.delete('/diachi/:id',verify,deleteDiaChi)  
    app.put('/taikhoan',verify,updateThongTin)
    app.post('/taikhoan',verify,doiPassword)

    // giohang
    app.get('/giohang',verify,paginationGioHang)
    app.delete('/giohang',verify,deleteGioHang)
    app.put('/giohang',verify,updateGioHang)
    app.post('/thanhtoan',verify,addDonHang)
    // donhang
    app.get('/donhang',verify,paginationDonHang)
    app.delete('/donhang/:id',verify,huyDonHang)
}

module.exports=Router