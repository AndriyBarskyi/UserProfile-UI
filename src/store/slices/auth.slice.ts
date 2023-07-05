import { AuthType } from "./../../types/AuthType";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: AuthType = {
  token: null,
  isAuth: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthType>) => {
      state.token = action.payload.token;
      state.isAuth = true;
      localStorage.setItem("token", JSON.stringify(state.token));
    },
    logOut: (state) => {
      state.isAuth = false;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const authActions = slice.actions;

export default slice.reducer;
