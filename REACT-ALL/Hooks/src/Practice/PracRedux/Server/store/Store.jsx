import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../reducer/UserSlice";


export const Store=configureStore({
    reducer:{
        user:userReducer
    }
})