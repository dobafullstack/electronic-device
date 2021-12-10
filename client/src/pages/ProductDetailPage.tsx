import React, { useEffect } from "react";
import Breadcrumb from "../components/Common/Breadcrumb";
import { useParams } from "react-router-dom";
import Product from "../components/ProductArea/Product";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getProductByIdAction } from "../app/actions/product.action";
import VNDCurrency from "../configs/VNDCurrency";

function ProductDetailPage() {
    let { productId } = useParams();
    const dispatch = useAppDispatch();
    const product = useAppSelector((state) => state.product.product);
    console.log(product);

    useEffect(() => {
        productId && dispatch(getProductByIdAction(productId));
    }, []);

    return (
        <>
            <Breadcrumb prev='home' current='Product Detail' />
            <div className='product-details-area pt-120 pb-115'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6'>
                            <div className='product-details-tab'>
                                <div className='pro-dec-big-img-slider'>
                                    <div className='easyzoom-style'>
                                        <div className='easyzoom easyzoom--overlay'>
                                            <a href='../assets/images/product-details/b-large-1.jpg'>
                                                <img
                                                    src={product.images[0]}
                                                    alt=''
                                                />
                                            </a>
                                        </div>
                                        <a
                                            className='easyzoom-pop-up img-popup'
                                            href='../assets/images/product-details/b-large-1.jpg'>
                                            <i className='icon-size-fullscreen' />
                                        </a>
                                    </div>
                                </div>
                                <div className='product-dec-slider-small product-dec-small-style1'>
                                    <div className='product-dec-small active'>
                                        <img
                                            src='../assets/images/product-details/small-1.jpg'
                                            alt=''
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className='product-details-content pro-details-content-mrg'>
                                <h2>{product.name}</h2>
                                <div className='product-ratting-review-wrap'>
                                    <div className='product-ratting-digit-wrap'>
                                        <div className='product-ratting'>
                                            <i className='icon_star' />
                                            <i className='icon_star' />
                                            <i className='icon_star' />
                                            <i className='icon_star' />
                                            <i className='icon_star' />
                                        </div>
                                        <div className='product-digit'>
                                            <span>5.0</span>
                                        </div>
                                    </div>
                                    <div className='product-review-order'>
                                        <span>62 Reviews</span>
                                        <span>242 orders</span>
                                    </div>
                                </div>
                                <p>
                                    Seamlessly predominate enterprise metrics
                                    without performance based process
                                    improvements.
                                </p>
                                <div className='pro-details-price'>
                                    <span className='new-price'>
                                        {VNDCurrency(product.price)}
                                    </span>
                                    <span className='old-price'>
                                        {VNDCurrency(
                                            (product.price * 110) / 100
                                        )}
                                    </span>
                                </div>
                                <div className='pro-details-color-wrap'>
                                    <span>Color:</span>
                                    <div className='pro-details-color-content'>
                                        <ul>
                                            <li>
                                                <a className='dolly' href='#'>
                                                    dolly
                                                </a>
                                            </li>
                                            <li>
                                                <a className='white' href='#'>
                                                    white
                                                </a>
                                            </li>
                                            <li>
                                                <a className='azalea' href='#'>
                                                    azalea
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className='peach-orange'
                                                    href='#'>
                                                    Orange
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className='mona-lisa active'
                                                    href='#'>
                                                    lisa
                                                </a>
                                            </li>
                                            <li>
                                                <a className='cupid' href='#'>
                                                    cupid
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='pro-details-size'>
                                    <span>Size:</span>
                                    <div className='pro-details-size-content'>
                                        <ul>
                                            <li>
                                                <a href='#'>XS</a>
                                            </li>
                                            <li>
                                                <a href='#'>S</a>
                                            </li>
                                            <li>
                                                <a href='#'>M</a>
                                            </li>
                                            <li>
                                                <a href='#'>L</a>
                                            </li>
                                            <li>
                                                <a href='#'>XL</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='pro-details-quality'>
                                    <span>Quantity:</span>
                                    <div className='cart-plus-minus'>
                                        <input
                                            className='cart-plus-minus-box'
                                            type='text'
                                            name='qtybutton'
                                            defaultValue={1}
                                        />
                                    </div>
                                </div>
                                <div className='product-details-meta'>
                                    <ul>
                                        <li>
                                            <span>Categories:</span>{" "}
                                            <a href='#'>Woman,</a>{" "}
                                            <a href='#'>Dress,</a>{" "}
                                            <a href='#'>T-Shirt</a>
                                        </li>
                                        <li>
                                            <span>Tag: </span>{" "}
                                            <a href='#'>Fashion,</a>{" "}
                                            <a href='#'>Mentone</a> ,{" "}
                                            <a href='#'>Texas</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='pro-details-action-wrap'>
                                    <div className='pro-details-add-to-cart'>
                                        <a title='Add to Cart' href='#'>
                                            Add To Cart{" "}
                                        </a>
                                    </div>
                                    <div className='pro-details-action'>
                                        <a title='Add to Wishlist' href='#'>
                                            <i className='icon-heart' />
                                        </a>
                                        <a title='Add to Compare' href='#'>
                                            <i className='icon-refresh' />
                                        </a>
                                        <a
                                            className='social'
                                            title='Social'
                                            href='#'>
                                            <i className='icon-share' />
                                        </a>
                                        <div className='product-dec-social'>
                                            <a
                                                className='facebook'
                                                title='Facebook'
                                                href='#'>
                                                <i className='icon-social-facebook' />
                                            </a>
                                            <a
                                                className='twitter'
                                                title='Twitter'
                                                href='#'>
                                                <i className='icon-social-twitter' />
                                            </a>
                                            <a
                                                className='instagram'
                                                title='Instagram'
                                                href='#'>
                                                <i className='icon-social-instagram' />
                                            </a>
                                            <a
                                                className='pinterest'
                                                title='Pinterest'
                                                href='#'>
                                                <i className='icon-social-pinterest' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Product Description*/}
            <div className='description-review-wrapper pb-110'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='dec-review-topbar nav mb-45'>
                                <a
                                    className='active'
                                    data-bs-toggle='tab'
                                    href='#des-details1'>
                                    Description
                                </a>
                                <a data-bs-toggle='tab' href='#des-details2'>
                                    Specification
                                </a>
                                <a data-bs-toggle='tab' href='#des-details3'>
                                    Meterials{" "}
                                </a>
                                <a data-bs-toggle='tab' href='#des-details4'>
                                    Reviews and Ratting{" "}
                                </a>
                            </div>
                            <div className='tab-content dec-review-bottom'>
                                <div
                                    id='des-details1'
                                    className='tab-pane active'>
                                    <div className='description-wrap'>
                                        <p>
                                            Crafted in premium watch quality,
                                            fenix Chronos is the first Garmin
                                            timepiece to combine a durable metal
                                            case with integrated performance GPS
                                            to support navigation and sport. In
                                            the tradition of classic tool
                                            watches it features a tough design
                                            and a set of modern meaningful
                                            tools.
                                        </p>
                                        <p>
                                            {" "}
                                            advanced performance metrics for
                                            endurance sports, Garmin quality
                                            navigation features and smart
                                            notifications. In fenix Chronos
                                            top-tier performance meets
                                            sophisticated design in a highly
                                            evolved timepiece that fits your
                                            style anywhere, anytime. Solid
                                            brushed 316L stainless steel case
                                            with brushed stainless steel bezel
                                            and integrated EXOTM antenna for GPS
                                            + GLONASS support. High-strength
                                            scratch resistant sapphire crystal.
                                            Brown vintage leather strap with
                                            hand-sewn contrast stitching and
                                            nubuck inner lining and quick
                                            release mechanism.
                                        </p>
                                    </div>
                                </div>
                                <div id='des-details2' className='tab-pane'>
                                    <div className='specification-wrap table-responsive'>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className='title width1'>
                                                        Name
                                                    </td>
                                                    <td>Salwar Kameez</td>
                                                </tr>
                                                <tr>
                                                    <td className='title width1'>
                                                        SKU
                                                    </td>
                                                    <td>0x48e2c</td>
                                                </tr>
                                                <tr>
                                                    <td className='title width1'>
                                                        Models
                                                    </td>
                                                    <td>FX 829 v1</td>
                                                </tr>
                                                <tr>
                                                    <td className='title width1'>
                                                        Categories
                                                    </td>
                                                    <td>Digital Print</td>
                                                </tr>
                                                <tr>
                                                    <td className='title width1'>
                                                        Size
                                                    </td>
                                                    <td>60’’ x 40’’</td>
                                                </tr>
                                                <tr>
                                                    <td className='title width1'>
                                                        Brand{" "}
                                                    </td>
                                                    <td>
                                                        Individual Collections
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className='title width1'>
                                                        Color
                                                    </td>
                                                    <td>Black, White</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div id='des-details3' className='tab-pane'>
                                    <div className='specification-wrap table-responsive'>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className='title width1'>
                                                        Top
                                                    </td>
                                                    <td>
                                                        Cotton Digital Print
                                                        Chain Stitch Embroidery
                                                        Work
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className='title width1'>
                                                        Bottom
                                                    </td>
                                                    <td>Cotton Cambric</td>
                                                </tr>
                                                <tr>
                                                    <td className='title width1'>
                                                        Dupatta
                                                    </td>
                                                    <td>
                                                        Digital Printed Cotton
                                                        Malmal With Chain Stitch
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div id='des-details4' className='tab-pane'>
                                    <div className='review-wrapper'>
                                        <h2>
                                            1 review for Sleeve Button Cowl Neck
                                        </h2>
                                        <div className='single-review'>
                                            <div className='review-img'>
                                                <img
                                                    src='assets/images/product-details/client-1.png'
                                                    alt=''
                                                />
                                            </div>
                                            <div className='review-content'>
                                                <div className='review-top-wrap'>
                                                    <div className='review-name'>
                                                        <h5>
                                                            <span>
                                                                John Snow
                                                            </span>{" "}
                                                            - March 14, 2019
                                                        </h5>
                                                    </div>
                                                    <div className='review-rating'>
                                                        <i className='yellow icon_star' />
                                                        <i className='yellow icon_star' />
                                                        <i className='yellow icon_star' />
                                                        <i className='yellow icon_star' />
                                                        <i className='yellow icon_star' />
                                                    </div>
                                                </div>
                                                <p>
                                                    Donec accumsan auctor
                                                    iaculis. Sed suscipit arcu
                                                    ligula, at egestas magna
                                                    molestie a. Proin ac ex
                                                    maximus, ultrices justo
                                                    eget, sodales orci. Aliquam
                                                    egestas libero ac turpis
                                                    pharetra, in vehicula lacus
                                                    scelerisque
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ratting-form-wrapper'>
                                        <span>Add a Review</span>
                                        <p>
                                            Your email address will not be
                                            published. Required fields are
                                            marked <span>*</span>
                                        </p>
                                        <div className='ratting-form'>
                                            <form action='#'>
                                                <div className='row'>
                                                    <div className='col-lg-6 col-md-6'>
                                                        <div className='rating-form-style mb-20'>
                                                            <label>
                                                                Name{" "}
                                                                <span>*</span>
                                                            </label>
                                                            <input type='text' />
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6 col-md-6'>
                                                        <div className='rating-form-style mb-20'>
                                                            <label>
                                                                Email{" "}
                                                                <span>*</span>
                                                            </label>
                                                            <input type='email' />
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-12'>
                                                        <div className='star-box-wrap'>
                                                            <div className='single-ratting-star'>
                                                                <a href='#'>
                                                                    <i className='icon_star' />
                                                                </a>
                                                            </div>
                                                            <div className='single-ratting-star'>
                                                                <a href='#'>
                                                                    <i className='icon_star' />
                                                                </a>
                                                                <a href='#'>
                                                                    <i className='icon_star' />
                                                                </a>
                                                            </div>
                                                            <div className='single-ratting-star'>
                                                                <a href='#'>
                                                                    <i className='icon_star' />
                                                                </a>
                                                                <a href='#'>
                                                                    <i className='icon_star' />
                                                                </a>
                                                                <a href='#'>
                                                                    <i className='icon_star' />
                                                                </a>
                                                            </div>
                                                            <div className='single-ratting-star'>
                                                                <a href='#'>
                                                                    <i className='icon_star' />
                                                                </a>
                                                                <a href='#'>
                                                                    <i className='icon_star' />
                                                                </a>
                                                                <a href='#'>
                                                                    <i className='icon_star' />
                                                                </a>
                                                                <a href='#'>
                                                                    <i className='icon_star' />
                                                                </a>
                                                            </div>
                                                            <div className='single-ratting-star'>
                                                                <a href='#'>
                                                                    <i className='icon_star' />
                                                                </a>
                                                                <a href='#'>
                                                                    <i className='icon_star' />
                                                                </a>
                                                                <a href='#'>
                                                                    <i className='icon_star' />
                                                                </a>
                                                                <a href='#'>
                                                                    <i className='icon_star' />
                                                                </a>
                                                                <a href='#'>
                                                                    <i className='icon_star' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <div className='rating-form-style mb-20'>
                                                            <label>
                                                                Your review{" "}
                                                                <span>*</span>
                                                            </label>
                                                            <textarea
                                                                name='Your Review'
                                                                defaultValue={
                                                                    ""
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-12'>
                                                        <div className='form-submit'>
                                                            <input
                                                                type='submit'
                                                                defaultValue='Submit'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*related product*/}
            <div className='related-product pb-115'>
                <div className='container'>
                    <div className='section-title mb-45 text-center'>
                        <h2>Related Product</h2>
                    </div>
                    <div className='related-product-active'>
                        <Product />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetailPage;
