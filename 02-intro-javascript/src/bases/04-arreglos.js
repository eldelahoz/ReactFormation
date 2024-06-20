// Arreglos en JS
// const arreglo = new Array(100);

const arreglo = [1, 2, 3, 4, 5];

// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);
// arreglo.push(5);

let arreglo2 = [...arreglo, 6];
// arreglo2.push(6);

const arreglo3 = arreglo2.map((x) => {
  return x * 2;
});

console.log(arreglo);
console.log(arreglo3);
