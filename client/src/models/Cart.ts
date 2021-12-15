import ProductModel from "./Product";

export type CartProducts = {
    product: ProductModel;
    count: number;
}

type Cart = {
    products: CartProducts[];
    total: number;
};

export default Cart;