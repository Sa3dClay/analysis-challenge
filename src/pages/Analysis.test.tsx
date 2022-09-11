import { render, screen, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Analysis from "./Analysis";
import store from "../store";

describe("Analysis Page", () => {
  it("renders loader while fetching data", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Analysis />
        </Provider>
      </BrowserRouter>
    );
    const loaderDiv = screen.getByTestId("infinity-spin");
    expect(loaderDiv).toBeInTheDocument;
  });
});
