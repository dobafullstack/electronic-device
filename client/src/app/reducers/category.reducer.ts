import {createSlice} from "@reduxjs/toolkit"
import Category from "../../models/Category";

const initialState: Category[] = []

const CategorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        getAllCategory(state, {payload}){
            state.splice(0, state.length)
            payload.forEach((item: Category) => state.push(item))
        }
    }
});

export default CategorySlice.reducer;

export const { getAllCategory } = CategorySlice.actions;