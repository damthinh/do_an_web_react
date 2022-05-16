// import * as React from 'react';

import '../component.css'
// import './CssQuanLySanPhamComponent.css'
import React, { Component } from 'react'
import Button from '@mui/material/Button';
import Pop_upAddSanPham from './Pop_upAddSanPham'
import Pop_upUpdateSanPham from './Pop_upUpdateSanPham'
import DeleteIcon from '@mui/icons-material/Delete';
import { LIMITSANPHAMADMIN } from '../../../constants';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
export default class TableComponentQuanlySanPham extends Component {
  state = {
    textSearch: '',
  }
  render() {
    let listSanPham = []
    let { totalPage } = this.props
    let stt = (this.props.activePage - 1) * LIMITSANPHAMADMIN

    if (this.props.listSanPham) {
      listSanPham = this.props.listSanPham.map((item, key) => {
        return (
          <tr key={key}>
            <td className="text">{stt + key + 1}</td>
            <td className="text">{item.name}</td>
            <td className="text">{item.gia}</td>
            <td className="text">{item.so_luong}</td>
            <td className="text" ><img alt='' src={item.img[0]} width={'100px'} height={'100px'} /></td>
            <td className="text"><DeleteIcon variant="outlined" onClick={() => {
              this.props.deleteSanPhamRequest({ id: item._id })
            }}>delete</DeleteIcon></td>
            <td className="text"><Pop_upUpdateSanPham {...this.props}
              item={item}
            /></td>
          </tr>
        )
      })
    }
    return (
      <Grid sx={{ height: '100%', backgroundColor: "#f1f1f1" }} >

        
        <Grid sx={{ backgroundColor: "#f1f1f1", display: 'flex', justifyContent: 'space-evenly',alignItems:'center',height:'10%' }} >
          <h3 width={400} >Tổng Sản phẩm :{this.props.listLength.lengthSanPham}</h3>
          <h3 width={300}>sản phẩm đã hết :{this.props.listLength.lengthSanPhamhHet}</h3>
        </Grid>
        <Grid sx={{ backgroundColor: "#f1f1f1", display: 'flex', justifyContent: 'center' }} >
          <Grid><Pop_upAddSanPham {...this.props} /></Grid>
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
        <Grid sx={{ backgroundColor: "#f1f1f1", height: '70%' }}>
          <table className='table' >
            <tbody >
              <tr display ={{backgroundColor:"gray"}}>
                <th width={70} className="text">STT</th>
                <th width={100} className="text">NAME</th>
                <th width={100} className="text">Giá</th>
                <th width={100} className="text">Số Lượng</th>
                <th width={200} className="text">IMG</th>
                <th width={100} className="text">DELETE</th>
                <th width={100} className="text">UPDATE</th>
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
                this.props.paginationSanPhamRequest({ activePage: value })
              }
            }} />
          </Stack>
        </Grid>
      </Grid >
    )
  }
}
