import { configureStore } from "@reduxjs/toolkit";
import cakeSice  from "../cake/cakeSlice";
import iceCreamSlice from "../iceCream/iceCream";
import {createLogger} from "redux-logger";
// const configureStore = require('@reduxjs/toolkit').configureStore

const store = configureStore({
    reducer:{
        cake:cakeSice.reducer,
        icecream : iceCreamSlice.reducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger())
})
export default store