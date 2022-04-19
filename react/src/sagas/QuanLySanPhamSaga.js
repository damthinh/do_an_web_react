import * as types from "../constants"
import * as actions from "../actions/QuanLySanPhamActions"
import { put, select, takeEvery } from "redux-saga/effects"
import callAPIForm from "../fetchAPIs/callAPIForm"
function* paginationSanPhamSaga(action) {
    try {
        let activePage = action.payload.activePage
        let textSearch = yield select((store) => store.sanPham.textSearch)
        let res = yield callAPIForm(types.HTTP_READ, `paginationSanpham?page=${activePage}&q=${textSearch}&limit=${types.LIMIT}`)
        let listSanPham = res.listSanPham
        let totalPage = res.totalPage
        if (totalPage === 0) totalPage = 1
        yield put(actions.paginationSanPhamSuccess({ activePage, totalPage, listSanPham }))
    } catch (error) {
        yield put(actions.paginationSanPhamFailure({ errorMessage: error }))
    }
}
function* addSanPhamSaga(action) {
    try {
        let form = action.payload.form
        let name = action.payload.name
        let textSearch = yield select((store)=>store.sanPham.textSearch)
        let res = yield callAPIForm(types.HTTP_CREATE,`addsanpham?limit=${types.LIMIT}&q=${textSearch}`,form)
        let totalPage = res.totalPage
        let listSanPham = res.listSanPham
        if (name.toLowerCase().includes(textSearch.toLowerCase()))
        {
            yield put(actions.addSanPhamSuccess({}))
            yield put (actions.paginationSanPhamRequest({activePage:totalPage}))
        } else {
            yield put(actions.addSanPhamSuccess({totalPage:1,activePage:1,listSanPham:listSanPham}))
        }
    } catch (error) {
        yield put (actions.addSanPhamFailure({errorMessage: error}))
    }
}
function* updateSanPhamSaga(action) {
    try {
        let activePage =yield select((store)=>store.sanPham.activePage)
        let form = action.payload.form
        let name = action.payload.name
        let id = action.payload.id
        let res = yield callAPIForm (types.HTTP_UPDATE,`updatesanpham/${id}`,form)
        let listSanPham= res.listSanPham
        let textSearch = yield select((store)=>(store.sanPham.textSearch))
        if (name.toLowerCase().includes(textSearch.toLowerCase())) 
        {
            yield put (actions.updateSanPhamSuccess({}))
            yield put (actions.paginationSanPhamRequest({activePage:activePage}))
        } else {
            yield put (actions.updateSanPhamSuccess({activePage:1,totalPage:1,listSanPham:listSanPham}))
        }
    } catch (error) {
        yield put (actions.updateSanPhamFailure({errorMessage: error}))
    }
}
function* deleteSanPhamSaga(action) {
    try {
        let textSearch = yield select((store) => store.sanPham.textSearch)
        let activePage = yield select((store) => store.sanPham.activePage)
        let id = action.payload.id
        let res = yield callAPIForm(types.HTTP_DELETE, `deletesanpham/${id}?page=${activePage}&q=${textSearch}&limit=${types.LIMIT}`)
        console.log("res", res);
        yield put(actions.deleteSanPhamSuccess({}))
        if (res.listSanPham.length === 0) {
            if (activePage === 1) {
                yield put(actions.paginationSanPhamSuccess({ activePage: 1, totalPage: 1, listSanPham: [] }))
            } else {
                yield put(actions.paginationSanPhamRequest({ activePage: activePage - 1 }))
            }
        } else {
            yield put(actions.paginationSanPhamRequest({ activePage: activePage }))
        }
    } catch (error) {
        yield put(actions.deleteSanPhamFailure({ errorMessage: error }))
    }
}
function* searchSanPhamSaga(action) {
    try {
        let textSearch = action.payload.textSearch
        console.log("textSearch",textSearch);
        yield put(actions.searchSanPhamSuccess({ textSearch: textSearch }))
        yield put(actions.paginationSanPhamRequest({ activePage: 1 }))
    } catch (error) {
        yield put(actions.searchSanPhamFailure({ errorMessage: error })
        )
    }
}
export const SanPhamSaga = [
    takeEvery(types.PAGINATION_SANPHAM_REQUEST, paginationSanPhamSaga),
    takeEvery(types.ADD_SANPHAM_REQUEST,addSanPhamSaga),
    takeEvery(types.UPDATE_SANPHAM_REQUEST,updateSanPhamSaga),
    takeEvery(types.DELETE_SANPHAM_REQUEST, deleteSanPhamSaga),
    takeEvery(types.SEARCH_SANPHAM_REQUEST, searchSanPhamSaga),
]
