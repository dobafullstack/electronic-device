import React from 'react'

function Footer() {
    return (
        <footer className="footer-area pb-65">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="contact-info-wrap">
                            <div className="footer-logo">
                                <a href="#"><img src="/assets/images/logo/logo.png" alt="logo" style={{width: 200, height: 'auto'}} /></a>
                            </div>
                            <div className="single-contact-info">
                                <span>Our Location</span>
                                <p>828 Su Van Hanh, Ward 13, District 10, HCMC</p>
                            </div>
                            <div className="single-contact-info">
                                <span>24/7 hotline:</span>
                                <p>+841 2345 6789</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="footer-right-wrap">
                            <div className="footer-menu">
                                <nav>
                                    <ul>
                                        <li><a href="index.html">home</a></li>
                                        <li><a href="shop.html">Shop</a></li>
                                        <li><a href="shop.html">Product </a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                        <li><a href="blog.html">Blog.</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="social-style-2 social-style-2-hover-black social-style-2-mrg">
                                <a href="#"><i className="social_twitter" /></a>
                                <a href="#"><i className="social_facebook" /></a>
                                <a href="#"><i className="social_googleplus" /></a>
                                <a href="#"><i className="social_instagram" /></a>
                                <a href="#"><i className="social_youtube" /></a>
                            </div>
                            <div className="copyright">
                                <p>Copyright © 2021 The New Age | <a href="">Built with <span>DobaViKiJS</span> by The New Age</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
