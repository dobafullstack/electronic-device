import React from 'react'
import logo from '../../assets/images/logo/logo.png';

function Header() {
    return (
            <header className="header-area">
                <div className="header-large-device section-padding-2">
                    <div className="header-top header-top-ptb-3 bg-black">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-3">
                            <div className="header-quick-contect">
                            <ul>
                                <li><i className="icon-phone " /> +841 2345 6789</li>
                                <li><i className="icon-envelope-open " /> admin@tinhocmattrang.online</li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="header-offer-wrap-3 text-center">
                            <p>Miễn phí ship toàn quốc cho đơn hàng trên 500.000 đồng <a href="#">Xem thêm</a></p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="header-top-right">
                            <div className="social-hm4-wrap">
                                <span>Follow us</span>
                                <div className="social-style-1 social-style-1-white">
                                <a href="#"><i className="icon-social-twitter" /></a>
                                <a href="#"><i className="icon-social-facebook" /></a>
                                <a href="#"><i className="icon-social-instagram" /></a>
                                <a href="#"><i className="icon-social-youtube" /></a>
                                <a href="#"><i className="icon-social-pinterest" /></a>
                                </div>
                            </div>
                            <div className="hm4-currency-language-wrap same-style-wrap">
                                <div className="same-style same-style-mrg-3 language-wrap">
                                <a className="language-dropdown-active" href="#">ENG <i className="icon-arrow-down" /></a>
                                <div className="language-dropdown">
                                    <ul>
                                    <li><a href="#">English</a></li>
                                    <li><a href="#">German</a></li>
                                    <li><a href="#">Spanish</a></li>
                                    </ul>
                                </div>
                                </div>
                                <div className="same-style same-style-mrg-3 currency-wrap">
                                <a className="currency-dropdown-active" href="#"> USD <i className="icon-arrow-down" /></a>
                                <div className="currency-dropdown">
                                    <ul>
                                    <li><a href="#">USD</a></li>
                                    <li><a href="#">EUR</a></li>
                                    <li><a href="#">BDT</a></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="header-bottom">
                    <div className="container-fluid">
                        <div className="border-bottom-6">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-2">
                            <div className="logo">
                                <a href="index.html"><img src={logo} alt="logo" style={{width: 80, height: 'auto'}} /></a>
                            </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                            <div className="main-menu main-menu-padding-1 main-menu-lh-3 main-menu-hm4 main-menu-center">
                                <nav>
                                <ul>
                                    <li><a className="active" href="index.html">HOME </a>
                                    <ul className="sub-menu-style">
                                        <li><a href="index.html">Home version 1 </a></li>
                                        <li><a href="index-2.html">Home version 2</a></li>
                                        <li><a href="index-3.html">Home version 3</a></li>
                                        <li><a href="index-4.html">Home version 4</a></li>
                                        <li><a href="index-5.html">Home version 5</a></li>
                                        <li><a href="index-6.html">Home version 6</a></li>
                                        <li><a href="index-7.html">Home version 7</a></li>
                                        <li><a href="index-8.html">Home version 8</a></li>
                                        <li><a href="index-9.html">Home version 9</a></li>
                                        <li><a href="index-10.html">Home version 10</a></li>
                                    </ul>
                                    </li>
                                    <li><a href="shop.html">SHOP </a>
                                    <ul className="mega-menu-style mega-menu-mrg-2">
                                        <li>
                                        <ul>
                                            <li>
                                            <a className="dropdown-title" href="#">Shop Layout</a>
                                            <ul>
                                                <li><a href="shop.html">standard style</a></li>
                                                <li><a href="shop-list.html">shop list style</a></li>
                                                <li><a href="shop-fullwide.html">shop fullwide</a></li>
                                                <li><a href="shop-no-sidebar.html">grid no sidebar</a></li>
                                                <li><a href="shop-list-no-sidebar.html">list no sidebar</a></li>
                                                <li><a href="shop-right-sidebar.html">shop right sidebar</a></li>
                                                <li><a href="store-location.html">store location</a></li>
                                            </ul>
                                            </li>
                                            <li>
                                            <a className="dropdown-title" href="#">Products Layout</a>
                                            <ul>
                                                <li><a href="product-details.html">tab style 1</a></li>
                                                <li><a href="product-details-2.html">tab style 2</a></li>
                                                <li><a href="product-details-sticky.html">sticky style</a></li>
                                                <li><a href="product-details-gallery.html">gallery style </a></li>
                                                <li><a href="product-details-affiliate.html">affiliate style</a></li>
                                                <li><a href="product-details-group.html">group style</a></li>
                                                <li><a href="product-details-fixed-img.html">fixed image style </a></li>
                                            </ul>
                                            </li>
                                            <li>
                                            <a href="shop.html"><img src="assets/images/banner/banner-12.png" alt="" /></a>
                                            </li>
                                        </ul>
                                        </li>
                                    </ul>
                                    </li>
                                    <li><a href="#">PAGES </a>
                                    <ul className="sub-menu-style">
                                        <li><a href="about-us.html">about us </a></li>
                                        <li><a href="cart.html">cart page</a></li>
                                        <li><a href="checkout.html">checkout </a></li>
                                        <li><a href="my-account.html">my account</a></li>
                                        <li><a href="wishlist.html">wishlist </a></li>
                                        <li><a href="compare.html">compare </a></li>
                                        <li><a href="contact.html">contact us </a></li>
                                        <li><a href="order-tracking.html">order tracking</a></li>
                                        <li><a href="login-register.html">login / register </a></li>
                                    </ul>
                                    </li>
                                    <li><a href="blog.html">BLOG </a>
                                    <ul className="sub-menu-style">
                                        <li><a href="blog.html">blog standard </a></li>
                                        <li><a href="blog-no-sidebar.html">blog no sidebar </a></li>
                                        <li><a href="blog-right-sidebar.html">blog right sidebar</a></li>
                                        <li><a href="blog-details.html">blog details</a></li>
                                    </ul>
                                    </li>
                                    <li><a href="contact.html">CONTACT </a></li>
                                </ul>
                                </nav>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-3">
                            <div className="header-action header-action-flex header-action-mrg-right">
                                <div className="same-style-2 header-search-1">
                                <a className="search-toggle" href="#">
                                    <i className="icon-magnifier s-open" />
                                    <i className="icon_close s-close" />
                                </a>
                                <div className="search-wrap-1">
                                    <form action="#">
                                    <input placeholder="Search products…" type="text" />
                                    <button className="button-search"><i className="icon-magnifier" /></button>
                                    </form>
                                </div>
                                </div>
                                <div className="same-style-2 same-style-2-font-inc">
                                <a href="login-register.html"><i className="icon-user" /></a>
                                </div>
                                <div className="same-style-2 same-style-2-font-inc">
                                <a href="wishlist.html"><i className="icon-heart" /><span className="pro-count black">03</span></a>
                                </div>
                                <div className="same-style-2 same-style-2-font-inc header-cart">
                                <a className="cart-active" href="#">
                                    <i className="icon-basket-loaded" /><span className="pro-count black">02</span>
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="header-small-device small-device-ptb-1 border-bottom-2">
                    <div className="container">
                    <div className="row align-items-center">
                        <div className="col-5">
                        <div className="mobile-logo">
                            <a href="index.html">
                            <img alt="" src={logo} style={{width: 80, height: 'auto'}} />
                            </a>
                        </div>
                        </div>
                        <div className="col-7">
                        <div className="header-action header-action-flex">
                            <div className="same-style-2 same-style-2-font-inc">
                            <a href="login-register.html"><i className="icon-user" /></a>
                            </div>
                            <div className="same-style-2 same-style-2-font-inc">
                            <a href="wishlist.html"><i className="icon-heart" /><span className="pro-count black">03</span></a>
                            </div>
                            <div className="same-style-2 same-style-2-font-inc header-cart">
                            <a className="cart-active" href="#">
                                <i className="icon-basket-loaded" /><span className="pro-count black">02</span>
                            </a>
                            </div>
                            <div className="same-style-2 main-menu-icon">
                            <a className="mobile-header-button-active" href="#"><i className="icon-menu" /> </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </header>

    )
}

export default Header
