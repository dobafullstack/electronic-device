import categoryApi from "../../api/categoryApi";
import { getAllCategory } from "../reducers/category.reducer";
import { AppDispatch } from "./../store";

export const getAllCategoryAction = () => async (dispatch: AppDispatch) => {
    try {
        const { code, result, error } = await categoryApi.getAllCategoryApi();

        if (code !== 200 || error !== null) {
            console.log(result);
        }

        dispatch(getAllCategory(result));
    } catch (error) {
        console.log(error);
    }
};
