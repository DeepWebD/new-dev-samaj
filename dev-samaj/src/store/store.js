import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./reducers/uiSlice";
import academicSlice from "./reducers/academiSlice";
import uiSlice from "./reducers/authSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    academic: academicSlice,
    auth: uiSlice,
  },
});

export default store;
