const personajes = ["Gon", "Killua", "Kurapila"];

const [, , p1] = personajes;

console.log(p1);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

//Tarea
//1. El primer valor del arr se llamará nombre
//2. El segundo se llamara setNombre
const state2 = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola mundo");
    },
  ];
};

const arr = state2("Gon");
arr[1]();
console.log(arr);

//Respuesta

const state3 = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola mundo");
    },
  ];
};

const [nombre, setNombre] = state3("Killua");

console.log(nombre);
setNombre();
