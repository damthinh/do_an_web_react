import * as types from "../constants"
import * as actions from "../actions/GioHangAction"
import { put, select, takeEvery } from "redux-saga/effects"
import callAPIForm from "../fetchAPIs/callAPIForm"
function* paginationGioHangSaga(action) {
    try {
        console.log("actios saga",action);
        let activePage = action.payload.activePage
        let id_user=types.getIdUser()
        let res = yield callAPIForm(types.HTTP_READ, `giohang?page=${activePage}&id_user=${id_user}&limit=${types.LIMITGIOHANG}`)
        let listGioHang = res.listGioHang
        let totalPage = res.totalPage
        if (totalPage === 0) totalPage = 1
        yield put(actions.paginationGioHangSuccess({ activePage, totalPage, listGioHang }))
    } catch (error) {
        yield put(actions.paginationGioHangFailure({ errorMessage: error }))
    }
}
function* deleteGioHangSaga(action) {
    try {
        console.log("actios saga",action);
        let id_user=types.getIdUser()
        let id_gio_hang = action.payload.id_gio_hang
        let res = yield callAPIForm(types.HTTP_DELETE, `giohang?&id_user=${id_user}&limit=${types.LIMITGIOHANG}&id_gio_hang=${id_gio_hang}`)
        console.log("res", res);
        yield put(actions.deleteGioHangSuccess({}))
        if (res.listGioHang.length === 0) {
            if (res.activePage === 1) {
                yield put(actions.paginationGioHangSuccess({ activePage: 1, totalPage: 1, listGioHang: [] }))
            } else {
                yield put(actions.paginationGioHangRequest({ activePage: res.activePage - 1 }))
            }
        } else {
            yield put(actions.paginationGioHangRequest({ activePage: res.activePage }))
        }
    } catch (error) {
        yield put(actions.deleteGioHangFailure({ errorMessage: error }))
    }
}
function* thanhToanGioHangSaga(action) {
    try {
        let textSearch = action.payload.textSearch
        console.log("textSearch",textSearch);
        yield put(actions.thanhToanGioHangSuccess({ textSearch: textSearch }))
        // yield put(actions.paginationSanPhamRequest({ activePage: 1 }))
    } catch (error) {
        // yield put(actions.searchSanPhamFailure({ errorMessage: error })
        
    }
}
export const GioHangSaga = [
    takeEvery(types.PAGINATION_GIOHANG_REQUEST, paginationGioHangSaga),
    takeEvery(types.DELETE_GIOHANG_REQUEST, deleteGioHangSaga),
    takeEvery(types.THANHTOAN_GIOHANG_REQUEST, thanhToanGioHangSaga),
]
