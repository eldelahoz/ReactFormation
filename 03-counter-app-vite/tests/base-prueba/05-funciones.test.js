import { getUser, getUsuarioActivo } from "../../src/base-prueba/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe de retornar un objeto", () => {
    const testUser = {
      uid: "DAS",
      username: "ESDFASda",
    };

    const user = getUser();

    expect(testUser).toEqual(user);
  });

  test("getUsuarioActivo debe de retornar un objeto", () => {
    const name = "Andres";

    const user = getUsuarioActivo(name);

    expect(user).toStrictEqual({
      uid: "ABC145",
      username: name,
    });
  });
});
