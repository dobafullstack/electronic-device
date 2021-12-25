import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  category: {},
  loading: true,
};

const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getAllCategoriesLoading(state) {
      state.loading = true;
    },
    getAllCategoriesSuccess(state, { payload }) {
      state.loading = false;
      state.categories.splice(0, state.categories.length);
      payload.forEach((item) => state.categories.push(item));
    },
    getCategoryById(state, { payload }) {
      state.category = payload;
    },
  },
});

export default CategorySlice.reducer;

export const {
  getAllCategoriesSuccess,
  getAllCategoriesLoading,
  getCategoryById,
} = CategorySlice.actions;
