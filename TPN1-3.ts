/*DESCRIPCIÓN: Crear una función que calcule la nota final de una materia. Recibe como
parámetro un arreglo de números enteros que representa la nota de cada TP, calcular y
retornar el promedio del alumno.
**/
function calcularPromedio(notas: number[]) {
    const Tps: number = notas.length;
    let sumaTotal: number = 0;
    for (let i = 0; i < Tps; i++) {
    sumaTotal += notas[i];
    }
    const promedio: number = sumaTotal / Tps;
    return promedio;
}
const notasTps: number[] = [80, 90, 70, 85, 95];
const promedioFinal: number = calcularPromedio(notasTps);
console.log("El promedio final es de:", promedioFinal);
