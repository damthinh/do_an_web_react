import './ComponentFooter.css'
import React, { Component } from 'react'
import logo from '../../img/logoSaleNoti.png'
export default class ComponentFooter extends Component {
    render() {
        return (
            <div>
                <div id="footer">
                    <div className="footer-1">
                        <div className="top-footer">
                            <a href="#">hệ thống cửa hàng</a>
                        </div>
                    </div>
                    <div className="rows">
                        <div className="col col-3">
                            <h4>goị mua hàng ( 08:30-21:30 )</h4>
                            <a href="#" className="phone">0869989162</a>
                            <p className="phone-text">Tất cả các ngày trong tuần</p>
                        </div>
                        <div className="col col-3">
                            <h4>góp ý, khiếu nại ( 08:30-17:30 )</h4>
                            <a href="#" className="phone">0869989162</a>
                            <p className="phone-text">Các ngày trong tuần ( trừ ngày lễ )</p>
                        </div>
                    </div>
                    <div className="infor">
                        <div className="rows">
                            <div className="col col-4">
                                <h4>cheap store</h4>
                                <div className="cheap">
                                    <p>Hà Nội: 281 Giáp Nhất - Thanh Xuân - Hà Nội</p>
                                    <p>HCM: 139 Hòa Hưng - Phường 12 - Quận 10 - HCM</p>
                                    <p>Email : support@cheapstore.com.vn</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
