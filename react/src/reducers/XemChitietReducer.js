import * as types from '../constants'
const initialState = {

    SanPham: {},
    isFetching: false,
    dataFetched: false,
    error: false,
    errorMessage: null,
}

export default (state = initialState, action) => {
    switch (action.type) {

        case types.XEMCHITIET_SANPHAM_REQUEST:
        case types.DATHANG_REQUEST:
            return {
                ...state,
                isFetching: true,
                dataFetched: false,
                error: false,
                errorMessage: null,
            }

        case types.XEMCHITIET_SANPHAM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                SanPham: action.payload.SanPham
            }

        case types.XEMCHITIET_SANPHAM_FAILURE:
        case types.DATHANG_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: false,
                errorMessage: action.payload,
            }
        case types.DATHANG_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: false,
                errorMessage: null,
            }

        default:
            return state
    }
}
