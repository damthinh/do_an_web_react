// import './component.css'
import '../componentsAdmin/component.css'
import './ComponentMainThanhToan.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';
export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [id_dia_chi, setId_ia_chi] = React.useState('');
    const [ghi_chu, setGhi_chu] = React.useState('');
    const [so_san_pham, setSo_san_pham] = React.useState('');
    const [phuong_thuc_thanh_toan, setPhuong_thuc_thanh_toan] = React.useState('');

    const [listSanPham, setListSanPham] = React.useState('');
    const [tong_tien, setTongTien] = React.useState('');
    const [listDiaChi, setListDiaChi] = React.useState('');
    let updateSanPham = []
    const handleClickOpen = () => {
        updateSanPham = []

        console.log("props.list.", props.list);
        if (props.list.length > 0) {
            let number = 0
            let soSanPham = 0

            setListSanPham(props.list.map((item, key) => {
                return (
                    <tr key={key}>
                        <td className="text">{key + 1}</td>
                        <td className="text">{item.id_san_pham.name}</td>
                        <td className="text">{Math.ceil(item.id_san_pham.gia - ((item.id_san_pham.gia * item.id_san_pham.giam_gia) / 100))}</td>
                        <td className="text">{item.so_luong}</td>
                        <td className="text" ><img alt='' src={item.id_san_pham.img[0]} width={'100px'} height={'100px'} /></td>

                    </tr>
                )
            }))


            setListDiaChi(
                props.listDiaChi.map((item, key) => {
                    return (
                        <MenuItem key={key} value={item._id}>
                            Tên: {item.Name} SĐT: {item.Sdt} Địa Chỉ: {item.dia_chi}
                        </MenuItem>
                    )
                })
            )
            for (let i = 0; i < props.list.length; i++) {
                soSanPham = soSanPham + props.list[i].so_luong
            }
            for (let i = 0; i < props.list.length; i++) {
                let index = Math.ceil((props.list[i].id_san_pham.gia - ((props.list[i].id_san_pham.gia * props.list[i].id_san_pham.giam_gia) / 100)) * props.list[i].so_luong)
                number = number + index
            }
            // for (let i = 0; i < props.list.length; i++) {
            //     updateSanPham.push({ id_san_pham: props.list[i].id_san_pham._id, so_luong: props.list[i].so_luong })

            // }
            setTongTien(number)
            setSo_san_pham(soSanPham)

            setPhuong_thuc_thanh_toan("Thanh toán khi nhận hàng")
            setOpen(true);
        } else {
            alert("chọn sản phẩm để thanh toán")
        }

    };
    const handleClose = () => {
        setTongTien(0)
        setId_ia_chi('')
        setGhi_chu('')
        setSo_san_pham('')
        setPhuong_thuc_thanh_toan('')
        setListDiaChi('')
        setOpen(false);
    };
    const handleOK = () => {
        for (let i = 0; i < props.list.length; i++) {
            updateSanPham.push({ id_san_pham: props.list[i].id_san_pham._id, so_luong: props.list[i].so_luong })

        }
        if (id_dia_chi) {
            
            // for (let i = 0; i < props.list.length; i++) {
            //     updateSanPham.push({ id_san_pham: props.list[i].id_san_pham._id, so_luong: props.list[i].so_luong })

            // }
            // props.thanhToanGioHangRequest({ tong_tien: tong_tien, phuong_thuc_thanh_toan: phuong_thuc_thanh_toan, ghi_chu: ghi_chu, id_gio_hang: props.id_gio_hang, id_dia_chi: id_dia_chi, so_san_pham: so_san_pham, id_user: getIdUser() })
            console.log("updateSanPham", updateSanPham);
            setTongTien(0)
            setId_ia_chi('')
            setGhi_chu('')
            setSo_san_pham('')
            setPhuong_thuc_thanh_toan('')
            setListDiaChi('')
            setListSanPham([])
            setOpen(false);
        } else {
            alert("bạn chưa chọn đia chỉ")
        }


    };

    return (
        <div className='mainTop'>
            <Button variant="outlined" onClick={handleClickOpen}>
                Thanh Toán
            </Button>
            <Dialog open={open} onClose={handleClose} sx={{ width: "100%" }}>
                <DialogTitle>Thanh toán</DialogTitle>
                <div open={open} onClose={handleClose} className='mainThanhToan' >
                    <Grid sx={{ backgroundColor: "#f1f1f1", height: '70%' }}>
                        <table className='table'>
                            <tbody>
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
                        <Box className='TextField' sx={{ minWidth: 120, marginTop: '20px' }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Địa Chỉ</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={id_dia_chi}
                                    onChange={(e) => {
                                        setId_ia_chi(e.target.value)
                                    }}
                                >
                                    {listDiaChi}
                                    <button>thêm địa chỉ</button>
                                </Select>
                            </FormControl>
                        </Box>
                        <TextField className='TextField'
                            autoFocus
                            value={ghi_chu}
                            margin="dense"
                            label="Lời nhắn"
                            variant="standard"
                            onChange={(e) => {
                                setGhi_chu(e.target.value)
                            }}
                        />
                    </div>
                    <div className='thong_so'>
                        <div className='title'>ĐƠN HÀNG CỦA BẠN</div>
                        <ul className='main-thong-so'>
                            <li>
                                <span className='properties'>Số sản phẩm:</span>
                                <span className='detail'>{so_san_pham}</span>
                            </li>

                            <li>
                                <span className='properties'>Tổng tiền sản phẩm:</span>
                                <span className='detail'>{tong_tien} đ</span>
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
                                <span className="checkbox"><input type={'checkbox'} defaultChecked /></span>
                                <span className='detail'>Thanh toán khi nhận hàng</span>
                            </li>

                            <li>
                                <span className="checkbox"><input type={'checkbox'} /></span>
                                <span className='detail'>Thanh toán MOMO</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleOK}>OK</Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}
