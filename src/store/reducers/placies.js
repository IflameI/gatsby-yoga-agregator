const INITIAL_STATE = {
  placiesItems: [],
  currentArea: "ekb",
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_PLACIES":
      return { ...state, placiesItems: action.payload }
    case "SET_CURRENT_AREA":
      return { ...state, currentArea: action.payload }
    default:
      return state
  }
}
