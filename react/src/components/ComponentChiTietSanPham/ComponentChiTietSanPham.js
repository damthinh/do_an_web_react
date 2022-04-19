import React, { Component } from 'react'

import ComponentFooter from '../ComponentHomeShop/ComponentFooter'
import ComponentHeaderShop from '../ComponentHomeShop/ComponentHeaderShop'
import ComponentMainChiTietSanPham from './ComponentMainChiTietSanPham'
// import ComponentMainShop from './ComponentMainShop'
export default class ComponentChiTietSanPham extends Component {
  render() {
    return (
      <div>
          
          <ComponentHeaderShop/>
          <ComponentMainChiTietSanPham/>
          <ComponentFooter/>
      </div>
    )
  }
}
