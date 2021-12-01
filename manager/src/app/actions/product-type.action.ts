import productTypeApi from "../../api/productTypeApi";
import { getAllProductType } from "../reducers/product-type.reducer";
import { AppDispatch } from "../store";

export default class ProductTypeAction {
    public static GetAllProductTypes() {
        return async (dispatch: AppDispatch) => {
            try {
                const { code, result, error } =
                    await productTypeApi.getAllProductTypes();

                if (code !== 200 || error !== null) {
                    console.log(error?.message);
                }

                dispatch(getAllProductType(result));
            } catch (error: any) {
                console.log(error);
            }
        };
    }
}
