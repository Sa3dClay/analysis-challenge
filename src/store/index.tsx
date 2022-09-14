import { configureStore } from "@reduxjs/toolkit";
import analysisDataSlice, { AnalysisDataType } from "./analysis.slice";
import detailsDataSlice from "./details.slice";
import uiDataSlice from "./ui.slice";

export type StoreStateType = {
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
    schoolsToCompare: string[];
  };
  detailsData: {
    school: string;
    month: string;
    lessons: number;
  };
  uiData: {
    darkTheme: boolean;
  };
};

const store = configureStore({
  reducer: {
    analysisData: analysisDataSlice.reducer,
    detailsData: detailsDataSlice.reducer,
    uiData: uiDataSlice.reducer,
  },
});

export default store;
