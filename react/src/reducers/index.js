import { combineReducers } from 'redux';
import AuthenReducer from './AuthenReducer';
import HomeReducer from './HomeReducer';
import QuanLySanPhamReducer from './QuanLySanPhamReducer';
import XemChitietReducer from './XemChitietReducer';
export default combineReducers({
    sanPham : QuanLySanPhamReducer,
    authen: AuthenReducer,
    home:HomeReducer,
    chiTiet:XemChitietReducer
});