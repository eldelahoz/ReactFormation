import { usarContext } from "../../src/base-prueba/06-deses-obj";

describe("Pruebas en 06-deses-obj", () => {
  test("usarContext debe devolver un objeto", () => {
    const persona = {
      clave: "Pachul",
      edad: 24,
      rango: "Director",
    };
    const context = usarContext(persona);
    expect(context).toStrictEqual({
      nombreClave: "Pachul",
      anios: 24,
      latlng: {
        lat: 14.1232,
        lng: -112.3232,
      },
      rango: "Director",
    });
  });
});
