import React, { Component } from 'react'
import { connect } from 'react-redux'
import DanhMucComponent from '../../components/componentsAdmin/DanhMucComponent'

export class DanhMucAdmincontainer extends Component {
  render() {
    return (
      <div><DanhMucComponent {...this.props}/></div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(DanhMucAdmincontainer)