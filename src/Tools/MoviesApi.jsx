import AxiosInstance from "./Axios"

export const getMovies = async (queryString) => {
    console.log(queryString,"querySring from GetMoves")
    const response = await AxiosInstance.get(`/${queryString}`)
    return response.data;
}
