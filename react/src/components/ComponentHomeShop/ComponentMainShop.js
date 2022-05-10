import './ComponentMainShop.css'
import React, { Component } from 'react'

import Pagination from '@mui/material/Pagination';

import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
export default class ComponentMainShop extends Component {
    state = {
        textSearch: ''
    }
    search() {
        this.props.searchSanPhamUserRequest({ textSearch: this.state.textSearch })
    }
    render() {
        console.log("prop", this.props);
        console.log("text", this.state.textSearch);
        let { totalPage, activePage } = this.props
        let listSanPham = []
        if (this.props.listSanPham) {
            listSanPham = this.props.listSanPham.map((item, key) => {
                console.log("Math.ceil((item.gia * item.giam_gia) / 100)", Math.ceil((item.gia * item.giam_gia) / 100));
                return (
                    <div key={key} className='main' onClick={() => {
                        localStorage.setItem('idSanPham',item._id)
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
                                            <p>{Math.ceil(item.gia - ((item.gia * item.giam_gia) / 100))} đ</p>
                                            <span>{item.gia} đ</span>
                                        </div>)
                                        : <div className="pro-prices"><p>{item.gia} đ</p></div>
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
        }
        return (
            <div className='mainHome' display={{ minHeight: '100vh' }}>
                {/* <div className='header-collection'>
                    <div className="news-cmt">
                        <label htmlFor="cars">Sắp xếp theo:   </label>
                        <select name="cars" id="cars" onChange={(e) => {
                            console.log('eeeeeê', e.target.value);
                        }}>
                            <option value="new">Mới nhất</option>
                            <option value=">Giá giảm dần">Giá giảm dần</option>
                            <option value="Giá tăng dần">Giá tăng dần</option>
                            <option value="Sale">Sale</option>
                        </select>
                    </div>
                </div> */}
                <div>

                    <input className='input' placeholder='Nhập tên điện thoại... cần tìm' onChange={(e) => {
                        this.setState({ textSearch: e.target.value })
                    }} />
                    <button className='butonscss' onClick={() => {
                        this.search()
                    }}>
                        <SearchIcon />
                    </button>
                </div>
                <div className='rowMain'>
                    {listSanPham}
                </div>
                <Grid sx={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                    <Stack  >
                        <Pagination count={totalPage} className='button_page' color="primary" onChange={(e, value) => {
                            if (totalPage === 1) {

                            } else {
                                this.props.paginationSanPhamUserRequest({ activePage: value })
                            }
                        }} />
                    </Stack>
                </Grid>
            </div>
        )
    }
}
