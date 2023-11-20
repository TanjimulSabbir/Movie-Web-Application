import { Link } from "react-router-dom";

export default function Movie({ data }) {    
    const { adult, genres, id, original_title, overview, popularity, poster_path, production_countries, release_date, runtime, title, vote_average, vote_count
    } = data || {};
    return (
        <div className="lws-card">
            <Link to={`/${id}`}>
                <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} className="lws-card-image" alt="" />
            </Link>
            <div className="p-4">
                {/* <div className="lws-card-header">
                
                    <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>100</p>
                </div> */}
                <Link to={`/${id}`} className="lws-postTitle"> {original_title} </Link>
                {/* <div className="lws-tags">#{genres?.map(item=>item.name)}</div> */}
                <p className="text-sm mt-2">{overview.slice(0,100)}...</p>
                {/* <!-- Show this element if post is saved --> */}
                <div className="flex gap-2 mt-4 cursor-pointer">
                    <span className="lws-badge">Watchlist </span>
                </div>
                <p className="lws-publishedDate text-sm text-green-600 mt-2 mr-2">{release_date.split("-")[0]}</p>
            </div>
        </div>
    )
}
