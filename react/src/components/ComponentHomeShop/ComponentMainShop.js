import './ComponentMainShop.css'
import React, { Component } from 'react'

import Pagination from '@mui/material/Pagination';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { SignalCellularNullRounded } from '@mui/icons-material';
let list = [{ '_id':'1','name': 'iphone 3', 'so_luong': 0, 'img': ['https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro%20Max/iPhone-13-Pro-Max-2.jpg'], 'gia': '1000', 'giam_gia': 32 },
{ '_id':'1','name': 'iphone 3', 'so_luong': 1, 'img': ['https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro%20Max/iPhone-13-Pro-Max-2.jpg'], 'gia': '1000', 'giam_gia': null },
{ '_id':'1','name': 'iphone 3', 'so_luong': 1, 'img': ['https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro%20Max/iPhone-13-Pro-Max-2.jpg'], 'gia': '1000', 'giam_gia': null },
{ '_id':'1','name': 'iphone 3', 'so_luong': 1, 'img': ['https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro%20Max/iPhone-13-Pro-Max-2.jpg'], 'gia': '1000', 'giam_gia': null },
{ '_id':'1','name': 'iphone 3', 'so_luong': 1, 'img': ['https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro%20Max/iPhone-13-Pro-Max-2.jpg'], 'gia': '1000', 'giam_gia': null },
{ '_id':'1','name': 'iphone 3', 'so_luong': 1, 'img': ['https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro%20Max/iPhone-13-Pro-Max-2.jpg'], 'gia': '1000', 'giam_gia': null },
{ '_id':'1','name': 'iphone 3', 'so_luong': 1, 'img': ['https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro%20Max/iPhone-13-Pro-Max-2.jpg'], 'gia': '1000', 'giam_gia': null },
{ '_id':'1','name': 'iphone 3', 'so_luong': 1, 'img': ['https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro%20Max/iPhone-13-Pro-Max-2.jpg'], 'gia': '1000', 'giam_gia': null },
{ '_id':'1','name': 'iphone 3', 'so_luong': 1, 'img': ['https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro%20Max/iPhone-13-Pro-Max-2.jpg'], 'gia': '1000', 'giam_gia': null },
{ '_id':'1','name': 'iphone 3', 'so_luong': 1, 'img': ['https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro%20Max/iPhone-13-Pro-Max-2.jpg'], 'gia': '1000', 'giam_gia': null },
{ '_id':'1','name': 'iphone 3', 'so_luong': 1, 'img': ['https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro%20Max/iPhone-13-Pro-Max-2.jpg'], 'gia': '1000', 'giam_gia': null },
{ '_id':'1','name': 'iphone 3', 'so_luong': 1, 'img': ['https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro%20Max/iPhone-13-Pro-Max-2.jpg'], 'gia': '1000', 'giam_gia': null },
{ '_id':'1','name': 'iphone 3', 'so_luong': 1, 'img': ['https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro%20Max/iPhone-13-Pro-Max-2.jpg'], 'gia': '1000', 'giam_gia': 50 },
{ '_id':'1','name': 'iphone 3', 'so_luong': 1, 'img': ['https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro%20Max/iPhone-13-Pro-Max-2.jpg'], 'gia': '1000', 'giam_gia': null },

]
export default class ComponentMainShop extends Component {
    state ={
        textSearch :''
    }
    render() {
        console.log("text",this.state.textSearch);
        let totalPage =3
        let listSanPham = []
        listSanPham = list.map((item, key) => {
            return (
                <div key={key} className='main' onClick={() => {
                    window.location.href = '/chitietsanpham'
                }}>
                    <div className="card">
                        <div className="imgBx">
                            <img src={item.img[0]} alt="1" />
                            <div>

                            </div>
                        </div>
                        <div className='price'>
                            <div className="pro-name">
                                <a href="#">{item.name}</a>
                            </div>
                            {
                                item.giam_gia !== null ?
                                    (<div className="pro-prices">
                                        <p>{Math.ceil((item.gia * item.giam_gia) / 100)} đ</p>
                                        <span>{item.gia.toLocaleString('it-IT', { style: 'decimal' })} đ</span>
                                    </div>)
                                    : <div className="pro-prices"><p>{item.gia.toLocaleString('it-IT', { style: 'decimal' })} đ</p></div>
                            }
                        </div>
                        {
                            item.so_luong === 0 ? (
                                <div className="oos">
                                    <span>Hết hàng</span>
                                </div>
                            ) : null
                        }
                        {
                            item.giam_gia !== null ? (
                                <div className="discount">
                                    <span>{item.giam_gia}%</span>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            )
        })
        return (
            <div display={{ minHeight: '100vh' }}>
                <div className='header-collection'>
                    <div className="news-cmt">
                        <label htmlFor="cars">Sắp xếp theo:   </label>
                        <select name="cars" id="cars" onChange={(e)=>{
                            console.log('eeeeeê',e.target.value);
                        }}>
                            <option value="new">Mới nhất</option>
                            <option value=">Giá giảm dần">Giá giảm dần</option>
                            <option value="Giá tăng dần">Giá tăng dần</option>
                            <option value="Sale">Sale</option>
                        </select>
                    </div>
                </div>
                <div >
                    <div className='rowMain'>
                        {listSanPham}
                    </div>
                </div>
                <Grid sx={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                    <Stack  >
                        <Pagination count={totalPage} className='button_page' color="primary" onChange={(e, value) => {
                            if (totalPage === 1) {

                            } else {
                                // this.props.paginationSanPhamRequest({ activePage: value })
                            }
                        }} />
                    </Stack>
                </Grid>
            </div>
        )
    }
}
