import AxiosInstance from "./Axios"

export const getMovies = async (queryString) => {
    console.log(queryString,"from getMovies");
    const response = await AxiosInstance.get(`/${queryString}`)
    return response.data;
}
