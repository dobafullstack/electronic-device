import React from 'react'

function BlogArea() {
    return (
        <div className="blog-area pt-115 pb-75">
            <div className="container">
                <div className="section-title-tab-wrap mb-55">
                    <div className="section-title-4">
                        <h2>press &amp; looks</h2>
                    </div>
                    <div className="btn-style-6 ml-60">
                        <a href="blog-details.html">All articles</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-wrap mb-30">
                            <div className="blog-img mb-25">
                                <a href="blog-details.html"><img src="assets/images/blog/blog-1.jpg" alt="blog-img" /></a>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <ul>
                                        <li><a href="#">News </a></li>
                                        <li>May 25, 2020</li>
                                    </ul>
                                </div>
                                <h3><a href="blog-details.html">Five things you only know if you’re at Chanel's Hamburg Show</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-wrap mb-30">
                            <div className="blog-img mb-25">
                                <a href="blog-details.html"><img src="assets/images/blog/blog-2.jpg" alt="blog-img" /></a>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <ul>
                                        <li><a href="#">Inspiration </a></li>
                                        <li>May 25, 2020</li>
                                    </ul>
                                </div>
                                <h3><a href="blog-details.html">Basic colord mixed - trendind 2020</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-wrap mb-30">
                            <div className="blog-img mb-25">
                                <a href="blog-details.html"><img src="assets/images/blog/blog-3.jpg" alt="blog-img" /></a>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <ul>
                                        <li><a href="#">Lookbook </a></li>
                                        <li>May 25, 2020</li>
                                    </ul>
                                </div>
                                <h3><a href="blog-details.html">Calvin Klein Shoes Collection 2020, Activites Summer</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogArea
