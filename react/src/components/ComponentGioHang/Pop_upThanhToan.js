// import './component.css'
import '../componentsAdmin/component.css'
import './ComponentMainThanhToan.css'
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

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';
let item = [{
    'man_hinh': "6.7 inch FHD+ Infinity-O Super AMOLED 120Hz", 'camera': '108.0 MP + 12.0 MP + 5.0 MP + 5.0 MP Chống rung quang học (OIS)', 'ram': '8 GB', 'bo_nho_trong': '	128 GB',
    'pin': '5000 mAh, Sạc nhanh 25W', 'sim': '2 sim', 'CPU': 'Snapdragon 778G (6nm)', 'he_dieu_hanh': 'Android 12', 'mo_ta': 'iPhone 12 Pro - "Siêu phẩm công nghệ" với nhiều nâng cấp mạnh mẽ về thiết kế, cấu hình và hiệu năng, khẳng định đẳng cấp thời thượng trên thị trường smartphone cao cấp.'
}]
let list = [{ 'name': 'iphone3', 'gia': '1000d', 'so_luong': '3', 'img': ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6cZDIco8NgbvUotl8Y9VTjWGOCpiDo5Dkvw&usqp=CAU'] }
    , { 'name': 'iphone13', 'gia': '2000d', 'so_luong': '1', 'img': ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6cZDIco8NgbvUotl8Y9VTjWGOCpiDo5Dkvw&usqp=CAU'] }
]
let listSanPham = []
export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [dia_chi, setDia_chi] = React.useState('');
    const [Name, setName] = React.useState('');
    const [Sdt, setSdt] = React.useState('');
    const handleClickOpen = () => {


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
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOK = () => {
        // if (dia_chi != '' && Name != '' && Sdt != '') {
        //     props.addDiaChiRequest({ Name: Name, dia_chi: dia_chi, Sdt: Sdt, id_user: getIdUser() })

            
        // } else {
        //     alert("Nhập đủ thông tin")
        // }
        setOpen(false);
    };

    return (
        <div className='mainTop'>
            <Button variant="outlined" onClick={handleClickOpen}>
                Thanh Toán
            </Button>
            <Dialog open={open} onClose={handleClose} sx={{ width: "100%" }}>
                <DialogTitle>Thanh toán</DialogTitle>
                <div open={open} onClose={handleClose} className='mainThanhToan' >
                    {/* <div className='mainTop'>
                        
                        
                    </div> */}
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
                    <div className='maintext'>
                        <TextField className='TextField'
                            autoFocus
                            // value={sdt}
                            margin="dense"
                            label="Họ và tên *"
                            variant="standard"
                        />
                        <TextField className='TextField'
                            autoFocus
                            // value={sdt}
                            margin="dense"
                            label="Số điện thoại"
                            variant="standard"
                        />
                        <TextField className='TextField'
                            autoFocus
                            // value={sdt}
                            margin="dense"
                            label="Email"
                            variant="standard"
                        />
                        <Box className='TextField' sx={{ minWidth: 120, marginTop: '20px' }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Địa Chỉ</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={dia_chi}
                                    onChange={(e) => {
                                        setDia_chi(e.target.value)
                                    }}
                                >
                                    <MenuItem value={'Số 43 ngách 15/18 ngõ gốc đề'}>Số 43 ngách 15/18 ngõ gốc đề minh khai-hai bà trưng</MenuItem>

                                    <button>thêm địa chỉ</button>
                                </Select>
                            </FormControl>
                        </Box>
                        <TextField className='TextField'
                            autoFocus
                            // value={sdt}
                            margin="dense"
                            label="Lời nhắn"
                            variant="standard"
                        />
                    </div>
                    {/* <div className='mainBottom'>
                        

                        

                    </div> */}
                    <div className='thong_so'>
                        <div className='title'>ĐƠN HÀNG CỦA BẠN</div>
                        <ul className='main-thong-so'>
                            <li>
                                <span className='properties'>Số sản phẩm:</span>
                                <span className='detail'>2</span>
                            </li>

                            <li>
                                <span className='properties'>Tổng tiền sản phẩm:</span>
                                <span className='detail'>3000</span>
                            </li>

                            <li>
                                <span className='properties'>Ship:</span>
                                <span className='detail'>free</span>
                            </li>
                        </ul>
                    </div>
                    <div className='thong_so'>
                        <div className='title'>Phương thức thanh toán</div>
                        <ul className='main-thong-so'>
                            <li>
                                <span className="checkbox"><input type={'checkbox'} /></span>
                                <span className='detail'>Thanh toán khi nhận hàng</span>
                            </li>

                            <li>
                                <span className="checkbox"><input type={'checkbox'} /></span>
                                <span className='detail'>Thanh toán MOMO</span>
                            </li>
                        </ul>
                    </div>
                    <Grid sx={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                        <button className='butonscss' onClick={() => {
                            window.location.href = '/thantoan'
                        }}>Đặt hàng</button>
                    </Grid>
                </div>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleOK}>OK</Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}
