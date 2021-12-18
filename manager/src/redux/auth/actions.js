import authApi from 'api/authApi';
import { setCurrentUser } from 'helpers/Utils';
import { loginError, loginRequired, loginSuccess } from './reducer';

export const loginAction =
  (usernameOrEmail, password, history) => async (dispatch) => {
    try {
      dispatch(loginRequired());
      const { result, error, code } = await authApi.login(
        usernameOrEmail,
        password
      );

      if (code !== 200 || error !== null) {
        dispatch(loginError(error));
        return;
      }

      const {
        result: getUserResult,
        error: getUserError,
        code: getUserCode,
      } = await authApi.getUser(result.accessToken);

      if (getUserCode !== 200 || getUserError !== null) {
        dispatch(loginError(error));
        return;
      }

      if (
        getUserResult.role_id.name === 'admin' ||
        getUserResult.role_id.name === 'staff'
      ) {
        localStorage.setItem('access_token', result.accessToken);
        dispatch(loginSuccess(getUserResult));
        setCurrentUser(getUserResult);
        history.replace('/');
      } else {
        dispatch(loginError({ message: 'You do not have permission' }));
      }
    } catch (error) {
      console.log(error.response.data);
      if (error.response.data) {
        dispatch(
          loginError({
            message: error.response.data.error.message,
          })
        );
      } else {
        dispatch(
          loginError({
            message: error.message,
          })
        );
      }
    }
  };

export const registerAction = () => () => {};
