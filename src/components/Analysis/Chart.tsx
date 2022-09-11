import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  InteractionItem,
} from "chart.js";
import { getDatasetAtEvent, getElementAtEvent, Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { AnalysisDataType } from "../../store/analysis.slice";
import { detailsDataActions } from "../../store/details.slice";
import { StoreStateType } from "../../store";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "No Of Lessons",
    },
  },
};

const Chart = () => {
  const chartRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const analysisData = useSelector(
    (state: StoreStateType) => state.analysisData
  );

  const printDatasetAtEvent = (dataset: InteractionItem[]) => {
    if (!dataset.length) return;

    const datasetIndex = dataset[0].datasetIndex;

    dispatch(detailsDataActions.setSchool(data.datasets[datasetIndex].label));
  };

  const printElementAtEvent = (element: InteractionItem[]) => {
    if (!element.length) return;

    const { datasetIndex, index } = element[0];

    dispatch(detailsDataActions.setMonth(data.labels[index]));
    dispatch(
      detailsDataActions.setLessons(data.datasets[datasetIndex].data[index])
    );
  };

  const navigateToItemDetails = () => {
    navigate("/details");
  };

  const onClickHandler = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = chartRef;

    if (!chart) {
      return;
    }

    printDatasetAtEvent(getDatasetAtEvent(chart, event));
    printElementAtEvent(getElementAtEvent(chart, event));
    navigateToItemDetails();
  };

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const datasets = analysisData.schoolsToCompare.map((school) => {
    return {
      label: school,
      data: analysisData.filteredData
        .filter((row: AnalysisDataType) => row.school === school)
        .map((row: AnalysisDataType) => row.lessons),
      borderColor: ["#1abc9c", "#3498db"],
      backgroundColor: ["#ecf0f1"],
    };
  });

  const data = {
    labels,
    datasets,
  };

  return (
    <>
      <Line
        options={options}
        data={data}
        ref={chartRef}
        onClick={onClickHandler}
      />
    </>
  );
};

export default Chart;
