import React from "react";
import { render, screen } from "@testing-library/react";
import Exercise2 from "../src/Pages/exercise2";
import "@testing-library/jest-dom";

console.log(React.version);

describe("Exercise1", () => {
  test("renders the component", () => {
    render(<Exercise2 />);
    expect(
      screen.getByText("Sucesión de Fibonacci en JavaScript")
    ).toBeInTheDocument();
  });
});
