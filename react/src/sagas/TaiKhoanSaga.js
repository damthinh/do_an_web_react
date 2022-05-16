import * as types from "../constants"
import * as actions from "../actions/TaiKhoanAction"
import { put, select, takeEvery } from "redux-saga/effects"
import callAPIJson from "../fetchAPIs/callAPIJson"
function* getUserSaga(action) {
    try {
        let res = yield callAPIJson(types.HTTP_READ, `taikhoan/${action.payload.id_user}`,{token:types.getToken()})
        let listDiaChi = res.listDiaChi
        let user = res.user
        yield put(actions.getUserSuccess({ listDiaChi,user }))
    } catch (error) {
        yield put(actions.getUserFailure({ errorMessage: error }))
    }
}
function* addDiaChiSaga(action) {
    try {
        let res = yield callAPIJson(types.HTTP_CREATE, `diachi`, action.payload)
        yield put(actions.addDiaChiSuccess())
        yield put(actions.getUserRequest({id_user:types.getIdUser()}))
    } catch (error) {
        yield put(actions.addDiaChiFailure(error))
    }
}
function* updateDiaChiSaga(action) {
    try {
        let res = yield callAPIJson(types.HTTP_UPDATE, `diachi`, action.payload)
        yield put(actions.updateDiaChiSuccess())
        yield put(actions.getUserRequest({id_user:types.getIdUser()}))
    } catch (error) {
        yield put(actions.updateDiaChiFailure(error))
    }
}
function* deleteDiaChiSaga(action) {
    try {
        let res = yield callAPIJson(types.HTTP_DELETE, `diachi/${action.payload.id}`, {token:types.getToken()})
        yield put(actions.deleteDiaChiSuccess())
        yield put(actions.getUserRequest({id_user:types.getIdUser()}))
    } catch (error) {
        yield put(actions.deleteDiaChiFailure(error))
    }
}

function* doiPassWordSaga(action) {
    try {
        let res = yield callAPIJson(types.HTTP_CREATE, `taikhoan`,action.payload )
        if (res.errorMessage) {
            alert(res.errorMessage)
        } else {
            alert('Đổi mật khẩu thành công')
            yield put(actions.doiPasswordSuccess())
            yield put(actions.getUserRequest({id_user:types.getIdUser()}))
            
        }
    } catch (error) {
        yield put(actions.deleteDiaChiFailure(error))
    }
}
export const TaiKhoanSaga = [
    takeEvery(types.GET_USER_REQUEST, getUserSaga),
    takeEvery(types.ADD_DIACHI_REQUEST, addDiaChiSaga),
    takeEvery(types.UPDATE_DIACHI_REQUEST, updateDiaChiSaga),
    takeEvery(types.DELETE_DIACHI_REQUEST, deleteDiaChiSaga),
    
    takeEvery(types.DOI_PASSWORD_REQUEST, doiPassWordSaga),
]