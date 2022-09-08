import React from "react";
import { useSelector } from "react-redux";
import { AnalysisStateType } from "../../store/analysis.slice";

const Details = () => {
  const analysisData = useSelector(
    (state: AnalysisStateType) => state.analysisData.filteredData
  );

  console.log(analysisData);

  return (
    <>
      <p>Details</p>
    </>
  );
};

export default Details;
