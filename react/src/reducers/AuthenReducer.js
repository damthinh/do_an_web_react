import * as types from '../constants'

const STATE = {
    isFetching: false,
    dataFetched: false,
    error: false,
    errorMessage: null,
}

export default (state = STATE, action) => {
    switch (action.type) {

        case types.LOGIN_USER_REQUEST:
        case types.DANGKY_USER_REQUEST:
            case types.QUENMK_USER_REQUEST:
            return {
                ...state,

                isFetching: true,
                dataFetched: false,
                error: false,
                errorMessage: null,
            }

        case types.LOGIN_USER_SUCCESS:
        case types.DANGKY_USER_SUCCESS:
            case types.QUENMK_USER_SUCCESS:
            return {
                ...state,

                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }

        case types.LOGIN_USER_FAILURE:
        case types.DANGKY_USER_FAILURE:
            case types.QUENMK_USER_FAILURE:
            return {
                ...state,

                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: action.payload,
            }
        default:
            return state
    }
}
