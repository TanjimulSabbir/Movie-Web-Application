import { apiSlice } from "./apiSlice";



export const movieApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPopular: builder.query({
            query: () => {
                return {
                    url: "/users",
                    method: "GET"
                };
            },

        }),

    })
})

export const { useGetPopularQuery } = movieApi;