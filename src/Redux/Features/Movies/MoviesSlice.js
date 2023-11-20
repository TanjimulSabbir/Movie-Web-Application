import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getMovies } from "../../../Tools/MoviesApi";
const initialState = {
    movies: [],
    isLoading: false,
    isError: "",
    error: ""
}
export const fetchMovies = createAsyncThunk("movies/getMovies", async (queryString) => {
    const data = await getMovies(queryString);
    console.log(data.results,"Results")
    return data.results;
})

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
                state.movies = [],
                    state.isLoading = true,
                    state.isError = false,
                    state.error = ""
            })
            builder.addCase(fetchMovies.fulfilled, (state, action) => {
                state.movies = action.payload,
                    state.isLoading = false,
                    state.isError = false,
                    state.error = ""
            })
            builder.addCase(fetchMovies.rejected, (state, action) => {
                state.movies = [],
                    state.isLoading = false,
                    state.isError = true,
                    state.error = action.error;
            })
    }
})

export default moviesSlice.reducer;