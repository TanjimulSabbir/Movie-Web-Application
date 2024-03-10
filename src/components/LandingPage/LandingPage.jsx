import Sidebar from "./Sidebar";
import { useDispatch, useSelector, } from "react-redux";
import Loading from "../Shared/Loading";
import Movie from "./Movie";
import { useEffect } from "react";
import { fetchPopular } from "../../Redux/Features/Movies/PopularSlice";
import Search from "./Search";
import Toggle from "../../accessories/Toggle"
import { useGetPopularQuery } from "../../Redux/Features/Api/apiSlice";



export default function LandingPage() {
    const { data: PopularMovies, isLoading, isError, error } = useGetPopularQuery();
    console.log({ PopularMovies, error }, "popular Movies")
    const dispatch = useDispatch();
    // const { movies, isLoading, isError, error } = useSelector((state) => state.popularReducer);

    return "This is new features"
    let content;
    if (isLoading) content = <Loading />
    if (isLoading && isError) content = <p>Network Error</p>
    if (!isLoading && isError) content = <p>{error.message}</p>

    if (!isLoading && !isError && movies?.length === 0) {
        content = <p>No videos found!</p>;
    }
    if (!isLoading && !isError && movies?.length > 0) {
        content = movies.map(data => <Movie key={data.id} data={data}></Movie>)
    }
    const ToggleData = [{ title: "Today", "path": "" }, { title: "This week", path: "" }]
    return (
        <div>
            <Search />
            <section className="min-h-screen">
                {/* <Sidebar /> */}

                <Toggle data={ToggleData} type="Trending" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center gap-5">
                    {content}
                </div>
            </section>
        </div>
    )
}
