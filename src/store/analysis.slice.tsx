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
    data: AnalysisDataType[];
    filteredData: AnalysisDataType[];
    countries: string[];
    schools: string[];
    camps: string[];
    months: string[];
    filters: {
      country: string;
      school: string;
      camp: string;
    };
  };
};

const initialData = {
  data: [],
  filteredData: [],
  countries: [],
  schools: [],
  camps: [],
  months: [],
  filters: {
    country: "",
    school: "",
    camp: "",
  },
};

const analysisDataSlice = createSlice({
  name: "analysisData",
  initialState: initialData,
  reducers: {
    setData(state, action) {
      // set all data
      state.data = action.payload;
      // set filtered data
      state.filteredData = state.data;
      // set countries
      const allCountries = state.data.map((row: AnalysisDataType) => {
        return row.country;
      }) as [];
      state.countries = allCountries.filter((item, index) => {
        return allCountries.indexOf(item) === index;
      });
      // set schools
      const allSchools = state.data.map((row: AnalysisDataType) => {
        return row.school;
      }) as [];
      state.schools = allSchools.filter((item, index) => {
        return allSchools.indexOf(item) === index;
      });
      // set camps
      const allCamps = state.data.map((row: AnalysisDataType) => {
        return row.camp;
      });
      state.camps = allCamps.filter((item, index) => {
        return allCamps.indexOf(item) === index;
      }) as [];
      // set months
      const allMonths = state.data.map((row: AnalysisDataType) => {
        return row.month;
      });
      state.months = allMonths.filter((item, index) => {
        return allMonths.indexOf(item) === index;
      }) as [];
    },
    setCampFilter(state, action) {
      if (state.filteredData.length === 0 || state.filters.camp)
        state.filteredData = state.data;

      state.filters.camp = action.payload;

      state.filteredData = state.filteredData.filter(
        (row: AnalysisDataType) => {
          return row.camp === action.payload;
        }
      );
    },
    setSchoolFilter(state, action) {
      if (state.filteredData.length === 0 || state.filters.school)
        state.filteredData = state.data;

      state.filters.school = action.payload;

      state.filteredData = state.filteredData.filter(
        (row: AnalysisDataType) => {
          return row.school === action.payload;
        }
      );

      if (action.payload === "all") {
        state.filteredData = state.data.filter((row: AnalysisDataType) => {
          return (
            row.camp === state.filters.camp &&
            row.country === state.filters.country
          );
        });
      }
    },
    setCountryFilter(state, action) {
      if (state.filteredData.length === 0 || state.filters.country)
        state.filteredData = state.data;

      state.filters.country = action.payload;

      state.filteredData = state.filteredData.filter(
        (row: AnalysisDataType) => {
          return row.country === action.payload;
        }
      );
    },
    clearData() {
      return initialData;
    },
  },
});

export const analysisDataActions = analysisDataSlice.actions;
export default analysisDataSlice;
