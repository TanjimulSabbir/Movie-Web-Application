import MovieDetails from './MovieDetails';
import RelatedPost from './RelatedPost';

function DetailsHome() {
    return (
        <section className="post-page-container min-h-screen">
            <MovieDetails />
            <RelatedPost />
        </section>
    )
}

export default DetailsHome;