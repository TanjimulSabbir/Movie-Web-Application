import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getMovies } from "../../../Tools/getMovies";
const initialState = {
    movies: [],
    isLoading: false,
    isError: "",
    error: ""
}
export const fetchNowPlaying = createAsyncThunk("NowPlaying/getMovies", async (queryString) => {
    const data = await getMovies(queryString);
    return data.results;
})

const NowPlayingSlice = createSlice({
    name: "NowPlaying",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchNowPlaying.pending, (state) => {
                state.movies = [],
                    state.isLoading = true,
                    state.isError = false,
                    state.error = ""
            })
            builder.addCase(fetchNowPlaying.fulfilled, (state, action) => {
                state.movies = action.payload,
                    state.isLoading = false,
                    state.isError = false,
                    state.error = ""
            })
            builder.addCase(fetchNowPlaying.rejected, (state, action) => {
                state.movies = [],
                    state.isLoading = false,
                    state.isError = true,
                    state.error = action.error;
            })
    }
})

export default NowPlayingSlice.reducer;