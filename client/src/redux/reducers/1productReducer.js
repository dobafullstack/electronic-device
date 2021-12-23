import { FETCH_PRODUCTS_SUCCESS } from "../actions/1productActions";

const initState = {
  products: [],
};

const productReducer = (state = initState, action) => {
  if (action.type === FETCH_PRODUCTS_SUCCESS) {
    return {
      ...state,
      products: action.payload,
    };
  }

  return state;
};

export default productReducer;
