const { registerUser, loginUser } = require("../controller/AuthenController")
const { getIdSanpham, addGiohang } = require("../controller/controlerHomeShop")
const { addSanpham, paginationSanpham, updateSanpham, deleteSanPham } = require("../controller/controllerSanpham")
const { getUser, addDiaChi, updateDiaChi, deleteDiaChi } = require("../controller/TaiKhoanControler")

const Router = (app)=>{
    // san pham
    app.post('/addsanpham',addSanpham)
    app.get('/paginationSanpham',paginationSanpham)
    app.put('/updatesanpham/:id',updateSanpham)
    app.delete('/deletesanpham/:id',deleteSanPham)
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
}

module.exports=Router