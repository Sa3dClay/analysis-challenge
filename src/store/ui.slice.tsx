import { createSlice } from "@reduxjs/toolkit";

const initialData = {
  // eslint-disable-next-line
  darkTheme: JSON.parse(localStorage.getItem("dark")!) ? true : false,
};

const uiDataSlice = createSlice({
  name: "uiData",
  initialState: initialData,
  reducers: {
    toggleTheme(state) {
      state.darkTheme = !state.darkTheme;

      localStorage.setItem("dark", JSON.stringify(state.darkTheme));
    },
  },
});

export const uiDataActions = uiDataSlice.actions;
export default uiDataSlice;
