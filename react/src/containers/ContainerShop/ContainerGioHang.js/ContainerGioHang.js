import React, { Component } from 'react'
import { connect } from 'react-redux'
import ComponentGioHang from '../../../components/ComponentGioHang/ComponentGioHang'
import * as actions from '../../../actions/GioHangAction'
import { getIdUser } from '../../../constants'
export class ContainerGioHang extends Component {
  componentDidMount(){
    this.props.paginationGioHangRequest({activePage:1})
  }
  render() {
    return (
      <div><ComponentGioHang {...this.props}/></div>
    )
  }
}

const mapStateToProps = (store) => ({
  listGioHang: store.gioHang.listGioHang,
  activePage:store.gioHang.activePage,
  totalPage:store.gioHang.totalPage,
})

const mapDispatchToProps = (dispatch)=>{
  return{
    paginationGioHangRequest:(data)=>{
      dispatch(actions.paginationGioHangRequest(data))
    },
    deleteGioHangRequest:(data)=>{
      dispatch(actions.deleteGioHangRequest(data))
    },
    thanhToanGioHangRequest:(data)=>{
      dispatch(actions.thanhToanGioHangRequest(data))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerGioHang)