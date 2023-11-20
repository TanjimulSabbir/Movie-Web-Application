import { configureStore } from "@reduxjs/toolkit";
import MoviesSlice from "./Movies/MoviesSlice";
import GenreListsSlice from "./GenreLists/GenreListsSlice";


const store = configureStore({
    reducer: { moviesReducer: MoviesSlice, genreListsReducer:GenreListsSlice }
})

export default store;