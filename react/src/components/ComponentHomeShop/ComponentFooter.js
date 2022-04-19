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
                    <div className="row">
                        <div className="col col-3">
                            <h4>goị mua hàng ( 08:30-21:30 )</h4>
                            {/* <div className="ll">
                                <i className="fas fa-phone-alt"></i>
                            </div> */}
                            <a href="#" className="phone">0869989162</a>
                            <p className="phone-text">Tất cả các ngày trong tuần</p>
                        </div>
                        <div className="col col-3">
                            <h4>góp ý, khiếu nại ( 08:30-17:30 )</h4>
                            {/* <div className="ll">
                                <i className="fas fa-phone-alt"></i>
                            </div> */}
                            <a href="#" className="phone">0869989162</a>
                            <p className="phone-text">Các ngày trong tuần ( trừ ngày lễ )</p>
                        </div>
                        {/* <div className="col col-3">
                            <h4>đăng kí nhận thông tin mới</h4>
                            <div className="form">
                                <input type="email" placeholder="Nhập email của bạn tại đây.." className="form-wr" />
                            </div>
                        </div>
                        <div className="col col-3 follow">
                            <h4>theo dõi chúng tôi</h4>
                            <div className="icon">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-instagram"></i>
                            </div>
                        </div> */}
                    </div>
                    <div className="infor">
                        <div className="row">
                            <div className="col col-4">
                                <h4>cheap store</h4>
                                <div className="cheap">
                                    <p>Hà Nội: 281 Giáp Nhất - Thanh Xuân - Hà Nội</p>
                                    <p>HCM: 139 Hòa Hưng - Phường 12 - Quận 10 - HCM</p>
                                    <p>Email : support@cheapstore.com.vn</p>
                                    {/* <img className='logo' src={logo} alt="cn"/> */}
                                </div>
                            </div>
                            {/* <div className="col col-4">
                                    <h4>về chúng tôi</h4>
                                    <div className="we">
                                        <a href="./gioithieu.html">Giới thiệu</a>
                                        <a href="./we.html">Liên hệ</a>
                                        <a href="./thanhtoan.html">Chính sách thanh toán</a>
                                        <a href="./vanchuyen.html">Chính sách vận chuyển</a>
                                        <a href="./baohanh.html">Chính sách bảo hành</a>
                                        <a href="./doitra.html">Chính sách đổi trả</a>
                                    </div>
                                </div>
                                <div className="col col-4 ">
                                    <h4>hỗ trợ khách hàng</h4>
                                    <div className="support">
                                        <a href="./chonsize.html">Hướng dẫn chọn size</a>
                                        <a href="./khtt.html">Chính sách khách hàng thân thiết</a>
                                        <a href="./baomat.html">Chính sách bảo mật và điều khoản dịch vụ</a>
                                        <a href="./vhct.html">Văn Hóa Công Ty</a>
                                        
                                    </div>
                                </div> */}
                        </div>
                    </div>
                    {/* <div className="design">
                            <p>Thiết kế website bởi
                                <img src="./img/favicon.ico" alt="1"/>
                                    <a href="#">Nhanh.vn</a>    
                            </p>

                        </div> */}
                </div>
            </div>
        )
    }
}
