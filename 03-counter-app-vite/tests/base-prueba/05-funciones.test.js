import { getUser } from "../../src/base-prueba/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe de retornar un objeto", () => {
    const testUser = {
      // Los parentesis retornan un objeto de manera esplicita
      uid: "DAS",
      username: "ESDFASda",
    };

    const user = getUser();

    expect(testUser).toBe(user);
  });
});
