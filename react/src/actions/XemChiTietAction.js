
import * as types from '../constants'

// xemchitiet
export function xemchitietSanPhamUserRequest(payload) {
    return{
        type : types.XEMCHITIET_SANPHAM_REQUEST,
        payload
    }
}
export function xemchitietSanPhamUserSuccess(payload) {
    return{
        type : types.XEMCHITIET_SANPHAM_SUCCESS,
        payload
    }
}
export function xemchitietSanPhamUserFailure(payload) {
    return{
        type : types.XEMCHITIET_SANPHAM_FAILURE,
        payload
    }
}

// addGioHang
export function addGioHangRequest(payload) {
    return{
        type : types.ADD_GIOHANG_REQUEST,
        payload
    }
}
export function addGioHangSuccess(payload) {
    return{
        type : types.ADD_GIOHANG_SUCCESS,
        payload
    }
}
export function addGioHangFailure(payload) {
    return{
        type : types.ADD_GIOHANG_FAILURE,
        payload
    }
}