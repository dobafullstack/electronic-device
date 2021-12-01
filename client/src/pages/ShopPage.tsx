import React from 'react'
import Breadcrumb from '../components/Common/Breadcrumb'
import Product from '../components/ProductArea/Product'

function ShopPage() {
    return (
        <>
            <Breadcrumb prev="home" current="shop" />
            <div className="shop-area pt-120 pb-120">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-9">
                            <div className="shop-topbar-wrapper">
                                <div className="shop-topbar-left">
                                    <div className="view-mode nav">
                                    <a className="active" href="#shop-1" data-bs-toggle="tab"><i className="icon-grid" /></a>
                                    <a href="#shop-2" data-bs-toggle="tab"><i className="icon-menu" /></a>
                                    </div>
                                    <p>Showing 1 - 20 of 30 results </p>
                                </div>
                                <div className="product-sorting-wrapper">
                                    <div className="product-shorting shorting-style">
                                        <label>View :</label>
                                        <select>
                                            <option value=""> 20</option>
                                            <option value=""> 23</option>
                                            <option value=""> 30</option>
                                        </select>
                                    </div>
                                    <div className="product-show shorting-style">
                                        <label>Sort by :</label>
                                        <select>
                                            <option value="">Default</option>
                                            <option value=""> Name</option>
                                            <option value=""> price</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="shop-bottom-area">
                                <div className="tab-content jump">
                                    <div id="shop-1" className="tab-pane active">
                                        <div className="row">
                                            <Product listLayout={false} />
                                            <Product listLayout={false} />
                                            <Product listLayout={false} />
                                            <Product listLayout={false} />
                                            <Product listLayout={false} />
                                            <Product listLayout={false} />
                                            <Product listLayout={false} />
                                            <Product listLayout={false} />
                                            <Product listLayout={false} />
                                            <Product listLayout={false} />
                                            <Product listLayout={false} />
                                        </div>
                                    </div>
                                    <div id="shop-2" className="tab-pane">
                                        <Product listLayout />
                                        <Product listLayout />
                                        <Product listLayout />
                                        <Product listLayout />
                                        <Product listLayout />
                                        <Product listLayout />
                                        <Product listLayout />
                                        <Product listLayout />
                                        <Product listLayout />
                                        <Product listLayout />
                                    </div>
                                </div>
                                <div className="pro-pagination-style text-center mt-10">
                                    <ul>
                                        <li><a className="prev" href="#"><i className="icon-arrow-left" /></a></li>
                                        <li><a className="active" href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a className="next" href="#"><i className="icon-arrow-right" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="sidebar-wrapper sidebar-wrapper-mrg-right">
                                <div className="sidebar-widget mb-40">
                                    <h4 className="sidebar-widget-title">Search </h4>
                                    <div className="sidebar-search">
                                        <form className="sidebar-search-form" action="#">
                                            <input type="text" placeholder="Search here..." />
                                            <button>
                                                <i className="icon-magnifier" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="sidebar-widget shop-sidebar-border mb-35 pt-40">
                                    <h4 className="sidebar-widget-title">Categories </h4>
                                    <div className="shop-catigory">
                                        <ul>
                                            <li><a href="shop.html">T-Shirt</a></li>
                                            <li><a href="shop.html">Shoes</a></li>
                                            <li><a href="shop.html">Clothing </a></li>
                                            <li><a href="shop.html">Women </a></li>
                                            <li><a href="shop.html">Baby Boy </a></li>
                                            <li><a href="shop.html">Accessories </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget shop-sidebar-border mb-40 pt-40">
                                    <h4 className="sidebar-widget-title">Price Filter </h4>
                                    <div className="price-filter">
                                        <span>Range:  $100.00 - 1.300.00 </span>
                                        <div id="slider-range" />
                                        <div className="price-slider-amount">
                                            <div className="label-input">
                                                <input type="text" id="amount" name="price" placeholder="Add Your Price" />
                                            </div>
                                            <button type="button">Filter</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-widget shop-sidebar-border mb-40 pt-40">
                                    <h4 className="sidebar-widget-title">Refine By </h4>
                                    <div className="sidebar-widget-list">
                                        <ul>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" /> <a href="#">On Sale <span>4</span> </a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" defaultValue="" /> <a href="#">New <span>5</span></a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" defaultValue="" /> <a href="#">In Stock <span>6</span> </a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget shop-sidebar-border mb-40 pt-40">
                                    <h4 className="sidebar-widget-title">Size </h4>
                                    <div className="sidebar-widget-list">
                                        <ul>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" defaultValue="" /> <a href="#">XL <span>4</span> </a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" defaultValue="" /> <a href="#">L <span>5</span> </a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" defaultValue="" /> <a href="#">SM <span>6</span> </a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" defaultValue="" /> <a href="#">XXL <span>7</span> </a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget shop-sidebar-border mb-40 pt-40">
                                    <h4 className="sidebar-widget-title">Color </h4>
                                    <div className="sidebar-widget-list">
                                        <ul>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" defaultValue="" /> <a href="#">Green <span>7</span> </a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" defaultValue="" /> <a href="#">Cream <span>8</span> </a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" defaultValue="" /> <a href="#">Blue <span>9</span> </a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" defaultValue="" /> <a href="#">Black <span>3</span> </a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget shop-sidebar-border pt-40">
                                    <h4 className="sidebar-widget-title">Popular Tags</h4>
                                    <div className="tag-wrap sidebar-widget-tag">
                                        <a href="#">Clothing</a>
                                        <a href="#">Accessories</a>
                                        <a href="#">For Men</a>
                                        <a href="#">Women</a>
                                        <a href="#">Fashion</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopPage
