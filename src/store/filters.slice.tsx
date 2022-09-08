import { createSlice } from "@reduxjs/toolkit";

export type FiltersDataType = {
  campFilter: string;
  schoolFilter: string;
  countryFilter: string;
};

export type FiltersStateType = {
  filtersData: {
    campFilter: string;
    schoolFilter: string;
    countryFilter: string;
  };
};

const initialData = {
  campFilter: "",
  schoolFilter: "",
  countryFilter: "",
};

const filtersDataSlice = createSlice({
  name: "filtersData",
  initialState: initialData,
  reducers: {
    setCampFilter(state, action) {
      state.campFilter = action.payload;
    },
    setSchoolFilter(state, action) {
      state.schoolFilter = action.payload;
    },
    setCountryFilter(state, action) {
      state.countryFilter = action.payload;
    },
    clearData() {
      return initialData;
    },
  },
});

export const filtersDataActions = filtersDataSlice.actions;
export default filtersDataSlice;
