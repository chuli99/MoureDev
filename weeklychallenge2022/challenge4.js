/*
 * Reto #4
 * ÁREA DE UN POLÍGONO
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
*/

function area(poligono,base,altura){
    if (poligono == 'triangulo'){
        return base*altura/2
    }
    if (poligono == 'cuadrado'){
        return base*base
    }
    if (poligono == 'rectangulo'){
        return base*altura
    }
}
console.log(area("triangulo",20,20))
console.log(area("rectangulo",30,30))
console.log(area("cuadrado",10,10))