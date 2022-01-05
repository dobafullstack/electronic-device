import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  defaultData: {
    orders: [],
    products: [],
    customers: [],
  },
  loading: false,
  error: {},
};

const defaultSlice = createSlice({
  name: 'defaultData',
  initialState,
  reducers: {
    getAllOrdersLoading(state) {
      state.loading = true;
    },
    getAllOrdersSuccess(state, { payload }) {
      state.defaultData.orders = payload;
      state.loading = false;
    },
    getAllOrdersFailed(state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
  },
});

export default defaultSlice.reducer;

export const { getAllOrdersLoading, getAllOrdersSuccess, getAllOrdersFailed } =
  defaultSlice.actions;
