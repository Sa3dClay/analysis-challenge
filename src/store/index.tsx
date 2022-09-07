import { configureStore } from "@reduxjs/toolkit";
import analysisDataSlice from "./analysis.slice";

const store = configureStore({
  reducer: { userData: analysisDataSlice.reducer },
});

export default store;
