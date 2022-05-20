import './ComponentTaiKhoan.css'
import React, { Component } from 'react'
import Pop_upAddDiaChi from './Pop_upAddDiaChi'
import Pop_upUpdateDiachi from './Pop_upUpdateDiachi'
import Pop_upDoiMatKhau from './Pop_upDoiMatKhau'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import { getToken } from '../../constants'
let list = [{ 'dia_chi': 'Số 43 ngách 15/18 ngõ gốc đề minh khai-hai bà trưng', 'gia': '1000d', 'so_luong': '3', 'img': ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6cZDIco8NgbvUotl8Y9VTjWGOCpiDo5Dkvw&usqp=CAU'] }
    , { 'dia_chi': 'Số 43 ngách 15/18 ngõ gốc đề minh khai-hai bà trưng' }
]
export default class ComponentMainTaiKhoan extends Component {
    render() {
        
        let listDiaChi = []
        let user = new Object(this.props.user[0]) 
        if(this.props.listDiaChi){
            listDiaChi = this.props.listDiaChi.map((item, key) => {
                return (
                    <tr key={key}>
                        <td className="text">{key + 1}</td>
                        <td className="text">{item.Name}</td>
                        <td className="text">{item.Sdt}</td>

                        <td className="text">{item.dia_chi}</td>
                        <td className="text"><DeleteIcon variant="outlined" onClick={() => {
                            this.props.deleteDiaChiRequest({id:item._id,token:getToken()})
                        }}/></td>
                        <td className="text"><Pop_upUpdateDiachi {...this.props} item={item}/></td>
                    </tr>
                )
            })
        }
        return (
            <div className='mainTaiKhoan'>
                <div className='thong_so'>
                    <div className='title'>Tài khoản của bạn</div>
                    <ul className='main-thong-so'>

                        <li>
                            <span className='properties'>Email:</span>
                            <span className='detail'>{user.Email}</span>
                        </li>

                        <li>
                            <span className='properties'>SDT:</span>
                            <span className='detail'>{user.Sdt}</span>
                        </li>
                        <li>
                            <Pop_upDoiMatKhau {...this.props}/>
                        </li>
{/* 
                        <li>
                            <span className='properties'>Ship:</span>
                            <span className='detail'>free</span>
                        </li>

                        <li>
                            <span className='properties'>Ship:</span>
                            <span className='detail'>free</span>
                        </li> */}
                    </ul>
                </div>

                <Grid sx={{ backgroundColor: "#f1f1f1", height: '70%', display: 'flex', flexDirection: 'column' }}>
                    <div className='text'>Địa Chỉ Của Bạn</div>
                    <Pop_upAddDiaChi  {...this.props} />
                    <table className='table' >
                        <tbody >
                            <tr display={{ backgroundColor: "gray" }}>
                                <th width={70} className="text">STT</th>
                                <th width={200} className="text">NAME</th>
                                <th width={70} className="text">SĐT</th>
                                <th width={400} className="text">Địa Chỉ</th>
                                {/* {/* <th width={100} className="text">Giá</th> */}
                                <th width={100} className="text">DELTE</th> 
                                <th width={100} className="text">UPDATE</th> 
                            </tr>
                            {listDiaChi}
                        </tbody>
                    </table>
                </Grid>
            </div>
        )
    }
}
