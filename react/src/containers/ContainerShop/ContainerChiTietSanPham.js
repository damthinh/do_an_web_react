import React, { Component } from 'react'
import { connect } from 'react-redux'
import ComponentChiTietSanPham from '../../components/ComponentChiTietSanPham/ComponentChiTietSanPham'

export class ContainerChiTietSanPham extends Component {
  render() {
    return (
      <div><ComponentChiTietSanPham {...this.props}/></div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerChiTietSanPham)