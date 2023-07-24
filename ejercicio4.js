//Dados un array de 10 números, informar cuantos de ellos son positivos.

let numeros = [2, 6, -3, 8, 1, -5, 9, -10, -7, 4];

let positivos = 0;

for (let i = 0; i < numeros.length; i++){
    if(numeros[i] > 0){
        positivos++;
    }
}
alert("Los números positivos en el array son: " +positivos)