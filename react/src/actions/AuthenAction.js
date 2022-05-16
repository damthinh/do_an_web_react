
import * as types from "../constants" 
export function LoginUserRequest(payload) {
    return{
        type : types.LOGIN_USER_REQUEST,
        payload
    }
}
export function LoginUserSuccess(payload) {
    return{
        type : types.LOGIN_USER_SUCCESS,
        payload
    }
}
export function LoginUserFailure(payload) {
    return{
        type : types.LOGIN_USER_FAILURE,
        payload
    }
}
// dang ky

export function DangKyUserRequest(payload) {
    return{
        type : types.DANGKY_USER_REQUEST,
        payload
    }
}
export function DangKyUserSuccess(payload) {
    return{
        type : types.DANGKY_USER_SUCCESS,
        payload
    }
}
export function DangKyUserFailure(payload) {
    return{
        type : types.DANGKY_USER_FAILURE,
        payload
    }
}
// quenMk

export function quenMkUserRequest(payload) {
    return{
        type : types.QUENMK_USER_REQUEST,
        payload
    }
}
export function quenMkUserSuccess(payload) {
    return{
        type : types.QUENMK_USER_SUCCESS,
        payload
    }
}
export function quenMkUserFailure(payload) {
    return{
        type : types.QUENMK_USER_FAILURE,
        payload
    }
}