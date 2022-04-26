import * as types from "../constants"
import * as actions from "../actions/GioHangAction"
import { put, select, takeEvery } from "redux-saga/effects"
import callAPIJson from "../fetchAPIs/callAPIJson"
function* paginationGioHangSaga(action) {
    try {
        let activePage = action.payload.activePage
        let id_user=types.getIdUser()
        let res = yield callAPIJson(types.HTTP_READ, `giohang?page=${activePage}&id_user=${id_user}&limit=${types.LIMITGIOHANG}`)
        console.log("res saga",res);
        let listGioHang = res.listGioHang
        let totalPage = res.totalPage
        let listDiaChi = res.listDiaChi
        if (totalPage === 0) totalPage = 1
        yield put(actions.paginationGioHangSuccess({ activePage, totalPage, listGioHang,listDiaChi }))
    } catch (error) {
        yield put(actions.paginationGioHangFailure({ errorMessage: error }))
    }
}
function* deleteGioHangSaga(action) {
    try {
        let id_user=types.getIdUser()
        let id_gio_hang = action.payload.id_gio_hang
        let res = yield callAPIJson(types.HTTP_DELETE, `giohang?&id_user=${id_user}&limit=${types.LIMITGIOHANG}&id_gio_hang=${id_gio_hang}`)
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

function* updateGioHangSaga(action) {
    try {
        let id_user=types.getIdUser()
        let res = yield callAPIJson(types.HTTP_UPDATE, `giohang?&id_user=${id_user}&limit=${types.LIMITGIOHANG}`,action.payload)
        yield put(actions.paginationGioHangRequest({ activePage: res.activePage }))
    } catch (error) {
        yield put(actions.updateGioHangFailure({ errorMessage: error }))
    }
}
function* thanhToanGioHangSaga(action) {
    try {
        console.log("textSearch",action.payload);
        
        yield put(actions.paginationGioHangRequest({ activePage: 1 }))
        let res = yield callAPIJson(types.HTTP_CREATE,`thanhtoan`,action.payload)
        
        console.log("ressssssssssssssss",res);
        // yield put(actions.thanhToanGioHangSuccess({ textSearch: textSearch }))
        yield put(actions.paginationGioHangRequest({ activePage: 1 }))
    } catch (error) {
        // yield put(actions.searchSanPhamFailure({ errorMessage: error })
        
    }
}
export const GioHangSaga = [
    takeEvery(types.PAGINATION_GIOHANG_REQUEST, paginationGioHangSaga),
    takeEvery(types.DELETE_GIOHANG_REQUEST, deleteGioHangSaga),
    takeEvery(types.THANHTOAN_GIOHANG_REQUEST, thanhToanGioHangSaga),
    takeEvery(types.UPDATE_GIOHANG_REQUEST, updateGioHangSaga),

]
