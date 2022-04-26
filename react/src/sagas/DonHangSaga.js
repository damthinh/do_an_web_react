import * as types from "../constants"
import * as actions from "../actions/DonHangAction"
import { put, select, takeEvery } from "redux-saga/effects"
import callAPIJson from "../fetchAPIs/callAPIJson"
function* paginationDonHangSaga(action) {
    try {
        console.log("sagaaaaaaaaa");
        let activePage = action.payload.activePage
        let id_user=types.getIdUser()
        let res = yield callAPIJson(types.HTTP_READ, `donhang?page=${activePage}&id_user=${id_user}&limit=${types.LIMITDONHANG}`)
        console.log("res saga",res);
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
        let id_gio_hang = action.payload.id_gio_hang
        let res = yield callAPIJson(types.HTTP_DELETE, `donhang?&id_user=${id_user}&limit=${types.LIMITDONHANG}&id_gio_hang=${id_gio_hang}`)
        yield put(actions.huyDonHangSuccess({}))
        if (res.listGioHang.length === 0) {
            if (res.activePage === 1) {
                yield put(actions.paginationDonHangSuccess({ activePage: 1, totalPage: 1, listGioHang: [] }))
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

function* xemchitietDonHangSaga(action) {
    try {
        console.log("textSearch",action.payload);
        
        let res = yield callAPIJson(types.HTTP_CREATE,`thanhtoan`,action.payload)
        
        console.log("ressssssssssssssss",res);
        // yield put(actions.thanhToanGioHangSuccess({ textSearch: textSearch }))
        yield put(actions.paginationDonHangRequest({ activePage: 1 }))
    } catch (error) {
        // yield put(actions.searchSanPhamFailure({ errorMessage: error })
        
    }
}
export const DonHangSaga = [
    takeEvery(types.PAGINATION_DONHANGUSER_REQUEST, paginationDonHangSaga),
    takeEvery(types.HUY_DONHANGUSER_REQUEST, huyDonHangSaga),
    takeEvery(types.XEMCHITIET_DONHANGUSER_REQUEST, xemchitietDonHangSaga),

]
