// import './component.css'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Grid } from '@mui/material';
import { getToken } from '../../constants';
let updateSanPham=[]
let list = []
export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [Name, setName] = React.useState('');
    const [sdt, setSdt] = React.useState('');
    const [dia_chi, setDia_chi] = React.useState('');
    const [ghi_chu, setGhi_chu] = React.useState('');
    const [ngay_dat, setNgay_dat] = React.useState('');
    const [tong_don_hang, setTong_don_hang] = React.useState('');
    
    const [phuong_thuc_thanh_toan, setPhuong_thuc_thanh_toan] = React.useState('');

    const [trang_thai, setTrang_thai] = React.useState();
    
var listSanPham =[]
    const handleClickOpen = () => {
        list = []
        updateSanPham=[]
        
        
        setOpen(true);
        setGhi_chu(props.item.ghi_chu)
        if(props.item.id_dia_chi!=null){
            setSdt(props.item.id_dia_chi.Sdt)
            setName(props.item.id_dia_chi.Name)
            setDia_chi(props.item.id_dia_chi.dia_chi)
        }
        
        setTong_don_hang(props.item.tong_tien.toLocaleString())
        setTrang_thai(props.item.trang_thai)
        setPhuong_thuc_thanh_toan(props.item.phuong_thuc_thanh_toan)
        setNgay_dat(new Date(props.item.ngay_dat).toLocaleDateString())
        list =props.item.id_gio_hang
        for (let i = 0; i < list.length; i++) {
            updateSanPham.push({ id_san_pham: list[i].id_san_pham._id, so_luong: list[i].so_luong })

        }
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleOK = () => {
        props.huyDonHangRequest({id:props.item._id,updateSanPham:updateSanPham,token:getToken()})
        setOpen(false);
    };
    listSanPham = list.map((item, key) => {
        return (
            <tr key={key}>
                <td className="text">{key + 1}</td>
                <td className="text">{item.id_san_pham.name}</td>
                <td className="text">{item.id_san_pham.gia.toLocaleString()}</td>
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
                                    label="Tên Người Nhận"
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
                            <Grid item xs={5} sx={{ height: '50vh' }}>
                                <TextField
                                    autoFocus
                                    // value={name}
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
                                <TextField sx={{ height: '10vh' }}
                                    autoFocus
                                    value={trang_thai}
                                    margin="dense"
                                    label="Trạng thái"
                                    fullWidth
                                    variant="standard"
                                />

                                
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
                        trang_thai==='Chờ xác nhận' ?<button className='button' onClick={handleOK}>Hủy Đơn Hàng</button>:null
                    }
                </DialogActions>
            </Dialog>
        </div>
    );
}
