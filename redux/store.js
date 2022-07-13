import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice';

const store = configureStore({
    reducer: {
        todoReducer: todoReducer,
    }
})

export default store;