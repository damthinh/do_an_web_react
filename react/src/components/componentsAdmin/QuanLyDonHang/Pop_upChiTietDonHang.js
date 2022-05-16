// import './component.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Grid } from '@mui/material';
import { getToken } from '../../../constants';
let list = []
var updateSanPham = []
export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [Name, setName] = React.useState('');
    const [sdt, setSdt] = React.useState('');
    const [dia_chi, setDia_chi] = React.useState('');
    const [ghi_chu, setGhi_chu] = React.useState('');
    const [ngay_dat, setNgay_dat] = React.useState('');
    const [tong_don_hang, setTong_don_hang] = React.useState('');

    const [phuong_thuc_thanh_toan, setPhuong_thuc_thanh_toan] = React.useState('');
    const [trang_thai, setTrang_thai] = React.useState('');
    var listSanPham = []
    const handleClickOpen = () => {
        list = []
        list = props.item.id_gio_hang

        setOpen(true);
        setGhi_chu(props.item.ghi_chu)
        setSdt(props.item.id_dia_chi.Sdt)
        setName(props.item.id_dia_chi.Name)
        setDia_chi(props.item.id_dia_chi.dia_chi)
        setTong_don_hang(props.item.tong_tien)
        setTrang_thai(props.item.trang_thai)
        setPhuong_thuc_thanh_toan(props.item.phuong_thuc_thanh_toan)
        setNgay_dat(new Date(props.item.ngay_dat).toLocaleDateString())
        updateSanPham = []
        for (let i = 0; i < props.item.id_gio_hang.length; i++) {
            updateSanPham.push({ id_san_pham: props.item.id_gio_hang[i].id_san_pham._id, so_luong: props.item.id_gio_hang[i].so_luong })
        }
    };

    const handleXoa = () => {
        props.deleteDonHangAdminRequest({ id: props.item._id})
        setOpen(false);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOK = () => {
        props.updateDonHangAdminRequest({ trang_thai: trang_thai, id: props.item._id, updateSanPham: updateSanPham,token:getToken() })

        setOpen(false);
    };
    const handleChange = (event) => {
        setTrang_thai(event.target.value);
    };
    listSanPham = list.map((item, key) => {

        return (
            <tr key={key}>
                <td className="text">{key + 1}</td>
                <td className="text">{item.id_san_pham.name}</td>
                <td className="text">{item.id_san_pham.gia}</td>
                <td className="text">{item.so_luong}</td>
                <td className="text" ><img alt='' src={item.id_san_pham.img[0]} width={'100px'} height={'100px'} /></td>

            </tr>
        )
    })
    return (
        <div >
            <RemoveRedEyeIcon variant="outlined" onClick={handleClickOpen}>

            </RemoveRedEyeIcon>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Chi tiết đơn hàng</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        nhap gia tri
                    </DialogContentText>
                    <Grid>
                        <Grid container  >
                            <Grid item xs={6}>
                                <TextField
                                    autoFocus
                                    value={Name}
                                    margin="dense"
                                    id="name"
                                    label="Mã đơn hàng"
                                    fullWidth
                                    variant="standard"
                                />
                                <TextField
                                    autoFocus
                                    value={sdt}
                                    margin="dense"
                                    label="Số điện thoại"
                                    fullWidth
                                    variant="standard"
                                />
                                <TextField
                                    autoFocus
                                    // type=''
                                    margin="dense"
                                    value={dia_chi}
                                    label="Địa Chỉ"
                                    fullWidth
                                    variant="standard"
                                />
                                <TextField
                                    autoFocus
                                    // type='Number'
                                    margin="dense"
                                    value={ghi_chu}
                                    label="Ghi chú"
                                    fullWidth
                                    variant="standard"
                                />
                                <TextField
                                    autoFocus
                                    // type='date'
                                    margin="dense"
                                    value={ngay_dat}
                                    label="Ngày đặt "
                                    fullWidth
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={1} >

                            </Grid>
                            <Grid item xs={4} sx={{ height: '50vh' }}>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    value={phuong_thuc_thanh_toan}
                                    label="Phương Thức Thanh Toán"
                                    fullWidth
                                    variant="standard"
                                />
                                <TextField sx={{ height: '10vh' }}
                                    autoFocus
                                    value={tong_don_hang}
                                    margin="dense"
                                    label="Tổng tiền"
                                    fullWidth
                                    variant="standard"
                                />

                                <Box sx={{ minWidth: 120, height: '50vh' }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Trạng thái</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={trang_thai}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={'Đã hủy'}>Đã hủy</MenuItem>
                                            <MenuItem value={'Chờ xác nhận'}>Chờ xác nhận</MenuItem>
                                            <MenuItem value={'Đang chuẩn bị'}>Đang chuẩn bị</MenuItem>
                                            <MenuItem value={'Đang giao hàng'}>Đang giao hàng</MenuItem>


                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>
                        </Grid>

                        <Grid sx={{ backgroundColor: "#f1f1f1", height: '70%' }}>
                            <table className='table' >
                                <tbody >
                                    <tr display={{ backgroundColor: "gray" }}>
                                        <th width={70} className="text">STT</th>
                                        <th width={100} className="text">NAME</th>
                                        <th width={100} className="text">Giá</th>
                                        <th width={100} className="text">Số Lượng</th>
                                        <th width={200} className="text">IMG</th>
                                    </tr>
                                    {listSanPham}
                                </tbody>
                            </table>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <button className='button' onClick={handleClose}>Cancel</button>
                    {
                        props.item.trang_thai === 'Đã hủy' ?
                            <button className='button' onClick={handleXoa}>xóa đơn hàng</button> :
                            <button className='button' onClick={handleOK}>update</button>
                    }

                </DialogActions>
            </Dialog>
        </div>
    );
}
