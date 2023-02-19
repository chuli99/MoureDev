/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Bool) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
*/

function anagram(w1,w2){
    let cont = 0
    for (let i=0; i < w1.length; i++){
        for (let j=0; j < w2.length; j++){
            if (w1[i] == w2[j]){
                cont = cont + 1
                }
            }
        }
    if (cont == w1.length){
        return true
        }
    else console.log(cont)
    return false
    }

console.log(anagram("amor","roma"))