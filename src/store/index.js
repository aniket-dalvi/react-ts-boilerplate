import { combineReducers, createStore } from "redux";
import { HomeReducer } from "../store/reducer/HomeReducer";

const rootReducer = combineReducers({
  home: HomeReducer,
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
