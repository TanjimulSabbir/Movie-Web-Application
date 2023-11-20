import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
const initialState = {
    genres: [],
    isLoading: false,
    isError: "",
    error: ""
}
export const fetchGenresKeyword = createAsyncThunk("Genres/getMovies", async () => {
    const data = await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=95735e862c8d7543ceee5364740d5db4");
    return data.data;
})

const genresKeywordSlice = createSlice({
    name: "Genres",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchGenresKeyword.pending, (state) => {
                state.lists = [],
                    state.isLoading = true,
                    state.isError = false,
                    state.error = ""
            })
            builder.addCase(fetchGenresKeyword.fulfilled, (state, action) => {
                state.lists = action.payload,
                    state.isLoading = false,
                    state.isError = false,
                    state.error = ""
            })
            builder.addCase(fetchGenresKeyword.rejected, (state, action) => {
                state.lists = [],
                    state.isLoading = false,
                    state.isError = true,
                    state.error = action.error;
            })
    }
})

export default genresKeywordSlice.reducer;