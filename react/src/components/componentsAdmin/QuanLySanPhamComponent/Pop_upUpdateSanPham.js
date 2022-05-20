// import './component.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DriveFolderUploadRoundedIcon from '@mui/icons-material/DriveFolderUploadRounded';

export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [id, setId] = React.useState('');
    const [gia, setGia] = React.useState('');
    
    const [giam_gia, setGiam_gia] = React.useState('');
    const [camera, setCamera] = React.useState('');
    const [man_hinh, setMan_hinh] = React.useState('');
    const [so_luong, setSo_luong] = React.useState('');
    const [he_dieu_hanh, setHe_dieu_hanh] = React.useState('');
    const [chip, setChip] = React.useState('');
    const [ram, setRam] = React.useState('');
    const [bo_nho_trong, setBo_nho_trong] = React.useState('');
    const [pin, setPin] = React.useState('');
    const [sim, setSim] = React.useState('');
    const [mo_ta, setMo_ta] = React.useState('');
    const [file, setFile] = React.useState([]);
    const [arrImg, setArrImg] = React.useState([]);
    const [Img, setImg] = React.useState([]);

    const handleClickOpen = () => {
        setOpen(true);
        setName(props.item.name)
        
        setGia(props.item.gia)
        setSo_luong(props.item.so_luong)
        setHe_dieu_hanh(props.item.id_cau_hinh.he_dieu_hanh)
        setChip(props.item.id_cau_hinh.chip)
        setRam(props.item.id_cau_hinh.ram)
        setBo_nho_trong(props.item.id_cau_hinh.bo_nho_trong)
        setPin(props.item.id_cau_hinh.pin)
        setSim(props.item.id_cau_hinh.sim)
        setMan_hinh(props.item.id_cau_hinh.man_hinh)
        setCamera(props.item.id_cau_hinh.camera)
        if(props.item.id_cau_hinh.mo_ta)setMo_ta(props.item.id_cau_hinh.mo_ta)
        console.log(props.item.id_cau_hinh.mo_ta);
        if(props.item.giam_gia)setGiam_gia(props.item.giam_gia)
        setImg(props.item.img)
        setId(props.item._id)
        console.log(props.item.id_cau_hinh.man_hinh);
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
        // if(name != ''&&gia != ''&&camera != ''&&so_luong != ''&&he_dieu_hanh != ''&&chip != ''&&ram != ''&&bo_nho_trong != ''
        // &&pin != ''&&sim != ''){
        //     var form = new FormData()
        // var arrFile = file
        // for (let i = 0; i < arrFile.length; i++) {
        //     form.append("img", arrFile[i])
        // }
        // form.append('name', name)
        // form.append('gia', gia)
        // form.append('giam_gia', giam_gia)
        // form.append('camera', camera)
        // form.append('man_hinh', man_hinh)
        // form.append('so_luong', so_luong)
        // form.append('he_dieu_hanh', he_dieu_hanh)
        // form.append('chip', chip)
        // form.append('ram', ram)
        // form.append('bo_nho_trong', bo_nho_trong)
        // form.append('pin', pin)
        // form.append('sim', sim)
        // form.append('mo_ta', mo_ta)
        // props.updateSanPhamRequest({ form: form, name: name, id })
        // setOpen(false);
        // }else{
        //     alert("Nhập đầy đủ thông tin")
        // }
        var form = new FormData()
        var arrFile = file
        for (let i = 0; i < arrFile.length; i++) {
            form.append("img", arrFile[i])
        }
        form.append('name', name)
        form.append('gia', gia)
        form.append('giam_gia', giam_gia)
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
        props.updateSanPhamRequest({ form: form, name: name, id })
        setOpen(false);
        
    };
    const handleChangeFile = (fileInPut) => {
        var newArr = []
        setFile(fileInPut)
        for (var i = 0; i < fileInPut.length; i++) {
            const objectURL = URL.createObjectURL(fileInPut[i])
            newArr.push(objectURL)
        }
        setArrImg(newArr)

    }
    return (
        <div>
            <DriveFolderUploadRoundedIcon variant="outlined" onClick={handleClickOpen}>
                update
            </DriveFolderUploadRoundedIcon>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Update Sản Phẩm</DialogTitle>
                <DialogContent >
                    <DialogContentText>
                        nhap gia tri
                    </DialogContentText>
                    <TextField
                        autoFocus
                        value={name}
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
                        value={gia}
                        margin="dense"
                        label="Giá"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setGia(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        type='Number'
                        margin="dense"
                        value={so_luong}
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
                        value={giam_gia}
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setGiam_gia(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        value={he_dieu_hanh}
                        label="Hệ điều hành"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setHe_dieu_hanh(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        value={chip}
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
                        value={ram}
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
                        value={bo_nho_trong}
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
                        value={sim}
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
                        value={camera}
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setCamera(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Màn Hình"
                        value={man_hinh}
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setMan_hinh(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Mô tả"
                        value={mo_ta}
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setMo_ta(e.target.value)
                        }}
                    />
                    {
                        Img ? Img.map((img, i) => {
                            return (
                                <span key={i} className='divImg'>
                                    <img src={img} width={"200px"} alt='' height={"200px"} />
                                    {/* <button className='btnImg'
                                        onClick={() => {
                                            handleDeleteOneImg(i)
                                        }}
                                    >x</button> */}
                                </span>
                            )
                        }) : null

                    }

                    <input type='file' className='inputExcel' multiple style={{color:'transparent'}} onChange={(e) => {
                        handleChangeFile(e.target.files)
                    }} />
                    {
                        arrImg ? arrImg.map((img, i) => {
                            return (
                                <span key={i} className='divImg'>
                                    <img src={img} width={"200px"} alt='' height={"200px"} />
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
