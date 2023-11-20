import { configureStore } from "@reduxjs/toolkit";
import GenreListsSlice from "./GenreLists/GenreListsSlice";
import PopularSlice from "./Movies/PopularSlice";
import genresKeywordSlice from "./GenresKeyword/GenreKeywordSlice";



const store = configureStore({
    reducer: { popularReducer: PopularSlice, genreListsReducer: GenreListsSlice, genresKeywordReducer: genresKeywordSlice }
})

export default store;