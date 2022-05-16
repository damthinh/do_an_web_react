import * as types from "../constants"
import * as actions from "../actions/HomeAction"
import { put, select, takeEvery } from "redux-saga/effects"
import callAPIJson from "../fetchAPIs/callAPIJson"
function* paginationSanPhamUserSaga(action) {
    try {
        let activePage = action.payload.activePage
        let textSearch = yield select((store) => store.home.textSearch)
        let res = yield callAPIJson(types.HTTP_READ, `paginationhome?page=${activePage}&q=${textSearch}&limit=${types.LIMITSANPHAM}`,{token:types.getToken()})
        let listSanPham = res.listSanPham
        let totalPage = res.totalPage
        if (totalPage === 0) totalPage = 1
        yield put(actions.paginationSanPhamUserSuccess({ activePage, totalPage, listSanPham }))
    } catch (error) {
        yield put(actions.paginationSanPhamUserFailure({ errorMessage: error }))
    }
}
function* searchSanPhamUserSaga(action) {
    try {
        yield put (actions.searchSanPhamUserSuccess({textSearch:action.payload.textSearch}))
        yield put(actions.paginationSanPhamUserRequest({activePage:1}))
    } catch (error) {
        yield put(actions.paginationSanPhamUserFailure({ errorMessage: error }))
    }
}
export const HomeSaga = [
    takeEvery(types.PAGINATION_SANPHAMUSER_REQUEST, paginationSanPhamUserSaga),
    takeEvery(types.SEARCH_SANPHAMUSER_REQUEST, searchSanPhamUserSaga),
]