import AxiosInstance from "./Axios"

export const getMovies = async (queryString) => {
    const response = await AxiosInstance.get(`/${queryString}`)
    return response.data;
}
