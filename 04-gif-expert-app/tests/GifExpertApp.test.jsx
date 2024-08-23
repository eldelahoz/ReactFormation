import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Prueba en GifExpertApp", () => {
  const category = "Killua";
  test("debe de cambiar el valor de la caja de texto", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: category } });
    expect(input.value).toBe(category);
  });

  test("debe de agregar una nueva categoria", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: category } });
    fireEvent.submit(form);

    expect(screen.getByText(category).textContent).toBe(category);
  });

  test("debe de llamar una categoria igual y no agregarla", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "Luffy" } });
    fireEvent.submit(form);

    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(1);
  });
});
