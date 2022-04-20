
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

// datHang
export function datHangSanPhamUserRequest(payload) {
    return{
        type : types.DATHANG_REQUEST,
        payload
    }
}
export function datHangSanPhamUserSuccess(payload) {
    return{
        type : types.DATHANG_SUCCESS,
        payload
    }
}
export function datHangSanPhamUserFailure(payload) {
    return{
        type : types.DATHANG_FAILURE,
        payload
    }
}