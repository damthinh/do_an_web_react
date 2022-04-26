import '../componentsAdmin/component.css'
// import * as React from 'react';

// import './CssQuanLySanPhamComponent.css'
import React, { Component } from 'react'
import Button from '@mui/material/Button';
// import Pop_upAddSanPham from './Pop_upAddSanPham'
// import Pop_upUpdateSanPham from './Pop_upUpdateSanPham'
import DeleteIcon from '@mui/icons-material/Delete';
// import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { LIMIT } from '../../constants';
import Pop_upThanhToan from './Pop_upThanhToan'
import Pop_upUpdateSoLuong from './Pop_upUpdateSoLuong'

export default class TableComponentQuanlySanPham extends Component {
    state = {
        textSearch: '',
        nhan_hang: 'aaaaaâ', page: ''
    }
    handleChange = (e) => {
        this.props.searchSanPhamRequest({ textSearch: e })
        this.setState({ nhan_hang: e })
    };
    render() {

        // const [page, setPage] = React.useState(1);
        // handleChange = (event, value) => {
        //   this.setState({page:value})
        // };
        let { activePage, totalPage } = this.props
        let listGioHang = []
        let stt = (1 - 1) * LIMIT
        let list = []
        let id_gio_hang = []
        listGioHang = this.props.listGioHang.map((item, key) => {
            // let num =item.so_luong
            return (
                <tr key={key}>
                    <td className="text">{stt + key + 1}</td>
                    <td className="text"><input type={'checkbox'} onChange={async (e) => {
                        (e.target.checked) ? list.push(item) : list.splice(list.indexOf(item), 1);
                        (e.target.checked) ? id_gio_hang.push(item._id) : id_gio_hang.splice(id_gio_hang.indexOf(item._id), 1);
                    }} /></td>
                    <td className="text">{item.id_san_pham.name}</td>
                    <td className="text">{Math.ceil(item.id_san_pham.gia - ((item.id_san_pham.gia * item.id_san_pham.giam_gia) / 100))}</td>
                    <td className="text">{item.so_luong}</td>
                    <td className="text" ><img alt='' src={item.id_san_pham.img[0]} width={'100px'} height={'100px'} /></td>
                    <td className="text"><DeleteIcon variant="outlined" onClick={() => {
                        this.props.deleteGioHangRequest({ id_gio_hang: item._id })
                    }}>delete</DeleteIcon></td>
                    <td className="text"><Pop_upUpdateSoLuong {...this.props} item={item} /></td>
                </tr>
            )
        })
        return (
            <Grid sx={{ height: '100%', backgroundColor: "#f1f1f1" }} >
                <Grid sx={{ backgroundColor: "#f1f1f1", height: '70%', margin: '10px' }}>
                    <table className='table' >
                        <tbody>
                            <tr display={{ backgroundColor: "gray" }}>
                                <th width={70} className="text">STT</th>
                                <th width={100} className="text">Chon</th>
                                <th width={100} className="text">NAME</th>
                                <th width={100} className="text">Giá</th>
                                <th width={100} className="text">Số Lượng</th>
                                <th width={200} className="text">IMG</th>
                                <th width={100} className="text">DELETE</th>
                            </tr>
                            {listGioHang}
                        </tbody>
                    </table>
                </Grid>
                <Grid sx={{ backgroundColor: "#f1f1f1", display: 'flex', justifyContent: 'center', margin: '20px' }}>

                    <Pop_upThanhToan {...this.props} list={list} id_gio_hang={id_gio_hang} />
                </Grid>
                <Grid sx={{ backgroundColor: "#f1f1f1", display: 'flex', justifyContent: 'center', margin: '20px' }}>
                    <Stack  >
                        <Pagination count={totalPage} className='button_page' color="primary" onChange={(e, value) => {
                            if (totalPage === 1) {

                            } else {
                                this.props.paginationGioHangRequest({ activePage: value })
                            }
                        }} />
                    </Stack>
                </Grid>
            </Grid >
        )
    }
}
