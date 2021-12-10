import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import { useAppSelector } from "../../app/hooks";
import PaypalOrder from "../../models/PaypalOrder";


interface Props {}

const PayPalButton = (window as any).paypal.Buttons.driver("react", {
    React,
    ReactDOM,
});

export default function Paypal({}: Props): ReactElement {
    const cart = useAppSelector((state) => state.cart);
    const total = parseInt((cart.total * 0.00004).toFixed());
    const tax = parseInt((cart.total * 0.00004 * 0.01).toFixed());
    const shipping = parseInt((10000 * 0.00004).toFixed());

    const order: PaypalOrder = {
        purchase_units: [
            {
                reference_id: "Test",
                description: "Some thing",
                amount: {
                    value: total + tax + shipping,
                    currency_code: "USD",
                    breakdown: {
                        item_total: {
                            currency_code: "USD",
                            value: total,
                        },
                        tax_total: {
                            currency_code: "USD",
                            value: tax,
                        },
                        shipping: {
                            currency_code: "USD",
                            value: shipping,
                        },
                    },
                },
                items: cart.products.map((product) => ({
                    name: product.product.name,
                    quantity: product.count,
                    unit_amount: {
                        currency_code: "USD",
                        value: parseInt(
                            (product.product.price * 0.00004).toFixed()
                        ),
                    },
                    sku: product.product.name,
                })),
            },
        ],
    };

    console.log(order);

    const createOrder = (data: any, actions: any) => {
        return actions.order.create(order);
    };

    const onApprove = (data: any, actions: any) => {
        //success
        alert('Success')


        return actions.order.capture();
    };

    const onCancel = (data: any) => {
        //fail

        alert('fail ' + data)
    }

    return (
        <PayPalButton
            createOrder={(data: any, actions: any) =>
                createOrder(data, actions)
            }
            onApprove={(data: any, actions: any) => onApprove(data, actions)}
            onCancel={(data: any) => onCancel(data)}
        />
    );
}
