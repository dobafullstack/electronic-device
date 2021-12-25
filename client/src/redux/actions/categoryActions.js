import { getAllCategories, getCategoryById } from "../reducers/categoryReducer";
import categoryApi from "../../api/categoryApi";

export const getAllCategoriesAction = () => async (dispatch) => {
  try {
    const { code, result, error } = await categoryApi.getAllCategories();

    if (code !== 200 || error !== null) {
      console.log(result);
      console.log(error?.message);
    }

    dispatch(getAllCategories(result));
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
