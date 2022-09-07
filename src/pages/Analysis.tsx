import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Loader } from "../components/UI/Loader";
import { analysisDataActions } from "../store/analysis.slice";

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

  const analysisTemplate = <h1 className="text-center">Analysis Page</h1>;

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && error && <p className="text-center">{error}</p>}
      {!isLoading && !error && analysisTemplate}
    </>
  );
};

export default Analysis;
