/**
 * @jest-environment jsdom
 */
import fetch from "jest-fetch-mock";
import { getGifs } from "../../src/helpers/getGifs";

describe("Prueba en getGifs()", () => {
  test("debe de retornar un arreglo de gifs", async () => {
    fetch.mockResponseOnce(JSON.stringify(null));
    const gifs = await getGifs("Luffy");
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
