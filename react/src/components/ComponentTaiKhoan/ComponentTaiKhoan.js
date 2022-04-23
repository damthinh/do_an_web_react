import React, { Component } from 'react'

import ComponentFooter from '../ComponentHomeShop/ComponentFooter'
import ComponentHeaderShop from '../ComponentHomeShop/ComponentHeaderShop'
import ComponentMainTaiKhoan from './ComponentMainTaiKhoan'
export default class ComponentTaiKhoan extends Component {
  render() {
    return (
      <div>
      <ComponentHeaderShop />
      <ComponentMainTaiKhoan {...this.props}/>
      <ComponentFooter /></div>
    )
  }
}
