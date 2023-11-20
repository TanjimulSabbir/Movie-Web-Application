import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchGenreLists} from "../../Redux/Features/GenreLists/GenreListsSlice.js"
import Loading from "../Shared/Loading";

function Sidebar() {
    const dispatch = useDispatch();
    const { lists, isLoading, isError, error } = useSelector((state) => state.genreListsReducer);

console.log(lists)

    useEffect(() => {
        dispatch(fetchGenreLists())
    },[dispatch])


    if (isLoading) return <Loading />
    if (isError) return <p>{error.message}</p>
    if (lists?.length < 0) {
        return <p>Lists Not found</p>
    }
    return (
        <aside>
            <div className="sidebar-items">
                <div className="sidebar-content">
                    <h4>Sort</h4>
                    <select name="sort" id="lws-sort" className="w-full max-w-[150px] border-2 rounded-md text-gray-500">
                        <option value="">Popular</option>
                        <option value="newest">Newest</option>
                        <option value="most_liked">Most Liked</option>
                        <option value="most_liked">Most Liked</option>
                        <option value="most_liked">Most Liked</option>
                        <option value="most_liked">Most Liked</option>
                    </select>
                </div>
                <div className="sidebar-content">
                    <h4>Filter</h4>
                    <div className="radio-group">
                        {/* <!-- handle filter on button click --> */}
                        {/* <div>
                            <input type="radio" name="filter" id="lws-all" checked className="radio" />
                            <label htmlFor="lws-all">All</label>
                        </div> */}
                       {
                        lists?.map(list=>{
                            return(
                                <div key={list.id}>
                                <input type="radio" name="filter" id={list.id} checked className="radio" />
                                <label htmlFor={list.id}>{list.name}</label>
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