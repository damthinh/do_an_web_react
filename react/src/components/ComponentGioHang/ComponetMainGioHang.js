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
let list = [{ 'name' : 'iphone 13', 'gia' :'200000' , 'so_luong':'2' ,'img':['https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro%20Max/iPhone-13-Pro-Max-2.jpg']},
{ 'name' : 'iphone 12', 'gia' :'100000' , 'so_luong':'1' ,'img':['https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro%20Max/iPhone-13-Pro-Max-2.jpg']},
{ 'name' : 'iphone 13', 'gia' :'200000' , 'so_luong':'2' ,'img':['https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro%20Max/iPhone-13-Pro-Max-2.jpg']},
{ 'name' : 'iphone 13', 'gia' :'200000' , 'so_luong':'2' ,'img':['https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro%20Max/iPhone-13-Pro-Max-2.jpg']},
{ 'name' : 'iphone 13', 'gia' :'200000' , 'so_luong':'2' ,'img':['https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro%20Max/iPhone-13-Pro-Max-2.jpg']},
{ 'name' : 'iphone 13', 'gia' :'200000' , 'so_luong':'2' ,'img':['https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro%20Max/iPhone-13-Pro-Max-2.jpg']},

]
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
        let {activePage,totalPage} = this.props
        let listGioHang = []
        let stt = (1 - 1) * LIMIT

            listGioHang = this.props.listGioHang.map((item, key) => {
                // let num =item.so_luong
                return (
                    <tr key={key}>
                        <td className="text">{stt + key + 1}</td>
                        <td className="text"><input type={'checkbox'}/></td>
                        <td className="text">{item.id_san_pham.name}</td>
                        <td className="text">{item.id_san_pham.gia}</td>
                        <td className="text"><input style={{width:'50px'}} placeholder ={item.so_luong} type={'number'}  onChange={(e)=>{item.so_luong = e.target.value }} ></input></td>
                        <td className="text" ><img alt='' src={item.id_san_pham.img[0]} width={'100px'} height={'100px'} /></td>
                        <td className="text"><DeleteIcon variant="outlined" onClick={() => {
                            this.props.deleteGioHangRequest({ id_gio_hang: item._id })
                        }}>delete</DeleteIcon></td>
                        {/* <td className="text"><Pop_upUpdateSanPham {...this.props}
              item={item}
            /></td> */}
                    </tr>
                )
            })
        return (
            <Grid sx={{ height: '100%', backgroundColor: "#f1f1f1" }} >
                <Grid sx={{ backgroundColor: "#f1f1f1", height: '70%',margin:'10px' }}>
                    <table className='table' >
                        <tbody >
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
                <Grid sx={{ backgroundColor: "#f1f1f1", display: 'flex', justifyContent: 'center',margin:'20px' }}>
                <button className='butonscss' onClick={()=>{
                    window.location.href ='/thantoan'
                }}>Thanh toán</button>
                <Pop_upThanhToan />
                </Grid>
                <Grid sx={{ backgroundColor: "#f1f1f1", display: 'flex', justifyContent: 'center',margin:'20px' }}>
                    <Stack  >
                        <Pagination count={totalPage}  className='button_page' color="primary" onChange={(e, value) => {
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
