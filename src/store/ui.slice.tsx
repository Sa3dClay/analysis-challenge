import { createSlice } from "@reduxjs/toolkit";

const initialData = {
  darkTheme: false,
};

const uiDataSlice = createSlice({
  name: "uiData",
  initialState: initialData,
  reducers: {
    toggleTheme(state) {
      state.darkTheme = !state.darkTheme;
      console.log("dark theme", state.darkTheme);
    },
  },
});

export const uiDataActions = uiDataSlice.actions;
export default uiDataSlice;
