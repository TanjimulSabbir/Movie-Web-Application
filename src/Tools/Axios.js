import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "95735e862c8d7543ceee5364740d5db4"
    }
});

export default AxiosInstance;
