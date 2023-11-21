import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { baseAxios } from "../../../Tools/BaseAxios";
import { fetchPopular } from "../Movies/PopularSlice";

const initialState = {
    genres: [],
    isLoading: false,
    isError: "",
    error: "",
    genresData: []
}
export const fetchGenresKeyword = createAsyncThunk("Genres/baseAxios", async (api) => {
    const modifiedApi = api.map(item => item).join(",");
    const data = await baseAxios.get(`/discover/movie?with_genres=${modifiedApi}`);
    return data.data.results;
});

const genresKeywordSlice = createSlice({
    name: "Genres",
    initialState,
    reducers: {
        addGenres: (state, action) => {
            state.genres.push(action.payload)
        },
        removeGenres: (state, action) => {
            const restGenres = state.genres.filter(item => item !== action.payload)
            state.genres = restGenres
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGenresKeyword.pending, (state) => {
            state.genresData = [],
                state.isLoading = true,
                state.isError = false,
                state.error = ""
        })
        builder.addCase(fetchGenresKeyword.fulfilled, (state, action) => {
            state.genresData = action.payload;
            state.isLoading = false,
                state.isError = false,
                state.error = ""
        })
        builder.addCase(fetchGenresKeyword.rejected, (state, action) => {
            state.genresData = [],
                state.isLoading = false,
                state.isError = true,
                state.error = action.error;
        })
    }
})

export const { addGenres, removeGenres } = genresKeywordSlice.actions;
export default genresKeywordSlice.reducer;
