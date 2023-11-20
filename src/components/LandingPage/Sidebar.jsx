import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenreLists } from "../../Redux/Features/GenreLists/GenreListsSlice.js"
import Loading from "../Shared/Loading";

function Sidebar() {
    const dispatch = useDispatch();
    const { lists, isLoading, isError, error } = useSelector((state) => state.genreListsReducer);

    console.log(lists)

    useEffect(() => {
        dispatch(fetchGenreLists())
    }, [dispatch])


    // if (isLoading) return <Loading />
    if (isError) return <p>{error.message}</p>
    if (lists?.length < 0) {
        return <p>Genre not found</p>
    }
    return (
        <aside>
            <div className="sidebar-items">
                <div className="sidebar-content">
                    <h4>Sort</h4>
                    <select name="sort" id="lws-sort" className="w-full border-2 rounded-md text-gray-200">
                        <option value="">Popular</option>
                        <option value="newest">Now Playing</option>
                        <option value="most_liked">Upcoming</option>
                        <option value="most_liked">Top Rated</option>
                    </select>
                </div>
                <div className="sidebar-content">
                    <h4>Genres</h4>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-3 items-center">
                        {
                            lists?.map(list => {
                                return (
                                    <div key={list.id} className="cursor-pointer">
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