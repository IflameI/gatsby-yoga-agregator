import { createStore, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import placies from "./reducers/placies"

const store = createStore(
  combineReducers({
    placies,
  }),
  composeWithDevTools()
)

export default store
