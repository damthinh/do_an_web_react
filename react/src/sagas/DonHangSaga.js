import * as types from "../constants"
import * as actions from "../actions/DonHangAction"
import { put, select, takeEvery } from "redux-saga/effects"
import callAPIJson from "../fetchAPIs/callAPIJson"
function* paginationDonHangSaga(action) {
    try {
        let activePage = action.payload.activePage
        let id_user=types.getIdUser()
        let res = yield callAPIJson(types.HTTP_READ, `donhang?page=${activePage}&id_user=${id_user}&limit=${types.LIMITDONHANG}`,{token:types.getToken()})
        let listDonHang = res.listDonHang
        let totalPage = res.totalPage
        let listDiaChi = res.listDiaChi
        if (totalPage === 0) totalPage = 1
        yield put(actions.paginationDonHangSuccess({ activePage, totalPage, listDonHang,listDiaChi }))
    } catch (error) {
        yield put(actions.paginationDonHangFailure({ errorMessage: error }))
    }
}
function* huyDonHangSaga(action) {
    try {
        let id_user=types.getIdUser()
        let id_don_hang = action.payload.id
        let res = yield callAPIJson(types.HTTP_DELETE, `donhang/${id_don_hang}?&id_user=${id_user}&limit=${types.LIMITDONHANG}`,action.payload)
        yield put(actions.huyDonHangSuccess({}))
        if (res.listDonHang.length === 0) {
            if (res.activePage === 1) {
                yield put(actions.paginationDonHangSuccess({ activePage: 1, totalPage: 1, listDonHang: [] }))
            } else {
                yield put(actions.paginationDonHangRequest({ activePage: res.activePage - 1 }))
            }
        } else {
            yield put(actions.paginationDonHangRequest({ activePage: res.activePage }))
        }
    } catch (error) {
        yield put(actions.huyDonHangFailure({ errorMessage: error }))
    }
}
export const DonHangSaga = [
    takeEvery(types.PAGINATION_DONHANGUSER_REQUEST, paginationDonHangSaga),
    takeEvery(types.HUY_DONHANGUSER_REQUEST, huyDonHangSaga),

]
