const modelSanpham = require("../model/sanpham")

exports.getIdSanpham=async(req,res)=>{
    try {
        let id = req.params.id
        let getId = await modelSanpham.findById(id).populate({
            path: 'id_cau_hinh'
        })
        res.send({getId})
    } catch (error) {
        res.send({ errorMessage: error })
    }
}