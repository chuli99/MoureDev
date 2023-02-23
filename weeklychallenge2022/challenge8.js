/*
 * Reto #8
 * DECIMAL A BINARIO
 * Fecha publicación enunciado: 18/02/22
 * Fecha publicación resolución: 02/03/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea un programa se encargue de transformar un número decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
*/

function decimalABinario(decimal) {
    let residuos = [];
    while (decimal > 0) {
      let residuo = decimal % 2;
      residuos.push(residuo);
      decimal = Math.floor(decimal / 2);
    }
    if (residuos.length === 0) {
      residuos.push(0);
    }
    let binario = "";
    for (let i = residuos.length - 1; i >= 0; i--) {
      binario += residuos[i].toString();
    }
    return binario;
  }

console.log(decimalABinario(0)); // 0