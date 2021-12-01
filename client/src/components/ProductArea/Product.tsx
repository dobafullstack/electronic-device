import React from "react";
import VNDCurrency from "../../configs/VNDCurrency";
import ProductModel from "../../models/Product";
interface ProductProps {
    listLayout: boolean;
    product?: ProductModel;
}

interface LayoutProps {
    product?: ProductModel;
}

const GridLayout = ({product}: LayoutProps) => {
    const name = product?.name || '';
    const price = product?.price || 0;
    const images = product?.images || ["assets/images/product/product-13.jpg"];

    return (
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12'>
            <div className='single-product-wrap mb-35'>
                <div className='product-img product-img-zoom mb-15'>
                    <a href='product-details.html'>
                        <img
                            src={images[0]}
                            alt=''
                        />
                    </a>
                    <div className='product-action-2 tooltip-style-2'>
                        <button title='Wishlist'>
                            <i className='icon-heart' />
                        </button>
                        <button
                            title='Quick View'
                            data-bs-toggle='modal'
                            data-bs-target='#exampleModal'>
                            <i className='icon-size-fullscreen icons' />
                        </button>
                        <button title='Compare'>
                            <i className='icon-refresh' />
                        </button>
                    </div>
                </div>
                <div className='product-content-wrap-2 text-center'>
                    <div className='product-rating-wrap'>
                        <div className='product-rating'>
                            <i className='icon_star' />
                            <i className='icon_star' />
                            <i className='icon_star' />
                            <i className='icon_star' />
                            <i className='icon_star gray' />
                        </div>
                        <span>(2)</span>
                    </div>
                    <h3>
                        <a href='product-details.html'>{name}</a>
                    </h3>
                    <div className='product-price-2'>
                        <span>{VNDCurrency(price)}</span>
                    </div>
                </div>
                <div className='product-content-wrap-2 product-content-position text-center'>
                    <div className='product-rating-wrap'>
                        <div className='product-rating'>
                            <i className='icon_star' />
                            <i className='icon_star' />
                            <i className='icon_star' />
                            <i className='icon_star' />
                            <i className='icon_star gray' />
                        </div>
                        <span>(2)</span>
                    </div>
                    <h3>
                        <a href='product-details.html'>Laptop new model</a>
                    </h3>
                    <div className='product-price-2'>
                        <span>$20.50</span>
                    </div>
                    <div className='pro-add-to-cart'>
                        <button title='Add to Cart'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ListLayout = () => {
    return (
        <div className='shop-list-wrap mb-30'>
            <div className='row'>
                <div className='col-xl-4 col-lg-5 col-md-6 col-sm-6'>
                    <div className='product-list-img'>
                        <a href='product-details.html'>
                            <img
                                src='assets/images/product/product-13.jpg'
                                alt='Product Style'
                            />
                        </a>
                        <div className='product-list-quickview'>
                            <button
                                title='Quick View'
                                data-bs-toggle='modal'
                                data-bs-target='#exampleModal'>
                                <i className='icon-size-fullscreen icons' />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-xl-8 col-lg-7 col-md-6 col-sm-6'>
                    <div className='shop-list-content'>
                        <h3>
                            <a href='product-details.html'>
                                Basic Joggin Shorts
                            </a>
                        </h3>
                        <div className='pro-list-price'>
                            <span className='new-price'>$35.45</span>
                            <span className='old-price'>$45.80</span>
                        </div>
                        <div className='product-list-rating-wrap'>
                            <div className='product-list-rating'>
                                <i className='icon_star' />
                                <i className='icon_star' />
                                <i className='icon_star' />
                                <i className='icon_star gray' />
                                <i className='icon_star gray' />
                            </div>
                            <span>(3)</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipic it,
                            sed do eiusmod tempor labor incididunt ut et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip.
                        </p>
                        <div className='product-list-action'>
                            <button title='Add To Cart'>
                                <i className='icon-basket-loaded' />
                            </button>
                            <button title='Wishlist'>
                                <i className='icon-heart' />
                            </button>
                            <button title='Compare'>
                                <i className='icon-refresh' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function Product({ listLayout, product }: ProductProps) {
    return listLayout ? <ListLayout /> : <GridLayout product={product} />;
}

export default Product;
