import { combineReducers } from "@reduxjs/toolkit";

import { authApi } from "./api/auth.api";
import authSlice from "./slices/auth.slice";
import { profileApi } from "./api/profile.api";
import profileSlice from "./slices/profile.slice";




const apiReducers = {
  [authApi.reducerPath]: authApi.reducer,
  [profileApi.reducerPath]: profileApi.reducer,
};

const sliceReducers = {
  auth: authSlice,
  profile : profileSlice,
};

export const reducers = combineReducers({
  ...apiReducers,
  ...sliceReducers,
});
