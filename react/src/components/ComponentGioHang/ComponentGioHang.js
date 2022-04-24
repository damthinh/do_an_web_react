import React, { Component } from 'react'
import ComponetMainGioHang from './ComponetMainGioHang'
import ComponentFooter from '../ComponentHomeShop/ComponentFooter'
import ComponentHeaderShop from '../ComponentHomeShop/ComponentHeaderShop'
export default class ComponentGioHang extends Component {
  render() {
    return (
      <div>
          <ComponentHeaderShop/>
          <ComponetMainGioHang {...this.props}/>
          <ComponentFooter/>
      </div>
    )
  }
}
