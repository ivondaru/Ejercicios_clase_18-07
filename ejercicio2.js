//Ejercicio de conteo de vocales: Escribir un algoritmo que cuente la cantidad de vocales en una cadena de texto ingresada por el usuario.

let texto = prompt("Por favor ingrese el texto");
let conteo = 0;

for(let i = 0; i < texto.length; i++){
    let letra = texto[i].toLowerCase();
    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        conteo++
    }
}
alert ("La cantidad de vocales en la cadena de texto es: " +conteo);