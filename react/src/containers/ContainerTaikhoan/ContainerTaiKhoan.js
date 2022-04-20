import React, { Component } from 'react'
import { connect } from 'react-redux'
import ComponentTaiKhoan from '../../components/ComponentTaiKhoan/ComponentTaiKhoan'

export class ContainerTaiKhoan extends Component {
  render() {
    return (
      <div><ComponentTaiKhoan/></div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerTaiKhoan)