//Invertir las palabras, es decir cambiar de minúsculas a mayúsculas

let palabra = prompt("Ingrese una palabra en minúscula o mayúscula");

function invertirPalabra(palabra){
    let arrayPalabra = palabra.split('');
    for (let i = 0; i < arrayPalabra.length; i++){
        if (arrayPalabra[i] === arrayPalabra[i].toUpperCase()){
            arrayPalabra[i] = arrayPalabra[i].toLowerCase();
        } else {
            arrayPalabra[i] = arrayPalabra[i].toUpperCase();
        }
    }
    return arrayPalabra.join('');
}
alert (invertirPalabra(palabra))