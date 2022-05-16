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
        setSo_luong(props.item.so_luong)
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleOK = () => {

        if (so_luong != "") {
            if (so_luong >= 1) {
                if (so_luong <= props.item.id_san_pham.so_luong) {
                    props.updateGioHangRequest({ id_gio_hang: props.item._id, so_luong: so_luong, token: getToken() })
                    
                    setOpen(false);
                    setSo_luong('')
                } else {
                    alert("bạn nhập quá số lượng ")
                }
            } else {
                alert("bạn nhập sai số lượng ")
            }
        } else {
            alert("bạn hãy nhập số lượng ")
        }

        // if (so_luong <= props.item.id_san_pham.so_luong) {
        // } else {
        //     alert("bạn nhập quá số lượng ")
        // }

    };

    // const checkNumber = (e) => {
    //     let check = e.match(/^[0-9]*$/)
    //     if (check) {
    //         return e
    //     } else {
    //         return null
    //     }

    // }
    return (
        <div>
            <button className='button' variant="outlined" onClick={handleClickOpen}>
                Update
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
                        // onChange={(e) => {
                        //     e.target.value = checkNumber(e.target.value)
                        // }}
                        // onBlur={(e) => {
                        //     setSo_luong(e.target.value)
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
