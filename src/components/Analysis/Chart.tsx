import React, { useRef } from "react";
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
import {
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
  Line,
} from "react-chartjs-2";
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
  const chartRef = useRef();
  const analysisData = useSelector(
    (state: AnalysisStateType) => state.analysisData
  );

  const printDatasetAtEvent = (dataset: InteractionItem[]) => {
    if (!dataset.length) return;

    const datasetIndex = dataset[0].datasetIndex;

    console.log(data.datasets[datasetIndex].label);
  };

  const printElementAtEvent = (element: InteractionItem[]) => {
    if (!element.length) return;

    const { datasetIndex, index } = element[0];

    console.log(data.labels[index], data.datasets[datasetIndex].data[index]);
  };

  const printElementsAtEvent = (elements: InteractionItem[]) => {
    if (!elements.length) return;

    console.log(elements.length);
  };

  const onClickHandler = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = chartRef;

    if (!chart) {
      return;
    }

    printDatasetAtEvent(getDatasetAtEvent(chart, event));
    printElementAtEvent(getElementAtEvent(chart, event));
    printElementsAtEvent(getElementsAtEvent(chart, event));
  };

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
