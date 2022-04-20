import '../componentsAdmin/component.css'
import './ComponentHeaderShop.css'
import React, { Component } from 'react'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import img from '../../img/iphone13.jpg'
// import StyledBadge from '@mui/material/StyledBadge'
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import imgLogin from '../../img/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));
export default class ComponentHeaderShop extends Component {

    render() {
        return (
            <div>
                <div>
                    <ul className="nav">
                        <li className="nav-first">
                            <a href="# "></a><img src={imgLogin} alt="1 " /></li>
                        <ul className="center-nav">
                            <li>
                                <a href="#" className="text-nav">trang chủ</a>
                            </li>
                            <li>
                                <a href="#" className="text-nav">sản phẩm</a>
                                <ul className="subnav">
                                    <li>
                                        <div className="text-shoes">
                                            <a href="#">giày da</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="text-shoes">
                                            <a href="#">giày vải</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="text-shoes">
                                            <a href="#">phụ kiện</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            {/* <li>
                                <a href="#" className="text-nav">tin tức</a>
                            </li>
                            <li>
                                <a href="#" className="text-nav">sản phẩm bán chạy</a>
                            </li> */}
                            <li>
                                <a href="#" className="text-nav">sale off: up to 50%</a>
                            </li>
                        </ul>
                        <div className="Avatar">
                            <Avatar  sx={{ marginRight: '10px', marginLeft: '10px' }} onClick={() => {
                                // window.location.href = './'
                            }} />
                            <ul className="menu">
                                <li>
                                    <div className="text-shoes">
                                        <button className='button'onClick={()=>{
                                            window.location.href = "/taikhoan"
                                        }}>Quản lý tài khoản</button>
                                    </div>
                                </li>
                                <li>
                                    <div className="text-shoes">
                                        <button className='button' onClick={()=>{
                                            window.location.href = "/donhang"
                                        }}>Đơn Hàng</button>
                                    </div>
                                </li>
                                <li>
                                    <div className="text-shoes">
                                        <button className='button' onClick={()=>{
                                            window.location.href = "/homeadmin"
                                        }}>Admin</button>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* <IconButton className='butonscss' caaria-label="rt" onClick={()=>{
                            window.location.href = '/giohang'
                        }}>
                            
                        </IconButton> */}
                        <StyledBadge className='butonscss' sx={{ width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} badgeContent={10} color="secondary" onClick={() => {
                            window.location.href = '/giohang'
                        }}>
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </ul>

                </div>

                <div className="slider">
                    <img src={img} alt="1" />
                </div>
            </div>
        )
    }
}
