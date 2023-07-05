import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { authActions } from "../store/slices/auth.slice";
import { profileActions } from "../store/slices/profile.slice";

const allActions = {
  ...authActions,
  ...profileActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch); 
};
