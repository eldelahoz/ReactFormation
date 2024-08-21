import { getGifs } from "../../src/helpers/getGifs";

describe("Prueba en getGifs()", () => {
  test("debe de retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("Luffy");
    console.error("hi");
    console.log(gifs);
  });
});
