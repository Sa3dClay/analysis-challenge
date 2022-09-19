import { render } from "@testing-library/react";
import Container from "../components/Container";
import Analysis from "./Analysis";

const MockAnalysis = () => {
  return (
    <Container>
      <Analysis />
    </Container>
  );
};

describe("Analysis Page", () => {
  it("should renders loader while fetching data", async () => {
    const { findByTestId } = render(<MockAnalysis />);

    const loaderDiv = await findByTestId("infinity-spin");

    expect(loaderDiv).toBeVisible;
  });

  it("should renders title after fetching data", async () => {
    const { findByRole } = render(<MockAnalysis />);

    const titleText = await findByRole("heading", { name: "Analysis Chart" });

    expect(titleText).toBeVisible;
  });
});
