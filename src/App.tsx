import React from "react";
import { Route, Routes } from "react-router-dom";
import Analysis from "./pages/Analysis";
import AnalysisDetails from "./pages/AnalysisDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Analysis />} />
        <Route path="/details" element={<AnalysisDetails />} />
      </Routes>
    </div>
  );
}

export default App;
