import React from "react";
import { useSelector } from "react-redux";
import { AnalysisStateType } from "../../store/analysis.slice";

const Filters = () => {
  const analysisData = useSelector(
    (state: AnalysisStateType) => state.analysisData
  );

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 justify-items-center py-4">
        {/* countries */}
        <div className="my-2">
          <label htmlFor="countries">Select Country</label>
          <select
            className="mx-2 px-2 py-1 bg-indigo-600 text-white border-none outline-none"
            name="countries"
            id="countries"
          >
            {analysisData.countriesFilter &&
              analysisData.countriesFilter.map((country, index) => {
                return <option key={index}>{country}</option>;
              })}
          </select>
        </div>
        {/* schools */}
        <div className="my-2">
          <label htmlFor="schools">Select School</label>
          <select
            className="mx-2 px-2 py-1 bg-indigo-600 text-white border-none outline-none"
            name="schools"
            id="schools"
          >
            {analysisData.schoolsFilter &&
              analysisData.schoolsFilter.map((school, index) => {
                return <option key={index}>{school}</option>;
              })}
          </select>
        </div>
        {/* camps */}
        <div className="my-2">
          <label htmlFor="camps">Select Camp</label>
          <select
            className="mx-2 px-2 py-1 bg-indigo-600 text-white border-none outline-none"
            name="camps"
            id="camps"
          >
            {analysisData.campsFilter &&
              analysisData.campsFilter.map((camp, index) => {
                return <option key={index}>{camp}</option>;
              })}
          </select>
        </div>
      </div>
    </>
  );
};

export default Filters;
