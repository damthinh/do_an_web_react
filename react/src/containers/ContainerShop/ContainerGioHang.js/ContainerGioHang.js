import React, { Component } from 'react'
import { connect } from 'react-redux'
import ComponentGioHang from '../../../components/ComponentGioHang/ComponentGioHang'

export class ContainerGioHang extends Component {
  render() {
    return (
      <div><ComponentGioHang/></div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerGioHang)