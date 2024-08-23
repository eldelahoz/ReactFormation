/**
 * @jest-environment jsdom
 */
import fetch from "jest-fetch-mock";
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Prueba en <GifGrid/>", () => {
  const category = "Gon";

  test("debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    fetch.mockResponseOnce(JSON.stringify(null));
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("debe de mostrar items cuando se carga las imagenes mediante el useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Kirito",
        url: "http://localhost/Kirito.jpg",
      },
      {
        id: "123",
        title: "KILLUA",
        url: "http://localhost/killua.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
