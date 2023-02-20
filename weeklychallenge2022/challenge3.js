
/*
 * Reto #3
 * ¿ES UN NÚMERO PRIMO?
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function isPrime(n){
    let cont = 0
    for (let i = 1; i <= n; i++){
        if (n % i == 0){
            cont = cont + 1
        }
    }
    if (cont == 2){
        return true
        }
    return false
    }
let primo
for (i = 1; i <= 100; i++){
    primo = isPrime(i)
    if (primo == true){
        console.log(i)
        }
    }