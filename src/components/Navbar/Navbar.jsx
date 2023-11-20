import logo from "../../assets/images/LWSBlog.svg"
import {Link } from "react-router-dom"
function Navbar() {
    return (
        <div>
            <nav className="py-4 border-b">
                <div className="navbar-container">
                    {/* <!-- logo --> */}
                    <div className="logo uppercase">
                        <Link to="/">
                            {/* <img src={logo} alt="search" /> */}
                         My Movies
                        </Link>
                    </div>
                    <div className="flex gap-x-10">
                        <button>Movies</button>
                        <button>TV Shows</button>
                        <button>Genres</button>
                        <button>More</button>
                    </div>
                    {/* <!-- auth buttons , This will nonfunctional, just for nice looking --> */}
                    <div className="auth-buttons">
                        <button className="btn btn-primary">+</button>
                        <button className="btn btn-outline">Account</button>
                        <button className="btn btn-outline">Search</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;