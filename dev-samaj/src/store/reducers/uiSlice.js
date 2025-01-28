import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showNavCard: false,
  showResponsiveNav: false,
  currentPath: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setShowNavCard: (state, action) => {
      state.showNavCard = action.payload;
    },
    setShowResponsiveNav: (state, action) => {
      state.showResponsiveNav = action.payload;
    },
    setCurrentPath: (state, action) => {
      state.currentPath = action.payload;
    },
  },
});

export const { setShowNavCard, setShowResponsiveNav, setCurrentPath } =
  uiSlice.actions;

export const selectShowNavCard = (state) => state.ui.showNavCard;
export const selectShowResponsiveNav = (state) => state.ui.showResponsiveNav;
export const selectCurrentPath = (state) => state.ui.currentPath;

export default uiSlice.reducer;
