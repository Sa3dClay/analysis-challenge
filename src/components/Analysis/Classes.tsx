import React from "react";
import { useSelector } from "react-redux";
import {
  AnalysisDataType,
  AnalysisStateType,
} from "../../store/analysis.slice";

const Classes = () => {
  const analysisData = useSelector(
    (state: AnalysisStateType) => state.analysisData
  );

  return (
    <div className="h-96 overflow-y-scroll text-gray-800 border-l-2 pl-5 border-indigo-800">
      <p className="text-xl">
        <span className="pr-2 text-2xl font-bold">
          {analysisData.filteredData.length}
        </span>
        <span className="text-indigo-800">Lessons</span>
      </p>
      <p className="pb-4 text-xs text-gray-500">
        In {analysisData.filters.camp}
      </p>
      {/* classes */}
      {analysisData.schools.map((school, index) => {
        const lessonsPerSchool = analysisData.filteredData.filter(
          (row: AnalysisDataType) => {
            return row.school === school;
          }
        );
        return (
          <div key={index}>
            {lessonsPerSchool.length > 0 && (
              <div className="py-2 grid grid-cols-4">
                <div className="col-span-1 flex justify-end pr-2">
                  <span className="material-symbols-outlined text-xl pr-1 text-indigo-500">
                    radio_button_checked
                  </span>
                </div>
                <div className="col-span-3">
                  <p className="text-sm">{lessonsPerSchool.length} Lessons</p>
                  <p className="text-xs text-gray-500">In {school}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Classes;
