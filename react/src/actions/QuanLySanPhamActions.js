import * as types from "../constants" 
export function paginationSanPhamRequest(payload) {
    console.log("action");
    return{
        type : types.PAGINATION_SANPHAM_REQUEST,
        payload
    }
}
export function paginationSanPhamSuccess(payload) {
    return{
        type : types.PAGINATION_SANPHAM_SUCCESS,
        payload
    }
}
export function paginationSanPhamFailure(payload) {
    return{
        type : types.PAGINATION_SANPHAM_FAILURE,
        payload
    }
}
// add

export function addSanPhamRequest(payload) {
    return{
        type : types.ADD_SANPHAM_REQUEST,
        payload
    }
}
export function addSanPhamSuccess(payload) {
    return{
        type : types.ADD_SANPHAM_SUCCESS,
        payload
    }
}
export function addSanPhamFailure(payload) {
    return{
        type : types.ADD_SANPHAM_FAILURE,
        payload
    }
}
// update

export function updateSanPhamRequest(payload) {
    return{
        type : types.UPDATE_SANPHAM_REQUEST,
        payload
    }
}
export function updateSanPhamSuccess(payload) {
    return{
        type : types.UPDATE_SANPHAM_SUCCESS,
        payload
    }
}
export function updateSanPhamFailure(payload) {
    return{
        type : types.UPDATE_SANPHAM_FAILURE,
        payload
    }
}
// delete

export function deleteSanPhamRequest(payload) {
    return{
        type : types.DELETE_SANPHAM_REQUEST,
        payload
    }
}
export function deleteSanPhamSuccess(payload) {
    return{
        type : types.DELETE_SANPHAM_SUCCESS,
        payload
    }
}
export function deleteSanPhamFailure(payload) {
    return{
        type : types.DELETE_SANPHAM_FAILURE,
        payload
    }
}
// search


export function searchSanPhamRequest(payload) {
    return{
        type : types.SEARCH_SANPHAM_REQUEST,
        payload
    }
}
export function searchSanPhamSuccess(payload) {
    return{
        type : types.SEARCH_SANPHAM_SUCCESS,
        payload
    }
}
export function searchSanPhamFailure(payload) {
    return{
        type : types.SEARCH_SANPHAM_FAILURE,
        payload
    }
}