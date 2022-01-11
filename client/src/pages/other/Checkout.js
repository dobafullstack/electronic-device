import { Formik } from "formik";
import PropTypes from "prop-types";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import Logged from "../../components/checkout/Logged";
import UnLogged from "../../components/checkout/UnLogged";
import { AuthContext } from "../../Context/AuthContext";
import { getDiscountPrice } from "../../helpers/product";
import validateSchema from "../../helpers/validateCheckout";
import VND from "../../helpers/VND";
import Layout from "../../layouts/Layout";
import { useGetMyUserQuery } from "../../redux/reducers/authReducer";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const Checkout = ({ location, cartItems, currency }) => {
  const { pathname } = location;
  const { isLogin, token } = useContext(AuthContext);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const history = useHistory();
  const { data, isFetching } = useGetMyUserQuery(token);
  const {state} = useLocation();

  const initialValues = {
    name: "",
    phone: "",
    city: "",
    district: "",
    street: "",
    description: "",
    userId: null,
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
      const final = getDiscountPrice(total, state ? state.discount : 0);
      if (final !== null){

        setCartTotalPrice(getDiscountPrice(total, state.discount));
      }else{
        setCartTotalPrice(total);

      }
  }, []);

  const onSubmit = (values) => {
    console.log(state)
    history.push({
        pathname: "/checkout/payment",
        state: {
            values,
            cartItems,
            cartTotalPrice,
            currency,
            discount: state.discount,
            code: state.code
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
                  name='description'
                  content='Checkout page of Ecommerce Project by KTA.'
              />
          </MetaTags>
          <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
              Home
          </BreadcrumbsItem>
          <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
              Checkout
          </BreadcrumbsItem>
          <Layout headerTop='visible'>
              {/* breadcrumb */}
              <Breadcrumb />
              <div className='checkout-area pt-95 pb-100'>
                  <div className='container'>
                      {cartItems && cartItems.length >= 1 ? (
                          <Formik
                              initialValues={initialValues}
                              enableReinitialize
                              onSubmit={onSubmit}
                              validationSchema={validateSchema}>
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
                                      }}>
                                      <div className='row'>
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
                                                  selectedAddress={
                                                      selectedAddress
                                                  }
                                                  setSelectedAddress={
                                                      setSelectedAddress
                                                  }
                                                  values={values}
                                                  handleChange={handleChange}
                                                  setFieldValue={setFieldValue}
                                                  data={data}
                                                  errors={errors}
                                                  touched={touched}
                                              />
                                          )}

                                          <div className='col-lg-5'>
                                              <div className='your-order-area'>
                                                  <h3>Your order</h3>
                                                  <div className='your-order-wrap gray-bg-4'>
                                                      <div className='your-order-product-info'>
                                                          <div className='your-order-top'>
                                                              <ul>
                                                                  <li>
                                                                      Product
                                                                  </li>
                                                                  <li>Total</li>
                                                              </ul>
                                                          </div>
                                                          <div className='your-order-middle'>
                                                              <ul>
                                                                  {cartItems.map(
                                                                      (
                                                                          cartItem,
                                                                          key
                                                                      ) => {
                                                                          const discountedPrice =
                                                                              getDiscountPrice(
                                                                                  cartItem.price,
                                                                                  cartItem.discount
                                                                              );
                                                                          const finalProductPrice =
                                                                              (
                                                                                  cartItem.price *
                                                                                  cartItem.quantity *
                                                                                  currency.currencyRate
                                                                              ).toFixed(
                                                                                  2
                                                                              );
                                                                          const finalDiscountedPrice =
                                                                              (
                                                                                  discountedPrice *
                                                                                  cartItem.quantity *
                                                                                  currency.currencyRate
                                                                              ).toFixed(
                                                                                  2
                                                                              );

                                                                          return (
                                                                              <li
                                                                                  key={
                                                                                      key
                                                                                  }>
                                                                                  <span className='order-middle-left'>
                                                                                      {
                                                                                          cartItem.name
                                                                                      }{" "}
                                                                                      X{" "}
                                                                                      {
                                                                                          cartItem.quantity
                                                                                      }
                                                                                  </span>{" "}
                                                                                  <span className='order-price'>
                                                                                      {discountedPrice !==
                                                                                      null
                                                                                          ? VND(
                                                                                                parseInt(
                                                                                                    finalDiscountedPrice
                                                                                                )
                                                                                            )
                                                                                          : VND(
                                                                                                parseInt(
                                                                                                    finalProductPrice
                                                                                                )
                                                                                            )}
                                                                                  </span>
                                                                              </li>
                                                                          );
                                                                      }
                                                                  )}
                                                              </ul>
                                                          </div>
                                                          <div className='your-order-bottom'>
                                                              <ul>
                                                                  <li className='your-order-shipping'>
                                                                      Shipping
                                                                  </li>
                                                                  <li>
                                                                      Free
                                                                      shipping
                                                                  </li>
                                                              </ul>
                                                          </div>
                                                          { state && state.discount > 0 ? (
                                                              <div className='your-order-bottom'>
                                                                  <ul>
                                                                      <li className='your-order-shipping'>
                                                                          Discount
                                                                      </li>
                                                                      <li>
                                                                          {state.discount}%
                                                                      </li>
                                                                  </ul>
                                                              </div>
                                                          ) : null}
                                                          <div className='your-order-total'>
                                                              <ul>
                                                                  <li className='order-total'>
                                                                      Total
                                                                  </li>
                                                                  <li>
                                                                      {VND(
                                                                          cartTotalPrice
                                                                      )}
                                                                  </li>
                                                              </ul>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className='place-order mt-25'>
                                                      <button
                                                          className='btn-hover'
                                                          type='submit'>
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
                          <div className='row'>
                              <div className='col-lg-12'>
                                  <div className='item-empty-area text-center'>
                                      <div className='item-empty-area__icon mb-30'>
                                          <i className='pe-7s-cash'></i>
                                      </div>
                                      <div className='item-empty-area__text'>
                                          No items found in cart to checkout{" "}
                                          <br />{" "}
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
