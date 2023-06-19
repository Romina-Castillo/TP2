// Crear una clase Escuela (1) que tiene un listado de dos Cursos al cual se le asignan dos Alumnos 
class alumno {
    nombre: string;
    constructor (nombre: string) {
        this.nombre = nombre;
    }
}
class curso{
    nombre: string;
    alumnos: alumno [];
    constructor (nombre:string) {
        this.nombre = nombre;
        this.alumnos = []
    }
    asignarAlumno (alumno: alumno) {
        this.alumnos.push(alumno);    
    }
}
class escuela {
    nombre: string;
    cursos: curso [];
    constructor (nombre: string){
        this.nombre = nombre;
        this.cursos = []
    }
    asignarCurso (curso: curso) {
        this.cursos.push(curso);
    }
}
const alumno1 = new alumno ("Daniela");
const alumno2 = new alumno ("Martin");
const alumno3 = new alumno ("Melani");
const alumno4 = new alumno ("Aaron");
const curso1 = new curso ("Programacion I");
const curso2 = new curso ("Programacion II");

curso1.asignarAlumno (alumno1)
curso1.asignarAlumno (alumno2)
curso2.asignarAlumno (alumno3)
curso2.asignarAlumno (alumno4)