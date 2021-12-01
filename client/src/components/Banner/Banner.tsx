import React from 'react'

function Banner() {
    return (
        <div className="banner-area section-padding-2 pb-85">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="banner-wrap mb-30">
                            <div className="banner-img banner-img-zoom">
                                <a href="product-details.html"><img src="assets/images/banner/banner-8.jpg" alt="" /></a>
                            </div>
                            <div className="banner-content-9">
                                <span>new arrivals <br />women</span>
                                <h2>Minimalist <br />Blazer</h2>
                                <p>A collection in minilaist style for basic blazer</p>
                                <div className="btn-style-1">
                                    <a className="btn-1-padding-3 bg-white banner-btn-res" href="product-details.html">SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-wrap mb-30">
                            <div className="banner-img banner-img-zoom">
                                <a href="product-details.html"><img src="assets/images/banner/banner-9.jpg" alt="" /></a>
                            </div>
                            <div className="banner-content-10">
                                <span>mega sale</span>
                                <h2><span>50%</span> OFF <br />for Autumn</h2>
                                <p>Backpack BYORK, don’t miss out in this mage sale</p>
                                <div className="btn-style-1">
                                    <a className="btn-1-padding-3 bg-white banner-btn-res" href="product-details.html">SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
