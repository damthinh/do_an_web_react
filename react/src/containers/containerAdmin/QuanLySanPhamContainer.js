import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/QuanLySanPhamActions'
import QuanLySanPhamComponent from '../../components/componentsAdmin/QuanLySanPhamComponent/QuanLySanPhamComponent'
export class QuanLySanPhamContainer extends Component {
    componentDidMount(){
        this.props.paginationSanPhamRequest({activePage:1})
    }
  render() {
    return (
      <div><QuanLySanPhamComponent {...this.props} /></div>
    )
  }
}

const mapStateToProps = (store) => ({
    listSanPham: store.sanPham.listSanPham,
    activePage:store.sanPham.activePage,
    totalPage:store.sanPham.totalPage,
    textSearch:store.sanPham.textSearch,
    listLength:store.sanPham.listLength
})

const mapDispatchToProps = (dispatch)=> {
    return{
        paginationSanPhamRequest:(data)=>{
            dispatch(actions.paginationSanPhamRequest(data))
        },
        addSanPhamRequest:(data)=>{
            dispatch(actions.addSanPhamRequest(data))
        },
        updateSanPhamRequest:(data)=>{
            dispatch(actions.updateSanPhamRequest(data))
        },
        deleteSanPhamRequest:(data)=>{
            dispatch(actions.deleteSanPhamRequest(data))
        },
        searchSanPhamRequest:(data)=>{
            dispatch(actions.searchSanPhamRequest(data))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuanLySanPhamContainer)