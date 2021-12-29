import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { getDiscountPrice } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import VND from "../../helpers/VND";
import UnLogged from "../../components/checkout/UnLogged";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Logged from "../../components/checkout/Logged";
import { useState } from "react";
import { Formik } from "formik";
import Payment from "../../components/checkout/Payment";
import validateSchema from "../../helpers/validateCheckout";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useGetMyUserQuery } from "../../redux/reducers/authReducer";

const Checkout = ({ location, cartItems, currency }) => {
  const { pathname } = location;
  let cartTotalPrice = 0;
  const { isLogin } = useContext(AuthContext);
  const [selectedAddress, setSelectedAddress] = useState("");
  const { addToast } = useToasts();
  const history = useHistory();
  const [token] = useLocalStorage("access_token", "");

  const { data, isFetching } = useGetMyUserQuery(token);

  const initialValues = {
    name: "",
    phone: "",
    city: "",
    district: "",
    street: "",
    description: "",
    userId: null,
  };

  cartItems.map((cartItem) => {
    const discountedPrice = getDiscountPrice(cartItem.price, cartItem.discount);
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
      ? (cartTotalPrice += parseInt(finalDiscountedPrice))
      : (cartTotalPrice += parseInt(finalProductPrice));
  });

  const onSubmit = (values) => {
    history.push({
      pathname: "/checkout/payment",
      state: {
        values,
        cartItems,
        cartTotalPrice,
        currency,
      },
    });
  };

  if (isFetching)
    return (
      <div className="flone-preloader-wrapper">
        <div className="flone-preloader">
          <span></span>
          <span></span>
        </div>
      </div>
    );

  return (
    <Fragment>
      <MetaTags>
        <title>Tin Học Mặt Trăng | Checkout</title>
        <meta
          name="description"
          content="Checkout page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Checkout
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="checkout-area pt-95 pb-100">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <Formik
                initialValues={initialValues}
                enableReinitialize
                onSubmit={onSubmit}
                validationSchema={validateSchema}
              >
                {({
                  values,
                  handleChange,
                  handleSubmit,
                  setFieldValue,
                  errors,
                  touched,
                }) => (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                  >
                    <div className="row">
                      {!isLogin ? (
                        <UnLogged
                          values={values}
                          handleChange={handleChange}
                          setFieldValue={setFieldValue}
                          errors={errors}
                          touched={touched}
                        />
                      ) : (
                        <Logged
                          selectedAddress={selectedAddress}
                          setSelectedAddress={setSelectedAddress}
                          values={values}
                          handleChange={handleChange}
                          setFieldValue={setFieldValue}
                          data={data}
                        />
                      )}

                      <div className="col-lg-5">
                        <div className="your-order-area">
                          <h3>Your order</h3>
                          <div className="your-order-wrap gray-bg-4">
                            <div className="your-order-product-info">
                              <div className="your-order-top">
                                <ul>
                                  <li>Product</li>
                                  <li>Total</li>
                                </ul>
                              </div>
                              <div className="your-order-middle">
                                <ul>
                                  {cartItems.map((cartItem, key) => {
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

                                    return (
                                      <li key={key}>
                                        <span className="order-middle-left">
                                          {cartItem.name} X {cartItem.quantity}
                                        </span>{" "}
                                        <span className="order-price">
                                          {discountedPrice !== null
                                            ? VND(
                                                parseInt(finalDiscountedPrice)
                                              )
                                            : VND(parseInt(finalProductPrice))}
                                        </span>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                              <div className="your-order-bottom">
                                <ul>
                                  <li className="your-order-shipping">
                                    Shipping
                                  </li>
                                  <li>Free shipping</li>
                                </ul>
                              </div>
                              <div className="your-order-total">
                                <ul>
                                  <li className="order-total">Total</li>
                                  <li>{VND(cartTotalPrice)}</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="place-order mt-25">
                            <button className="btn-hover" type="submit">
                              Place Order
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cash"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No items found in cart to checkout <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Checkout.propTypes = {
  cartItems: PropTypes.array,
  currency: PropTypes.object,
  location: PropTypes.object,
};

export const onCreateOrder = (values) => {};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
    currency: state.currencyData,
  };
};

export default connect(mapStateToProps)(Checkout);
