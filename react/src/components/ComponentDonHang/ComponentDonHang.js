import React, { Component } from 'react'
import ComponetMainDonHang from './ComponentMainDonHang'
import ComponentFooter from '../ComponentHomeShop/ComponentFooter'
import ComponentHeaderShop from '../ComponentHomeShop/ComponentHeaderShop'
export default class ComponentDonHang extends Component {
  render() {
    return (
      <div>
          <ComponentHeaderShop/>
          <ComponetMainDonHang/>
          <ComponentFooter/>
      </div>
    )
  }
}
