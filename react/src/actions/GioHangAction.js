
import * as types from "../constants" 
export function paginationGioHangRequest(payload) {
    return{
        type : types.PAGINATION_GIOHANG_REQUEST,
        payload
    }
}
export function paginationGioHangSuccess(payload) {
    return{
        type : types.PAGINATION_GIOHANG_SUCCESS,
        payload
    }
}
export function paginationGioHangFailure(payload) {
    return{
        type : types.PAGINATION_GIOHANG_FAILURE,
        payload
    }
}
// delete

export function deleteGioHangRequest(payload) {
    return{
        type : types.DELETE_GIOHANG_REQUEST,
        payload
    }
}
export function deleteGioHangSuccess(payload) {
    return{
        type : types.DELETE_GIOHANG_SUCCESS,
        payload
    }
}
export function deleteGioHangFailure(payload) {
    return{
        type : types.DELETE_GIOHANG_FAILURE,
        payload
    }
}
// thanhToan

export function thanhToanGioHangRequest(payload) {
    return{
        type : types.THANHTOAN_GIOHANG_REQUEST,
        payload
    }
}
export function thanhToanGioHangSuccess(payload) {
    return{
        type : types.THANHTOAN_GIOHANG_SUCCESS,
        payload
    }
}
export function thanhToanGioHangFailure(payload) {
    return{
        type : types.THANHTOAN_GIOHANG_FAILURE,
        payload
    }
}