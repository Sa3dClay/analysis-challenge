import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/UI/Error";
import Loader from "../components/UI/Loader";
import { StoreStateType } from "../store";
import { analysisDataActions } from "../store/analysis.slice";

const Filters = React.lazy(() => import("../components/Analysis/Filters"));
const Classes = React.lazy(() => import("../components/Analysis/Classes"));
const Chart = React.lazy(() => import("../components/Analysis/Chart"));

const Analysis = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const storeData = useSelector((state: StoreStateType) => state);
  const darkTheme = storeData.uiData.darkTheme;

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      "https://analysis-507f4-default-rtdb.firebaseio.com/data.json"
    );
    const json = await response.json();

    if (!response.ok) setError(json.error);
    else dispatch(analysisDataActions.setData(json));

    setIsLoading(false);
  };

  useEffect(() => {
    const prepareData = async () => {
      await fetchData();
    };

    if (storeData.analysisData.data.length > 0) return;

    prepareData();
  }, []);

  const analysisTemplate = (
    <Suspense fallback={<Loader />}>
      <div className="container mx-auto p-4">
        <h1
          className={`text-4xl py-4 text-indigo-800 font-bold ${
            darkTheme && "text-indigo-400"
          }`}
        >
          Analysis Chart
        </h1>
        {/* Filters */}
        <Filters />
        <div className="grid md:grid-cols-4 lg:grid-cols-10 bg-slate-200 p-2">
          {/* chart */}
          <div className="md:col-span-3 lg:col-span-7">
            <Chart />
          </div>
          {/* details */}
          <div className="md:col-span-1 lg:col-span-3">
            <Classes />
          </div>
        </div>
      </div>
    </Suspense>
  );

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && error && <Error />}
      {!isLoading && !error && analysisTemplate}
    </>
  );
};

export default Analysis;
