import { configureStore } from "@reduxjs/toolkit";
import  speedReducer  from "./speed/speedSlice";

export const store=configureStore({
    reducer:{
        speed:speedReducer,
    }
})