import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  analysisDataActions,
  AnalysisStateType,
} from "../../store/analysis.slice";

const Filters = () => {
  const dispatch = useDispatch();
  const analysisData = useSelector(
    (state: AnalysisStateType) => state.analysisData
  );

  const changeCountryFilterHandler = (
    event: React.FormEvent<HTMLSelectElement>
  ) => {
    dispatch(analysisDataActions.setCountryFilter(event.currentTarget.value));
  };

  const changeSchoolFilterHandler = (
    event: React.FormEvent<HTMLSelectElement>
  ) => {
    dispatch(analysisDataActions.setSchoolFilter(event.currentTarget.value));
  };

  const changeCampFilterHandler = (
    event: React.FormEvent<HTMLSelectElement>
  ) => {
    dispatch(analysisDataActions.setCampFilter(event.currentTarget.value));
  };

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 justify-between py-4">
        {/* countries */}
        <div className="my-2">
          <label htmlFor="countries">Select Country</label>
          <select
            className="mx-2 px-2 py-1 bg-indigo-600 text-white border-none outline-none w-40"
            name="countries"
            id="countries"
            onChange={changeCountryFilterHandler}
          >
            {analysisData.countries &&
              analysisData.countries.map((country, index) => {
                return <option key={index}>{country}</option>;
              })}
          </select>
        </div>
        {/* schools */}
        <div className="my-2">
          <label htmlFor="schools">Select School</label>
          <select
            className="mx-2 px-2 py-1 bg-indigo-600 text-white border-none outline-none w-40"
            name="schools"
            id="schools"
            onChange={changeSchoolFilterHandler}
          >
            <option value="all">Show All</option>
            {analysisData.schools &&
              analysisData.schools.map((school, index) => {
                return <option key={index}>{school}</option>;
              })}
          </select>
        </div>
        {/* camps */}
        <div className="my-2">
          <label htmlFor="camps">Select Camp</label>
          <select
            className="mx-2 px-2 py-1 bg-indigo-600 text-white border-none outline-none w-40"
            name="camps"
            id="camps"
            onChange={changeCampFilterHandler}
          >
            {analysisData.camps &&
              analysisData.camps.map((camp, index) => {
                return <option key={index}>{camp}</option>;
              })}
          </select>
        </div>
      </div>
    </>
  );
};

export default Filters;
