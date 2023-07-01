<<<<<<< HEAD
/*ejercicio 2 Crear una clase y una interfaz para representar una lista de tareas 
crea una clase llamada ListaTareas que tenga un arreglo privado de tareas (tareas) y los siguientes métodos:
agregarTarea(tarea: Tarea): void: Agrega una nueva tarea al arreglo tareas.
marcarTareaCompleta(id: number): void: Marca una tarea como completada, buscándola por su id y actualizando 
el valor de la propiedad completada a true.
listarTareas(): void: Muestra por consola la lista de tareas, incluyendo su id, descripción y estado de completado
**/
interface Tarea {
    id: number;
    descripcion: string;
    completada: boolean;
}
class ListaTareas {
    private tareas: Tarea[];
    constructor() {
        this.tareas = [];
    }
    agregarTarea(tarea: Tarea): void {
        this.tareas.push(tarea);
    }
    marcarTareaCompleta(id: number): void {
        const tareaEncontrada = this.tareas.find((tarea) => tarea.id === id);
        if (tareaEncontrada) {
        tareaEncontrada.completada = true;
        }
    }
    listarTareas(): void {
        console.log("Lista de tareas:");
        this.tareas.forEach((tarea) => {
        console.log(`ID: ${tarea.id}, Descripción: ${tarea.descripcion}, Completada: ${tarea.completada}`);
        });
    }
}
const lista = new ListaTareas();
lista.agregarTarea({id: 1, descripcion: "Hacer trabajo practico de programacion", completada: false});
lista.agregarTarea({id: 2, descripcion: "Estudiar para Comunicacion y redes", completada: false});
lista.marcarTareaCompleta(1);
lista.listarTareas();
=======
/*ejercicio 2 Crear una clase y una interfaz para representar una lista de tareas 
crea una clase llamada ListaTareas que tenga un arreglo privado de tareas (tareas) y los siguientes métodos:
agregarTarea(tarea: Tarea): void: Agrega una nueva tarea al arreglo tareas.
marcarTareaCompleta(id: number): void: Marca una tarea como completada, buscándola por su id y actualizando 
el valor de la propiedad completada a true.
listarTareas(): void: Muestra por consola la lista de tareas, incluyendo su id, descripción y estado de completado
**/
interface Tarea {
    id: number;
    descripcion: string;
    completada: boolean;
}
class ListaTareas {
    private tareas: Tarea[];
    constructor() {
        this.tareas = [];
    }
    agregarTarea(tarea: Tarea): void {
        this.tareas.push(tarea);
    }
    marcarTareaCompleta(id: number): void {
        const tareaEncontrada = this.tareas.find((tarea) => tarea.id === id);
        if (tareaEncontrada) {
        tareaEncontrada.completada = true;
        }
    }
    listarTareas(): void {
        console.log("Lista de tareas:");
        this.tareas.forEach((tarea) => {
        console.log(`ID: ${tarea.id}, Descripción: ${tarea.descripcion}, Completada: ${tarea.completada}`);
        });
    }
}
const lista = new ListaTareas();
lista.agregarTarea({id: 1, descripcion: "Hacer trabajo practico de programacion", completada: false});
lista.agregarTarea({id: 2, descripcion: "Estudiar para Comunicacion y redes", completada: false});
lista.marcarTareaCompleta(1);
lista.listarTareas();
>>>>>>> 9adf425ca4a4b0a4d080093a2ce22a9a000470ee
