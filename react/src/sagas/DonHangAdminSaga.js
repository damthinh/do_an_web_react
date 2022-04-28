import * as types from "../constants"
import * as actions from "../actions/DonHangAdminAction"
import { put, select, takeEvery } from "redux-saga/effects"
import callAPIJson from "../fetchAPIs/callAPIJson"
function* paginationDonHangAdminSaga(action) {
    try {
        
        console.log('sagaaaaaaâ', action);
        let activePage = action.payload.activePage
        let textSearch = yield select((store) => store.donHangAdmin.textSearch)
        
        console.log("textSearch",textSearch);
        let res = yield callAPIJson(types.HTTP_READ, `donhangadmin?page=${activePage}&textSearch=${textSearch}&limit=${types.LIMITDONHANGADMIN}`)
        let listDonHang = res.listDonHang
        let so_luong_don_hang = res.so_luong_don_hang
        console.log('sagaaaaaaâ', res);
        let totalPage = res.totalPage
        if (totalPage === 0) totalPage = 1
        yield put(actions.paginationDonHangAdminSuccess({ activePage, totalPage, listDonHang ,so_luong_don_hang}))
    } catch (error) {
        yield put(actions.paginationDonHangAdminFailure({ errorMessage: error }))
    }
}
function* updateDonHangAdminSaga(action) {
    try {
        console.log('sagaaaaaaâ', action);

        // let textSearch = yield select((store) => (store.donHangAdmin.textSearch))
        // let form = action.payload.form
        // let name = action.payload.name
        // let id = action.payload.id
        // let res = yield callAPIJson(types.HTTP_UPDATE, `updatesanpham/${id}?limit=${types.LIMITDONHANGADMIN}&q=${textSearch}`, form)
        // console.log("res", res);
        // let listSanPham = res.listSanPham
        
        // yield put(actions.updatenDonHangAdminSuccess({}))
        // if (name.toLowerCase().includes(textSearch.toLowerCase())) {
        //     yield put(actions.paginationDonHangAdminRequest({ activePage: res.activePage }))
        // } else {
        //     yield put(actions.paginationDonHangAdminSuccess({ activePage: 1, totalPage: 1, listSanPham: listSanPham }))
        // }
    } catch (error) {
        yield put(actions.updatenDonHangAdminFailure({ errorMessage: error }))
    }
}
function* deleteDonHangAdminSaga(action) {
    try {
        
        console.log('sagaaaaaaâ', action);
        // let textSearch = yield select((store) => store.donHangAdmin.textSearch)
        // let activePage = yield select((store) => store.donHangAdmin.activePage)
        // let id = action.payload.id
        // let res = yield callAPIJson(types.HTTP_DELETE, `deletesanpham/${id}?page=${activePage}&q=${textSearch}&limit=${types.LIMITDONHANGADMIN}`)
        // console.log("res", res);
        // yield put(actions.deleteDonHangAdminSuccess({}))
        // if (res.listSanPham.length === 0) {
        //     if (activePage === 1) {
        //         yield put(actions.paginationDonHangAdminSuccess({ activePage: 1, totalPage: 1, listSanPham: [] }))
        //     } else {
        //         yield put(actions.paginationDonHangAdminRequest({ activePage: activePage - 1 }))
        //     }
        // } else {
        //     yield put(actions.paginationDonHangAdminRequest({ activePage: activePage }))
        // }
    } catch (error) {
        yield put(actions.deleteDonHangAdminFailure({ errorMessage: error }))
    }
}
function* searchDonHangAdminSaga(action) {
    try {
        console.log('sagaaaaaaâ', action);
        let textSearch = action.payload.textSearch
        console.log("textSearch", textSearch);
        yield put(actions.searchDonHangAdminSuccess({ textSearch: textSearch }))
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
