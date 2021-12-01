import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import productTypeReducer from "./reducers/product-type.reducer";

export const store = configureStore({
    reducer: {
        productType: productTypeReducer
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
