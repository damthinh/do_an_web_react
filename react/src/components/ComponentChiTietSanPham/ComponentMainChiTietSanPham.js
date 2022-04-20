import './ComponentMainChiTietSanPham.css'
import React, { Component } from 'react'
import Pop_upThemGioHang from './Pop_upThemGioHang'
let slideIndex = 1;
let item = [{
    'man_hinh': "6.7 inch FHD+ Infinity-O Super AMOLED 120Hz", 'camera': '108.0 MP + 12.0 MP + 5.0 MP + 5.0 MP Chống rung quang học (OIS)', 'ram': '8 GB', 'bo_nho_trong': '	128 GB',
    'pin': '5000 mAh, Sạc nhanh 25W', 'sim': '2 sim', 'CPU': 'Snapdragon 778G (6nm)', 'he_dieu_hanh': 'Android 12', 'mo_ta': 'iPhone 12 Pro - "Siêu phẩm công nghệ" với nhiều nâng cấp mạnh mẽ về thiết kế, cấu hình và hiệu năng, khẳng định đẳng cấp thời thượng trên thị trường smartphone cao cấp.'
}]
let sanpham = [{ 'name': 'iphone13', 'img': 'https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro%20Max/iPhone-13-Pro-Max-2.jpg', 'gia': '1 000 000', 'giam_gia': null }]
let list = [{ '_id': '1', 'name': 'iphone 3', 'so_luong': 0, 'img': ['https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro%20Max/iPhone-13-Pro-Max-2.jpg'], 'gia': '1000', 'giam_gia': 32 },
{ '_id': '1', 'name': 'iphone 3', 'so_luong': 1, 'img': ['https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro%20Max/iPhone-13-Pro-Max-2.jpg'], 'gia': '1000', 'giam_gia': null },
{ '_id': '1', 'name': 'iphone 3', 'so_luong': 1, 'img': ['https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro%20Max/iPhone-13-Pro-Max-2.jpg'], 'gia': '1000', 'giam_gia': null },
{ '_id': '1', 'name': 'iphone 3', 'so_luong': 1, 'img': ['https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro%20Max/iPhone-13-Pro-Max-2.jpg'], 'gia': '1000', 'giam_gia': null },
{ '_id': '1', 'name': 'iphone 3', 'so_luong': 1, 'img': ['https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro%20Max/iPhone-13-Pro-Max-2.jpg'], 'gia': '1000', 'giam_gia': null },

]
export default class ComponentMainChiTietSanPham extends Component {

    render() {
        let listSanPham = []
        listSanPham = list.map((item, key) => {
            return (
                <div key={key} className='main' onClick={() => {
                    window.location.href = '/chitietsanpham'
                }}>
                    <div className="card">
                        <div className="imgBx">
                            <img src={item.img[0]} alt="1" />
                            <div>

                            </div>
                        </div>
                        <div className='price'>
                            <div className="pro-name">
                                <a href="#">{item.name}</a>
                            </div>
                            {
                                item.giam_gia !== null ?
                                    (<div className="pro-prices">
                                        <p>{Math.ceil((item.gia * item.giam_gia) / 100)} đ</p>
                                        <span>{item.gia.toLocaleString('it-IT', { style: 'decimal' })} đ</span>
                                    </div>)
                                    : <div className="pro-prices"><p>{item.gia.toLocaleString('it-IT', { style: 'decimal' })} đ</p></div>
                            }
                        </div>
                        {
                            item.so_luong === 0 ? (
                                <div className="oos">
                                    <span>Hết hàng</span>
                                </div>
                            ) : null
                        }
                        {
                            item.giam_gia !== null ? (
                                <div className="discount">
                                    <span>{item.giam_gia}%</span>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            )
        })
        console.log('item', sanpham[0].img);
        return (
            <div>
                <div className='main-san-pham'>
                    <div className='img-san-pham'>
                        <div className='title'>{sanpham[0].name}</div>
                        <img src={sanpham[0].img} />
                        {
                            sanpham[0].giam_gia !== null ?
                                (<div className="pro-prices">
                                    <p>{Math.ceil((sanpham[0].gia * sanpham.giam_gia) / 100)} đ</p>
                                    <span>{sanpham[0].gia} đ</span>
                                </div>)
                                : <div className="pro-prices"><p>{sanpham[0].gia} đ</p></div>
                        }
                        <Pop_upThemGioHang />
                        {/* <button className='button'>Thêm giỏ hàng</button> */}
                    </div>
                    <div className='thong_so'>
                        <div className='title'>Thông số kỹ thuật</div>
                        <ul className='main-thong-so'>
                            <li>
                                <span className='properties'>Màn Hình:</span>
                                <span className='detail'>{item[0].man_hinh}</span>
                            </li>

                            <li>
                                <span className='properties'>Camera:</span>
                                <span className='detail'>{item[0].camera}</span>
                            </li>

                            <li>
                                <span className='properties'>Ram:</span>
                                <span className='detail'>{item[0].ram}</span>
                            </li>

                            <li>
                                <span className='properties'>Bộ nhớ trong:</span>
                                <span className='detail'>{item[0].bo_nho_trong}</span>
                            </li>

                            <li>
                                <span className='properties'>Pin:</span>
                                <span className='detail'>{item[0].pin}</span>
                            </li>

                            <li>
                                <span className='properties'>Sim:</span>
                                <span className='detail'>{item[0].sim}</span>
                            </li>

                            <li>
                                <span className='properties'>Chíp:</span>
                                <span className='detail'>{item[0].CPU}</span>
                            </li>

                            <li>
                                <span className='properties'>Hệ điều hành:</span>
                                <span className='detail'>{item[0].he_dieu_hanh}</span>
                            </li>

                            {/* <li>
                            <span></span>
                            <span></span>
                        </li>
                        
                        <li>
                            <span></span>
                            <span></span>
                        </li> */}
                        </ul>
                    </div>
                </div>
                <div>
                    {item[0].mo_ta}
                </div>
                <div className='title'>Sản phẩm liên quan</div>
                <div >
                    <div className='rowMain'>
                        {listSanPham}
                    </div>
                </div>
            </div>
        )
    }
}
