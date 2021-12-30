import React, { Fragment, useState } from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { MetaTags } from "react-meta-tags";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import orderApi from "../../api/orderApi";
import paypalImg from "../../assets/images/paypal.png";
import Paypal from "../../components/checkout/Paypal";
import { getDiscountPrice } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import { deleteAllFromCart } from "../../redux/actions/cartActions";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const PaymentItem = styled.div`
    border: 1px solid #d3d3d3;
    width: 150px;
    height: 150px;
    border-radius: 8px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    padding: 8px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
`;

const Success = styled.i`
    position: absolute;
    top: -10px;
    right: -10px;
    font-size: 30px;
    background-color: white;
`;

export const onPayment = (
    { values, cartItems, cartTotalPrice, currency },
    payment,
    history,
    deleteAllFromCart
) => {
    const productItems = cartItems.map((cartItem) => {
        const discountedPrice = getDiscountPrice(
            cartItem.price,
            cartItem.discount
        );
        const finalProductPrice = cartItem.price * currency.currencyRate;
        const finalDiscountedPrice = discountedPrice * currency.currencyRate;

        return {
            productItem: {
                ...cartItem,
                price:
                    discountedPrice === null
                        ? finalProductPrice
                        : finalDiscountedPrice,
                category_detail_id: cartItem.category_detail_id._id,
            },
            quantity: cartItem.quantity,
        };
    });

    const order = {
        userId: values.userId !== null ? values.userId : undefined,
        productItems,
        delivery: {
            name: values.name,
            phone: values.phone,
            address: `${values.street} ${values.district} ${values.city}`,
        },
        payment,
        description: values.description,
        total: cartTotalPrice,
    };
    const createOrder = async () => {
        try {
            const { code } = await orderApi.createOrder(order);

            if (code === 201) {
                history.replace("/checkout/success");
                localStorage.removeItem("cartData");
                deleteAllFromCart()
            }
        } catch (error) {
            console.log(error);
            history.replace("/checkout/fail");
        }
    };

    createOrder();
};

const Payment = ({ location, deleteAllFromCart }) => {
    const { pathname } = location;
    const history = useHistory();
    const {
        state: { values, cartItems, cartTotalPrice, currency },
    } = useLocation();
    const [payment, setPayment] = useState("cash");

    return (
        <Fragment>
            <MetaTags>
                <title>Tin Học Mặt Trăng | Checkout</title>
                <meta
                    name='description'
                    content='Checkout page of flone react minimalist eCommerce template.'
                />
            </MetaTags>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
                Home
            </BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/checkout"}>
                Checkout
            </BreadcrumbsItem>
            <BreadcrumbsItem
                to={process.env.PUBLIC_URL + "/checkout" + pathname}>
                Payment
            </BreadcrumbsItem>
            <LayoutOne headerTop='visible'>
                <Breadcrumb />
                <div
                    className='checkout-area pt-95 pb-100'
                    style={{ minHeight: "calc(100vh - 377px - 141px)" }}>
                    <div
                        className='container d-flex justify-content-center'
                        style={{ gap: 20 }}>
                        <PaymentItem onClick={() => setPayment("cash")}>
                            <div
                                style={{ flexGrow: 1 }}
                                className='d-flex align-items-center justify-content-center'>
                                <img
                                    src='https://cdn-icons-png.flaticon.com/512/438/438526.png'
                                    alt=''
                                    width={"75%"}
                                />
                            </div>
                            <p style={{ fontSize: 20 }}>Cash</p>
                            {payment === "cash" && (
                                <Success className='fas fa-check-circle text-success'></Success>
                            )}
                        </PaymentItem>
                        <PaymentItem onClick={() => setPayment("paypal")}>
                            <div
                                style={{ flexGrow: 1 }}
                                className='d-flex align-items-center justify-content-center'>
                                <img src={paypalImg} alt='' width={"100%"} />
                            </div>
                            <p style={{ fontSize: 20 }}>Paypal</p>
                            {payment === "paypal" && (
                                <Success className='fas fa-check-circle text-success'></Success>
                            )}
                        </PaymentItem>
                    </div>
                    <div className='mt-5 container d-flex justify-content-center '>
                        {payment === "paypal" && (
                            <Paypal
                                values={values}
                                cartItems={cartItems}
                                cartTotalPrice={cartTotalPrice}
                                currency={currency}
                                history={history}
                                deleteAllFromCart={deleteAllFromCart}
                            />
                        )}
                        {payment === "cash" && (
                            <>
                                <div className='place-order mt-25'>
                                    <button
                                        className='btn btn-success'
                                        onClick={() =>
                                            onPayment(
                                                {
                                                    values,
                                                    cartItems,
                                                    cartTotalPrice,
                                                    currency,
                                                },
                                                {
                                                    status: false,
                                                    method: "cash",
                                                },
                                                history,
                                                deleteAllFromCart
                                            )
                                        }>
                                        Hoàn thành
                                    </button>
                                </div>
                            </>
                        )}

                        {payment === "atm" && (
                            <>
                                <div className='place-order mt-25'>
                                    <button className='btn btn-primary'>
                                        Thanh toán
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        deleteAllFromCart: () => {
            dispatch(deleteAllFromCart());
        },
    };
}

export default connect(null, mapDispatchToProps)(Payment)