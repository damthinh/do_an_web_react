import * as types from "../constants"
import * as actions from "../actions/TaiKhoanAction"
import { put, select, takeEvery } from "redux-saga/effects"
import callAPIJson from "../fetchAPIs/callAPIJson"
function* getUserSaga(action) {
    try {
        console.log("saga", action);
        let res = yield callAPIJson(types.HTTP_READ, `taikhoan/${action.payload.id_user}`,)
        console.log("res", res);
        let listDiaChi = res.listDiaChi
        let user = res.user
        yield put(actions.getUserSuccess({ listDiaChi,user }))
    } catch (error) {
        yield put(actions.getUserFailure({ errorMessage: error }))
    }
}
function* addDiaChiSaga(action) {
    try {
        console.log("action saga", action);
        let res = yield callAPIJson(types.HTTP_CREATE, `diachi`, action.payload)
        console.log("res", res);
        yield put(actions.addDiaChiSuccess())
        yield put(actions.getUserRequest({id_user:types.getIdUser()}))
    } catch (error) {
        yield put(actions.addDiaChiFailure(error))
    }
}
function* updateDiaChiSaga(action) {
    try {
        console.log("action saga", action);
        let res = yield callAPIJson(types.HTTP_UPDATE, `diachi`, action.payload)
        console.log("res", res);
        yield put(actions.updateDiaChiSuccess())
        yield put(actions.getUserRequest({id_user:types.getIdUser()}))
    } catch (error) {
        yield put(actions.updateDiaChiFailure(error))
    }
}
function* deleteDiaChiSaga(action) {
    try {
        console.log("action saga", action);
        let res = yield callAPIJson(types.HTTP_DELETE, `diachi/${action.payload.id}`, )
        console.log("res", res);
        yield put(actions.deleteDiaChiSuccess())
        yield put(actions.getUserRequest({id_user:types.getIdUser()}))
    } catch (error) {
        yield put(actions.deleteDiaChiFailure(error))
    }
}
export const TaiKhoanSaga = [
    takeEvery(types.GET_USER_REQUEST, getUserSaga),
    takeEvery(types.ADD_DIACHI_REQUEST, addDiaChiSaga),
    takeEvery(types.UPDATE_DIACHI_REQUEST, updateDiaChiSaga),
    takeEvery(types.DELETE_DIACHI_REQUEST, deleteDiaChiSaga),
]