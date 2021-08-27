import sidebarReducer from "./sidebar-reducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    sidebar: sidebarReducer
})

let store = createStore(reducers);

window.store = store;

export default store;