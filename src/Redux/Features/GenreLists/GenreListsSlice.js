import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getMovies } from "../../../Tools/MoviesApi";
const initialState = {
    lists: [],
    isLoading: false,
    isError: "",
    error: ""
}
export const fetchGenreLists = createAsyncThunk("genreLists/getMovies", async (queryString) => {
    const data = await getMovies(queryString);
    console.log(data,"genreLists")
    return data;
})

const genreListsSlice = createSlice({
    name: "genreLists",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchGenreLists.pending, (state) => {
                state.lists = [],
                    state.isLoading = true,
                    state.isError = false,
                    state.error = ""
            })
            builder.addCase(fetchGenreLists.fulfilled, (state, action) => {
                state.lists = action.payload,
                    state.isLoading = false,
                    state.isError = false,
                    state.error = ""
            })
            builder.addCase(fetchGenreLists.rejected, (state, action) => {
                state.lists = [],
                    state.isLoading = false,
                    state.isError = true,
                    state.error = action.error;
            })
    }
})

export default genreListsSlice.reducer;