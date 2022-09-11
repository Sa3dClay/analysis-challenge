import { configureStore } from "@reduxjs/toolkit";
import analysisDataSlice, { AnalysisDataType } from "./analysis.slice";
import detailsDataSlice from "./details.slice";

export type StoreStateType = {
  analysisData: {
    data: AnalysisDataType[];
    filteredData: AnalysisDataType[];
    countries: string[];
    schools: string[];
    camps: string[];
    filters: {
      country: string;
      school: string;
      camp: string;
    };
    schoolsToCompare: string[];
  };
  detailsData: {
    school: string;
    month: string;
    lessons: number;
  };
};

const store = configureStore({
  reducer: {
    analysisData: analysisDataSlice.reducer,
    detailsData: detailsDataSlice.reducer,
  },
});

export default store;
