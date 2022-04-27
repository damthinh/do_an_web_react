import './ComponentMainChiTietSanPham.css'
import React, { Component } from 'react'
import Pop_upThemGioHang from './Pop_upThemGioHang'
export default class ComponentMainChiTietSanPham extends Component {

    render() {
        console.log("propssssssss", this.props);
        let SanPham = this.props.SanPham
        let cau_hinh = new Object(SanPham.id_cau_hinh)
        return (
            <div>
                <div className='main-san-pham'>
                    <div className='card_img'>
                        <div className='title'>{SanPham.name}</div>
                        <img src={SanPham.img} />
                        {
                            SanPham.giam_gia !== null ?
                                (<div className="pro-prices">
                                    <p>{Math.ceil(SanPham.gia - ((SanPham.gia * SanPham.giam_gia) / 100))} đ</p>
                                    <span>{SanPham.gia} đ</span>
                                </div>)
                                : <div className="pro-prices"><p>{SanPham.gia} đ</p></div>
                        }

                        {
                            SanPham.so_luong === 0 ? (
                                <div className="oos">
                                    <span>Hết hàng</span>
                                </div>
                            ) : null
                        }
                        {
                            SanPham.giam_gia !== null ? (
                                <div className="discount">
                                    <span>{SanPham.giam_gia}%</span>
                                </div>
                            ) : null
                        }
                        
                        <div className='title'>Số lượng : {SanPham.so_luong}</div>
                        <Pop_upThemGioHang {...this.props} so_luong={SanPham.so_luong}/>
                    </div>
                    <div className='thong_so'>
                        <div className='title'>Thông số kỹ thuật</div>
                        <ul className='main-thong-so'>
                            <li>
                                <span className='properties'>Màn Hình:</span>
                                <span className='detail'>{cau_hinh.man_hinh}</span>
                            </li>

                            <li>
                                <span className='properties'>Camera:</span>
                                <span className='detail'>{cau_hinh.camera}</span>
                            </li>

                            <li>
                                <span className='properties'>Ram:</span>
                                <span className='detail'>{cau_hinh.ram}</span>
                            </li>

                            <li>
                                <span className='properties'>Bộ nhớ trong:</span>
                                <span className='detail'>{cau_hinh.bo_nho_trong}</span>
                            </li>

                            <li>
                                <span className='properties'>Pin:</span>
                                <span className='detail'>{cau_hinh.pin}</span>
                            </li>

                            <li>
                                <span className='properties'>Sim:</span>
                                <span className='detail'>{cau_hinh.sim}</span>
                            </li>

                            <li>
                                <span className='properties'>Chíp:</span>
                                <span className='detail'>{cau_hinh.chip}</span>
                            </li>

                            <li>
                                <span className='properties'>Hệ điều hành:</span>
                                <span className='detail'>{cau_hinh.he_dieu_hanh}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='textMota'>
                    {cau_hinh.mo_ta}
                </div>
            </div>
        )
    }
}
