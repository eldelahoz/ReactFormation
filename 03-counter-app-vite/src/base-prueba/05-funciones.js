// Funciones en JS
const saludar = function (nombre) {
  return `Hola ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;

console.log(saludar("Gokuuuu"));
console.log(saludar2("Krilin"));
console.log(saludar3("Ijole"));

const getUser = () => ({
  // Los parentesis retornan un objeto de manera esplicita
  uid: "DAS",
  username: "ESDFASda",
});

console.log(getUser());

// Tarea
// 1. Transformen a una function de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

const getUsuarioActivo = (nombre) => ({
  uid: "ABC145",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Fernando");
console.log(usuarioActivo);
