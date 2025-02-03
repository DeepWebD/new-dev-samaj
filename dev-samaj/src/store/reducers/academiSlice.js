import { createSlice } from "@reduxjs/toolkit";
import { academics } from "../../mockdata/academic";
const initialState = academics;

const academicSlice = createSlice({
  name: "academic",
  initialState,
  reducers: {
    setPreprimarySchool: (state, action) => {
      state["pre-primary"] = action.payload;
    },
    setLowerSchool: (state, action) => {
      state["lower-school"] = action.payload;
    },
    setMiddleSchool: (state, action) => {
      state["middle-school"] = action.payload;
    },
    setHightSchool: (state, action) => {
      state["high-school"] = action.payload;
    },
  },
});

export const {
  setShowNavCard,
  setShowResponsiveNav,
  setCurrentPath,
  setNavConfig,
} = academicSlice.actions;

export const selectPreprimarySchool = (state) => state.academic["pre-primary"];
export const selectLowerSchool = (state) => state.academic["lower-school"];
export const selectMiddleSchool = (state) => state.academic["middle-school"];
export const selectHighSchool = (state) => state.academic["high-school"];
export const selectAcadmics = (state) => state.academic;

export default academicSlice.reducer;
