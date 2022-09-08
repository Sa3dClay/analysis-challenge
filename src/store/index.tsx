import { configureStore } from "@reduxjs/toolkit";
import analysisDataSlice from "./analysis.slice";

const store = configureStore({
  reducer: { analysisData: analysisDataSlice.reducer },
});

export default store;
