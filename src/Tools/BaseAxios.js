import axios from "axios";

export const baseAxios = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "95735e862c8d7543ceee5364740d5db4"
    }
})