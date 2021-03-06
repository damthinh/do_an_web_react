import { combineReducers } from 'redux';
import AuthenReducer from './AuthenReducer';
import DonHangAdminReducer from './DonHangAdminReducer';
import DonHangReducer from './DonHangReducer';
import GioHangReducer from './GioHangReducer';
import HomeReducer from './HomeReducer';
import QuanLySanPhamReducer from './QuanLySanPhamReducer';
import TaiKhoanReducer from './TaiKhoanReducer';
import XemChitietReducer from './XemChitietReducer';
export default combineReducers({
    sanPham : QuanLySanPhamReducer,
    authen: AuthenReducer,
    home:HomeReducer,
    chiTiet:XemChitietReducer,
    taiKhoan:TaiKhoanReducer,
    gioHang:GioHangReducer,
    donHang:DonHangReducer,
    donHangAdmin:DonHangAdminReducer
});