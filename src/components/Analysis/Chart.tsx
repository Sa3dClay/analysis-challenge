import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
  AnalysisDataType,
  AnalysisStateType,
} from "../../store/analysis.slice";

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
  const analysisData = useSelector(
    (state: AnalysisStateType) => state.analysisData
  );
  const labels = analysisData.months;
  const datasets = [
    {
      label: "Lessons",
      data: analysisData.filteredData.map(
        (row: AnalysisDataType) => row.lessons
      ),
      borderColor: "#3498db",
      backgroundColor: "#2ecc71",
    },
  ];
  const data = {
    labels,
    datasets,
  };

  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default Chart;
