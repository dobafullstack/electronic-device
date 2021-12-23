import { getAllCategories } from "../reducers/categoryReducer";
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
