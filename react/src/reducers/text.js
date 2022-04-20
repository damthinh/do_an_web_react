const initialState = {
    list:[],
    isFeching:false,
    dataFeched:false,
    error:false,
    errorMessage:null

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case first:
    return { ...state, ...payload }

  default:
    return state
  }
}
