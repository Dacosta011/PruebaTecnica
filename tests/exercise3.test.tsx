import React from "react";
import { render, screen } from "@testing-library/react";
import Exercise3 from "../src/Pages/exercise3";
import "@testing-library/jest-dom";

console.log(React.version);

describe("Exercise1", () => {
  test("renders the component", () => {
    render(<Exercise3 />);
    expect(
      screen.getByText("Listados Dinámicos en JavaScript")
    ).toBeInTheDocument();
  });
});
