import { configureStore } from "@reduxjs/toolkit";
import GenreListsSlice from "./GenreLists/GenreListsSlice";
import PopularSlice from "./Movies/PopularSlice";


const store = configureStore({
    reducer: { popularReducer: PopularSlice, genreListsReducer:GenreListsSlice }
})

export default store;