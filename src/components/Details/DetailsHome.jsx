import MovieDetails from './MovieDetails';
import RelatedPost from './RelatedPost';

function DetailsHome() {
    return (
        <section className="shadow-md min-h-screen bg-[#0f273c]">
            <MovieDetails />
            {/* <RelatedPost /> */}
        </section>
    )
}

export default DetailsHome;