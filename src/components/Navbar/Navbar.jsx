function Navbar() {
    return (
        <div>
            <nav className="py-4 border-b">
                <div className="navbar-container">
                    {/* <!-- logo --> */}
                    <div className="logo">
                        <a href="index.html">
                            <img src="./images/LWSBlog.svg" alt="search" />
                        </a>
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