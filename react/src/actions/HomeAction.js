
import * as types from "../constants" 

export function paginationSanPhamUserRequest(payload) {
    console.log("action");
    return{
        type : types.PAGINATION_SANPHAMUSER_REQUEST,
        payload
    }
}
export function paginationSanPhamUserSuccess(payload) {
    return{
        type : types.PAGINATION_SANPHAMUSER_SUCCESS,
        payload
    }
}
export function paginationSanPhamUserFailure(payload) {
    return{
        type : types.PAGINATION_SANPHAMUSER_FAILURE,
        payload
    }
}
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