import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateType } from "../../store";
import { analysisDataActions } from "../../store/analysis.slice";

const Classes = () => {
  const dispatch = useDispatch();
  const analysisData = useSelector(
    (state: StoreStateType) => state.analysisData
  );

  let lessonsCounter = 0;
  analysisData.filteredData.forEach((row) => {
    lessonsCounter += row.lessons;
  });

  const addSchoolToCompares = (school: string) => {
    dispatch(analysisDataActions.toggleSchoolCompares(school));
  };

  const classesTemplate = (
    <>
      {analysisData.schools.map((school, index) => {
        let lessonsPerSchool = 0;
        analysisData.filteredData
          .filter((row) => row.school === school)
          .forEach((row) => (lessonsPerSchool += row.lessons));
        const schoolIsActive = analysisData.schoolsToCompare.find(
          (item) => item === school
        );

        return (
          <div key={index}>
            {lessonsPerSchool > 0 && (
              <div className="py-2 grid grid-cols-4">
                <div className="col-span-1 flex justify-end pr-2">
                  <button onClick={() => addSchoolToCompares(school)}>
                    <span
                      className={`material-symbols-outlined text-xl pr-1 ${
                        schoolIsActive ? "text-indigo-600" : "text-gray-400"
                      }`}
                    >
                      radio_button_checked
                    </span>
                  </button>
                </div>
                <div className="col-span-3">
                  <p className="text-sm">{lessonsPerSchool} Lessons</p>
                  <p className="text-xs text-gray-500">{school}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );

  return (
    <div
      data-testid="classes-div"
      className="h-96 lg:h-[500px] overflow-y-scroll text-gray-800 border-l-2 pl-5 border-indigo-800"
    >
      <div className="lg:pl-8 xl:pl-14 pb-4">
        <p className="text-xl">
          <span className="pr-2 text-2xl font-bold">{lessonsCounter}</span>
          <span className="text-indigo-800">Lessons</span>
        </p>
        {analysisData.filters.camp && (
          <p className="text-xs text-gray-500">{analysisData.filters.camp}</p>
        )}
      </div>

      {classesTemplate}
    </div>
  );
};

export default Classes;
