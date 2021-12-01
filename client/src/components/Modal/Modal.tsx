import React from 'react'

function Modal() {
    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true" /></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-lg-5 col-md-6 col-12 col-sm-12">
                                <div className="tab-content quickview-big-img">
                                    <div id="pro-1" className="tab-pane fade show active">
                                        <img src="assets/images/product/product-1.jpg" alt="" />
                                    </div>
                                    <div id="pro-2" className="tab-pane fade">
                                        <img src="assets/images/product/product-3.jpg" alt="" />
                                    </div>
                                    <div id="pro-3" className="tab-pane fade">
                                        <img src="assets/images/product/product-6.jpg" alt="" />
                                    </div>
                                    <div id="pro-4" className="tab-pane fade">
                                        <img src="assets/images/product/product-3.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="quickview-wrap mt-15">
                                    <div className="quickview-slide-active nav nav-style-6">
                                        <a className="active" data-bs-toggle="tab" href="#pro-1"><img src="assets/images/product/quickview-s1.jpg" alt="" /></a>
                                        <a data-bs-toggle="tab" href="#pro-2"><img src="assets/images/product/quickview-s2.jpg" alt="" /></a>
                                        <a data-bs-toggle="tab" href="#pro-3"><img src="assets/images/product/quickview-s3.jpg" alt="" /></a>
                                        <a data-bs-toggle="tab" href="#pro-4"><img src="assets/images/product/quickview-s2.jpg" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6 col-12 col-sm-12">
                                <div className="product-details-content quickview-content">
                                    <h2>Simple Black T-Shirt</h2>
                                    <div className="product-ratting-review-wrap">
                                        <div className="product-ratting-digit-wrap">
                                            <div className="product-ratting">
                                                <i className="icon_star" />
                                                <i className="icon_star" />
                                                <i className="icon_star" />
                                                <i className="icon_star" />
                                                <i className="icon_star" />
                                            </div>
                                            <div className="product-digit">
                                                <span>5.0</span>
                                            </div>
                                        </div>
                                        <div className="product-review-order">
                                            <span>62 Reviews</span>
                                            <span>242 orders</span>
                                        </div>
                                    </div>
                                    <p>Seamlessly predominate enterprise metrics without performance based process improvements.</p>
                                    <div className="pro-details-price">
                                        <span className="new-price">$75.72</span>
                                        <span className="old-price">$95.72</span>
                                    </div>
                                    <div className="pro-details-color-wrap">
                                        <span>Color:</span>
                                        <div className="pro-details-color-content">
                                            <ul>
                                                <li><a className="dolly" href="#">dolly</a></li>
                                                <li><a className="white" href="#">white</a></li>
                                                <li><a className="azalea" href="#">azalea</a></li>
                                                <li><a className="peach-orange" href="#">Orange</a></li>
                                                <li><a className="mona-lisa active" href="#">lisa</a></li>
                                                <li><a className="cupid" href="#">cupid</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="pro-details-size">
                                        <span>Size:</span>
                                        <div className="pro-details-size-content">
                                            <ul>
                                                <li><a href="#">XS</a></li>
                                                <li><a href="#">S</a></li>
                                                <li><a href="#">M</a></li>
                                                <li><a href="#">L</a></li>
                                                <li><a href="#">XL</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="pro-details-quality">
                                        <span>Quantity:</span>
                                        <div className="cart-plus-minus">
                                            <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue={1} />
                                        </div>
                                    </div>
                                    <div className="product-details-meta">
                                        <ul>
                                        <li><span>Categories:</span> <a href="#">Woman,</a> <a href="#">Dress,</a> <a href="#">T-Shirt</a></li>
                                        <li><span>Tag: </span> <a href="#">Fashion,</a> <a href="#">Mentone</a> , <a href="#">Texas</a></li>
                                        </ul>
                                    </div>
                                    <div className="pro-details-action-wrap">
                                        <div className="pro-details-add-to-cart">
                                            <a title="Add to Cart" href="#">Add To Cart </a>
                                        </div>
                                        <div className="pro-details-action">
                                            <a title="Add to Wishlist" href="#"><i className="icon-heart" /></a>
                                            <a title="Add to Compare" href="#"><i className="icon-refresh" /></a>
                                            <a className="social" title="Social" href="#"><i className="icon-share" /></a>
                                            <div className="product-dec-social">
                                                <a className="facebook" title="Facebook" href="#"><i className="icon-social-facebook" /></a>
                                                <a className="twitter" title="Twitter" href="#"><i className="icon-social-twitter" /></a>
                                                <a className="instagram" title="Instagram" href="#"><i className="icon-social-instagram" /></a>
                                                <a className="pinterest" title="Pinterest" href="#"><i className="icon-social-pinterest" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
