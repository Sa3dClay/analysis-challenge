import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ThemeToggler from "./components/UI/ThemeToggler";
import Analysis from "./pages/Analysis";
import AnalysisDetails from "./pages/AnalysisDetails";
import { StoreStateType } from "./store";

function App() {
  const darkTheme = useSelector(
    (state: StoreStateType) => state.uiData.darkTheme
  );

  return (
    <div className={`${darkTheme && "bg-gray-800"}`}>
      <ThemeToggler />
      <Routes>
        <Route path="/" element={<Analysis />} />
        <Route path="/details" element={<AnalysisDetails />} />
      </Routes>
    </div>
  );
}

export default App;
