
import * as types from "../constants" 
export function paginationDonHangAdminRequest(payload) {
    return{
        type : types.PAGINATION_DONHANGADMIN_REQUEST,
        payload
    }
}
export function paginationDonHangAdminSuccess(payload) {
    return{
        type : types.PAGINATION_DONHANGADMIN_SUCCESS,
        payload
    }
}
export function paginationDonHangAdminFailure(payload) {
    return{
        type : types.PAGINATION_DONHANGADMIN_FAILURE,
        payload
    }
}
// update

export function updateDonHangAdminRequest(payload) {
    return{
        type : types.UPDATE_DONHANGADMIN_REQUEST,
        payload
    }
}
export function updatenDonHangAdminSuccess(payload) {
    return{
        type : types.UPDATE_DONHANGADMIN_SUCCESS,
        payload
    }
}
export function updatenDonHangAdminFailure(payload) {
    return{
        type : types.UPDATE_DONHANGADMIN_FAILURE,
        payload
    }
}
// delete

export function deleteDonHangAdminRequest(payload) {
    return{
        type : types.DELETE_DONHANGADMIN_REQUEST,
        payload
    }
}
export function deleteDonHangAdminSuccess(payload) {
    return{
        type : types.DELETE_DONHANGADMIN_SUCCESS,
        payload
    }
}
export function deleteDonHangAdminFailure(payload) {
    return{
        type : types.DELETE_DONHANGADMIN_FAILURE,
        payload
    }
}
// search

export function searchDonHangAdminRequest(payload) {
    return{
        type : types.SEARCH_DONHANGADMIN_REQUEST,
        payload
    }
}
export function searchDonHangAdminSuccess(payload) {
    return{
        type : types.SEARCH_DONHANGADMIN_SUCCESS,
        payload
    }
}
export function searchDonHangAdminFailure(payload) {
    return{
        type : types.SEARCH_DONHANGADMIN_FAILURE,
        payload
    }
}