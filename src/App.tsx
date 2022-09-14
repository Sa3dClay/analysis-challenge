import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/UI/Loader";
import ThemeToggler from "./components/UI/ThemeToggler";
import { StoreStateType } from "./store";

const Analysis = React.lazy(() => import("./pages/Analysis"));
const AnalysisDetails = React.lazy(() => import("./pages/AnalysisDetails"));

function App() {
  const darkTheme = useSelector(
    (state: StoreStateType) => state.uiData.darkTheme
  );

  return (
    <div className={`h-screen ${darkTheme && "bg-gray-800"}`}>
      <ThemeToggler />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Analysis />} />
          <Route path="/details" element={<AnalysisDetails />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
