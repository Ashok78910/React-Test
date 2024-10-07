import { configureStore } from "@reduxjs/toolkit";
import {apiReducer} from "./Reducers/Supplier"
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const store =  configureStore({
   reducer : apiReducer,
   middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store;