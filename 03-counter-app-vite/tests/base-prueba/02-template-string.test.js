import { getSaludo } from "../../src/base-prueba/02-template-string";

describe("Prueba en 02-template-string", () => {
  test('getSaludo debe de retornar "Hola Andres"', () => {
    const name = "Andres";
    const message = getSaludo(name);
    expect(message).toBe(`Hola ${name}`);
  });
});
