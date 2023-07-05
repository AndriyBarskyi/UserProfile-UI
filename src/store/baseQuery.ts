import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { RootState } from ".";

const REACT_APP_API_BACKEND_URL = "http://localhost:8080/api/v1";

export const baseQuery = fetchBaseQuery({
  baseUrl: REACT_APP_API_BACKEND_URL,
  prepareHeaders: (headers, { getState }) => {
    headers.set("Accept", "application/json");
    const token = (getState() as RootState).auth.token;
    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
