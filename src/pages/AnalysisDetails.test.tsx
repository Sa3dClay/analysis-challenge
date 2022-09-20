import { render, screen } from "@testing-library/react";
import Container from "../components/Container";
import AnalysisDetails from "./AnalysisDetails";

const MockAnalysisDetails = () => {
  return (
    <Container>
      <AnalysisDetails />
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
    school: "Ola",
  },
];

describe("Analysis Details Page", () => {
  // mocking
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(analysisDataMock),
      })
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should show message if no data founded", async () => {
    render(<MockAnalysisDetails />);

    const NoFoundText = await screen.findByText(/No Data Founded/i);

    expect(NoFoundText).toBeVisible;
  });

  // TODO: mock redux data or dispatch
  // it("should show details if data founded", async () => {
  //   render(<MockAnalysisDetails />);

  //   const detailsDiv = await screen.findByTestId("details-data");

  //   expect(detailsDiv).toBeVisible;
  // });
});
