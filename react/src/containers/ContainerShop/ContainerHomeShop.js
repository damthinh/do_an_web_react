import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/HomeAction'
import ComponentChiTietSanPham from '../../components/ComponentChiTietSanPham/ComponentChiTietSanPham'
import ComponentHomeShop from '../../components/ComponentHomeShop/ComponentHomeShop'

export class ContainerHomeShop extends Component {
  componentDidMount(){
    this.props.paginationSanPhamUserRequest({activePage:1})
}
  render() {
    return (
      <div><ComponentHomeShop {...this.props}/></div>
    )
  }
}

const mapStateToProps = (state) => ({
  listSanPham:state.home.listSanPham,
  activePage:state.home.activePage,
  totalPage:state.home.totalPage,
})

const mapDispatchToProps =(dispatch)=> {
  return{
    
    paginationSanPhamUserRequest:(data)=>{
      dispatch(actions.paginationSanPhamUserRequest(data))
    },
    searchSanPhamUserRequest:(data)=>{
      dispatch(actions.searchSanPhamUserRequest(data))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerHomeShop)