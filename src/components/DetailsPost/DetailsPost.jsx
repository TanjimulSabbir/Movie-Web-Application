function DetailsPost() {
    return (
        <div>
            <div className="container mt-8">
                <a href="index.html" className="inline-block text-gray-600 home-btn" id="lws-goHome"><i
                    className="mr-2 fa-solid fa-house"></i>Go Home</a>
            </div>

            <section className="post-page-container">
                <main className="post">
                    <img src="./images/mern.webp" alt="githum" className="w-full rounded-md" id="lws-megaThumb" />
                    <div>
                        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
                            MERN stack for Web Development
                        </h1>
                        <div className="tags" id="lws-singleTags">
                            <span>#python,</span> <span>#tech,</span> <span>#git</span>
                        </div>
                        <div className="btn-group">
                            {/* <!-- handle like on button click --> */}
                            <button className="like-btn" id="lws-singleLinks">
                                <i className="fa-regular fa-thumbs-up"></i> 100
                            </button>
                            {/* <!-- handle save on button click --> */}
                            {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
                            <button className="active save-btn" id="lws-singleSavedBtn">
                                <i className="fa-regular fa-bookmark"></i> Saved
                            </button>
                        </div>
                        <div className="mt-6">
                            <p>
                                A MERN stack comprises a collection of four frameworks (MongoDB,
                                ExpressJs, ReactJs and NodeJs) used to develop full-stack
                                javascript solutions for rapid, scalable, and secure applications.
                                Each framework serves a different purpose in creating successful
                                web applications. It is an excellent choice for companies looking
                                to develop high-quality responsive applications quickly using just
                                one language.
                            </p>
                        </div>
                    </div>
                </main>
            </section>
        </div>
    )
}

export default DetailsPost;