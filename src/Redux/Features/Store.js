import { configureStore } from "@reduxjs/toolkit";
import MoviesSlice from "./Movies/MoviesSlice";

const store = configureStore({
    reducer: { moviesReducer: MoviesSlice }
})

export default store;