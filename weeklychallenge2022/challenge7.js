/*
 * Reto #7
 * CONTANDO PALABRAS
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que cuente cuantas veces se repite cada palabra y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
*/
function contarPalabras(texto) {
    // Eliminar signos de puntuación y convertir todo a minúsculas
    const palabras = texto.replace(/[^\w\s]/g, "").toLowerCase().split(" ");
  
    // Crear un objeto para almacenar el recuento de palabras
    const recuento = {};
  
    // Contar las ocurrencias de cada palabra
    for (let i = 0; i < palabras.length; i++) {
      const palabra = palabras[i];
      if (recuento[palabra]) {
        recuento[palabra]++;
      } else {
        recuento[palabra] = 1;
      }
    }
  
    // Crear un string con el recuento final de todas las palabras
    let resultado = "";
    for (const palabra in recuento) {
      resultado += ${palabra}: ${recuento[palabra]}\n;
    }
  
    return resultado;
  }

contarPalabras("El amor es una experiencia universal que nos conmueve a todos, pero a veces no hallamos las palabras adecuadas para expresarlo. A lo largo de la historia los poetas han sabido decir aquello que todos sentimos de formas creativas y elocuentes,Por ello, en este artículo conoceremos una selección de treinta y siete poemas de amor cortos de poetas reconocidos, que pueden dar inspiración a cualquier corazón ansioso de expresarse.")
