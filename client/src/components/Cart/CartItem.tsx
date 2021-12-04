import { SetStateAction } from "hoist-non-react-statics/node_modules/@types/react";
import React, { Dispatch } from "react";
import { useAppDispatch } from "../../app/hooks";
import { removeCart, updateCart } from "../../app/reducers/cart.reducer";
import VNDCurrency from "../../configs/VNDCurrency";
import Cart, { CartProducts } from "../../models/Cart";
import ProductModel from "../../models/Product";

interface CartItemProps {
    cart: CartProducts;
}

function CartItem({ cart }: CartItemProps) {
    const dispatch = useAppDispatch();

    const handleRemoveCart = (productId: string) => {
        dispatch(removeCart(productId));
    };

    return (
        <tr>
            <td className='product-thumbnail'>
                <a href='#'>
                    <img
                        src={cart.product.images[0]}
                        alt=''
                        width={98}
                        height={112}
                    />
                </a>
            </td>
            <td className='product-name'>
                <a href='#'>{cart.product.name}</a>
            </td>
            <td className='product-price-cart'>
                <span className='amount'>
                    {VNDCurrency(cart.product.price)}
                </span>
            </td>
            <td className='product-quantity pro-details-quality'>
                <div
                    className='cart-plus-minus'
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <div
                        className='minus'
                        style={{
                            width: 20,
                            height: 20,
                            backgroundColor: "#f0f4f6",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        onClick={() => {
                            dispatch(
                                updateCart({ _id: cart.product._id, count: -1 })
                            );
                        }}>
                        -
                    </div>
                    <input
                        className='cart-plus-minus-box'
                        type='text'
                        name='qtybutton'
                        disabled
                        style={{ width: 50 }}
                        value={cart.count}
                    />
                    <div
                        className='plus'
                        style={{
                            width: 20,
                            height: 20,
                            backgroundColor: "#f0f4f6",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        onClick={() =>
                            dispatch(
                                updateCart({ _id: cart.product._id, count: 1 })
                            )
                        }>
                        +
                    </div>
                </div>
            </td>
            <td className='product-subtotal'>
                {VNDCurrency(cart.product.price * cart.count)}
            </td>
            <td className='product-remove'>
                <a
                    href='javascript:;'
                    onClick={() => handleRemoveCart(cart.product._id)}>
                    <i className='icon_close' />
                </a>
            </td>
        </tr>
    );
}

export default CartItem;
