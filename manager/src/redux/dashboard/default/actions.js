import orderApi from '../../../api/orderApi';
import {
  getAllOrdersLoading,
  getAllOrdersSuccess,
  getAllOrdersFailed,
} from './reducers';

export const getAllOrdersAction = () => async (dispatch) => {
  try {
    dispatch(getAllOrdersLoading());
    const { result, error, code } = await orderApi.getAllOrders();

    if (code !== 200 || error !== null) {
      console.log(error);
    }
    dispatch(getAllOrdersSuccess(result));
  } catch (error) {
    console.log(error.response.data);
    if (error.response.data) {
      dispatch(
        getAllOrdersFailed({
          message: error.response.data.error.message,
        })
      );
    } else {
      dispatch(
        getAllOrdersFailed({
          message: error.message,
        })
      );
    }
  }
};
