import { fetchPopular } from "../../Redux/Features/Movies/PopularSlice"
import { addGenres, removeGenres } from "../../Redux/Features/GenresKeyword/GenreKeywordSlice.js";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

function Genres() {    
  const dispatch = useDispatch();
  const { lists} = useSelector((state) => state.genreListsReducer);
  const { genres } = useSelector((state) => state.genresKeywordReducer);


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
  )
}

export default Genres;