import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import categoryReducer from './reducers/category.reducer';
import productReducer from './reducers/product.reducer';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
