import React, { Component } from 'react'
import { connect } from 'react-redux'
import ComponentThanhToan from '../../../components/ComponentThanhToan/ComponentThanhToan'

export class ContainerThanhToan extends Component {
  render() {
    return (
      <div><ComponentThanhToan/></div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerThanhToan)