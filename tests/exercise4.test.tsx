import React from "react";
import { render, screen } from "@testing-library/react";
import Exercise4 from "../src/Pages/exercise4";
import "@testing-library/jest-dom";

console.log(React.version);

jest.mock("../src/components/FormModal", () => {
  return {
    __esModule: true,
    default: () => {
      return <div>FormModal</div>;
    },
  };
});

describe("Exercise1", () => {
  test("renders the component", () => {
    render(<Exercise4 />);
    expect(
      screen.getByText("Aplicación React TypeScript de Gestión de Contactos")
    ).toBeInTheDocument();
  });
});
