import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuth: false, // Adding isAuth field
  status: 'idle',
  error: null,
  token: null,
  token_id: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuth = false; // Reset isAuth to false
      state.status = 'idle';
      state.error = null;
      state.token = null;
      state.token_id = null;
      localStorage.clear();
    },
    login: (state, action) => {
      state.user = action.payload.user;
      state.isAuth = true; // Set isAuth to true on successful login
      state.status = 'success';
      state.error = null;
      state.token = action.payload.token;
      state.token_id = action.payload.token_id;

      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token_id', action.payload.token_id);
      localStorage.setItem('status', 'success');
      localStorage.setItem('isAuth', true);
    },
    updateUser: (state, action) => {
      state.user = action.payload;
      state.status = 'success';
      state.error = null;
      state.token = localStorage.getItem('token');
      state.token_id = state.token_id;

      state.isAdmin = action.payload.isAdmin || false;
      localStorage.setItem('user', JSON.stringify(action.payload));
      localStorage.setItem('status', 'success');
    },
    deleteUser: (state, action) => {
      state.user = null;
      state.isAuth = false; // Reset isAuth to false
      state.status = 'success';
      state.error = null;
      state.token = null;
      state.token_id = null;
      localStorage.clear();
    },
    setError: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
      localStorage.setItem('status', 'error');
      localStorage.setItem('error', action.payload);
    },
  },
});

export const { logout, login, signup, updateUser, deleteUser, setError } =
  authSlice.actions;

export default authSlice.reducer;
