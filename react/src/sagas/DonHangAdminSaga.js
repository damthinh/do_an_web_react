import * as types from "../constants"
import * as actions from "../actions/DonHangAdminAction"
import { put, select, takeEvery } from "redux-saga/effects"
import callAPIJson from "../fetchAPIs/callAPIJson"
function* paginationDonHangAdminSaga(action) {
    try {
        let activePage = action.payload.activePage
        let textSearch = yield select((store) => store.donHangAdmin.textSearch)
        let trang_thai = yield select((store) => store.donHangAdmin.trang_thai)
        
        let res = yield callAPIJson(types.HTTP_READ, `donhangadmin?page=${activePage}&textSearch=${textSearch}&trang_thai=${trang_thai}&limit=${types.LIMITDONHANGADMIN}`,{token:types.getToken()})
        let listDonHang = res.listDonHang
        let so_luong_don_hang = res.so_luong_don_hang
        let totalPage = res.totalPage
        if (totalPage === 0) totalPage = 1
        yield put(actions.paginationDonHangAdminSuccess({ activePage, totalPage, listDonHang ,so_luong_don_hang}))
    } catch (error) {
        yield put(actions.paginationDonHangAdminFailure({ errorMessage: error }))
    }
}
function* updateDonHangAdminSaga(action) {
    try {
        let id_don_hang = action.payload.id
        let textSearch = yield select((store) => (store.donHangAdmin.textSearch))
        let trang_thaiSearch = yield select((store) => store.donHangAdmin.trang_thai)
        let res = yield callAPIJson(types.HTTP_UPDATE, `donhangadmin/${id_don_hang}?&textSearch=${textSearch}&trang_thai=${trang_thaiSearch}&limit=${types.LIMITDONHANG}`,action.payload)
        let trang_thai = action.payload.trang_thai
        let listDonHang = res.listDonHang
        
        let so_luong_don_hang = res.so_luong_don_hang
        yield put(actions.updatenDonHangAdminSuccess({}))
        if (trang_thai.toLowerCase().includes(trang_thaiSearch.toLowerCase())) {
            yield put(actions.paginationDonHangAdminRequest({ activePage: res.activePage }))
        } else {
            yield put(actions.paginationDonHangAdminSuccess({ activePage: 1, totalPage: 1, listDonHang,so_luong_don_hang }))
        }
    } catch (error) {
        yield put(actions.updatenDonHangAdminFailure({ errorMessage: error }))
    }
}
function* deleteDonHangAdminSaga(action) {
    try {
        let textSearch = yield select((store) => store.donHangAdmin.textSearch)
        let trang_thai = yield select((store) => store.donHangAdmin.trang_thai)
        let id = action.payload.id
        let res = yield callAPIJson(types.HTTP_DELETE, `donhangadmin/${id}?q=${textSearch}&trang_thai=${trang_thai}&limit=${types.LIMITDONHANGADMIN}`,{token:types.getToken()})
        yield put(actions.deleteDonHangAdminSuccess({}))
        if (res.listDonHang.length === 0) {
            if (res.activePage === 1) {
                yield put(actions.paginationDonHangAdminSuccess({ activePage: 1, totalPage: 1, listDonHang: [],so_luong_don_hang:[] }))
            } else {
                yield put(actions.paginationDonHangAdminRequest({ activePage: res.activePage - 1 }))
            }
        } else {
            yield put(actions.paginationDonHangAdminRequest({ activePage: res.activePage }))
        }
    } catch (error) {
        yield put(actions.deleteDonHangAdminFailure({ errorMessage: error }))
    }
}
function* searchDonHangAdminSaga(action) {
    try {
        let textSearch = action.payload.textSearch
        let trang_thai = action.payload.trang_thai
        yield put(actions.searchDonHangAdminSuccess({ textSearch: textSearch ,trang_thai:trang_thai}))
        yield put(actions.paginationDonHangAdminRequest({ activePage: 1 }))
    } catch (error) {
        yield put(actions.searchDonHangAdminFailure({ errorMessage: error })
        )
    }
}
export const DonHangAdminSaga = [
    takeEvery(types.PAGINATION_DONHANGADMIN_REQUEST, paginationDonHangAdminSaga),
    takeEvery(types.UPDATE_DONHANGADMIN_REQUEST, updateDonHangAdminSaga),
    takeEvery(types.DELETE_DONHANGADMIN_REQUEST, deleteDonHangAdminSaga),
    takeEvery(types.SEARCH_DONHANGADMIN_REQUEST, searchDonHangAdminSaga),
]
