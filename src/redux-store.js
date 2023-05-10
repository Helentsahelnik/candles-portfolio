import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import cahdlesReducer from "./candlesReducer";

let reducers = combineReducers({
        candlesPage: cahdlesReducer
    }
)

const store = createStore(reducers, applyMiddleware());



export default store;