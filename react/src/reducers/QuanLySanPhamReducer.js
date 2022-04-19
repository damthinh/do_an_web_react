import * as types from '../constants'
const QuanLyHangState = {
    listSanPham: [],
    isFetching: false,
    dataFetched: false,
    error: false,
    errorMessage: null,
    activePage: 0,
    totalPage: 0,
    textSearch: ''
}

export default (state = QuanLyHangState, actions) => {
    switch (actions.type) {

        case types.PAGINATION_SANPHAM_REQUEST:
        case types.SEARCH_SANPHAM_REQUEST:
        case types.ADD_SANPHAM_REQUEST:
        case types.DELETE_SANPHAM_REQUEST:
        case types.UPDATE_SANPHAM_REQUEST:
            return {
                ...state,
                isFetching: true,
                dataFetched: false,
                error: false,
                errorMessage: null
            }
        case types.PAGINATION_SANPHAM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: false,
                errorMessage: null,
                listSanPham: actions.payload.listSanPham,
                activePage: actions.payload.activePage,
                totalPage: actions.payload.totalPage
            }
        case types.PAGINATION_SANPHAM_FAILURE:
        case types.SEARCH_SANPHAM_FAILURE:
        case types.ADD_SANPHAM_FAILURE:
        case types.DELETE_SANPHAM_FAILURE:
        case types.UPDATE_SANPHAM_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: actions.payload,
                listSanPham: [],
                activePage: 0,
                totalPage: 0
            }

        case types.SEARCH_SANPHAM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                textSearch: actions.payload.textSearch
            }
        case types.ADD_SANPHAM_SUCCESS:
        case types.DELETE_SANPHAM_SUCCESS:
        case types.UPDATE_SANPHAM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listSanPham: actions.payload.listSanPham,
            }

        default:
            return state
    }
}
