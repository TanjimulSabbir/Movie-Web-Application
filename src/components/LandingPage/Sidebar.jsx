import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenreLists } from "../../Redux/Features/GenreLists/GenreListsSlice.js"
import { fetchPopular } from "../../Redux/Features/Movies/PopularSlice.js";
import { addGenres, fetchGenresKeyword, removeGenres } from "../../Redux/Features/GenresKeyword/GenreKeywordSlice.js";

function Sidebar() {
    const dispatch = useDispatch();
    const { lists, isLoading, isError, error } = useSelector((state) => state.genreListsReducer);
    const { genres, genresData } = useSelector((state) => state.genresKeywordReducer)

    console.log(lists)

    useEffect(() => {
        dispatch(fetchGenreLists())
    }, [dispatch])

    if (isError) return <p>{error.message}</p>
    if (lists?.length < 0) {
        return <p>Genre not found</p>
    }

    const handleChoice = (choice) => {
        dispatch(fetchPopular(choice))
    }
    const handleGenre = (genreId) => {
        if (genres.includes(genreId)) {
            console.log("Genre Remove Clicked")
            dispatch(removeGenres(genreId))
            dispatch(fetchGenresKeyword(genres))
        } else {
            dispatch(addGenres(genreId))
            dispatch(fetchGenresKeyword(genres))
        }

        console.log(genreId, "genreId")
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
                    <h4>Genres</h4>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-3 items-center">
                        {
                            lists?.map(list => {
                                return (
                                    <div onClick={() => handleGenre(list.id)} key={list.id} className={`cursor-pointer ${genres.includes(list.id) ? "bg-black font-bold rounded-full text-center":""}`}>
                                        <span className="lws-badge">{list.name} </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </aside>

    )
}

export default Sidebar;