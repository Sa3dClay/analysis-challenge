import React from "react";
import { useSelector } from "react-redux";
import { StoreStateType } from "../store";

const AnalysisDetails = () => {
  const storeData = useSelector((state: StoreStateType) => state);

  const selectedRow = storeData.analysisData.data.find(
    (row) =>
      row.school === storeData.detailsData.school &&
      row.month === storeData.detailsData.month
  );

  const detailsTemplate = (
    <>
      {selectedRow && (
        <div className="text-xl text-center">
          <p className="bg-indigo-600 text-white px-2 py-1 font-bold text-2xl my-2">
            {selectedRow.school}
          </p>
          <p className="py-1">
            Country:{" "}
            <span className="font-bold text-indigo-600">
              {selectedRow.country}
            </span>
          </p>
          <p className="py-1">
            Camp:{" "}
            <span className="font-bold text-indigo-600">
              {selectedRow.camp}
            </span>
          </p>
          <p className="py-1">
            <span className="font-bold text-indigo-600">
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
