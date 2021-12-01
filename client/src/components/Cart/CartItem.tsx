import React from 'react'

function CartItem() {
    return (
        <tr>
            <td className="product-thumbnail">
                <a href="#"><img src="assets/images/cart/cart-1.jpg" alt="" /></a>
            </td>
            <td className="product-name"><a href="#">Simple Black T-Shirt</a></td>
            <td className="product-price-cart"><span className="amount">$260.00</span></td>
            <td className="product-quantity pro-details-quality">
                <div className="cart-plus-minus">
                <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue={1} />
                </div>
            </td>
            <td className="product-subtotal">$110.00</td>
            <td className="product-remove">
                <a href="#"><i className="icon_close" /></a>
            </td>
        </tr>
    )
}

export default CartItem
