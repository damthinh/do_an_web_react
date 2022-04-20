// import './component.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { color } from '@mui/system';

export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('samsung');
    const [gia, setGia] = React.useState('22990000');
    const [camera, setCamera] = React.useState('12.0 MP + 12.0 MP + 12.0 MP');
    const [man_hinh, setMan_hinh] = React.useState('6.7 inch, OLED, Super Retina XDR, 2778 x 1284 Pixels');
    // const [gia, setGia] = React.useState('');
    const [giam_gia, setGiam_gia] = React.useState('15');
    const [so_luong, setSo_luong] = React.useState('20');
    const [he_dieu_hanh, setHe_dieu_hanh] = React.useState('iOS 15');
    const [chip, setChip] = React.useState('Apple A15 Bionic');
    const [ram, setRam] = React.useState('6 GB');
    const [bo_nho_trong, setBo_nho_trong] = React.useState('128 GB');
    const [pin, setPin] = React.useState('4352 mAh');
    const [sim, setSim] = React.useState('2 - 1 eSIM, 1 Nano SIM');
    const [mo_ta, setMo_ta] = React.useState('iPhone 13 Pro Max xứng đáng là một chiếc iPhone lớn nhất, mạnh mẽ nhất và có thời lượng pin dài nhất từ trước đến nay sẽ cho bạn trải nghiệm tuyệt vời, từ những tác vụ bình thường cho đến các ứng dụng chuyên nghiệp.');
    const [file, setFile] = React.useState([]);
    const [arrImg, setArrImg] = React.useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleDeleteOneImg = (i) => {
        let newArrImg = arrImg
        newArrImg.splice(i, 1)
        setArrImg(newArrImg)
        let newFile = Array.from(file)
        newFile.splice(i, 1)
        setFile(newFile)
        let inputExcel = document.querySelector('.inputExcel')
        inputExcel.value = ''
    }
    const handleOK = () => {
        var form = new FormData()
        var arrFile = file
        for (let i = 0; i < arrFile.length; i++) {
            form.append("img", arrFile[i])
        }
        form.append('name', name)
        form.append('giam_gia', giam_gia)
        form.append('gia', gia)
        form.append('camera', camera)
        form.append('man_hinh', man_hinh)
        form.append('so_luong', so_luong)
        form.append('he_dieu_hanh', he_dieu_hanh)
        form.append('chip', chip)
        form.append('ram', ram)
        form.append('bo_nho_trong', bo_nho_trong)
        form.append('pin', pin)
        form.append('sim', sim)
        form.append('mo_ta', mo_ta)
        props.addSanPhamRequest({ form: form, name: name })     
    };
    const handleChangeFile = (fileInPut) => {
        var newArr = []
        setFile(fileInPut)
        for (var i = 0; i < fileInPut.length; i++) {
            const objectURL = URL.createObjectURL(fileInPut[i])
            console.log("url", objectURL);
            newArr.push(objectURL)
        }
        setArrImg(newArr)

    }
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                add
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Thêm Sản Phẩm</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        nhap gia tri
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Tên Sản Phẩm"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Giá"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setGia(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Số lượng"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setSo_luong(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Giảm Giá"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setGiam_gia(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Hệ điều hành"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setHe_dieu_hanh(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="chip"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setChip(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="ram"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setRam(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Bộ nhớ trong"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setBo_nho_trong(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        value={pin}
                        margin="dense"
                        label="pin"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setPin(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="sim"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setSim(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Camera"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            // setSim(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Màn Hình"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            // setSim(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Mô tả"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setMo_ta(e.target.value)
                        }}
                    />

                    <input type='file'  className='inputExcel' multiple style={{color:'transparent'}} onChange={(e) => {
                        handleChangeFile(e.target.files)
                    }} />
                    {
                        arrImg ? arrImg.map((img, i) => {
                            return (
                                <span key={i} className='divImg'>
                                    <img src={img} width={"200px"} alt="" height={"200px"} />
                                    <button className='btnImg'
                                        onClick={() => {
                                            handleDeleteOneImg(i)
                                        }}
                                    >x</button>
                                </span>
                            )
                        }) : null

                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleOK}>OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
