/*DESCRIPCIÓN: Dados 2 arreglos de números enteros de la misma longitud, obtener un
nuevo arreglo a partir de la suma de los elementos de ambos arreglos en la misma
posición, y mostrar el arreglo resultante.
**/
function sumarArreglos(arr1: number[], arr2: number[]): number[] {
    const resultado: number[] = [];
    for (let i = 0; i < arr1.length; i++) {
    const suma = arr1[i] + arr2[i];
    resultado.push(suma);
    }
    return resultado;
    }
const array1: number[] = [3, 4, 0, 3, 0, 9];
const array2: number[] = [4, 4, 10, 23, 3, 4];
const resultado = sumarArreglos(array1, array2);
console.log("El array resultante es:", resultado);
