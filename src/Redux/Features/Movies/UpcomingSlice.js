import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getMovies } from "../../../Tools/getMovies";
const initialState = {
    movies: [],
    isLoading: false,
    isError: "",
    error: ""
}
export const fetchUpcoming = createAsyncThunk("Upcoming/getMovies", async (queryString) => {
    const data = await getMovies(queryString);
    return data.results;
})

const UpcomingSlice = createSlice({
    name: "Upcoming",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUpcoming.pending, (state) => {
            state.movies = [],
                state.isLoading = true,
                state.isError = false,
                state.error = ""
        })
        builder.addCase(fetchUpcoming.fulfilled, (state, action) => {
            state.movies = action.payload,
                state.isLoading = false,
                state.isError = false,
                state.error = ""
        })
        builder.addCase(fetchUpcoming.rejected, (state, action) => {
            state.movies = [],
                state.isLoading = false,
                state.isError = true,
                state.error = action.error;
        })
    }
})

export default UpcomingSlice.reducer;