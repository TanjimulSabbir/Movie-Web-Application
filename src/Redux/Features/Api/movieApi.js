import { apiSlice } from "./apiSlice";

const movieApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        popular: builder.query({
            query: () => {
                return {
                    url: "movie/popular"
                }
            }
        }),
        thisWeek: builder.query({
            query: () => ({ url: "/movie/" })
        })
    })
})

export const { usePopularQuery, useThisWeekQuery } = movieApi;