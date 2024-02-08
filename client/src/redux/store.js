import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./slice/authSlice";
import baseApi from "./api/baseApi";

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
