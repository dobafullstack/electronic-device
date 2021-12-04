import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import Cart from '../../models/Cart'
import ProductModel from '../../models/Product';

const initialState: Cart = {
    products: [],
    total: 0
}

type UpdateCart = {
    _id: string;
    count: 1 | -1;
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, { payload }: PayloadAction<ProductModel>) {
            if (state.products.length === 0){ //cart is null
                state.products.push({
                    product: payload,
                    count: 1
                })
                state.total += payload.price;
            }else{ //cart is not null
                const index = state.products.findIndex(product => product.product._id === payload._id);

                if (index >= 0){ //already have in cart
                    state.products[index].count += 1;
                    state.total += state.products[index].product.price;
                }else{ //do not have in cart (index === -1)
                    state.products.push({
                        product: payload,
                        count: 1,
                    });
                    state.total += payload.price;
                }
            }
        },
        updateCart(state, { payload }: PayloadAction<UpdateCart>) {
            const index = state.products.findIndex(product => product.product._id === payload._id);

            console.log(payload.count)

            if (state.products[index].count === 1 && payload.count === -1){
                return;
            }

            state.products[index].count += payload.count;
            state.total += state.products[index].product.price * payload.count
        },
        removeCart(state, { payload }: PayloadAction<string>) {
            const index = state.products.findIndex(item => item.product._id === payload);
            state.total -= state.products[index].product.price * state.products[index].count;
            state.products = state.products.filter(product => product.product._id !== payload)
        },
        clearCart(state){
            state.products = [];
            state.total = 0;
        }
    },
});

export default cartSlice.reducer;

export const { addToCart, updateCart, removeCart, clearCart } = cartSlice.actions;