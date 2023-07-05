import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { reducers } from './reducers';
import { authApi } from './api/auth.api';
// import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// setupListeners(store.dispatch);
