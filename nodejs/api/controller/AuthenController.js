
const userModel = require("../model/userModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
exports.registerUser = async (req, res) => {
    try {
        let { userName, password } = req.body
        let checkUserName = await userModel.findOne({ userName })
        if (checkUserName) {
            return res.send({ errorMessage: 'tk ton tai' })
        } else {
            const mahoaPassword = await bcrypt.hash(password, 10)
            let addUser = await userModel.create({ userName, password: mahoaPassword })
            res.send({ addUser,message:"Đăng ký thanh công"})
        }
    } catch (error) {
        res.send({ errorMessage: error.message })
    }
}
exports.loginUser = async (req, res) => {
    try {
        let { userName, password } = req.body
        let checkUserName = await userModel.findOne({ userName })
        if (checkUserName) {
            const checkPassword = await bcrypt.compare(password, checkUserName.password)
            if (checkPassword) {
                let getUser = await userModel.findOne({ userName }).select('-password')
                const token = jwt.sign({ getUser }, process.env.KEY_TOKEN, { expiresIn: '1h' })
                res.send({ getUser, token })
            } else {
                return res.send({ errorMessage: 'pass sai' })
            }
        } else {
            return res.send({ errorMessage: 'tk khong ton tai' })
        }
    } catch (error) {
        res.send({ errorMessage: error.message })
    }
}