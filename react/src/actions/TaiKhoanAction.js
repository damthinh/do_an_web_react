import * as types from '../constants'
// get tai khoan
export function getUserRequest(payload) {
    return{
        type : types.GET_USER_REQUEST,
        payload
    }
}
export function getUserSuccess(payload) {
    return{
        type : types.GET_USER_SUCCESS,
        payload
    }
}
export function getUserFailure(payload) {
    return{
        type : types.GET_USER_FAILURE,
        payload
    }
}

// doiPassword
export function doiPasswordRequest(payload) {
    return{
        type : types.DOI_PASSWORD_REQUEST,
        payload
    }
}
export function doiPasswordSuccess(payload) {
    return{
        type : types.DOI_PASSWORD_SUCCESS,
        payload
    }
}
export function doiPasswordFailure(payload) {
    return{
        type : types.DOI_PASSWORD_FAILURE,
        payload
    }
}
// addDiaChi

export function addDiaChiRequest(payload) {
    return{
        type : types.ADD_DIACHI_REQUEST,
        payload
    }
}
export function addDiaChiSuccess(payload) {
    return{
        type : types.ADD_DIACHI_SUCCESS,
        payload
    }
}
export function addDiaChiFailure(payload) {
    return{
        type : types.ADD_DIACHI_FAILURE,
        payload
    }
}
// updateDiaChi

export function updateDiaChiRequest(payload) {
    return{
        type : types.UPDATE_DIACHI_REQUEST,
        payload
    }
}
export function updateDiaChiSuccess(payload) {
    return{
        type : types.UPDATE_DIACHI_SUCCESS,
        payload
    }
}
export function updateDiaChiFailure(payload) {
    return{
        type : types.UPDATE_DIACHI_FAILURE,
        payload
    }
}
// deleteDiaChi

export function deleteDiaChiRequest(payload) {
    return{
        type : types.DELETE_DIACHI_REQUEST,
        payload
    }
}
export function deleteDiaChiSuccess(payload) {
    return{
        type : types.DELETE_DIACHI_SUCCESS,
        payload
    }
}
export function deleteDiaChiFailure(payload) {
    return{
        type : types.DELETE_DIACHI_FAILURE,
        payload
    }
}