import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userRole: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUserRole: (state, action) => {
      state.userRole = action.payload;
    },
  },
});

export const { setIsLoggedIn, setUserRole } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserRole = (state) => state.auth.userRole;

export default authSlice.reducer;
