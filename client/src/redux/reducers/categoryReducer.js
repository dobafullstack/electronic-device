import { createSlice } from "@reduxjs/toolkit";

const initState = [];

const CategorySlice = createSlice({
  name: "category",
  initState,
  reducers: {
    getAllCategories(state, { payload }) {
      state.splice(0, state.length);
      payload.forEach((item) => state.push(item));
    },
  },
});

export default CategorySlice.reducer;

export const { getAllCategories } = CategorySlice.actions;
