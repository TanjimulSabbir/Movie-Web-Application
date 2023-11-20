import { Link } from "react-router-dom";

function RelatedPost() {
    return (
        <aside>
            <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
            <div className="space-y-4 related-post-container">
                {/* <!-- related post  --> */}
                <div className="card">
                    <Link to="/id">
                        <img src="./images/git.webp" className="card-image" alt="" />
                    </Link>
                    <div className="p-4">
                        <Link to="/id" className="text-lg post-title lws-RelatedPostTitle">
                            Top Github Alternatives
                        </Link>
                        <div className="mb-0 tags">
                            <span>#python,</span> <span>#tech,</span> <span>#git</span>
                        </div>
                        <p>2010-03-27</p>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default RelatedPost;