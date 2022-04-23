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
    const [dia_chi, setDia_chi] = React.useState('');
    const [Name, setName] = React.useState('');
    const [Sdt, setSdt] = React.useState('');
    const handleClickOpen = () => {
        
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOK = () => {
        if (dia_chi != '' && Name != '' && Sdt != '') {
            props.addDiaChiRequest({Name:Name,dia_chi:dia_chi,Sdt:Sdt,id_user:getIdUser()})
            
        setOpen(false);
        } else {
            alert("Nhập đủ thông tin")
        }
        
    };
    return (
        <div>
            <Button style={{ display: props.listDiaChi.length >=5 ? 'none' : 'inline-block'}} variant="outlined" onClick={handleClickOpen}>
            Thêm Địa Chỉ
            </Button>
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
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Name"
                        fullWidth
                        variant="standard"
                        onChange={(e)=>{
                            setName(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Sdt"
                        fullWidth
                        onChange={(e)=>{
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
