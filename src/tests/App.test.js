import { render, screen } from "@testing-library/react";
import App from "../App";

describe("<App />", () => {
  it("should have Feature Select on the screen", () => {
    render(
      <App />
    );

    expect(screen.getByTestId("featureSelect")).toBeInTheDocument()
  });

});