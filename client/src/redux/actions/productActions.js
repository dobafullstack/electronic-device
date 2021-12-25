import productApi from "../../api/productApi";
import {
  getAllBestSeller,
  getAllProducts,
  getAllNewArrival,
  getBestSellerByCategoryId,
  getNewArrivalByCategoryId,
  getProductByIdLoading,
  getProductByIdSuccess,
  getAllSaleItems,
  getAllSaleItemsByCategoryId,
} from "../reducers/productReducer";

export const getAllBestSellerAction = () => async (dispatch) => {
  try {
    const { code, result, error } = await productApi.getAllBestSeller();

    if (code !== 200 || error !== null) {
      console.log(result);
      console.log(error?.message);
    }

    dispatch(getAllBestSeller(result));
  } catch (error) {
    console.log(error);
  }
};

export const getBestSellerByCategoryIdAction =
  (categoryId) => async (dispatch) => {
    try {
      const { code, result, error } =
        await productApi.getBestSellerByCategoryId(categoryId);

      if (code !== 200 || error !== null) {
        console.log(result);
        console.log(error?.message);
      }

      dispatch(getBestSellerByCategoryId(result));
    } catch (error) {
      console.log(error);
    }
  };
export const getAllSaleItemsAction = () => async (dispatch) => {
  try {
    const { code, result, error } = await productApi.getAllSaleItems();

    if (code !== 200 || error !== null) {
      console.log(result);
      console.log(error?.message);
    }

    dispatch(getAllSaleItems(result));
  } catch (error) {
    console.log(error);
  }
};

export const getSaleItemsByCategoryIdAction =
  (categoryId) => async (dispatch) => {
    try {
      const { code, result, error } = await productApi.getSaleItemsByCategoryId(
        categoryId
      );

      if (code !== 200 || error !== null) {
        console.log(result);
        console.log(error?.message);
      }

      dispatch(getAllSaleItemsByCategoryId(result));
    } catch (error) {
      console.log(error);
    }
  };

export const getAllNewArrivalAction = () => async (dispatch) => {
  try {
    const { code, result, error } = await productApi.getAllNewArrival();

    if (code !== 200 || error !== null) {
      console.log(result);
      console.log(error?.message);
    }

    dispatch(getAllNewArrival(result));
  } catch (error) {
    console.log(error);
  }
};

export const getNewArrivalByCategoryIdAction =
  (categoryId) => async (dispatch) => {
    try {
      const { code, result, error } =
        await productApi.getNewArrivalByCategoryId(categoryId);

      if (code !== 200 || error !== null) {
        console.log(result);
        console.log(error?.message);
      }

      dispatch(getNewArrivalByCategoryId(result));
    } catch (error) {
      console.log(error);
    }
  };

export const getProductByIdAction = (productId) => async (dispatch) => {
  try {
    dispatch(getProductByIdLoading());
    const { code, result, error } = await productApi.getProductById(productId);

    if (code !== 200 || error !== null) {
      console.log(result);
      console.log(error?.message);
    }

    dispatch(getProductByIdSuccess(result));
  } catch (error) {
    console.log(error);
  }
};

export const getAllProductsAction = () => async (dispatch) => {
  try {
    const { code, result, error } = await productApi.getAllProducts();

    if (code !== 200 || error !== null) {
      console.log(result);
      console.log(error?.message);
    }

    dispatch(getAllProducts(result));
  } catch (error) {
    console.log(error);
  }
};

export const getProductsByCategoryIdAction =
  (categoryId) => async (dispatch) => {
    try {
      const { code, result, error } = await productApi.getProductsByCategoryId(
        categoryId
      );

      if (code !== 200 || error !== null) {
        console.log(result);
        console.log(error?.message);
      }

      dispatch(getAllProducts(result));
    } catch (error) {
      console.log(error);
    }
  };

export const getProductsByCategoryDetailIdAction =
  (categoryDetailId) => async (dispatch) => {
    try {
      const { code, result, error } =
        await productApi.getProductsByCategoryDetailId(categoryDetailId);

      if (code !== 200 || error !== null) {
        console.log(result);
        console.log(error?.message);
      }

      dispatch(getAllProducts(result));
    } catch (error) {
      console.log(error);
    }
  };
