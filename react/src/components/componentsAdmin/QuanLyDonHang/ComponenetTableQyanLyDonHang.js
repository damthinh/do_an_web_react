import '../component.css'
import React, { Component } from 'react'
import Button from '@mui/material/Button';
// import Pop_upAddSanPham from './Pop_upAddSanPham'
// import Pop_upUpdateSanPham from './Pop_upUpdateSanPham'
// import DeleteIcon from '@mui/icons-material/Delete';
// import { LIMIT } from '../../../constants';
// import SearchIcon from '@mui/icons-material/Search';
import Pop_upChiTietDonHang from './Pop_upChiTietDonHang';
import Pagination from '@mui/material/Pagination';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
var list = [{ 'stt': 1, 'name': "HRM1",'sdt': '0869989162', 'gia': '100k', 'so_luong': 2, 'dia_chi': "số 42 ngách 15/18 ngõ gốc đề", 'trang_thai': "chờ xác nhận", "xem chiite": "aa" },
{ 'stt': 1, 'name': "HRM1",'sdt': '0869989162', 'gia': '100k', 'so_luong': 2, 'dia_chi': "số 42 ngách 15/18 ngõ gốc đề", 'trang_thai': "chuẩn bị", "xem chiite": "aa" }
]
export default class TableComponentQuanlyDonHang extends Component {
    state = {
        textSearch: '',
        trang_thai: '', page: ''
    }
    handleChange = (e) => {
        // this.props.searchSanPhamRequest({ textSearch: e })
        this.setState({ trang_thai: e })
    };
    render() {
        let tableHeader =[]
        let listSanPham = []
        console.log("listSanPham", listSanPham);

        let header = [{"tong_don":500,'don_chua_xac_nhan':35,'don_da_giao':200,'don_chuan_bi':25}]
        let totalPage = 3
        // let stt = (this.props.activePage - 1) * LIMIT


        listSanPham = list.map((item, key) => {

            console.log("item.trang_thai", item.trang_thai);
            return (
                <tr key={key}>
                    <td className="text">{key + 1}</td>
                    <td className="text">{item.name}</td>
                    <td className="text">{item.sdt}</td>
                    <td className="text">{item.so_luong}</td>
                    <td className="text">{item.dia_chi}</td>
                    <td className="text">{item.gia}</td>
                    <td className="text">{item.trang_thai}</td>
                    <td className="text"><Pop_upChiTietDonHang /></td>
                </tr>
            )
        })
        tableHeader = header.map((item, key) => {

            console.log("item.trang_thai", item.trang_thai);
            return (
                <tr key={key}>
                    <td className="text">{item.tong_don}</td>
                    <td className="text">{item.don_chua_xac_nhan}</td>
                    <td className="text">{item.don_da_giao}</td>
                    <td className="text">{item.don_chuan_bi}</td>
                </tr>
            )
        })
        return (
            <Grid sx={{ height: '100%', backgroundColor: "#f1f1f1" }} >
                <Grid sx={{ backgroundColor: "#f1f1f1", height: 'auto' }}>
                    <table className='table' >
                        <tbody >
                            <tr>
                                <th width={200} className="text">Tổng Đơn hàng :</th>
                                <th width={200} className="text">Đơn hàng chưa xác nhận :</th>
                                <th width={200} className="text">Đơn hàng đã giao :</th>
                                <th width={200} className="text">Đơn hàng chuẩn bị :</th>
                            </tr>
                            {tableHeader}
                        </tbody>
                        
                    </table>
                </Grid>
                <Grid sx={{ backgroundColor: "#f1f1f1", display: 'flex', justifyContent: 'center' }} >
                    {/* <Grid><Pop_upAddSanPham {...this.props} /></Grid> */}
                    <input style={{ height: '50%' }} value={this.state.textSearch}
                        onChange={(e) => {
                            this.setState({ textSearch: e.target.value })
                        }}
                    />
                    <button style={{ width: '100px', height: '50%' }} onClick={() => {
                        this.props.searchSanPhamRequest({ textSearch: this.state.textSearch })
                    }}>search</button>
                    <Button
                        style={{ display: this.props.textSearch ? 'inline-block' : 'none' }}
                        onClick={() => {
                            this.setState({ textSearch: '' })
                            this.props.searchSanPhamRequest({ textSearch: '' })
                        }}>back get</Button>
                </Grid>
                <Grid sx={{ backgroundColor: "#f1f1f1", display: 'flex', justifyContent: 'space-evenly' }}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Trạng Thái</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.trang_thai}
                                label="Age"
                                onChange={(e) => { this.handleChange(e.target.value) }}
                            >
                                <MenuItem value={'Iphone'}>Iphone</MenuItem>
                                <MenuItem value={'SamSung'}>SamSung</MenuItem>
                                <MenuItem value={'XiaoMi'}>XiaoMi</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid sx={{ backgroundColor: "#f1f1f1", height: '60%' }}>
                    <table className='table' >
                        <tbody >
                            <tr display={{ backgroundColor: "gray" }}>
                                <th width={70} className="text">STT</th>
                                <th width={100} className="text">NAME</th>
                                <th width={100} className="text">Số điện thoại</th>
                                <th width={100} className="text">Số Lượng</th>
                                <th width={200} className="text">Địa chỉ</th>
                                <th width={100} className="text">Tổng tiền</th>
                                <th width={200} className="text">Trạng Thái</th>
                                <th width={100} className="text">Xem Chi Tiết</th>
                            </tr>
                            {listSanPham}
                        </tbody>
                    </table>
                </Grid>
                <Grid sx={{ backgroundColor: "#f1f1f1", display: 'flex', justifyContent: 'center' }}>
                    <Stack  >
                        <Pagination count={totalPage} className='button_page' color="primary" onChange={(e, value) => {
                            if (totalPage === 1) {

                            } else {
                                // this.props.paginationSanPhamRequest({ activePage: value })
                            }
                        }} />
                    </Stack>
                </Grid>
                {/* <Grid>
                    <Pop_upChiTietDonHang/>
                </Grid> */}
            </Grid >
        )
    }
}
