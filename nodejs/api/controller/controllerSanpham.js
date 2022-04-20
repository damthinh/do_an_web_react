const modelCauhinh = require("../model/cauhinh");
const modelSanpham = require("../model/sanpham");

const fs = require('fs/promises');
exports.addSanpham = async (req, res) => {
    try {
        let { name, gia, so_luong, he_dieu_hanh,
            chip,
            ram,
            bo_nho_trong,
            pin,
            sim,man_hinh,camera,mo_ta,giam_gia } = req.body
        let file = req.files
        console.log("req.body", req.body);
        console.log("req.files", req.files);
        let arrImg = []
        for (let i = 0; i < file.length; i++) {
            const url = `http://localhost:3001/${file[i].filename}`;
            arrImg.push(url)
        }
        let check = await modelSanpham.findOne({ name })
        if (check) {
            for (let i = 0; i < file.length; i++) {
                fs.unlink(`img/${file[i].filename}`)
            }
            return res.send({errorMessage:"da co sp"})
        } else {
            addCauhinh = await modelCauhinh.create({ he_dieu_hanh, chip, ram, bo_nho_trong, pin, sim ,man_hinh,camera,mo_ta})
            let addSanpham = await modelSanpham.create({ name, gia,giam_gia, so_luong, img: arrImg, id_cau_hinh: addCauhinh._id })
            const textSearch = req.query.q
            const limit = parseInt(req.query.limit)
            const getData = await modelSanpham.find({ name: { $regex: textSearch, $options: 'i' } })
            totalPage = Math.ceil(getData.length / limit)
            let listSanPham = [addSanpham]
            res.send({ totalPage, listSanPham })
        }

    } catch (error) {
        res.send({ error: error.message })
    }
}

exports.paginationSanpham = async (req, res) => {
    try {
        let activePage = parseInt(req.query.page)
        let limit = parseInt(req.query.limit)
        let textSearch = req.query.q
        let skip = (activePage - 1) * limit
        let getSanpham = await modelSanpham.find({ name: { $regex: textSearch, $options: 'i' } }).populate({
            path: 'id_cau_hinh'
        })
        totalPage = Math.ceil(getSanpham.length / limit)
        let listSanPham = await modelSanpham.find({ name: { $regex: textSearch, $options: 'i' } }).populate({
            path: 'id_cau_hinh'
        }).skip(skip).limit(limit)
        res.send({ totalPage, listSanPham })
    } catch (error) {
        res.send({ errorMessage: error })
    }
}

exports.updateSanpham = async (req, res) => {
    try {
        let { name, gia, so_luong, he_dieu_hanh,
            chip,
            ram,
            bo_nho_trong,
            pin,
            sim ,man_hinh,camera,mo_ta,giam_gia} = req.body
        let id_san_pham = req.params.id
        let file = req.files
        let arrImgNew = []
        for (let i = 0; i < file.length; i++) {
            const url = `http://localhost:3001/${file[i].filename}`;
            arrImgNew.push(url)
        }
        if (file.length > 0) {
            let getSanpham = await modelSanpham.findById(id_san_pham)
            let arrImg = getSanpham.img
            for (let i = 0; i < arrImg.length; i++) {
                fs.unlink(`img/${arrImg[i].slice(22)}`)
            }
            let updateSanpham = await modelSanpham.findByIdAndUpdate(id_san_pham, { name, gia, so_luong, img: arrImgNew ,giam_gia}, { new: true })
            await modelCauhinh.findByIdAndUpdate(updateSanpham.id_cau_hinh, { he_dieu_hanh, chip, ram, bo_nho_trong, pin, sim,man_hinh,camera,mo_ta })
            res.send({ updateSanpham })
        } else {
            let updateSanpham = await modelSanpham.findByIdAndUpdate(id_san_pham, { name, gia, so_luong,giam_gia }, { new: true })
            await modelCauhinh.findByIdAndUpdate(updateSanpham.id_cau_hinh, { he_dieu_hanh, chip, ram, bo_nho_trong, pin, sim,man_hinh,camera,mo_ta })

            let listSanPham = [updateSanpham]
            res.send({ listSanPham })
        }
    } catch (error) {

        res.send({ error: error.message })
    }
}

exports.deleteSanPham = async (req, res) => {
    try {
        let id_san_pham = req.params.id
        console.log("id_san_pham", id_san_pham);
        let deleteSanPham = await modelSanpham.findByIdAndDelete(id_san_pham)
        let arrImg = deleteSanPham.img
        for (let i = 0; i < arrImg.length; i++) {
            fs.unlink(`img/${arrImg[i].slice(22)}`)
        }
        await modelCauhinh.findByIdAndDelete(deleteSanPham.id_cau_hinh)

        let activePage = parseInt(req.query.page)
        let limit = parseInt(req.query.limit)
        let textSearch = req.query.q
        let skip = (activePage - 1) * limit
        let listSanPham = await modelSanpham.find({ name: { $regex: textSearch, $options: 'i' } }).populate({
            path: 'id_cau_hinh'
        }).skip(skip).limit(limit)
        res.send({ listSanPham })
    } catch (error) {
        res.send({ error: error.message })
    }
}