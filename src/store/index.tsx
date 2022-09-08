import { configureStore } from "@reduxjs/toolkit";
import analysisDataSlice from "./analysis.slice";
import filtersDataSlice from "./filters.slice";

const store = configureStore({
  reducer: {
    analysisData: analysisDataSlice.reducer,
    filtersData: filtersDataSlice.reducer,
  },
});

export default store;
