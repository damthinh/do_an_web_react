import * as types from '../constants'
const initialState = {
    listGioHang: [],
    listDiaChi:[],
    isFetching: false,
    dataFetched: false,
    error: false,
    errorMessage: null,
    activePage: 1,
    totalPage: 1,
}

export default (state = initialState, action) => {
    switch (action.type) {

        case types.PAGINATION_GIOHANG_REQUEST:
        case types.DELETE_GIOHANG_REQUEST:
        case types.THANHTOAN_GIOHANG_REQUEST:
            case types.UPDATE_GIOHANG_REQUEST:

            return {
                ...state,
                listGioHang: [],
                listDiaChi:[],
                isFetching: true,
                dataFetched: false,
                error: false,
                errorMessage: null,
                activePage: 1,
                totalPage: 1,
            }
        case types.PAGINATION_GIOHANG_SUCCESS:

            return {
                ...state,
                listGioHang: action.payload.listGioHang,
                listDiaChi:action.payload.listDiaChi,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                activePage: action.payload.activePage,
                totalPage: action.payload.totalPage,
            }
        case types.DELETE_GIOHANG_SUCCESS:
        case types.THANHTOAN_GIOHANG_SUCCESS:
            
            case types.UPDATE_GIOHANG_SUCCESS:
            return {
                ...state,
                listGioHang: [],
                listDiaChi:[],
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                activePage: 1,
                totalPage: 1,
            }


        case types.PAGINATION_GIOHANG_FAILURE:
        case types.DELETE_GIOHANG_FAILURE:
        case types.THANHTOAN_GIOHANG_FAILURE:
            
            case types.UPDATE_GIOHANG_FAILURE:

            return {
                ...state,
                listGioHang: [],
                listDiaChi:[],
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: action.payload,
                activePage: 1,
                totalPage: 1,
            }
        default:
            return state
    }
}
