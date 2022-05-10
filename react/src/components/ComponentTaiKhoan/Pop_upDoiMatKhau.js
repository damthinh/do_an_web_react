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
import { getIdUser } from '../../constants';

export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const [NewPassword, setNewPassword] = React.useState('');
    const [RetypeNewPassrord, setRetypeNewPassrord] = React.useState('');
    const handleClickOpen = () => {
        
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOK = () => {
        if (password != '' && NewPassword != '' && RetypeNewPassrord != '') {
            if (NewPassword.length===RetypeNewPassrord.length) {
                let check =[]
                for (let i = 0; i < NewPassword.length; i++) {
                    if (NewPassword.charAt(i) === RetypeNewPassrord.charAt(i)) {
                        check.push(NewPassword.charAt(i))
                    } else {
                        alert("Mật khẩu không khớp");
                    }
                }
                if (NewPassword.length===check.length) {
                    // props.DangKyUserRequest({userName:Email,password:NewPassword})
                    setOpen(false);
                }
            } else {
                alert('Mật khẩu không khớp')
            }
        
        } else {
            alert("Nhập đủ thông tin")
        }
        
    };
    return (
        <div>
            <Button style={{ display: props.listDiaChi.length >=5 ? 'none' : 'inline-block'}} variant="outlined" onClick={handleClickOpen}>
            Đổi Mật khẩu
            </Button>
            <Dialog open={open} onClose={handleClose} sx={{width:"100%"}}>
                <DialogTitle>Đổi Mật khẩu</DialogTitle>
                <DialogContent sx={{width:'400px'}}>
                    <TextField 
                        autoFocus
                        margin="dense"
                        label="Mật khẩu cũ"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Mật khẩu mới"
                        fullWidth
                        variant="standard"
                        onChange={(e)=>{
                            setNewPassword(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Nhập lại mật khẩu mới"
                        fullWidth
                        onChange={(e)=>{
                            setRetypeNewPassrord(e.target.value)
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleOK}>OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
