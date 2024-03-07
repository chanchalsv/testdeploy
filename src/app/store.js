// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import authReducer from '../features/authSlice';
import titleSlice from "../features/addImageSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    title: titleSlice,
  },
});


