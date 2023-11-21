import {Link } from "react-router-dom"
function Navbar() {
    const handleChoice=()=>{

    }
    return (
        <div>
            <nav className="bg-black py-6">
                <div className="navbar-container">
                    {/* <!-- logo --> */}
                    <div className="logo uppercase">
                        <Link to="/">
                            {/* <img src={logo} alt="search" /> */}
                         My Movies
                        </Link>
                    </div>
                    <div className="flex gap-x-10">
                        <button onClick={()=>handleChoice("movies")}>Movies</button>
                        <button onClick={()=>handleChoice("tvshows")}>TV Shows</button>
                        <button onClick={()=>handleChoice("genres")}>Genres</button>
                        <button onClick={()=>handleChoice("more")}>More</button>
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