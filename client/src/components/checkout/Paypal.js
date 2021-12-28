import React from "react";
import ReactDOM from "react-dom";
import { getDiscountPrice } from "../../helpers/product";
import { onPayment } from "../../pages/other/Payment";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function Paypal({
    values,
    cartItems,
    cartTotalPrice,
    currency,
    history,
    deleteAllFromCart,
}) {
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: `${(cartTotalPrice * 0.00004).toFixed(2)}`,
                    },
                    // items: cartItems.map((cartItem) => ({
                    //     name: cartItem.name,
                    //     quantity: cartItem.quantity,
                    // })),
                },
            ],
        });
    };

    const onApprove = (data, actions) => {
        onPayment(
            { values, cartItems, cartTotalPrice, currency },
            { status: true, method: "paypal" },
            history,
            deleteAllFromCart
        );

        return actions.order.capture();
    };

    const onCancel = (data, actions) => {
        history.replace("/checkout/fail");
    };

    return (
        <PayPalButton
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
            onCancel={(data, actions) => onCancel(data, actions)}
        />
    );
}
