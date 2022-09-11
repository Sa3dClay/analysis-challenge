import { createSlice } from "@reduxjs/toolkit";

const initialData = {
  school: "",
  month: "",
  lessons: 0,
};

const detailsDataSlice = createSlice({
  name: "detailsData",
  initialState: initialData,
  reducers: {
    setSchool(state, action) {
      state.school = action.payload;
    },
    setMonth(state, action) {
      state.month = action.payload;
    },
    setLessons(state, action) {
      state.lessons = action.payload;
    },
    clearData() {
      return initialData;
    },
  },
});

export const detailsDataActions = detailsDataSlice.actions;
export default detailsDataSlice;
