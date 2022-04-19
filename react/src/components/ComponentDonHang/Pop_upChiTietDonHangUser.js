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
// import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio } from '@material-ui/core';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import MuiRadioGroup from '@material-ui/core'
import { Grid } from '@mui/material';
let list = []
export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [ma_don_hang, setMa_don_hang] = React.useState('1M123');
    // const [ma_don_hang, setMa_don_hang] = React.useState('1M123');
    const [sdt, setSdt] = React.useState('0123456789');
    const [dia_chi, setDia_chi] = React.useState('so 43 ngach 15/18 ngõ Gốc đề minh khai-hai bà trưng-hà nội ');
    const [ghi_chu, setGhi_chu] = React.useState('Hàng dễ vỡ');
    const [ngay_dat, setNgay_dat] = React.useState('12/3/2022');
    const [tong_don_hang, setTong_don_hang] = React.useState('3000');

    const [trang_thai, setTrang_thai] = React.useState('Chờ xét duyệt');
    const [list, setList] = React.useState([]);
    
var listSanPham =[]
    const handleClickOpen = () => {
        
        setOpen(true);
        // setName(props.item.name)
        // setGia(props.item.gia)
        // setTrang_thai('Chờ xét duyệt')
        // setHe_dieu_hanh(props.item.id_cau_hinh.he_dieu_hanh)
        // setChip(props.item.id_cau_hinh.chip)
        // setRam(props.item.id_cau_hinh.ram)
        // setBo_nho_trong(props.item.id_cau_hinh.bo_nho_trong)
        // setPin(props.item.id_cau_hinh.pin)
        // setSim(props.item.id_cau_hinh.sim)
        // setArrImg(props.item.img)
        // setId(props.item._id)
        setList([{'name':'iphone3','gia':'1000d','so_luong':'3','img':['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6cZDIco8NgbvUotl8Y9VTjWGOCpiDo5Dkvw&usqp=CAU']}
        ,{'name':'iphone13','gia':'2000d','so_luong':'1','img':['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6cZDIco8NgbvUotl8Y9VTjWGOCpiDo5Dkvw&usqp=CAU']}
    ])
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOK = () => {
        setOpen(false);
    };
    const handleChange = (event) => {
        setTrang_thai(event.target.value);
    };
    listSanPham = list.map((item, key) => {
        return (
            <tr key={key}>
                <td className="text">{key + 1}</td>
                <td className="text">{item.name}</td>
                <td className="text">{item.gia}</td>
                <td className="text">{item.so_luong}</td>
                <td className="text" ><img alt='' src={item.img[0]} width={'100px'} height={'100px'} /></td>
                
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
                                    value={ma_don_hang}
                                    margin="dense"
                                    id="name"
                                    label="Mã đơn hàng"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => {
                                        // setName(e.target.value)
                                    }}
                                />
                                <TextField
                                    autoFocus
                                    value={sdt}
                                    margin="dense"
                                    label="Số điện thoại"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => {
                                        // setGia(e.target.value)
                                    }}
                                />
                                <TextField
                                    autoFocus
                                    // type=''
                                    margin="dense"
                                    value={dia_chi}
                                    label="Địa Chỉ"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => {
                                        // setSo_luong(e.target.value)
                                    }}
                                />
                                <TextField
                                    autoFocus
                                    // type='Number'
                                    margin="dense"
                                    value={ghi_chu}
                                    label="Ghi chú"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => {
                                        // setSo_luong(e.target.value)
                                    }}
                                />
                                <TextField
                                    autoFocus
                                    // type='date'
                                    margin="dense"
                                    value={ngay_dat}
                                    label="Ngày đặt "
                                    fullWidth
                                    variant="standard"
                                    // onChange={(e) => {
                                    //     setNgay_dat(e.target.value)
                                    // }}
                                />
                            </Grid>
                            <Grid item xs={1} >

                            </Grid>
                            <Grid item xs={4} sx={{ height: '50vh' }}>
                                {/* <TextField
                                    autoFocus
                                    // value={name}
                                    margin="dense"
                                    id="name"
                                    label="Tên Sản Phẩm"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => {
                                        // setName(e.target.value)
                                    }}
                                /> */}
                                <TextField sx={{ height: '10vh' }}
                                    autoFocus
                                    value={tong_don_hang}
                                    margin="dense"
                                    label="Tổng tiền"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => {
                                        // setGia(e.target.value)
                                    }}
                                />
                                <TextField sx={{ height: '10vh' }}
                                    autoFocus
                                    value={trang_thai}
                                    margin="dense"
                                    label="Trạng thái"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => {
                                        // setGia(e.target.value)
                                    }}
                                />

                                {/* <Box sx={{ minWidth: 120, height: '50vh' }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Trạng thái</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={trang_thai}
                                            // onChange={handleChange}
                                        >
                                            {/* <MenuItem value={'Chờ xét duyệt'}>Chờ xét duyệt</MenuItem>
                                            <MenuItem value={'đang chuẩn bị'}>đang chuẩn bị</MenuItem>
                                            <MenuItem value={'đang giao hàng'}>đang giao hàng</MenuItem> */}
                                        {/* </Select>
                                    </FormControl>
                                </Box> */} 
                                
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
                        trang_thai==='Chờ xét duyệt' ?<button className='button' onClick={handleClose}>Hủy Đơn Hàng</button>:null
                    }
                    <button className='button' onClick={handleOK}>OK</button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
