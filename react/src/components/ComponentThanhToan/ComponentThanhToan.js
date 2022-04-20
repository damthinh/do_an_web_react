
import './ComponentMainThanhToan.css'
import React, { Component } from 'react'

import ComponentFooter from '../ComponentHomeShop/ComponentFooter'
import ComponentHeaderShop from '../ComponentHomeShop/ComponentHeaderShop'
import ComponentMainThanhToan from './ComponentMainThanhToan'
export default class ComponentThanhToan extends Component {
    render() {
        return (
            <div className='mainHome'>
                <ComponentHeaderShop />
                <ComponentMainThanhToan />
                <ComponentFooter />
                </div>
        )
    }
}
