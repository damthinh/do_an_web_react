const { registerUser, loginUser } = require("../controller/AuthenController")
const { getIdSanpham } = require("../controller/controlerHomeShop")
const { addSanpham, paginationSanpham, updateSanpham, deleteSanPham } = require("../controller/controllerSanpham")

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
}

module.exports=Router