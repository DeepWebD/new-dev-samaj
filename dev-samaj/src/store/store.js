import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./reducers/uiSlice";
import academicSlice from "./reducers/academiSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    academic: academicSlice,
  },
});

export default store;
