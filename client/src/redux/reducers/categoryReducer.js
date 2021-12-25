import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  category: {},
};

const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getAllCategories(state, { payload }) {
      state.splice(0, state.length);
      payload.forEach((item) => state.categories.push(item));
    },
    getCategoryById(state, { payload }) {
      state.category = payload;
    },
  },
});

export default CategorySlice.reducer;

export const { getAllCategories, getCategoryById } = CategorySlice.actions;
