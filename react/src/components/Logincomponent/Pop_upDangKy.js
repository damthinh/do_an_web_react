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
    const [Email, setEmail] = React.useState('');
    const [Sdt, setSdt] = React.useState('');
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

    const checkNumber = (e) => {
        let check = e.match(/^[0-9]*$/)
        if (check) {
            // setEmail(checkMail)
            return e
        } else {
            return null
        }

    }

    const checkSdt = (e) => {
        let check = e.match(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/)

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
    const handleOK = async () => {
        if (Email != '' && Sdt != '' && Password != '' && CheckPassword != '') {
            if (checkMail(Email)) {
                if (checkSdt(Sdt)) {
                    if (checkPassword(Password)) {

                        if (Password.length === CheckPassword.length) {
                            let check = []
                            for (let i = 0; i < Password.length; i++) {
                                if (Password.charAt(i) === CheckPassword.charAt(i)) {
                                    check.push(Password.charAt(i))
                                } else {
                                    alert("M???t kh???u kh??ng kh???p");
                                }
                            }
                            if (Password.length === check.length) {
                                props.DangKyUserRequest({ userName: Email, password: Password, Sdt: Sdt })
                            }
                        } else {
                            alert('M???t kh???u kh??ng kh???p')
                        }
                    } else {
                        alert("Password ??t nh???t ph???i c?? 8 k?? t??? ,c?? ??t nh???t 1 ch??? in hoa v?? 1 s??? ")
                    }
                } else {

                    alert("Nh???p Sai S??? ??i???n Tho???i")
                }
            } else {

                alert("Nh???p Sai email")
            }
        } else {
            alert("Nh???p ????? th??ng tin")
        }

        // 
        // setOpen(false);
    };
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                ????ng k??
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>????ng k??</DialogTitle>
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
                        // type={'number'}
                        margin="dense"
                        label="Nh???p s??? ??i???n tho???i "
                        fullWidth
                        inputProps={{ maxLength: 10 }}
                        variant="standard"
                        onChange={(e) => {
                            e.target.value = checkNumber(e.target.value)
                        }}
                        onBlur={(e) => {
                            setSdt(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        type={'password'}
                        label="M???t kh???u"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        title="Invalid email address"
                    />
                    <TextField
                        autoFocus
                        type={'password'}
                        margin="dense"
                        label="Nh???p L???i M???t Kh???u"
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
