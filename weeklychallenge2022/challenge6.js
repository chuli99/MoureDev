/*
 * Reto #6
 * INVIRTIENDO CADENAS
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea un programa que invierta el orden de una cadena de texto sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function inverseString(string){
    let newString = "";
    for (let i = string.length-1; i >= 0; i--){
        newString += string[i];
    }
    return newString;
}

console.log(inverseString("Hola mundo"));