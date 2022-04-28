import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuanLyDonHangComponent from '../../components/componentsAdmin/QuanLyDonHang/QuanLyDonHangComponent'
import * as actions from '../../actions/DonHangAdminAction'
export class QuanLyDonHangContainer extends Component {
  componentDidMount(){
    this.props.paginationDonHangAdminRequest({activePage:1})
  }
  render() {
    return (
      <QuanLyDonHangComponent {...this.props} />
    )
  }
}

const mapStateToProps = (store) => ({
  
  listDonHang: store.donHangAdmin.listDonHang,
  activePage:store.donHangAdmin.activePage,
  totalPage:store.donHangAdmin.totalPage,
  textSearch:store.donHangAdmin.textSearch,
  so_luong_don_hang:store.donHangAdmin.so_luong_don_hang
})

const mapDispatchToProps = (dispatch)=> {
  return{
    paginationDonHangAdminRequest:(data)=>{
      dispatch(actions.paginationDonHangAdminRequest(data))
    },
    updateDonHangAdminRequest:(data)=>{
      dispatch(actions.updateDonHangAdminRequest(data))
    },
    deleteDonHangAdminRequest:(data)=>{
      dispatch(actions.deleteDonHangAdminRequest(data))
    },
    searchDonHangAdminRequest:(data)=>{
      dispatch(actions.searchDonHangAdminRequest(data))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuanLyDonHangContainer)