
function promedio() {
  if (arguments.length === 1 && Array.isArray(arguments[0])) {
    // sobrecarga para array de números
    const numeros = arguments[0];
    const suma = numeros.reduce((total, num) => total + num, 0);
    return suma / numeros.length;
  } else if (
    arguments.length === 2 &&
    Array.isArray(arguments[0]) &&
    Array.isArray(arguments[1])
  ) {
    // sobrecarga para dos arrays de números
    const numeros = [...arguments[0], ...arguments[1]];
    const suma = numeros.reduce((total, num) => total + num, 0);
    return suma / numeros.length;
  } else if (
    arguments.length === 2 &&
    typeof arguments[0] === "number" &&
    typeof arguments[1] === "number"
  ) {
    // sobrecarga para dos argumentos numéricos
    return (arguments[0] + arguments[1]) / 2;
  } else {
    // sobrecarga para uno o más argumentos numéricos
    const numeros = [...arguments];
    const suma = numeros.reduce((total, num) => total + num, 0);
    return suma / numeros.length;
  }
}
let numeros = [13, 2, 33, 4, 55, 6, 73];
let numeros2 = [34, 24, 6, 81, 56];
console.log(promedio(numeros, numeros2));
console.log(promedio(1, 2, 3, 5, 6));
