import DetailsPost from './DetailsPost';
import RelatedPost from './RelatedPost';

function DetailsHome() {
    return (
        <section className="post-page-container">
            <DetailsPost />
            <RelatedPost />
        </section>
    )
}

export default DetailsHome;