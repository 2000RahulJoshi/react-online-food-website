import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cart";

const reducer = combineReducers({
    cart : cartReducer
})

export default reducer;