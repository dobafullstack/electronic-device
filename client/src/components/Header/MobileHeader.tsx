import React from 'react'

function MobileHeader() {
    return (
        <>
            <div className="mobile-header-active mobile-header-wrapper-style">
                <div className="clickalbe-sidebar-wrap">
                    <a className="sidebar-close"><i className="icon_close" /></a>
                    <div className="mobile-header-content-area">
                    <div className="header-offer-wrap-3 mobile-header-padding-border-4">
                        <p className="black">Free shipping worldwide for orders over $99 <a href="#">Learn More</a></p>
                    </div>
                    <div className="mobile-search mobile-header-padding-border-1">
                        <form className="search-form" action="#">
                        <input type="text" placeholder="Search here…" />
                        <button className="button-search"><i className="icon-magnifier" /></button>
                        </form>
                    </div>
                    <div className="mobile-menu-wrap mobile-header-padding-border-2">
                        {/* mobile menu start */}
                        <nav>
                        <ul className="mobile-menu">
                            <li className="menu-item-has-children"><a href="index.html">Home</a>
                            <ul className="dropdown">
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
                            <li className="menu-item-has-children "><a href="#">shop</a>
                            <ul className="dropdown">
                                <li className="menu-item-has-children"><a href="#">shop layout</a>
                                <ul className="dropdown">
                                    <li><a href="shop.html">standard style</a></li>
                                    <li><a href="shop-list.html">shop list style</a></li>
                                    <li><a href="shop-fullwide.html">shop fullwide</a></li>
                                    <li><a href="shop-no-sidebar.html">grid no sidebar</a></li>
                                    <li><a href="shop-list-no-sidebar.html">list no sidebar</a></li>
                                    <li><a href="shop-right-sidebar.html">shop right sidebar</a></li>
                                    <li><a href="store-location.html">store location</a></li>
                                </ul>
                                </li>
                                <li className="menu-item-has-children"><a href="#">Products Layout</a>
                                <ul className="dropdown">
                                    <li><a href="product-details.html">tab style 1</a></li>
                                    <li><a href="product-details-2.html">tab style 2</a></li>
                                    <li><a href="product-details-sticky.html">sticky style</a></li>
                                    <li><a href="product-details-gallery.html">gallery style </a></li>
                                    <li><a href="product-details-affiliate.html">affiliate style</a></li>
                                    <li><a href="product-details-group.html">group style</a></li>
                                    <li><a href="product-details-fixed-img.html">fixed image style </a></li>
                                </ul>
                                </li>
                            </ul>
                            </li>
                            <li className="menu-item-has-children"><a href="#">Pages</a>
                            <ul className="dropdown">
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
                            <li className="menu-item-has-children "><a href="#">Blog</a>
                            <ul className="dropdown">
                                <li><a href="blog.html">blog standard </a></li>
                                <li><a href="blog-no-sidebar.html">blog no sidebar </a></li>
                                <li><a href="blog-right-sidebar.html">blog right sidebar</a></li>
                                <li><a href="blog-details.html">blog details</a></li>
                            </ul>
                            </li>
                            <li><a href="contact.html">Contact us</a></li>
                        </ul>
                        </nav>
                        {/* mobile menu end */}
                    </div>
                    <div className="mobile-header-info-wrap mobile-header-padding-border-3">
                        <div className="single-mobile-header-info">
                        <a href="store-location.html"><i className="lastudioicon-pin-3-2" /> Store Location </a>
                        </div>
                        <div className="single-mobile-header-info">
                        <a className="mobile-language-active" href="#">Language <span><i className="icon-arrow-down" /></span></a>
                        <div className="lang-curr-dropdown lang-dropdown-active">
                            <ul>
                            <li><a href="#">English</a></li>
                            <li><a href="#">French</a></li>
                            <li><a href="#">German</a></li>
                            <li><a href="#">Spanish</a></li>
                            </ul>
                        </div>
                        </div>
                        <div className="single-mobile-header-info">
                        <a className="mobile-currency-active" href="#">Currency <span><i className="icon-arrow-down" /></span></a>
                        <div className="lang-curr-dropdown curr-dropdown-active">
                            <ul>
                            <li><a href="#">USD</a></li>
                            <li><a href="#">EUR</a></li>
                            <li><a href="#">Real</a></li>
                            <li><a href="#">BDT</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="mobile-contact-info mobile-header-padding-border-4">
                        <ul>
                        <li><i className="icon-phone " /> (+612) 2531 5600</li>
                        <li><i className="icon-envelope-open " /> norda@domain.com</li>
                        <li><i className="icon-home" /> PO Box 1622 Colins Street West Australia</li>
                        </ul>
                    </div>
                    <div className="mobile-social-icon">
                        <a className="facebook" href="#"><i className="icon-social-facebook" /></a>
                        <a className="twitter" href="#"><i className="icon-social-twitter" /></a>
                        <a className="pinterest" href="#"><i className="icon-social-pinterest" /></a>
                        <a className="instagram" href="#"><i className="icon-social-instagram" /></a>
                    </div>
                    </div>
                </div>
            </div>
            <div className="product-categories-area product-categories-border pt-50 pb-20">
                <div className="container">
                    <div className="product-categories-wrap-2">
                    <div className="single-product-categories-2 mb-30">
                        <div className="product-categories-2-icon">
                        <i className="icon-people" />
                        </div>
                        <div className="product-categories-2-content">
                        <h4><a href="shop.html">New Arrival <br />Products</a></h4>
                        </div>
                    </div>
                    <div className="single-product-categories-2 mb-30">
                        <div className="product-categories-2-icon">
                        <i className="icon-fire " />
                        </div>
                        <div className="product-categories-2-content">
                        <h4><a href="shop.html">Special Offer <br />Products</a></h4>
                        </div>
                    </div>
                    <div className="single-product-categories-2 mb-30">
                        <div className="product-categories-2-icon">
                        <i className="icon-handbag" />
                        </div>
                        <div className="product-categories-2-content">
                        <h4><a href="shop.html">Bags &amp; <br />Accessories</a></h4>
                        </div>
                    </div>
                    <div className="single-product-categories-2 mb-30">
                        <div className="product-categories-2-icon">
                        <i className="icon-people" />
                        </div>
                        <div className="product-categories-2-content">
                        <h4><a href="shop.html">Young Clothing <br />&amp; Accessories</a></h4>
                        </div>
                    </div>
                    <div className="single-product-categories-2 mb-30">
                        <div className="product-categories-2-icon">
                        <i className="icon-emotsmile " />
                        </div>
                        <div className="product-categories-2-content">
                        <h4><a href="shop.html">Kids &amp; Babies <br />Apparel</a></h4>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

        </>
    )
}

export default MobileHeader
