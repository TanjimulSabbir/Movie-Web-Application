import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getMovies } from "../../../Tools/MoviesApi";
const initialState = {
    movies: [],
    isLoading: false,
    isError: "",
    error: ""
}
export const fetchTopRated = createAsyncThunk("TopRated/getMovies", async (queryString) => {
    const data = await getMovies(queryString);
    return data.results;
})

const TopRatedSlice = createSlice({
    name: "TopRated",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTopRated.pending, (state) => {
                state.movies = [],
                    state.isLoading = true,
                    state.isError = false,
                    state.error = ""
            })
            builder.addCase(fetchTopRated.fulfilled, (state, action) => {
                state.movies = action.payload,
                    state.isLoading = false,
                    state.isError = false,
                    state.error = ""
            })
            builder.addCase(fetchTopRated.rejected, (state, action) => {
                state.movies = [],
                    state.isLoading = false,
                    state.isError = true,
                    state.error = action.error;
            })
    }
})

export default TopRatedSlice.reducer;