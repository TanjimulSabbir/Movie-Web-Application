import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseURL: "https://jsonplaceholder.typicode.com",
    }),
    tagTypes: [],
    endpoints: (builder) => ({})
});