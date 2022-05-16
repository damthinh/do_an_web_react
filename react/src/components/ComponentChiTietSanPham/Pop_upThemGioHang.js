// import './component.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { getIdUser, getToken } from '../../constants';

export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [so_luong, setSo_luong] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // const handleOnChange = (e) => {
    //     if (e <= props.so_luong) {
    //         setSo_luong(e)
    //     }
    // };
    const handleOK = () => {
        
        if (so_luong != "") {
            if (so_luong >= 1) {
                if (so_luong <= props.so_luong) {
                    props.addGioHangRequest({ id_user: getIdUser(), id_san_pham: localStorage.getItem('idSanPham'), so_luong: so_luong, token: getToken() })
                    setSo_luong('')
                    setOpen(false);
                } else {
                    alert("bạn nhập quá số lượng ")
                }
            } else {
                alert("bạn nhập sai số lượng ")
            }
        } else {
            alert("bạn hãy nhập số lượng ")
        }

    };

    // const checkNumber = (e) => {
    //     let check = e.match(/^[0-9]*$/)
    //     if (check) {
    //         console.log("ok",e);
    //         return e
    //     } else {
    //         return null
    //     }

    // }
    return (
        <div>
            <button className='button' variant="outlined" onClick={handleClickOpen}>
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
                        margin="dense"
                        value={so_luong}
                        label="Số lượng"
                        fullWidth
                        variant="standard"
                        // onChange={(e) => {
                        //     e.target.value = checkNumber(e.target.value)
                        // }}
                        // onBlur={(e) => {
                        //     handleOnChange(e.target.value)
                        // }}
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
