import React from 'react'

function Product() {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="single-product-wrap mb-35">
                <div className="product-img product-img-zoom mb-15">
                    <a href="product-details.html">
                        <img src="assets/images/product/product-13.jpg" alt="" />
                    </a>
                    <div className="product-action-2 tooltip-style-2">
                        <button title="Wishlist"><i className="icon-heart" /></button>
                        <button title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="icon-size-fullscreen icons" /></button>
                        <button title="Compare"><i className="icon-refresh" /></button>
                    </div>
                </div>
                <div className="product-content-wrap-2 text-center">
                    <div className="product-rating-wrap">
                        <div className="product-rating">
                            <i className="icon_star" />
                            <i className="icon_star" />
                            <i className="icon_star" />
                            <i className="icon_star" />
                            <i className="icon_star gray" />
                        </div>
                        <span>(2)</span>
                    </div>
                    <h3><a href="product-details.html">Laptop new model</a></h3>
                    <div className="product-price-2">
                        <span>$20.50</span>
                    </div>
                </div>
                <div className="product-content-wrap-2 product-content-position text-center">
                    <div className="product-rating-wrap">
                        <div className="product-rating">
                            <i className="icon_star" />
                            <i className="icon_star" />
                            <i className="icon_star" />
                            <i className="icon_star" />
                            <i className="icon_star gray" />
                        </div>
                        <span>(2)</span>
                    </div>
                    <h3><a href="product-details.html">Laptop new model</a></h3>
                    <div className="product-price-2">
                        <span>$20.50</span>
                    </div>
                    <div className="pro-add-to-cart">
                        <button title="Add to Cart">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
