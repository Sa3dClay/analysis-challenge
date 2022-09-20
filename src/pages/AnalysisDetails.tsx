import React from "react";
import { useSelector } from "react-redux";
import { StoreStateType } from "../store";

const AnalysisDetails = () => {
  const storeData = useSelector((state: StoreStateType) => state);
  const darkTheme = storeData.uiData.darkTheme;

  const selectedRow = storeData.analysisData.data.find(
    (row) =>
      row.school === storeData.detailsData.school &&
      // row.month === storeData.detailsData.month &&
      row.lessons === storeData.detailsData.lessons
  );

  const detailsTemplate = (
    <>
      {selectedRow && (
        <div data-testid="details-data" className="text-xl text-center">
          <p className="bg-indigo-600 text-white px-2 py-1 font-bold text-2xl my-2">
            {selectedRow.school}
          </p>
          <p className={`py-1 text-gray-800 ${darkTheme && "text-gray-200"}`}>
            Country:{" "}
            <span
              className={`font-bold text-indigo-600 ${
                darkTheme && "text-indigo-400"
              }`}
            >
              {selectedRow.country}
            </span>
          </p>
          <p className={`py-1 text-gray-800 ${darkTheme && "text-gray-200"}`}>
            Camp:{" "}
            <span
              className={`font-bold text-indigo-600 ${
                darkTheme && "text-indigo-400"
              }`}
            >
              {selectedRow.camp}
            </span>
          </p>
          <p className={`py-1 text-gray-800 ${darkTheme && "text-gray-200"}`}>
            <span
              className={`font-bold text-indigo-600 ${
                darkTheme && "text-indigo-400"
              }`}
            >
              {selectedRow.lessons}
            </span>{" "}
            Lessons, {selectedRow.month}
          </p>
        </div>
      )}
      {/* not found */}
      {!selectedRow && (
        <div className="text-xl text-center">
          <p className="bg-indigo-600 text-white px-2 py-1 font-bold text-2xl my-2">
            No Data Founded
          </p>
        </div>
      )}
    </>
  );

  return (
    <div className="grid justify-center content-center h-screen">
      {detailsTemplate}
    </div>
  );
};

export default AnalysisDetails;
