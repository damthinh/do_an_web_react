import React, { Component } from 'react'

import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import Grid from '@mui/material/Grid';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import { width } from '@mui/system';
export default class ComponentMainHomeAdmin extends Component {
    render() {
        const styleMain = { height: '29.5vh', display: 'flex', justifyContent: 'space-around', width: '100%' }
        const mainDonHang = { height: '29.5vh', width: '32%', backgroundColor: '#28a745', display: 'flex', flexDirection: 'column', borderRadius: '5%' }
        const mainSanPham = { height: '29.5vh', width: '32%', backgroundColor: '#17a2b8', display: 'flex', flexDirection: 'column', borderRadius: '5%' }
        const mainUser = { height: '29.5vh', width: '32%', backgroundColor: '#ffc107', display: 'flex', flexDirection: 'column', borderRadius: '5%' }
        const butonscss = { backgroundColor: 'rgba(0,0,0,.1)', border: 'none', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px' }
        const icon = { height: '20vh', width: '30%', alignItems: 'center', justifyContent: 'center' }
        const body = { display: 'flex', justifyContent: 'space-around', height: '30vh' }
        const text = { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }
        return (
            <div>
                <Grid  >
                    <Grid style={styleMain} >
                        <Grid style={mainDonHang}>
                            <Grid style={body} >
                                <Grid style={text}>
                                    <div className='text1' >{100}</div>
                                    <div className='text2'>Đơn mới</div>
                                </Grid>
                                <ShoppingBasketOutlinedIcon style={icon} />
                            </Grid>
                            <button style={butonscss}  onClick={()=>{
                                window.location.href = './quanlydonhang'
                            }} >
                                Chi tiết
                            </button>
                        </Grid>
                        <Grid style={mainSanPham}>
                            <Grid style={body} >
                                <Grid style={text}>
                                    <div className='text1' >{100}</div>
                                    <div className='text2'>Sản Phẩm</div>
                                </Grid>
                                <Inventory2OutlinedIcon style={icon} />
                            </Grid>
                            <button style={butonscss} onClick={()=>{
                                window.location.href = './quanlysanpham'
                            }}  >
                                Chi tiết
                            </button>
                        </Grid>
                        <Grid style={mainUser}>
                            <Grid style={body} >
                                <Grid style={text}>
                                    <div className='text1' >{100}</div>
                                    <div className='text2'>User</div>
                                </Grid>
                                <PersonOutlineOutlinedIcon style={icon} />
                            </Grid>
                            <button style={butonscss}   >
                                Chi tiết
                            </button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
