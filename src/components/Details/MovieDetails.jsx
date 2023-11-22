import { Link, useParams } from 'react-router-dom';
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsBookmarkStar } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchDetailsMovie } from '../../Redux/Features/Details/DetailsSlice';
import Loading from '../Shared/Loading';
import DetailsHeader from './DetailsHeader';

const MovieDetails = () => {
    const { movie, isLoading, isError, error } = useSelector((state => state.detailsMovieReducer))
    const dispatch = useDispatch();
    const param = useParams().movieId;
    const renderError = "flex items-center justify-center text-red-600 text-2xl";

    useEffect(() => {
        dispatch(fetchDetailsMovie(param))
    }, [dispatch, param]);

    if (isLoading) return <Loading />

    if (isError) return <p className={renderError}>{error.message}</p>
    if (movie == "undefined") {
        return <p className={renderError}>Movie not found</p>
    }

    const { adult, genres, id, original_title, overview, popularity, poster_path, production_countries, release_date, runtime, title, vote_average, vote_count
    } = movie;

    return (
        <div className='pt-5 pb-10'>
            <DetailsHeader/>
            <div key={id} className='flex flex-col lg:flex-row lg:space-x-10 h-full py-4 p-4 rounded-lg'>
                <div className='w-full md:w-2/3 mx-auto lg:w-full'>
                    <img className='min-h-full object-cover object-center rounded-lg'
                        src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={""} srcSet="" />
                </div>
                <div className='w-full h-full'>

                    <div className='my-8'>
                        <h2 className="text-2xl mb-2">{original_title} <small>(Episode: {popularity})</small></h2>

                        <p className='space-x-1'>
                            {genres?.map((data, ind) => <span key={ind}>{data.name}</span>)}
                        </p>
                        <span>Runtime:
                            {
                                runtime ? (runtime >= 60 ? ` ${Math.trunc(runtime / 60)}h 0min` : " 0h " + runtime + " min") : ` `
                            }
                        </span>

                        <p>Language: {title}</p>
                        <p className='flex space-x-2'>

                            <span>Season: {release_date}</span>
                            <span>Episode No: {release_date}</span>
                        </p>
                    </div>

                    <div className='border-y border-slate-700 py-4 my-4'>
                        <div className='flex space-x-10 items-center'>
                            {vote_average}

                        </div>
                    </div>
                    <div className='border-b border-slate-700 pb-4 mb-4'>
                        <p>Premiered: {release_date}</p>
                        <p>Director: <Link to='#' className='text-[#2b9b3a]'>{"director"}</Link></p>
                        <p>Writer: N/A</p>
                        <p>Actors:
                        </p>
                    </div>
                    <p>Plots: <span className='text-emerald-300'>{overview}</span></p>

                    <div className='flex items-center space-x-6 mt-5'>
                        <button title='Add to Favourite List' className='border text-xl rounded-full p-2 text-white focus:bg-green-600 focus:border-green-600'><MdOutlineFavoriteBorder className='' /></button>
                        <button title='Add to WatchList' className='border text-xl rounded-full p-2 text-white focus:bg-green-600 focus:border-green-600'><BsBookmarkStar /></button>
                        <button title='Rate this Movie' className='border text-xl rounded-full p-2 text-white focus:bg-green-600 focus:border-green-600'><AiOutlineStar /></button>
                    </div>
                </div>
                <div className='py-8 text-center'>
                    <Link to={`/`} className='border border-emerald-500 px-4 py-2 rounded-3xl text-emerald-500'>Back</Link>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;