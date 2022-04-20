import React, { Component } from 'react'
import ComponentFooter from './ComponentFooter'
import ComponentHeaderShop from './ComponentHeaderShop'
import ComponentMainShop from './ComponentMainShop'
export default class ComponentHomeShop extends Component {
  render() {
    return (
      <div sx={{position:'absolute'}}>
          <ComponentHeaderShop {...this.props}/>
          <ComponentMainShop {...this.props}/>
          <ComponentFooter {...this.props}/>
      </div>
    )
  }
}
