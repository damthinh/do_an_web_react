import * as types from '../constants'
const initialState = {

    listDiaChi: [],
    user: {},
    isFeching: false,
    dataFeched: false,
    error: false,
    errorMessage: null
}

export default (state = initialState, action) => {
    switch (action.type) {

        case types.GET_USER_REQUEST:
        case types.DELETE_DIACHI_REQUEST:
        case types.ADD_DIACHI_REQUEST:
        case types.UPDATE_DIACHI_REQUEST:
            return {
                ...state,
                listDiaChi: [],
                user: {},
                isFeching: true,
                dataFeched: false,
                error: false,
                errorMessage: null

            }
        case types.GET_USER_SUCCESS:
            return {
                ...state,
                listDiaChi: action.payload.listDiaChi,
                user: action.payload.user,
                isFeching: true,
                dataFeched: false,
                error: false,
                errorMessage: null

            }

        case types.GET_USER_FAILURE:
        case types.DELETE_DIACHI_FAILURE:
        case types.ADD_DIACHI_FAILURE:
        case types.UPDATE_DIACHI_FAILURE:
            return {
                ...state,
                listDiaChi: [],
                user: {},
                isFeching: true,
                dataFeched: false,
                error: false,
                errorMessage: null

            }
        case types.DELETE_DIACHI_SUCCESS:
        case types.ADD_DIACHI_SUCCESS:
        case types.UPDATE_DIACHI_SUCCESS:
            return {
                ...state,
                listDiaChi: [],
                user: {},
                isFeching: true,
                dataFeched: false,
                error: false,
                errorMessage: null

            }

        default:
            return state
    }
}
