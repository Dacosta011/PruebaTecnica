import React from "react";
import { render, screen } from "@testing-library/react";
import Exercise1 from "../src/Pages/exercise1";
import "@testing-library/jest-dom";

console.log(React.version);

describe("Exercise1", () => {
  test("renders the component", () => {
    render(<Exercise1 />);
    expect(
      screen.getByText("Verificación de Año Bisiesto en JavaScript")
    ).toBeInTheDocument();
  });
});
