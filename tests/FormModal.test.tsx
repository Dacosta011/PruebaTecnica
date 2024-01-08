import React from "react";
import { render, screen } from "@testing-library/react";
import FormModal from "../src/components/FormModal";
import "@testing-library/jest-dom";

console.log(React.version);

const closeModal = jest.fn();
const addContact = jest.fn();

describe("Exercise1", () => {
  test("renders the component", () => {
    render(
      <FormModal
        closeModal={closeModal}
        isEditing={false}
        modalIsOpen={true}
        onSubmit={addContact}
      />
    );
    expect(screen.getByText("ID:")).toBeInTheDocument();
  });

  test("renders the component with isEditing true, the button should have the text Actualizar", () => {
    render(
      <FormModal
        closeModal={closeModal}
        isEditing={true}
        modalIsOpen={true}
        onSubmit={addContact}
      />
    );
    expect(screen.getByText("Actualizar")).toBeInTheDocument();
  });

  test("renders the component with isEditing false, the button should have the text Crear Nuevo", () => {
    render(
      <FormModal
        closeModal={closeModal}
        isEditing={false}
        modalIsOpen={true}
        onSubmit={addContact}
      />
    );
    expect(screen.getByText("Crear Nuevo")).toBeInTheDocument();
  });
});
