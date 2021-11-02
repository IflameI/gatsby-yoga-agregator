const INITIAL_STATE = {
  placiesItems: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_PLACIES":
      return { ...state, placiesItems: action.payload }
    default:
      return state
  }
}
