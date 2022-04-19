import { combineReducers } from 'redux';
import AuthenReducer from './AuthenReducer';
import QuanLySanPhamReducer from './QuanLySanPhamReducer';
export default combineReducers({
    sanPham : QuanLySanPhamReducer,
    authen: AuthenReducer
});