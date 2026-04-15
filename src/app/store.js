import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasksList"

export const store = configureStore({
    reducer: {
        task: taskReducer,
    },
})