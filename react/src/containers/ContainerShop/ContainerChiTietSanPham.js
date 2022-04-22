import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/XemChiTietAction'
import ComponentChiTietSanPham from '../../components/ComponentChiTietSanPham/ComponentChiTietSanPham'

export class ContainerChiTietSanPham extends Component {
  componentDidMount(){
    this.props.xemchitietSanPhamUserRequest({id:localStorage.getItem('idSanPham')})
  }
  render() {
    return (
      <div><ComponentChiTietSanPham {...this.props}/></div>
    )
  }
}

const mapStateToProps = (state) => ({
  SanPham:state.chiTiet.SanPham
})

const mapDispatchToProps = (dispatch)=>{
  return{
    xemchitietSanPhamUserRequest:(data)=>{
      dispatch(actions.xemchitietSanPhamUserRequest(data))
    },
    addGioHangRequest:(data)=>{
      dispatch(actions.addGioHangRequest(data))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerChiTietSanPham)