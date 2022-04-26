
import * as types from "../constants" 
export function paginationDonHangRequest(payload) {
    return{
        type : types.PAGINATION_DONHANGUSER_REQUEST,
        payload
    }
}
export function paginationDonHangSuccess(payload) {
    return{
        type : types.PAGINATION_DONHANGUSER_SUCCESS,
        payload
    }
}
export function paginationDonHangFailure(payload) {
    return{
        type : types.PAGINATION_DONHANGUSER_FAILURE,
        payload
    }
}
// huy
export function huyDonHangRequest(payload) {
    return{
        type : types.HUY_DONHANGUSER_REQUEST,
        payload
    }
}
export function huyDonHangSuccess(payload) {
    return{
        type : types.HUY_DONHANGUSER_SUCCESS,
        payload
    }
}
export function huyDonHangFailure(payload) {
    return{
        type : types.HUY_DONHANGUSER_FAILURE,
        payload
    }
}
// xemchitiet
export function xemchitietDonHangRequest(payload) {
    return{
        type : types.XEMCHITIET_DONHANGUSER_REQUEST,
        payload
    }
}
export function xemchitietDonHangSuccess(payload) {
    return{
        type : types.XEMCHITIET_DONHANGUSER_SUCCESS,
        payload
    }
}
export function xemchitietDonHangFailure(payload) {
    return{
        type : types.XEMCHITIET_DONHANGUSER_FAILURE,
        payload
    }
}
