// import './component.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import { Link } from 'react-router-dom';

import { Link } from '@material-ui/core'

export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [Email, setEmail] = React.useState('');
    const [Password, setPassword] = React.useState('');
    const [CheckPassword, setCheckPassword] = React.useState('');
    const [alertPass, setAlertPass] = React.useState('');
    const handleClickOpen = () => {
        setOpen(true);
    };
    const checkMail = (checkMail) => {
        let check = checkMail.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        if (check) {
            return true
        } else {
            return false
        }

    }
    const checkPassword = (Password) => {
        let check = Password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)

        if (check) {
            return true
        } else {
            return false
        }

    }
    const handleClose = () => {
        setOpen(false);
    };
    const handleOK = () => {
        if (Email != ''  && Password != '' && CheckPassword != '') {
            if (checkMail(Email)) {
                if (checkPassword(Password)) {
                    if (Password.length === CheckPassword.length) {
                        let check = []
                        for (let i = 0; i < Password.length; i++) {
                            if (Password.charAt(i) === CheckPassword.charAt(i)) {
                                check.push(Password.charAt(i))
                            } else {
                                alert("Mật khẩu không khớp");
                            }
                        }
                        if (Password.length === check.length) {
                            props.quenMkUserRequest({ userName: Email, password: Password })
                        }
                    } else {
                        alert('Mật khẩu không khớp')
                    }
                } else {
                    alert("Password ít nhất phải có 8 ký tự ,có ít nhất 1 chữ in hoa và 1 số ")
                }
            } else {

                alert("Nhập Sai email")
            }
        } else {
            alert("Nhập đủ thông tin")
        }

        // 
        // setOpen(false);
    };
    return (
        <div>
            <Link variant="outlined" onClick={handleClickOpen}>
                Quên Mật khẩu ?
            </Link>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Quên Mật khẩu</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        nhap gia tri
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Email"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        type={'password'}
                        label="Mật khẩu"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        // pattern="[^@\s]+@[^@\s]+" 
                        // onBlur={(e) => {
                        //     let check = e.target.value.match(
                        //         // /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        //     )
                        //     if (check) {
                        //         setEmail(e.target.value)
                        //     } else {

                        //     }
                        // }}
                        title="Invalid email address"
                    />
                    <TextField
                        autoFocus
                        type={'password'}
                        margin="dense"
                        label="Nhập Lại Mật Khẩu"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setCheckPassword(e.target.value)
                        }}
                    />
                    {
                        alertPass !== '' ? <div>{alertPass}</div> : null
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleOK}>OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
