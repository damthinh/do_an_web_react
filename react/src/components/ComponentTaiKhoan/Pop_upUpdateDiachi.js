// import './component.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';

export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [dia_chi, setDia_chi] = React.useState('');
    const [Password, setPassword] = React.useState('');
    const [CheckPassword, setCheckPassword] = React.useState('');
    const [alertPass, setAlertPass] = React.useState('');
    const handleClickOpen = () => {
        setDia_chi()
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOK = () => {
        setOpen(false);
    };
    return (
        <div>
            <button className='button' variant="outlined" onClick={handleClickOpen}>
            update
            </button>
            <Dialog open={open} onClose={handleClose} sx={{width:"100%"}}>
                <DialogTitle>Thêm Địa Chỉ</DialogTitle>
                <DialogContent sx={{width:'400px'}}>
                    <TextField 
                        autoFocus
                        margin="dense"
                        label="Địa Chỉ"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setDia_chi(e.target.value)
                        }}
                    />
                    {/* <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        type={'password'}
                        label="Mật khẩu"
                        fullWidth
                        variant="standard"
                        title="Invalid email address"
                    />
                    <TextField
                        autoFocus
                        type={'password'}
                        margin="dense"
                        label="Nhập Lại Mật Khẩu"
                        fullWidth
                        variant="standard"
                    /> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleOK}>OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
