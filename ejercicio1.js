//1.	Escribir un algoritmo que calcule la suma de todos los números pares del 1 al 100.

let suma = 0;
for (let i = 1; i <= 100; i++){
    if(i%2===0){
        suma += i;
    }
}
console.log("La suma de los números pares del 1 al 100 es: " +suma)