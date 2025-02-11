import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showNavCard: false,
  showResponsiveNav: false,
  currentPath: "/",
  navConfig: {
    navbarBg: "bg-secondary",
    navHeight: "h-[80px] lg:h-[160px]",
    imgHeight: "h-16 lg:h-28",
    imgWidth: "w-16 lg:w-28",
    navTetxColor: "text-white",
    shadow: "shadow-none",
  },
  schoolManagementSidebar: [],
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
    setNavConfig: (state, action) => {
      state.navConfig = action.payload;
    },
    setSchoolManagementSidebar: (state, action) => {
      state.schoolManagementSidebar = action.payload;
    },
  },
});

export const {
  setShowNavCard,
  setShowResponsiveNav,
  setCurrentPath,
  setNavConfig,
  setSchoolManagementSidebar,
} = uiSlice.actions;

export const selectShowNavCard = (state) => state.ui.showNavCard;
export const selectShowResponsiveNav = (state) => state.ui.showResponsiveNav;
export const selectCurrentPath = (state) => {
  return state.ui.currentPath;
};
export const selectNavConfig = (state) => state.ui.navConfig;
export const selectSchoolManagementSidebar = (state) =>
  state.ui.schoolManagementSidebar;

export default uiSlice.reducer;
