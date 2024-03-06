function Search() {
    return (
        <>
            <div className="relative">
                <input className="w-full rounded-3xl py-4 " type="text" placeholder="search for a movie, tv show, person..." />
                <button className="absolute">Search</button>
            </div>
        </>
    )
}

export default Search;