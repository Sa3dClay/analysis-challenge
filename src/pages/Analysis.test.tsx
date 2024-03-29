import { render, screen } from "@testing-library/react";
import Container from "../components/Container";
import Analysis from "./Analysis";

const MockAnalysis = () => {
  return (
    <Container>
      <Analysis />
    </Container>
  );
};

const analysisDataMock = [
  {
    camp: "Burke",
    country: "Egypt",
    id: "620af3a468e4b2e765e7c9e7",
    lessons: 140,
    month: "Feb",
    school: "Ola High School",
  },
];

describe("Analysis Page", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(analysisDataMock),
      })
    ) as jest.Mock;
  });

  it("should renders loader while fetching data", async () => {
    render(<MockAnalysis />);

    const loaderDiv = await screen.findByTestId("infinity-spin");

    expect(loaderDiv).toBeVisible;
  });

  it("should renders title after fetching data", async () => {
    render(<MockAnalysis />);

    const titleText = await screen.findByRole("heading", {
      name: "Analysis Chart",
    });

    expect(titleText).toBeVisible;
  });

  it("should renders filters after fetching data", async () => {
    render(<MockAnalysis />);

    const filtersDiv = await screen.findByTestId("filters-div");

    expect(filtersDiv).toBeVisible;
  });

  it("should renders classes after fetching data", async () => {
    render(<MockAnalysis />);

    const classesDiv = await screen.findByTestId("classes-div");

    expect(classesDiv).toBeVisible;
  });
});
