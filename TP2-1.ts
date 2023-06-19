/* Crear una clase de Auto con los atributos (marca, modelo, potencia, max. velocidad)
    • Crear 5 autos en un array
    • Iterar el array y mostrar los autos por pantalla
    • Iteramos los autos y calculamos con un método (calcular tiempo) cuanto tarda en forma óptima en recorrer x kms */
class auto {
    marca: string;
    modelo: string;
    HP: number;
    VelMax: number;
    constructor (marca:string, modelo:string, HP:number, VelMax:number) {
        this.marca = marca;
            this.modelo = modelo;
            this.HP = HP;
            this.VelMax = VelMax;
    }
    calcular_tiempo (distancia: number):number {
        const tiempo = distancia / this.VelMax
        return tiempo;
    }
}

const autos: auto [] =[
    new auto("Jaguar", "XJ220", 550, 350),
    new auto("Porsche", "918 Spyder", 887, 350),
    new auto("McLaren", "P1", 916, 350),
    new auto("Bugatti", "EB110 SS",611, 351),
    new auto("SSC", "Tuatara", 1250, 460)
]
autos.forEach(auto => {
    console.log("Marca:", auto.marca);
    console.log("Modelo:", auto.modelo);
    console.log("HP:", auto.HP);
    console.log("Velocidad Maxima:", auto.VelMax);
});
const distancia = 1000;
autos.forEach(auto => {
    const tiempo = auto.calcular_tiempo(distancia);
    console.log(`El auto ${auto.marca} ${auto.modelo} tarda ${tiempo} km/h en recorrer ${distancia} kilometros.`)
});
