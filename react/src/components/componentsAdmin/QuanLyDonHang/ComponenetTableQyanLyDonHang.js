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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default class TableComponentQuanlyDonHang extends Component {
    state = {
        textSearch: '',
        trang_thai: '', page: ''
    }
    handleChange = (e) => {

        this.setState({ trang_thai: e })
        this.props.searchDonHangAdminRequest({ textSearch: this.props.textSearch, trang_thai: e })
    };
    render() {
        let tableHeader = []
        let listDonHang = []
        let totalPage = this.props.totalPage


        listDonHang = this.props.listDonHang.map((item, key) => {
            return (
                <tr key={key}>
                    <td className="text">{key + 1}</td>
                    <td className="text">{item.name}</td>
                    {
                        item.id_dia_chi != null ? <td className="text">{item.id_dia_chi.Name}</td> : null
                    }
                    {
                        item.id_dia_chi != null ? <td className="text">{item.id_dia_chi.Sdt}</td> : null
                    }


                    <td className="text">{item.so_san_pham}</td>
                    {
                        item.id_dia_chi != null ? <td className="text">{item.id_dia_chi.dia_chi}</td> : null
                    }
                    <td className="text">{item.tong_tien.toLocaleString()}</td>
                    <td className="text">{item.trang_thai}</td>
                    <td className="text"><Pop_upChiTietDonHang {...this.props} item={item} /></td>
                </tr>
            )
        })
        tableHeader = this.props.so_luong_don_hang.map((item, key) => {
            return (
                <tr key={key}>
                    <td className="text">{item.DonHang}</td>
                    <td className="text">{item.ChoXacNhan}</td>
                    <td className="text">{item.DangGiao}</td>
                    <td className="text">{item.DangChuanBi}</td>
                    <td className="text">{item.DaHuy}</td>
                    <td className="text">{item.GiaoHangThanhCong}</td>
                </tr>
            )
        })
        return (
            <Grid sx={{ height: '100%', backgroundColor: "#f1f1f1" }} >
                <Grid sx={{ backgroundColor: "#f1f1f1", height: 'auto' }}>
                    <table className='table' >
                        <tbody >
                            <tr>
                                <th width={200} className="text">T???ng ????n h??ng :</th>
                                <th width={200} className="text">????n h??ng ch??a x??c nh???n :</th>
                                <th width={200} className="text">????n h??ng ??ang giao :</th>
                                <th width={200} className="text">????n h??ng chu???n b??? :</th>
                                <th width={200} className="text">????n h??ng ???? h???y :</th>
                                <th width={200} className="text">Giao h??ng th??nh c??ng :</th>
                            </tr>
                            {tableHeader}
                        </tbody>
                    </table>
                </Grid>
                <Grid sx={{ backgroundColor: "#f1f1f1", display: 'flex', justifyContent: 'center' }} >
                    <input style={{ height: '50%' }} value={this.state.textSearch}
                        onChange={(e) => {
                            this.setState({ textSearch: e.target.value })
                        }}
                    />
                    <button className='button' style={{ width: '100px', height: '50%' }} onClick={() => {
                        this.props.searchDonHangAdminRequest({ textSearch: this.state.textSearch, trang_thai: this.state.trang_thai })
                    }}>search</button>
                    <button className='button'
                        style={{ display: this.props.textSearch || this.props.trang_thai ? 'inline-block' : 'none' }}
                        onClick={() => {
                            this.setState({ textSearch: '', trang_thai: '' })
                            this.props.searchDonHangAdminRequest({ textSearch: '', trang_thai: '' })
                        }}>back get</button>
                </Grid>
                <Grid sx={{ backgroundColor: "#f1f1f1", display: 'flex', justifyContent: 'space-evenly' }}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Tr???ng Th??i</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.trang_thai}
                                label="Age"
                                onChange={(e) => { this.handleChange(e.target.value) }}
                            >
                                <MenuItem value={'???? h???y'}>???? h???y</MenuItem>
                                <MenuItem value={'Ch??? x??c nh???n'}>Ch??? x??c nh???n</MenuItem>
                                <MenuItem value={'??ang chu???n b???'}>??ang chu???n b???</MenuItem>
                                <MenuItem value={'??ang giao h??ng'}>??ang giao h??ng</MenuItem>
                                <MenuItem value={'Giao h??ng th??nh c??ng'}>Giao h??ng th??nh c??ng</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid sx={{ backgroundColor: "#f1f1f1", height: '60%' }}>
                    <table className='table' >
                        <tbody >
                            <tr display={{ backgroundColor: "gray" }}>
                                <th width={70} className="text">STT</th>
                                <th width={100} className="text">M?? ????n h??ng</th>
                                <th width={100} className="text">T??n Ng?????i Nh???n</th>
                                <th width={100} className="text">S??? ??i???n tho???i</th>
                                <th width={100} className="text">T???ng S??? L?????ng</th>
                                <th width={200} className="text">?????a ch???</th>
                                <th width={100} className="text">T???ng ti???n</th>
                                <th width={200} className="text">Tr???ng Th??i</th>
                                <th width={100} className="text">Xem Chi Ti???t</th>
                            </tr>
                            {listDonHang}
                        </tbody>
                    </table>
                </Grid>
                <Grid sx={{ backgroundColor: "#f1f1f1", display: 'flex', justifyContent: 'center' }}>
                    <Stack  >
                        <Pagination count={totalPage} className='button_page' color="primary" onChange={(e, value) => {
                            if (totalPage === 1) {

                            } else {
                                this.props.paginationDonHangAdminRequest({ activePage: value })
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
