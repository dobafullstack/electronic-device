import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: JSON.parse(localStorage.getItem('gogo_current_user')),
  loading: false,
  error: {
    message: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequired(state) {
      state.loading = true;
      state.currentUser = null;
    },
    loginSuccess(state, { payload }) {
      state.currentUser = payload;
      state.loading = false;
      state.error = initialState.error;
    },
    loginError(state, { payload }) {
      state.loading = false;
      state.error.message = payload.message;
    },
    logout(state, { payload }) {
      state.currentUser = null;
      localStorage.removeItem('gogo_current_user');
      payload.history.replace('/user/login');
    },
  },
});

export default authSlice.reducer;

export const { loginRequired, loginSuccess, loginError, logout } =
  authSlice.actions;
