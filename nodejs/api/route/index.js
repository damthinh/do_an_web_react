const { registerUser, loginUser } = require("../controller/AuthenController")
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
}

module.exports=Router