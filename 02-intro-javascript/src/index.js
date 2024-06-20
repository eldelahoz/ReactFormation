// Desestructuración
// Asignación Desestructurante
const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
  //   rango: "Soldado",
};

// const { nombre: nombre2 } = persona;
// const { nombre, edad, clave } = persona;

// console.log(nombre2);
// // console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);
// console.log(nombre);
// console.log(edad);
// console.log(clave);

const usarContext = ({ clave, nombre, edad, rango = "Capitan" }) => {
  //   console.log(nombre, edad, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -112.3232,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = usarContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);
