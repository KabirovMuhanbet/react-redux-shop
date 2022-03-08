import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

export const reducers = combineReducers({
   productReducer,
   selectedProductReducer
})