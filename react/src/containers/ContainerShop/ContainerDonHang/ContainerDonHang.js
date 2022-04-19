import React, { Component } from 'react'
import { connect } from 'react-redux'
import ComponentDonHang from '../../../components/ComponentDonHang/ComponentDonHang'

export class ContainerDonHang extends Component {
  render() {
    return (
      <div><ComponentDonHang/></div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerDonHang)