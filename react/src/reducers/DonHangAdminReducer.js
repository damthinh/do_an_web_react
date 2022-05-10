import * as types from '../constants'
const initialState = {
    listDonHang: [],
    isFetching: false,
    dataFetched: false,
    error: false,
    errorMessage: null,
    activePage: 0,
    totalPage: 0,
    so_luong_don_hang: [],
    textSearch:'',
    trang_thai:'',
}

export default (state = initialState, action) => {
    switch (action.type) {

        case types.PAGINATION_DONHANGADMIN_REQUEST:
        case types.UPDATE_DONHANGADMIN_REQUEST:
        case types.DELETE_DONHANGADMIN_REQUEST:
        case types.SEARCH_DONHANGADMIN_REQUEST:
            return {
                ...state,
                listDonHang: [],
                isFetching: true,
                dataFetched: false,
                error: false,
                errorMessage: null,
                so_luong_don_hang: []
            }
        case types.PAGINATION_DONHANGADMIN_FAILURE:
        case types.UPDATE_DONHANGADMIN_FAILURE:
        case types.DELETE_DONHANGADMIN_FAILURE:
        case types.SEARCH_DONHANGADMIN_FAILURE:
            return {
                ...state,
                listDonHang: [],
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: action.payload,
                so_luong_don_hang: []
            }


        case types.PAGINATION_DONHANGADMIN_SUCCESS:
            return {
                ...state,
                listDonHang: action.payload.listDonHang,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                activePage: action.payload.activePage,
                totalPage: action.payload.totalPage,
                so_luong_don_hang: action.payload.so_luong_don_hang
            }


        case types.DELETE_DONHANGADMIN_SUCCESS:

        case types.UPDATE_DONHANGADMIN_SUCCESS:
            return {
                ...state,
                listDonHang: [],
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                so_luong_don_hang: []
            }


        case types.SEARCH_DONHANGADMIN_SUCCESS:
            return {
                ...state,
                listDonHang: [],
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                textSearch:action.payload.textSearch,
                trang_thai:action.payload.trang_thai,
                so_luong_don_hang: []
            }


        default:
            return state
    }
}
