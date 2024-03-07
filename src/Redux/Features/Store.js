import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./Api/apiSlice";



const store = configureStore({
    reducer: { [apiSlice.reducerPath]: apiSlice.reducer },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware)

})

export default store;