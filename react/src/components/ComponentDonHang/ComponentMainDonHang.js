import '../componentsAdmin/component.css'
import React, { Component } from 'react'
import Pop_upChiTietDonHangUser from './Pop_upChiTietDonHangUser';
import Pagination from '@mui/material/Pagination';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
export default class TableComponentQuanlyDonHang extends Component {
    state = {
        textSearch: '',
        trang_thai: '', page: ''
    }
    render() {
        let listDonHang = []

        let totalPage = this.props.totalPage


        listDonHang = this.props.listDonHang.map((item, key) => {

            return (
                <tr key={key}>
                    <td className="text">{key + 1}</td>
                    <td className="text">{item.name}</td>
                    <td className="text">{item.id_dia_chi.Name}</td>
                    <td className="text">{item.id_dia_chi.Sdt}</td>
                    <td className="text">{item.so_san_pham}</td>
                    <td className="text">{item.id_dia_chi.dia_chi}</td>
                    <td className="text">{item.tong_tien}</td>
                    <td className="text">{item.trang_thai}</td>
                    <td className="text"><Pop_upChiTietDonHangUser {...this.props} item={item} /></td>
                </tr>
            )
        })
        return (
            <Grid sx={{ height: '100%', backgroundColor: "#f1f1f1" }} >
                <Grid sx={{ backgroundColor: "#f1f1f1", height: '60%', margin: '10px' }}>
                    <table className='table' >
                        <tbody >
                            <tr display={{ backgroundColor: "gray" }}>
                                <th width={70} className="text">STT</th>
                                <th width={100} className="text">Mã đơn hàng</th>
                                <th width={100} className="text">Tên Người Nhận</th>
                                <th width={100} className="text">Số điện thoại</th>
                                <th width={100} className="text">Số Lượng</th>
                                <th width={200} className="text">Địa chỉ</th>
                                <th width={100} className="text">Tổng tiền</th>
                                <th width={200} className="text">Trạng Thái</th>
                                <th width={100} className="text">Xem Chi Tiết</th>
                            </tr>
                            {listDonHang}
                        </tbody>
                    </table>
                </Grid>
                <Grid sx={{ backgroundColor: "#f1f1f1", display: 'flex', justifyContent: 'center', margin: '10px' }}>
                    <Stack  >
                        <Pagination count={totalPage} className='button_page' color="primary" onChange={(e, value) => {
                            if (totalPage === 1) {

                            } else {
                                this.props.paginationDonHangRequest({ activePage: value })
                            }
                        }} />
                    </Stack>
                </Grid>
            </Grid >
        )
    }
}
