import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../store";

const Container = (props: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <Provider store={store}>{props.children}</Provider>
    </BrowserRouter>
  );
};

export default Container;
