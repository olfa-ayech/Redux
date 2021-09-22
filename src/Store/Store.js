import { createStore } from "redux";
import FilterReducer from "../Reducers/FilterReducer";
import TodoReducer from "../Reducers/TodoReducer";
import rootReducers from "../Reducers";
  const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
 export default store