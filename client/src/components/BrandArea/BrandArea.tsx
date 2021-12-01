import React from 'react'

function BrandArea() {
    return (
        <>
            <div className="brand-logo-area pb-100">
                <div className="container">
                    <div className="brand-logo-wrap brand-logo-mrg">
                        <div className="single-brand-logo mb-10">
                            <img src="assets/images/brand-logo/brand-logo-1.png" alt="brand-logo" />
                        </div>
                        <div className="single-brand-logo mb-10">
                            <img src="assets/images/brand-logo/brand-logo-2.png" alt="brand-logo" />
                        </div>
                        <div className="single-brand-logo mb-10">
                            <img src="assets/images/brand-logo/brand-logo-3.png" alt="brand-logo" />
                        </div>
                        <div className="single-brand-logo mb-10">
                            <img src="assets/images/brand-logo/brand-logo-4.png" alt="brand-logo" />
                        </div>
                        <div className="single-brand-logo mb-10">
                            <img src="assets/images/brand-logo/brand-logo-5.png" alt="brand-logo" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="instagram-area">
                    <div className="container-fluid p-0">
                        <div className="instagram-wrap">
                            <div id="instafeed" data-limit={8} className="instagram-style-2" />
                        </div>
                    </div>
                </div>
                <div className="subscribe-area pt-115 pb-115">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-5">
                                <div className="section-title">
                                    <h2>keep connected</h2>
                                    <p>Get updates by subscribe our weekly newsletter</p>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7">
                                <div id="mc_embed_signup" className="subscribe-form">
                                    <form id="mc-embedded-subscribe-form" className="validate subscribe-form-style" noValidate target="_blank" name="mc-embedded-subscribe-form" method="post" action="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef">
                                        <div id="mc_embed_signup_scroll" className="mc-form">
                                            <input className="email" type="email" required placeholder="Enter your email address" name="EMAIL" defaultValue="" />
                                            <div className="mc-news" aria-hidden="true">
                                                <input type="text" defaultValue="" tabIndex={-1} name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" />
                                            </div>
                                            <div className="clear">
                                                <input id="mc-embedded-subscribe" className="button" type="submit" name="subscribe" defaultValue="Subscribe" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default BrandArea
