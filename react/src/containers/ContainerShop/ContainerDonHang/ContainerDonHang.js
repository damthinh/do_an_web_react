import React, { Component } from 'react'
import { connect } from 'react-redux'
import ComponentDonHang from '../../../components/ComponentDonHang/ComponentDonHang'
import * as actions from '../../../actions/DonHangAction'
export class ContainerDonHang extends Component {
  componentDidMount(){
    this.props.paginationDonHangRequest({activePage:1})
  }
  render() {
    return (
      <div><ComponentDonHang {...this.props}/></div>
    )
  }
}

const mapStateToProps = (store) => ({
  
  listDonHang: store.donHang.listDonHang,
  activePage:store.donHang.activePage,
  totalPage:store.donHang.totalPage,

})

const mapDispatchToProps = (dispatch)=> {
  return{
    paginationDonHangRequest:(data)=>{
      dispatch(actions.paginationDonHangRequest(data))
    },
    huyDonHangRequest:(data)=>{
      dispatch(actions.huyDonHangRequest(data))
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerDonHang)