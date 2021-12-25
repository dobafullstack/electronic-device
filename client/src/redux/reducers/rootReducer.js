import currencyReducer from "./currencyReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import compareReducer from "./compareReducer";
import { combineReducers } from "redux";
import { createMultilanguageReducer } from "redux-multilanguage";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  multilanguage: createMultilanguageReducer({ currentLanguageCode: "en" }),
  currencyData: currencyReducer,
  cartData: cartReducer,
  wishlistData: wishlistReducer,
  compareData: compareReducer,
  productData: productReducer,
  categoryData: categoryReducer,
});

export default rootReducer;
