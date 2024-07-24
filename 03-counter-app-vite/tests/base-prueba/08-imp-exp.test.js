import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-prueba/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroById debe de retornar un heroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });
  test("getHeroById debe de retornar undefined si no existe el ID", () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
  });
  test("getHeroesByOwner debe de retornar un arreglo para los heroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toEqual(3);
    expect(heroes).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });
  test("getHeroesByOwner debe de retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const hero = getHeroesByOwner(owner);
    expect(hero.length).toEqual(2);
  });
});
