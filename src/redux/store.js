import {configureStore} from "@reduxjs/toolkit";
import exchangerReducer from "./exchangerReducer";

export const store = configureStore({reducer:{exchangerReducer}})
