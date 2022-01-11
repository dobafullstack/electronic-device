import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import {
    addToCart,
    decreaseQuantity,
    deleteFromCart,
    deleteAllFromCart,
} from "../../redux/actions/cartActions";
import Layout from "../../layouts/Layout";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import VND from "../../helpers/VND";
import discountApi from "../../api/discountApi";

const Cart = ({
    location,
    cartItems,
    currency,
    decreaseQuantity,
    addToCart,
    deleteFromCart,
    deleteAllFromCart,
}) => {
    const [quantityCount] = useState(1);
    const { addToast } = useToasts();
    const { pathname } = location;
    const [cartTotalPrice, setCartTotalPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [code, setCode] = useState("");
    const [disabledDiscount, setDisabledDiscount] = useState(false);

    const applyCoupon = async () => {
        try {
            const { result } = await discountApi.verifyDiscount(code);
            if (result.active) {
                setDiscount(result.discount_value);
                setDisabledDiscount(true);
                addToast("Apply discount successfully", {
                    appearance: "success",
                    autoDismiss: true,
                });
            } else {
                addToast("Discount was expire", {
                    appearance: "error",
                    autoDismiss: true,
                });
                setCode('')
            }
        } catch (error) {
            console.log(error);
            addToast("Apply discount failed", {
                appearance: "error",
                autoDismiss: true,
            });
        }
    };

    useEffect(() => {
        let total = 0;
        cartItems.forEach((cartItem) => {
            const discountedPrice = getDiscountPrice(
                cartItem.price,
                cartItem.discount
            );
            const finalProductPrice = (
                cartItem.price *
                cartItem.quantity *
                currency.currencyRate
            ).toFixed(2);
            const finalDiscountedPrice = (
                discountedPrice *
                cartItem.quantity *
                currency.currencyRate
            ).toFixed(2);
            discountedPrice !== null
                ? (total += parseInt(finalDiscountedPrice))
                : (total += parseInt(finalProductPrice));
        });
        setCartTotalPrice(total);
    }, []);

    useEffect(() => {
        if (cartTotalPrice !== 0) {
            const finalDiscountPrice = getDiscountPrice(
                cartTotalPrice,
                discount
            );

            setCartTotalPrice(finalDiscountPrice);
        }
    }, [discount]);

    return (
        <Fragment>
            <MetaTags>
                <title>Flone | Cart</title>
                <meta
                    name='description'
                    content='Cart page of Ecommerce Project by KTA.'
                />
            </MetaTags>

            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
                Home
            </BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
                Cart
            </BreadcrumbsItem>

            <Layout headerTop='visible'>
                {/* breadcrumb */}
                <Breadcrumb />
                <div className='cart-main-area pt-90 pb-100'>
                    <div className='container'>
                        {cartItems && cartItems.length >= 1 ? (
                            <Fragment>
                                <h3 className='cart-page-title'>
                                    Your cart items
                                </h3>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='table-content table-responsive cart-table-content'>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Image</th>
                                                        <th>Product Name</th>
                                                        <th>Unit Price</th>
                                                        <th>Qty</th>
                                                        <th>Subtotal</th>
                                                        <th>action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {cartItems.map(
                                                        (cartItem, key) => {
                                                            const discountedPrice =
                                                                getDiscountPrice(
                                                                    cartItem.price,
                                                                    cartItem.discount
                                                                );
                                                            const finalProductPrice =
                                                                (
                                                                    cartItem.price *
                                                                    currency.currencyRate
                                                                ).toFixed(2);
                                                            const finalDiscountedPrice =
                                                                (
                                                                    discountedPrice *
                                                                    currency.currencyRate
                                                                ).toFixed(2);
                                                            return (
                                                                <tr key={key}>
                                                                    <td className='product-thumbnail'>
                                                                        <Link
                                                                            to={
                                                                                process
                                                                                    .env
                                                                                    .PUBLIC_URL +
                                                                                "/product/" +
                                                                                cartItem.id
                                                                            }>
                                                                            <img
                                                                                className='img-fluid'
                                                                                src={
                                                                                    process
                                                                                        .env
                                                                                        .PUBLIC_URL +
                                                                                    cartItem
                                                                                        .images[0]
                                                                                }
                                                                                alt=''
                                                                            />
                                                                        </Link>
                                                                    </td>

                                                                    <td className='product-name'>
                                                                        <Link
                                                                            to={
                                                                                process
                                                                                    .env
                                                                                    .PUBLIC_URL +
                                                                                "/product/" +
                                                                                cartItem.id
                                                                            }>
                                                                            {
                                                                                cartItem.name
                                                                            }
                                                                        </Link>
                                                                        {cartItem.selectedProductColor &&
                                                                        cartItem.selectedProductSize ? (
                                                                            <div className='cart-item-variation'>
                                                                                <span>
                                                                                    Color:{" "}
                                                                                    {
                                                                                        cartItem.selectedProductColor
                                                                                    }
                                                                                </span>
                                                                                <span>
                                                                                    Size:{" "}
                                                                                    {
                                                                                        cartItem.selectedProductSize
                                                                                    }
                                                                                </span>
                                                                            </div>
                                                                        ) : (
                                                                            ""
                                                                        )}
                                                                    </td>

                                                                    <td className='product-price-cart'>
                                                                        {discountedPrice !==
                                                                        null ? (
                                                                            <Fragment>
                                                                                <span className='amount old'>
                                                                                    {VND(
                                                                                        parseInt(
                                                                                            finalProductPrice
                                                                                        )
                                                                                    )}
                                                                                </span>
                                                                                <span className='amount'>
                                                                                    {VND(
                                                                                        parseInt(
                                                                                            finalDiscountedPrice
                                                                                        )
                                                                                    )}
                                                                                </span>
                                                                            </Fragment>
                                                                        ) : (
                                                                            <span className='amount'>
                                                                                {VND(
                                                                                    parseInt(
                                                                                        finalProductPrice
                                                                                    )
                                                                                )}
                                                                            </span>
                                                                        )}
                                                                    </td>

                                                                    <td className='product-quantity'>
                                                                        <div className='cart-plus-minus'>
                                                                            <button
                                                                                className='dec qtybutton'
                                                                                onClick={() =>
                                                                                    decreaseQuantity(
                                                                                        cartItem,
                                                                                        addToast
                                                                                    )
                                                                                }>
                                                                                -
                                                                            </button>
                                                                            <input
                                                                                className='cart-plus-minus-box'
                                                                                type='text'
                                                                                value={
                                                                                    cartItem.quantity
                                                                                }
                                                                                readOnly
                                                                            />
                                                                            <button
                                                                                className='inc qtybutton'
                                                                                onClick={() =>
                                                                                    addToCart(
                                                                                        cartItem,
                                                                                        addToast,
                                                                                        quantityCount
                                                                                    )
                                                                                }
                                                                                disabled={
                                                                                    cartItem.count ===
                                                                                    cartItem.quantity
                                                                                }>
                                                                                +
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                    <td className='product-subtotal'>
                                                                        {discountedPrice !==
                                                                        null
                                                                            ? VND(
                                                                                  parseInt(
                                                                                      finalDiscountedPrice
                                                                                  ) *
                                                                                      cartItem.quantity
                                                                              )
                                                                            : VND(
                                                                                  parseInt(
                                                                                      finalProductPrice
                                                                                  ) *
                                                                                      cartItem.quantity
                                                                              )}
                                                                    </td>

                                                                    <td className='product-remove'>
                                                                        <button
                                                                            onClick={() =>
                                                                                deleteFromCart(
                                                                                    cartItem,
                                                                                    addToast
                                                                                )
                                                                            }>
                                                                            <i className='fa fa-times'></i>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        }
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='cart-shiping-update-wrapper'>
                                            <div className='cart-shiping-update'>
                                                <Link
                                                    to={
                                                        process.env.PUBLIC_URL +
                                                        "/shop-grid-standard"
                                                    }>
                                                    Continue Shopping
                                                </Link>
                                            </div>
                                            <div className='cart-clear'>
                                                <button
                                                    onClick={() =>
                                                        deleteAllFromCart(
                                                            addToast
                                                        )
                                                    }>
                                                    Clear Shopping Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row justify-content-end'>
                                    <div className='col-lg-4 col-md-6'>
                                        <div className='discount-code-wrapper'>
                                            <div className='title-wrap'>
                                                <h4 className='cart-bottom-title section-bg-gray'>
                                                    Use Coupon Code
                                                </h4>
                                            </div>
                                            <div className='discount-code'>
                                                <p>
                                                    Enter your coupon code if
                                                    you have one.
                                                </p>
                                                <form
                                                    onSubmit={(e) =>
                                                        e.preventDefault()
                                                    }>
                                                    <input
                                                        type='text'
                                                        required
                                                        name='name'
                                                        disabled={
                                                            disabledDiscount
                                                        }
                                                        value={code}
                                                        onChange={(e) =>
                                                            setCode(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <button
                                                        className='cart-btn-2'
                                                        disabled={
                                                            disabledDiscount
                                                        }
                                                        onClick={() =>
                                                            applyCoupon()
                                                        }>
                                                        Apply Coupon
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-lg-4 col-md-12'>
                                        <div className='grand-totall'>
                                            <div className='title-wrap'>
                                                <h4 className='cart-bottom-title section-bg-gary-cart'>
                                                    Cart Total
                                                </h4>
                                            </div>
                                            <h5>
                                                Total products{" "}
                                                <span>
                                                    {VND(cartTotalPrice)}
                                                </span>
                                            </h5>

                                            <h4 className='grand-totall-title'>
                                                Grand Total{" "}
                                                <span>
                                                    {VND(cartTotalPrice)}
                                                </span>
                                            </h4>
                                            <Link
                                                to={{
                                                    pathname:
                                                        process.env.PUBLIC_URL +
                                                        "/checkout",
                                                    state: {
                                                        discount,
                                                        code,
                                                    },
                                                }}>
                                                Proceed to Checkout
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        ) : (
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='item-empty-area text-center'>
                                        <div className='item-empty-area__icon mb-30'>
                                            <i className='pe-7s-cart'></i>
                                        </div>
                                        <div className='item-empty-area__text'>
                                            No items found in cart <br />{" "}
                                            <Link
                                                to={
                                                    process.env.PUBLIC_URL +
                                                    "/shop-grid-standard"
                                                }>
                                                Shop Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Layout>
        </Fragment>
    );
};

Cart.propTypes = {
    addToCart: PropTypes.func,
    cartItems: PropTypes.array,
    currency: PropTypes.object,
    decreaseQuantity: PropTypes.func,
    location: PropTypes.object,
    deleteAllFromCart: PropTypes.func,
    deleteFromCart: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartData,
        currency: state.currencyData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item, addToast, quantityCount) => {
            dispatch(addToCart(item, addToast, quantityCount));
        },
        decreaseQuantity: (item, addToast) => {
            dispatch(decreaseQuantity(item, addToast));
        },
        deleteFromCart: (item, addToast) => {
            dispatch(deleteFromCart(item, addToast));
        },
        deleteAllFromCart: (addToast) => {
            dispatch(deleteAllFromCart(addToast));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
