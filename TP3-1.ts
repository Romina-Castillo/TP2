/* ejercicio 1 crear una clase abstracta llamada Animal y dos clases hijas llamadas Perro y 
Gato que extiendan la clase Animal. Cada una de las clases hijas debe implementar el método 
hacerSonido() de forma diferente.
**/
abstract class Animal {
    abstract hacerSonido(): void;
}
class Perro extends Animal {
    hacerSonido() {
    console.log (`El perro dice Guau, Guau`)
    }
}
class Gato extends Animal {
    hacerSonido() {
    console.log (`El gato dice Miau, Miau`)
    }
}
const perro = new Perro()
const gato = new Gato()
perro.hacerSonido()
gato.hacerSonido()