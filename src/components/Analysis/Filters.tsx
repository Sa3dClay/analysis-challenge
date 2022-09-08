import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnalysisStateType } from "../../store/analysis.slice";
import { filtersDataActions } from "../../store/filters.slice";

const Filters = () => {
  const dispatch = useDispatch();
  const analysisData = useSelector(
    (state: AnalysisStateType) => state.analysisData
  );

  const changeCountryFilterHandler = (
    event: React.FormEvent<HTMLSelectElement>
  ) => {
    dispatch(filtersDataActions.setCountryFilter(event.currentTarget.value));
  };

  const changeSchoolFilterHandler = (
    event: React.FormEvent<HTMLSelectElement>
  ) => {
    dispatch(filtersDataActions.setSchoolFilter(event.currentTarget.value));
  };

  const changeCampFilterHandler = (
    event: React.FormEvent<HTMLSelectElement>
  ) => {
    dispatch(filtersDataActions.setCampFilter(event.currentTarget.value));
  };

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
            onChange={changeCountryFilterHandler}
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
            onChange={changeSchoolFilterHandler}
          >
            <option>All Schools</option>
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
            onChange={changeCampFilterHandler}
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
