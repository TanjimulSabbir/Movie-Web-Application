import AxiosInstance from "./Axios"

export const getPopularMovies = async (queryString) => {
    const response = await AxiosInstance.get(`/${queryString}`)
    return response.data;
}
