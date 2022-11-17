import React from "react";
import { render, screen } from "@testing-library/react";
import { SummaryPanel } from "../../components/SummaryPanel/SummaryPanel";

const responseData = {
  0: 1000,
  15: 2000,
  30: 3000,
};

describe("Input Component for ammount", () => {
  test("should be able to render title", () => {
    render(<SummaryPanel responseData={responseData} />);
    expect(screen.getByText("Você receberá:")).toBeTruthy();
  });

  test("should be able to render the necessary number of paragraphs", () => {
    render(<SummaryPanel responseData={responseData} />);
    expect(screen.getByText("R$: 1000.00")).toBeTruthy();
    expect(screen.getByText("R$: 2000.00")).toBeTruthy();
    expect(screen.getByText("R$: 3000.00")).toBeTruthy();
  });
});
