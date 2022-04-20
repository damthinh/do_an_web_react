import * as types from "../constants"

const initialState = {

    listSanPham: [],
    isFetching: false,
    dataFetched: false,
    error: false,
    errorMessage: null,
    activePage: 0,
    totalPage: 0,
    textSearch: ''
}

export default (state = initialState, actions) => {
    switch (actions.type) {
        case types.PAGINATION_SANPHAMUSER_REQUEST:
        case types.SEARCH_SANPHAMUSER_REQUEST:
            return {
                ...state,
                isFetching: true,
                dataFetched: false,
                error: false,
                errorMessage: null,
                listSanPham: [],
            }
        case types.PAGINATION_SANPHAMUSER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listSanPham: actions.payload.listSanPham,
                activePage: actions.payload.activePage,
                totalPage: actions.payload.totalPage,
            }
        case types.PAGINATION_SANPHAMUSER_FAILURE:
        case types.SEARCH_SANPHAMUSER_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: actions.payload,
                listSanPham: [],
            }
        case types.SEARCH_SANPHAMUSER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                textSearch: actions.payload.textSearch
            }
        default:
            return state
    }
}
