import React, { Component } from 'react'

import ComponentFooter from '../ComponentHomeShop/ComponentFooter'
import ComponentHeaderShop from '../ComponentHomeShop/ComponentHeaderShop'
import ComponentMainChiTietSanPham from './ComponentMainChiTietSanPham'
export default class ComponentChiTietSanPham extends Component {
  render() {
    return (
      <div>
          
          <ComponentHeaderShop/>
          <ComponentMainChiTietSanPham {...this.props}/>
          <ComponentFooter/>
      </div>
    )
  }
}
