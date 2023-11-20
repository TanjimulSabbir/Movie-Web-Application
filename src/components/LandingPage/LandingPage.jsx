import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function LandingPage() {
    return (
        <section className="wrapper">
            <Sidebar />
            <main className="post-container" id="lws-postContainer">
                <div className="lws-card">
                    <Link to="/id">
                        <img src="./images/git.webp" className="lws-card-image" alt="" />
                    </Link>
                    <div className="p-4">
                        <div className="lws-card-header">
                            <p className="lws-publishedDate">2023-05-01</p>
                            <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>100</p>
                        </div>
                        <Link to="/id" className="lws-postTitle"> Top Github Alternatives </Link>
                        <div className="lws-tags"><span>#python,</span> <span>#tech,</span> <span>#git</span></div>
                        {/* <!-- Show this element if post is saved --> */}
                        <div className="flex gap-2 mt-4">
                            <span className="lws-badge"> Saved </span>
                        </div>
                    </div>
                </div>
            </main >
        </section>
    )
}
