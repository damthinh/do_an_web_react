import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeAdminComponent from '../../components/componentsAdmin/ComponentHomeAdmin/HomeAdminComponent'

export class HomeAdminContainer extends Component {
  render() {
    return (
      <div><HomeAdminComponent/></div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(HomeAdminContainer)