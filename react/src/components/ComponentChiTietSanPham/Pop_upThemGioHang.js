// import './component.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [id, setId] = React.useState('');
    const [gia, setGia] = React.useState('');
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
        form.append('gia', gia)
        form.append('so_luong', so_luong)
        form.append('he_dieu_hanh', he_dieu_hanh)
        form.append('chip', chip)
        form.append('ram', ram)
        form.append('bo_nho_trong', bo_nho_trong)
        form.append('pin', pin)
        form.append('sim', sim)
        form.append('sim', mo_ta)
        // props.updateSanPhamRequest({ form: form, name: name, id })
        setOpen(false);
    };
    return (
        <div>
            <button variant="outlined" onClick={handleClickOpen}>
            Thêm giỏ hàng
            </button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Số lượng Sản Phẩm</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Nhập giá trị
                    </DialogContentText>
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleOK}>OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
