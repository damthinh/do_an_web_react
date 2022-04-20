
import * as types from "../constants" 

export function paginationSanPhamUserRequest(payload) {
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
// search
export function searchSanPhamUserRequest(payload) {
    return{
        type : types.SEARCH_SANPHAMUSER_REQUEST,
        payload
    }
}
export function searchSanPhamUserSuccess(payload) {
    return{
        type : types.SEARCH_SANPHAMUSER_SUCCESS,
        payload
    }
}
export function searchSanPhamUserFailure(payload) {
    return{
        type : types.SEARCH_SANPHAMUSER_FAILURE,
        payload
    }
}