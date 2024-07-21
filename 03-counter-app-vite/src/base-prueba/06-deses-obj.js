export const usarContext = ({ clave, edad, rango = "Capitan" }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -112.3232,
    },
    rango,
  };
};
