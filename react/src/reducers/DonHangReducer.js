import * as types from '../constants'
const initialState = {

    listDonHang: [],
    isFetching: false,
    dataFetched: false,
    error: false,
    errorMessage: null,
    activePage: 0,
    totalPage: 0,
}

export default (state = initialState, action) => {
    switch (action.type) {

        case types.PAGINATION_DONHANGUSER_REQUEST:
        case types.HUY_DONHANGUSER_REQUEST:
        case types.XEMCHITIET_DONHANGUSER_REQUEST:

            return {
                ...state,
                listDonHang: [],
                isFetching: true,
                dataFetched: false,
                error: false,
                errorMessage: null,

            }

        case types.PAGINATION_DONHANGUSER_SUCCESS:

            return {
                ...state,
                listDonHang: action.payload.listDonHang,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                activePage: action.payload.activePage,
                totalPage: action.payload.totalPage,
            }

        case types.PAGINATION_DONHANGUSER_FAILURE:
        case types.HUY_DONHANGUSER_FAILURE:
        case types.XEMCHITIET_DONHANGUSER_FAILURE:

            return {
                ...state,
                listDonHang: [],
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: action.payload,
            }


        case types.HUY_DONHANGUSER_SUCCESS:
        case types.XEMCHITIET_DONHANGUSER_SUCCESS:

            return {
                ...state,
                listDonHang: [],
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }

        default:
            return state
    }
}
