/*DESCRIPCIÓN: Dado un arreglo de números determinar cuál es el mayor y
mostrarlo, si existe el número cero una o más veces en el arreglo también mostrar
“Hay un cero”, pero una sola vez.
Por eje:
=> [3, 4, 0, 3, 0, 9, 12, 5]
12
“Hay un cero”
=> [4, -4, 10, 23, 3, 4, 12, 50]
50
**/
/*void se usa donde no hay datos. Por ejemplo, si una función no devuelve ningún valor, puede especificar void como tipo de devolución//*
**/
function encontrarMayor(arr: number[]): void {  
    let mayor: number = Number.NEGATIVE_INFINITY;       //let: se utiliza para declarar una variable que puede ser reasignada
    let hayCero: boolean = false;
    for (let num of arr) {
            if (num === 0) {
            hayCero = true;
        }
    if (num > mayor) {
        mayor = num;
    }
    }
    if (hayCero) {
    console.log("Hay un cero");
    }
    console.log("El número mayor es:", mayor);
}
const arreglo: number[] = [5, 8, 2, 0, 10, 3, 0];   //const especifica que el valor de una variable es constante e indica al compilador que evite que el programador lo modifique
encontrarMayor(arreglo);