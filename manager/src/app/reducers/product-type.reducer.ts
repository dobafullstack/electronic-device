import { createSlice } from '@reduxjs/toolkit'
import ProductType from '../../types/ProductType';

const initialState: ProductType[] = []

const productTypeSlice = createSlice({
    name: 'productType',
    initialState,
    reducers: {
        getAllProductType: (state, {payload}) => {
            payload.forEach((item: ProductType) => state.push(item))
        }
    },
});

export default productTypeSlice.reducer;

export const { getAllProductType } = productTypeSlice.actions;
