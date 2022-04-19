import * as types from "../constants"
import * as actions from "../actions/AuthenAction"
import { put, select, takeEvery } from "redux-saga/effects"
import callApiJson from "../fetchAPIs/callAPIJson"
function* loginSaga(action) {
    try {
        let res = yield callApiJson(types.HTTP_CREATE,'login',action.payload)
        if (res.errorMessage) {
            alert(res.errorMessage)
        } else {
            console.log('res',res);
            localStorage.setItem('token',res.token)
            localStorage.setItem('role',res.getUser.role)
            window.location.href ='/home'
            yield put (actions.LoginUserSuccess())
        }
    } catch (error) {
        yield put (actions.LoginUserFailure(error))
    }
}
function* dangkySaga(action) {
    try {
        let res = yield callApiJson(types.HTTP_CREATE,'register',action.payload)
        if (res.errorMessage) {
            alert(res.errorMessage)
        } else {
            yield put (actions.DangKyUserSuccess())
            alert(res.message)
        }
    } catch (error) {
        yield put (actions.DangKyUserFailure(error))
    }
}

export const AuthenSaga =[
    takeEvery(types.DANGKY_USER_REQUEST,dangkySaga),
    takeEvery(types.LOGIN_USER_REQUEST,loginSaga)
]