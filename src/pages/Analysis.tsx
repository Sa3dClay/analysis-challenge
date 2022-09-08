import React, { Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Loader } from "../components/UI/Loader";
import { analysisDataActions } from "../store/analysis.slice";

const Filters = React.lazy(() => import("../components/Analysis/Filters"));
const Details = React.lazy(() => import("../components/Analysis/Details"));

const Analysis = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
    fetchData();
  }, []);

  const analysisTemplate = (
    <Suspense fallback={<Loader />}>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl py-4 text-indigo-800">Analysis Chart</h1>
        <h2 className="text-2xl py-4 text-indigo-700">Number of Lessons</h2>
        <Filters />
        <div className="grid grid-cols-4">
          {/* chart */}
          <div className="col-span-3">
            <p>Chart</p>
          </div>
          {/* details */}
          <div className="col-span-1">
            <Details />
          </div>
        </div>
      </div>
    </Suspense>
  );

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && error && <p className="text-center">{error}</p>}
      {!isLoading && !error && analysisTemplate}
    </>
  );
};

export default Analysis;
