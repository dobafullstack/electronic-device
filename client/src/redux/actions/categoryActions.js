import {
  getAllCategoriesSuccess,
  getCategoryById,
  getAllCategoriesLoading,
} from "../reducers/categoryReducer";
import categoryApi from "../../api/categoryApi";

export const getAllCategoriesAction = () => async (dispatch) => {
  try {
    dispatch(getAllCategoriesLoading());
    const { code, result, error } = await categoryApi.getAllCategoryApi();

    if (code !== 200 || error !== null) {
      console.log(result);
      console.log(error?.message);
    }

    dispatch(getAllCategoriesSuccess(result));
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryByIdAction = (id) => async (dispatch) => {
  if (id !== 0) {
    try {
      const { code, result, error } = await categoryApi.getCategoryById(id);

      if (code !== 200 || error !== null) {
        console.log(result);
        console.log(error?.message);
      }

      dispatch(getCategoryById(result));
    } catch (error) {
      console.log(error);
    }
  } else {
    dispatch(getCategoryById({ name: "Shop" }));
  }
};
