import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getMovies } from "../../../Tools/getMovies";
const initialState = {
    movies: [],
    isLoading: false,
    isError: "",
    error: ""
}
export const fetchPopular = createAsyncThunk("Popular/getMovies", async (queryString) => {
    console.log(queryString,"from fetchMovies")
    const data = await getMovies(queryString);
    return data.results;
})

const PopularSlice = createSlice({
    name: "Popular",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPopular.pending, (state) => {
                state.movies = [],
                    state.isLoading = true,
                    state.isError = false,
                    state.error = ""
            })
            builder.addCase(fetchPopular.fulfilled, (state, action) => {
                state.movies = action.payload,
                    state.isLoading = false,
                    state.isError = false,
                    state.error = ""
            })
            builder.addCase(fetchPopular.rejected, (state, action) => {
                state.movies = [],
                    state.isLoading = false,
                    state.isError = true,
                    state.error = action.error;
            })
    }
})

export default PopularSlice.reducer;