import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  analysisDataActions,
  AnalysisDataType,
  AnalysisStateType,
} from "../../store/analysis.slice";

const Classes = () => {
  const dispatch = useDispatch();
  const analysisData = useSelector(
    (state: AnalysisStateType) => state.analysisData
  );

  let lessonsCounter = 0;
  analysisData.filteredData.forEach((row: AnalysisDataType) => {
    lessonsCounter += row.lessons;
  });

  const addSchoolToCompares = (row: AnalysisDataType) => {
    dispatch(analysisDataActions.toggleSchoolCompares(row.school));
  };

  return (
    <div className="h-[96] lg:h-[500px] overflow-y-scroll text-gray-800 border-l-2 pl-5 border-indigo-800">
      <div className="lg:pl-8 xl:pl-14 pb-4">
        <p className="text-xl">
          <span className="pr-2 text-2xl font-bold">{lessonsCounter}</span>
          <span className="text-indigo-800">Lessons</span>
        </p>
        {analysisData.filters.camp && (
          <p className="text-xs text-gray-500">{analysisData.filters.camp}</p>
        )}
      </div>
      {/* classes */}
      {analysisData.filteredData.map((row: AnalysisDataType) => {
        return (
          <div key={row.id}>
            <div className="py-2 grid grid-cols-4">
              <div className="col-span-1 flex justify-end pr-2">
                <button onClick={() => addSchoolToCompares(row)}>
                  <span
                    className={`material-symbols-outlined text-xl pr-1 text-gray-400 ${
                      row.isActive ? "text-indigo-600" : ""
                    }`}
                  >
                    radio_button_checked
                  </span>
                </button>
              </div>
              <div className="col-span-3">
                <p className="text-sm">{row.lessons} Lessons</p>
                <p className="text-xs text-gray-500">{row.school}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Classes;
