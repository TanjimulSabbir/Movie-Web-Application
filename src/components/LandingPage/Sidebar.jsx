import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenreLists } from "../../Redux/Features/GenreLists/GenreListsSlice.js"

import Genres from "./Genres.jsx";
import { fetchPopular } from "../../Redux/Features/Movies/PopularSlice.js";

function Sidebar() {
    const dispatch = useDispatch();
    const { lists, isError, error } = useSelector((state) => state.genreListsReducer);
    const { genres, genresData } = useSelector((state) => state.genresKeywordReducer);
    const renderError = "flex items-center justify-center text-red-600 text-2xl";

    useEffect(() => {
        dispatch(fetchGenreLists())
    }, [dispatch])
    
    if (isError) return <p className={renderError}>{error.message}</p>
    if (lists?.length < 0) {
        return <p className={renderError}>Genres not found</p>
    }

    const handleChoice = (choice) => {
        dispatch(fetchPopular({ queryString: choice, isMovie: "movie" }))
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
                <Genres />
            </div>
        </aside>

    )
}

export default Sidebar;