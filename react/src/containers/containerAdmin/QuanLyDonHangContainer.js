import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuanLyDonHangComponent from '../../components/componentsAdmin/QuanLyDonHang/QuanLyDonHangComponent'

export class QuanLyDonHangContainer extends Component {
  render() {
    return (
      <QuanLyDonHangComponent/>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(QuanLyDonHangContainer)