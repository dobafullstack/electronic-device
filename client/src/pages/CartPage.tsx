import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosClient from "../api/axiosClient";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { clearCart } from "../app/reducers/cart.reducer";
import CartItem from "../components/Cart/CartItem";
import Breadcrumb from "../components/Common/Breadcrumb";
import VNDCurrency from "../configs/VNDCurrency";
import { CITY_API } from "../constant";
import City from "../models/City";

function CartPage() {
    const dispatch = useAppDispatch();
    const cart = useAppSelector((state) => state.cart);
    const [cities, setCities] = useState<City[]>([]);
    const [selectedCity, setSelectedCity] = useState<string>("Hà Nội");
    const [selectedDistrict, setSelectedDistrict] =
        useState<string>("Quận Ba Đình");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();
    // const [selectedShipping, setSelectedShipping] = useState<'standard' | 'express'>('standard');

    useEffect(() => {
        const fetchCity = async () => {
            const data: City[] = await axiosClient.get(`${CITY_API}`);
            console.log(data);
            setCities(data);
        };

        fetchCity();
    }, []);

    const handleCheckout = () => {
        if (address === "") {
            toast.error("Address can not null");
            return;
        }

        navigate("/checkout", {
            state: {
                address: `${address}, ${selectedDistrict}, ${selectedCity}`,
            },
        });
    };

    if (cart.products.length === 0)
        return (
            <div>
                <p style={{ textAlign: "center", fontSize: 40 }}>
                    You do not buy anything
                </p>
            </div>
        );
    return (
        <>
            <Breadcrumb prev='Home' current='Cart' />
            <div className='cart-main-area pt-115 pb-120'>
                <div className='container'>
                    <h3 className='cart-page-title'>Your cart items</h3>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                            <form action='#'>
                                <div className='table-content table-responsive cart-table-content'>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Product Name</th>
                                                <th>Until Price</th>
                                                <th>Qty</th>
                                                <th>Subtotal</th>
                                                <th>action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.products.map((cart) => (
                                                <CartItem cart={cart} />
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='cart-shiping-update-wrapper'>
                                            <div className='cart-shiping-update'>
                                                <Link to='/'>
                                                    Continue Shopping
                                                </Link>
                                            </div>
                                            <div className='cart-clear'>
                                                {/* <button>Update Cart</button> */}
                                                <a
                                                    href='javascript:;'
                                                    onClick={() =>
                                                        dispatch(clearCart())
                                                    }>
                                                    Clear Cart
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className='row'>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='cart-tax'>
                                        <div className='title-wrap'>
                                            <h4 className='cart-bottom-title section-bg-gray'>
                                                Estimate Shipping And Tax
                                            </h4>
                                        </div>
                                        <div className='tax-wrapper'>
                                            <p>
                                                Enter your destination to get a
                                                shipping estimate.
                                            </p>
                                            <div className='tax-select-wrapper'>
                                                <div className='tax-select'>
                                                    <label>* City</label>
                                                    <select
                                                        className='email s-email s-wid'
                                                        onChange={(e) =>
                                                            setSelectedCity(
                                                                e.target.value
                                                            )
                                                        }>
                                                        {cities.map(
                                                            (city: any) => (
                                                                <option
                                                                    key={
                                                                        city.key
                                                                    }
                                                                    value={
                                                                        city.name
                                                                    }>
                                                                    {city.name}
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>
                                                <div className='tax-select'>
                                                    <label>* District</label>
                                                    <select
                                                        className='email s-email s-wid'
                                                        onChange={(e) =>
                                                            setSelectedDistrict(
                                                                e.target.value
                                                            )
                                                        }>
                                                        {cities.length > 0 &&
                                                            cities
                                                                .filter(
                                                                    (city) =>
                                                                        city.name ===
                                                                        selectedCity
                                                                )[0]
                                                                .district.map(
                                                                    (dis) => (
                                                                        <option
                                                                            key={
                                                                                dis.key
                                                                            }
                                                                            value={
                                                                                dis.name
                                                                            }>
                                                                            {
                                                                                dis.name
                                                                            }
                                                                        </option>
                                                                    )
                                                                )}
                                                    </select>
                                                </div>
                                                <div className='tax-select'>
                                                    <label>* Address</label>
                                                    <input
                                                        type='text'
                                                        placeholder='Address'
                                                        onChange={(e) =>
                                                            setAddress(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                                {/* <button
                                                    className='cart-btn-2'
                                                    type='submit'>
                                                    Get A Quote
                                                </button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='discount-code-wrapper'>
                                        <div className='title-wrap'>
                                            <h4 className='cart-bottom-title section-bg-gray'>
                                                Use Coupon Code
                                            </h4>
                                        </div>
                                        <div className='discount-code'>
                                            <p>
                                                Enter your coupon code if you
                                                have one.
                                            </p>
                                            <form>
                                                <input
                                                    type='text'
                                                    required
                                                    name='name'
                                                />
                                                <button
                                                    className='cart-btn-2'
                                                    type='submit'>
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
                                                {VNDCurrency(cart.total)}
                                            </span>
                                        </h5>
                                        <div className='total-shipping'>
                                            <h5>Total shipping</h5>
                                            <ul>
                                                {/* <li>
                                                    <input
                                                        type='radio'
                                                        name='shipping'
                                                        checked={selectedShipping === 'standard'}
                                                        onClick={() => setSelectedShipping('standard')}
                                                    />
                                                    Standard <span>{VNDCurrency(10000)}</span>
                                                </li>
                                                <li>
                                                    <input
                                                        type='radio'
                                                        name='shipping'
                                                        checked={selectedShipping === 'express'}
                                                        onClick={() => setSelectedShipping('express')}
                                                    />
                                                    Express <span>{VNDCurrency(20000)}</span>
                                                </li> */}
                                                <li>
                                                    <p>Free Shipping</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4 className='grand-totall-title'>
                                            Grand Total{" "}
                                            <span>
                                                {VNDCurrency(cart.total)}
                                            </span>
                                        </h4>
                                        <a
                                            href='javascript:void;'
                                            onClick={() => handleCheckout()}>
                                            Proceed to Checkout
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartPage;
