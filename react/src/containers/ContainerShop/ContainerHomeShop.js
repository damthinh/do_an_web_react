import React, { Component } from 'react'
import { connect } from 'react-redux'
import ComponentChiTietSanPham from '../../components/ComponentChiTietSanPham/ComponentChiTietSanPham'
import ComponentHomeShop from '../../components/ComponentHomeShop/ComponentHomeShop'

export class ContainerHomeShop extends Component {
  render() {
    return (
      <div><ComponentHomeShop/></div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerHomeShop)