import { configureStore } from "@reduxjs/toolkit";
import GenreListsSlice from "./GenreLists/GenreListsSlice";
import PopularSlice from "./Movies/PopularSlice";
import genresKeywordSlice from "./GenresKeyword/GenreKeywordSlice";
import detailsSlice from "./Details/DetailsSlice";



const store = configureStore({
    reducer: { popularReducer: PopularSlice, genreListsReducer: GenreListsSlice, genresKeywordReducer: genresKeywordSlice, detailsMovieReducer: detailsSlice }
})

export default store;