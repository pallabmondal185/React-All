import { configureStore } from "@reduxjs/toolkit";
import { pracReducer } from "./PracSlice";

export const Store=configureStore({
    reducer:{
        pracReducer
    }
})