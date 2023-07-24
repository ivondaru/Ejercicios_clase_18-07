//Ejercicio de búsqueda de número máximo: Escribir un algoritmo que encuentre el número máximo en un arreglo de números.

let num = prompt("Por favor ingrese una cadena de números");
let num_mayor = 0;

for(let i = 0; i < num.length; i++){
    if(num [i] > num_mayor){
        num_mayor = num[i];
    }
}
alert("El número mayor en la cadena es: " +num_mayor)