import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="grid justify-center content-center h-screen">
      <InfinitySpin width="200" color="#3498db" />
    </div>
  );
};

export default Loader;
