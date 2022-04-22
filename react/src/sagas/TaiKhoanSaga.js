import * as types from "../constants"
import * as actions from "../actions/TaiKhoanAction"
import { put, select, takeEvery } from "redux-saga/effects"
import callAPIJson from "../fetchAPIs/callAPIJson"
function* getUserSaga(action) {
    try {
        console.log("saga", action);
        let res = yield callAPIJson(types.HTTP_READ, `xemchitiet/${action.payload.id}`)
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
        let res = yield callAPIJson(types.HTTP_CREATE, `addgiohang`, action.payload)
        console.log("res", res);
        yield put(actions.addDiaChiRequest())
    } catch (error) {
        yield put(actions.addDiaChiFailure(error))
    }
}
function* updateDiaChiSaga(action) {
    try {
        console.log("action saga", action);
        let res = yield callAPIJson(types.HTTP_CREATE, `addgiohang`, action.payload)
        console.log("res", res);
        yield put(actions.updateDiaChiSuccess())
        yield put(actions.getUserRequest())
    } catch (error) {
        yield put(actions.updateDiaChiFailure(error))
    }
}
function* deleteDiaChiSaga(action) {
    try {
        console.log("action saga", action);
        let res = yield callAPIJson(types.HTTP_CREATE, `addgiohang`, action.payload)
        console.log("res", res);
        yield put(actions.deleteDiaChiSuccess())
    } catch (error) {
        yield put(actions.deleteDiaChiFailure(error))
    }
}
export const XemChiTietSaga = [
    takeEvery(types.GET_USER_REQUEST, getUserSaga),
    takeEvery(types.ADD_DIACHI_REQUEST, addDiaChiSaga),
    takeEvery(types.UPDATE_DIACHI_REQUEST, updateDiaChiSaga),
    takeEvery(types.DELETE_DIACHI_REQUEST, deleteDiaChiSaga),
]