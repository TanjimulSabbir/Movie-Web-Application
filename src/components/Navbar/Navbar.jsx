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
                           Tanjim's Blog
                        </Link>
                    </div>
                    {/* <!-- auth buttons , This will nonfunctional, just for nice looking --> */}
                    <div className="auth-buttons">
                        <button className="btn btn-primary">sign in</button>
                        <button className="btn btn-outline">sign up</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;