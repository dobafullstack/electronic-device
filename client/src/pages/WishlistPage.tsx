import React from 'react'
import Breadcrumb from '../components/Common/Breadcrumb'
import VNDCurrency from '../configs/VNDCurrency';

const WishTable = () => {
    return (
        <form action="#">
            <div className="table-content table-responsive cart-table-content">
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Until Price</th>
                            <th>Count in Stock</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="product-thumbnail">
                                <a href="#"><img src="https://firebasestorage.googleapis.com/v0/b/electronic-device-34ea2.appspot.com/o/images%2Fasus1.jpg?alt=media&token=ce626078-6e26-480f-8725-6253e392a8cf" alt="" width='120px' height='auto'/></a>
                            </td>
                            <td className="product-name"><a href="#">Laptop Asus TUF Gaming FX506HCB</a></td>
                            <td className="product-price-cart"><span className="amount">{VNDCurrency(24190000)}</span></td>
                            <td className="product-quantity pro-details-quality">
                                <span className='amount'>10</span>
                            </td>
                            <td className="product-wishlist-cart">
                                <a href="#">add to cart</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </form>
    )
}

function WishlistPage() {
    const wishlist:any = true;
    return (
        <>
            <Breadcrumb prev='Home' current='Wishlist' />
            <div className="cart-main-area pt-115 pb-120">
                <div className="container">
                    <h3 className="cart-page-title">Your wishlist items</h3>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            {wishlist ? <WishTable /> : <h3>No items in wishlist</h3>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WishlistPage
