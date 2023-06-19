/* Crear una clase Cuenta Bancaria a la cual le podemos asignar fondos y sacar fondos

    • Si le asignamos más de 500000 disparamos una alarma
    • Si intentamos sacar más de lo que disponemos disparamos otra alarma
    • Si intentamos sacar más de 100000 disparamos otra alarma  */
class CuentaBancaria {
    fondos: number;
    constructor() {
        this.fondos = 0;
        }
        asignarFondos(monto: number): void {
        this.fondos += monto;
        if (monto > 500000) {
            this.dispararAlarma("Asignación de fondos alta");
        }
    }
        sacarFondos(monto: number): void {
            if (monto > this.fondos) {
            this.dispararAlarma("Fondos insuficientes");
            } 
            else if (monto > 100000) {
            this.dispararAlarma("Retiro de fondos alto");
            } 
            else {
            this.fondos -= monto;
            }
        }
        dispararAlarma(mensaje: string): void {
        console.log(`ALARMA:`, mensaje);
        }
        }