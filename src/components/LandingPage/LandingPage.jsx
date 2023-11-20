import Sidebar from "./Sidebar";
import { useDispatch, useSelector, } from "react-redux";
import Loading from "../Shared/Loading";
import Movie from "./movie";
import { useEffect } from "react";
import { fetchMovies } from "../../Redux/Features/Movies/MoviesSlice";

export default function LandingPage() {
    const dispatch = useDispatch();
    const { videos, isLoading, isError, error } = useSelector((state) => state.moviesReducer);

    useEffect(() => {
        dispatch(fetchMovies("popular"))
    })


    let content;
    if (isLoading) <Loading />
    if (isLoading && isError) return <div>Network Error</div>
    if (isError) return <p>{error}</p>
    if (videos.length > 0) {
        content = videos.map(movie => <Movie key={movie.id} movieData={movie}></Movie>)
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
