import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateType } from "../../store";
import { analysisDataActions } from "../../store/analysis.slice";

const Filters = () => {
  const dispatch = useDispatch();
  const storeData = useSelector((state: StoreStateType) => state);
  const darkTheme = storeData.uiData.darkTheme;

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
          <label
            htmlFor="countries"
            className={`text-gray-800 ${darkTheme && "text-gray-200"}`}
          >
            Select Country
          </label>
          <select
            className="mx-2 px-2 py-1 bg-indigo-600 text-white border-none outline-none w-40"
            name="countries"
            id="countries"
            onChange={changeCountryFilterHandler}
            value={storeData.analysisData.filters.country}
          >
            <option value="">Countries</option>
            {storeData.analysisData.countries &&
              storeData.analysisData.countries.map((country, index) => {
                return <option key={index}>{country}</option>;
              })}
          </select>
        </div>
        {/* camps */}
        <div className="my-2">
          <label
            htmlFor="camps"
            className={`text-gray-800 ${darkTheme && "text-gray-200"}`}
          >
            Select Camp
          </label>
          <select
            className="mx-2 px-2 py-1 bg-indigo-600 text-white border-none outline-none w-40"
            name="camps"
            id="camps"
            onChange={changeCampFilterHandler}
            value={storeData.analysisData.filters.camp}
          >
            <option value="">Camps</option>
            {storeData.analysisData.camps &&
              storeData.analysisData.camps.map((camp, index) => {
                return <option key={index}>{camp}</option>;
              })}
          </select>
        </div>
        {/* schools */}
        <div className="my-2">
          <label
            htmlFor="schools"
            className={`text-gray-800 ${darkTheme && "text-gray-200"}`}
          >
            Select School
          </label>
          <select
            className="mx-2 px-2 py-1 bg-indigo-600 text-white border-none outline-none w-40"
            name="schools"
            id="schools"
            onChange={changeSchoolFilterHandler}
            value={storeData.analysisData.filters.school}
          >
            <option value="all">Show All</option>
            {storeData.analysisData.schools &&
              storeData.analysisData.schools.map((school, index) => {
                return <option key={index}>{school}</option>;
              })}
          </select>
        </div>
      </div>
    </>
  );
};

export default Filters;
