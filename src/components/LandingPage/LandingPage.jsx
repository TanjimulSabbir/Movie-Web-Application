import Sidebar from "./Sidebar";
import { useDispatch, useSelector, } from "react-redux";
import Loading from "../Shared/Loading";
import Movie from "./Movie";
import { useEffect } from "react";
import { fetchMovies } from "../../Redux/Features/Movies/MoviesSlice";

export default function LandingPage() {
    const dispatch = useDispatch();
    const { movies, isLoading, isError, error } = useSelector((state) => state.moviesReducer);

    useEffect(() => {
        dispatch(fetchMovies("now_playing"))
    },[dispatch])

    let content;
    if (isLoading) content= <Loading />
    if (isLoading && isError) content= <p>Network Error</p>
    if (!isLoading && isError) content= <p>{error}</p>

    if (!isLoading && !isError && movies?.length === 0) {
        content = <p>No videos found!</p>;
    }
    if (!isLoading && !isError && movies?.length > 0) {
        content = movies.map(data => <Movie key={data.id} data={data}></Movie>)
    }

    return (
        <section className="wrapper">
            <Sidebar />
            <main className="post-container" id="lws-postContainer">
                {content}
            </main >
        </section>
    )
}
