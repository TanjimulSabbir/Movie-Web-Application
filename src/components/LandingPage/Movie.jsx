import { Link } from "react-router-dom";

export default function Movie({ movieData }) {
    const { adult, genres, id, original_title, overview, popularity, poster_path, production_countries, release_date, runtime, title, vote_average, vote_count
    } = movieData || {};
    return (
        <div className="lws-card">
            <Link to={`/${id}`}>
                <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} className="lws-card-image" alt="" />
            </Link>
            <div className="p-4">
                <div className="lws-card-header">
                    <p className="lws-publishedDate">{release_date}</p>
                    <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>100</p>
                </div>
                <Link to={`/${id}`} className="lws-postTitle"> {original_title} </Link>
                <div className="lws-tags">#{genres.map(data=>data.name)}</div>
                {/* <!-- Show this element if post is saved --> */}
                <div className="flex gap-2 mt-4">
                    <span className="lws-badge"> Saved </span>
                </div>
            </div>
        </div>
    )
}
