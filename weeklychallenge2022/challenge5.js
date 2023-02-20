/*
 * Reto #5
 * ASPECT RATIO DE UNA IMAGEN
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Crea un programa que se encargue de calcular el aspect ratio de una imagen a partir de una url.
 * - Url de ejemplo: https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una imagen de 1920*1080px.
 *
*/
function aspectRatio(url){
    let img = new Image();
    img.src = url;
    let width = img.width;
    let height = img.height;
    let ratio = width/height;
    console.log(ratio);
}
aspectRatio("https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png")

