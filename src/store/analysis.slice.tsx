import { createSlice } from "@reduxjs/toolkit";

export type AnalysisDataType = {
  camp: string;
  country: string;
  id: string;
  lessons: number;
  month: string;
  school: string;
};

export type AnalysisStateType = {
  analysisData: {
    data: [];
    countriesFilter: [];
    schoolsFilter: [];
    campsFilter: [];
  };
};

const initialData = {
  data: [],
  countriesFilter: [],
  schoolsFilter: [],
  campsFilter: [],
};

const analysisDataSlice = createSlice({
  name: "analysisData",
  initialState: initialData,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
      // set countries filter
      const countries = action.payload.map((row: AnalysisDataType) => {
        return row.country;
      });
      state.countriesFilter = countries.filter(
        (item: string, index: number) => {
          return countries.indexOf(item) === index;
        }
      );
      // set schools filter
      const schools = action.payload.map((row: AnalysisDataType) => {
        return row.school;
      });
      state.schoolsFilter = schools.filter((item: string, index: number) => {
        return schools.indexOf(item) === index;
      });
      // set camps filter
      const camps = action.payload.map((row: AnalysisDataType) => {
        return row.camp;
      });
      state.campsFilter = camps.filter((item: string, index: number) => {
        return camps.indexOf(item) === index;
      });
    },
    clearData() {
      return initialData;
    },
  },
});

export const analysisDataActions = analysisDataSlice.actions;
export default analysisDataSlice;
