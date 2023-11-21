import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getMovies } from "../../../Tools/getMovies";

const initialState = {
    movie: {},
    isLoading: false,
    isError: "",
    error: ""
}
export const fetchDetailsMovie = createAsyncThunk("DetailsMovie/getDetailsMovie", async (queryString) => {
    const data = await getMovies(`movie/${queryString}?`);
    return data;
})

const detailsSlice = createSlice({
    name: "DetailsMovie",
    initialState,
    reducers: {
        addMovie: (state, action) => {
            state.movie = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDetailsMovie.pending, (state) => {
            state.movie = [],
                state.isLoading = true,
                state.isError = false,
                state.error = ""
        })
        builder.addCase(fetchDetailsMovie.fulfilled, (state, action) => {
            state.movie = action.payload,
                state.isLoading = false,
                state.isError = false,
                state.error = ""
        })
        builder.addCase(fetchDetailsMovie.rejected, (state, action) => {
            state.movie = [],
                state.isLoading = false,
                state.isError = true,
                state.error = action.error;
        })
    }
})
export const { addMovie } = detailsSlice.actions;
export default detailsSlice.reducer;