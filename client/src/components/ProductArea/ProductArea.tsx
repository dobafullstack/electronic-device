import React from 'react'
import Product from './Product'

interface ProductAreaProps {
    head: string,
    bottomBordered?: boolean
}

function ProductArea({head, bottomBordered}: ProductAreaProps) {
    return (
        <div className="product-area pt-115 pb-80">
            <div className="container">
                    <div className="section-title-tab-wrap mb-55">
                        <div className="section-title-4">
                            <h2>{head}</h2>
                        </div>
                        <div className="tab-btn-wrap-2">
                            <div className="tab-style-5 nav">
                                <a className="active" href="#product-1" data-bs-toggle="tab">All </a>
                                <a href="#product-2" data-bs-toggle="tab"> Clothings </a>
                                <a href="#product-3" data-bs-toggle="tab">Bags </a>
                                <a href="#product-4" data-bs-toggle="tab"> Shoes</a>
                                <a href="#product-5" data-bs-toggle="tab"> Accessories</a>
                            </div>
                            <div className="btn-style-6 ml-60">
                                <a href="shop.html">All Product</a>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content jump">
                        <div id="product-1" className="tab-pane active">
                            <div className="row">
                                <Product listLayout={false} />
                                <Product listLayout={false} />
                                <Product listLayout={false} />
                                <Product listLayout={false} />
                                <Product listLayout={false} />
                                <Product listLayout={false} />
                                <Product listLayout={false} />
                            </div>
                        </div>
                        <div id="product-2" className="tab-pane">
                            <div className="row">
                            <Product listLayout={false} />
                            <Product listLayout={false} />
                            <Product listLayout={false} />
                            <Product listLayout={false} />
                            <Product listLayout={false} />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ProductArea
