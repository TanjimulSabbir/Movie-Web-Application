import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseAxios } from "../../../Tools/BaseAxios";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: baseAxios,
        prepareHeaders: async (headers, { getState, endpoint }) => {
            const token = getState().auth?.accessToken;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`)
            }
            return headers;
        }
    }),
    tagTypes: [],
    endpoints: (builder) => ({})
});