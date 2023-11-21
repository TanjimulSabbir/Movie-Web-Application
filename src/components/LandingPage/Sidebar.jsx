import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenreLists } from "../../Redux/Features/GenreLists/GenreListsSlice.js"
import { addMovies, fetchPopular } from "../../Redux/Features/Movies/PopularSlice.js";
import { addGenres, fetchGenresKeyword, removeGenres } from "../../Redux/Features/GenresKeyword/GenreKeywordSlice.js";
import toast from "react-hot-toast";

function Sidebar() {
    const dispatch = useDispatch();
    const { lists, isLoading, isError, error } = useSelector((state) => state.genreListsReducer);
    const { genres, genresData } = useSelector((state) => state.genresKeywordReducer);

    console.log(lists)

    useEffect(() => {
        dispatch(fetchGenreLists())
    }, [dispatch])

    if (isError) return <p>{error.message}</p>
    if (lists?.length < 0) {
        return <p>Genre not found</p>
    }

    const handleChoice = (choice) => {
        dispatch(fetchPopular({ queryString: choice, isMovie: "movie" }))
    }
    const handleGenre = (genreId) => {
        if (genres.includes(genreId)) {
            dispatch(removeGenres(genreId))
        } else {
            if (genres.length === 4) return toast.success("you can search only 4 genres by one")
            dispatch(addGenres(genreId))
        }
    }
    const handleSearchByGenres = async (genres) => {
        const genreApi = genres.map(item => item).join(",")
        dispatch(fetchPopular({ queryString: `discover/movie?with_genres=${genreApi}`, isMovie: "" }))

    }
    return (
        <aside>
            <div className="sidebar-items">
                <div className="sidebar-content">
                    <h4>Sort</h4>
                    <select onChange={(e) => handleChoice(e.target.value)} name="sort" id="lws-sort" className="w-full border-2 rounded-md text-gray-200">
                        <option defaultChecked value="popular">Popular</option>
                        <option value="now_playing">Now Playing</option>
                        <option value="upcoming">Upcoming</option>
                        <option value="top_rated">Top Rated</option>
                    </select>
                </div>
                <div className="sidebar-content">
                    <h4 className="text-white my-4">Genres</h4>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-3 items-center">
                        {
                            lists?.map(list => {
                                return (
                                    <div onClick={() => handleGenre(list.id)} key={list.id} className={`cursor-pointer ${genres.includes(list.id) ? "bg-black font-bold rounded-full text-center" : ""}`}>
                                        <span className="lws-badge">{list.name} </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <p onClick={() => handleSearchByGenres(genres)} className="btn btn-outline mt-10 cursor-pointer">Search By Genres</p>
                </div>
            </div>
        </aside>

    )
}

export default Sidebar;