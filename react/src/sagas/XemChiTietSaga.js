import * as types from "../constants"
import * as actions from "../actions/XemChiTietAction"
import { put, select, takeEvery } from "redux-saga/effects"
import callAPIJson from "../fetchAPIs/callAPIJson"
function* xemchitietSanPhamUserSaga(action) {
    try {
        console.log("saga", action);
        let res = yield callAPIJson(types.HTTP_READ, `xemchitiet/${action.payload.id}`)
        console.log("res", res);
        let SanPham = res.getId
        yield put(actions.xemchitietSanPhamUserSuccess({ SanPham }))
    } catch (error) {
        yield put(actions.xemchitietSanPhamUserFailure({ errorMessage: error }))
    }
}
function* addGioHangSaga(action) {
    try {
        console.log("action saga", action);
        let res = yield callAPIJson(types.HTTP_CREATE, `addgiohang`, action.payload)
        console.log("res", res);
        yield put(actions.addGioHangSuccess())
    } catch (error) {
        yield put(actions.addGioHangFailure(error))
    }
}
export const XemChiTietSaga = [
    takeEvery(types.XEMCHITIET_SANPHAM_REQUEST, xemchitietSanPhamUserSaga),
    takeEvery(types.ADD_GIOHANG_REQUEST, addGioHangSaga),
]