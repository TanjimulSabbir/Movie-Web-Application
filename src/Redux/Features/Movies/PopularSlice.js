import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getMovies } from "../../../Tools/getMovies";
import toast from "react-hot-toast";
const initialState = {
    movies: [],
    isLoading: false,
    isError: "",
    error: ""
}
export const fetchPopular = createAsyncThunk("Popular/getMovies", async (queryString = "popular") => {
    const data = await getMovies(queryString);
    return data.results;
})

const PopularSlice = createSlice({
    name: "Popular",
    initialState,
    reducers: {
        addMovies: (state, action) => {
            console.log(action.payload,"AddMovies from Sidebar Generes")
            state.movies.push(action.payload)
        }
    },
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
export const { addMovies } = PopularSlice.actions;
export default PopularSlice.reducer;