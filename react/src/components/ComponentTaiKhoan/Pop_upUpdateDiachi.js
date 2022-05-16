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
import { getToken } from '../../constants';

export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [dia_chi, setDia_chi] = React.useState('');
    const [Name, setName] = React.useState('');
    const [Sdt, setSdt] = React.useState('');
    const [id_dia_chi, setId_dia_chi] = React.useState('');
    const handleClickOpen = () => {
        setDia_chi(props.item.dia_chi)
        setName(props.item.Name)
        setSdt(props.item.Sdt)
        setId_dia_chi(props.item._id)
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOK = () => {
        if (dia_chi != '' && Name != '' && Sdt != '') {

            props.updateDiaChiRequest({ Name: Name, dia_chi: dia_chi, Sdt: Sdt, id_dia_chi: id_dia_chi ,token:getToken()})
            setOpen(false);
        } else {
            alert("Nhập đủ thông tin")
        }
    };
    return (
        <div>
            <button className='button' variant="outlined" onClick={handleClickOpen}>
                update
            </button>
            <Dialog open={open} onClose={handleClose} sx={{ width: "100%" }}>
                <DialogTitle>Thêm Địa Chỉ</DialogTitle>
                <DialogContent sx={{ width: '400px' }}>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Địa Chỉ"
                        value={dia_chi}
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setDia_chi(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Name"
                        value={Name}
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Sdt"
                        value={Sdt}
                        fullWidth
                        onChange={(e) => {
                            setSdt(e.target.value)
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
