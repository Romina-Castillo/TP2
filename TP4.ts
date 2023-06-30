class PartidoPolitico {
    nombre: string;
    siglas: string;
    constructor(nombre: string, siglas: string) {
        this.nombre = nombre;
        this.siglas = siglas;
    }
}
class Candidato{
    nombre: string;
    partido: PartidoPolitico;
    constructor(nombre: string, partido: PartidoPolitico) {
        this.nombre = nombre;
        this.partido = PartidoPolitico;
    }
}
class Lista {
    nombre: string;
    candidatos: Candidato;
    constructor (nombre: string, candidatos: Candidato){
        this.nombre = nombre;
        this.candidatos = Candidato;
    }
}
class Votante {
    nombre: string;
    dni: number;
    provincia: string;
    departamento: string;
    constructor (nombre: string, dni: number, provincia: string, departamento: string){
        this.nombre = nombre;
        this.dni = dni;
        this.provincia = provincia;
        this.departamento = departamento;
    }
}
class Voto {
    votante: Votante;
    lista: Lista;
    constructor(votante: Votante, lista: Lista){
        this.votante = Votante;
        this.lista = Lista;
    }
}
class Eleccion {
    nombre: string;
    tipo: string;
    partidosPoliticos: PartidoPolitico[];
    listas: Lista[];
    votantes: Votante[];
    votos: Voto[];
    constructor(nombre: string, tipo: string){
        this.nombre = nombre;
        this.tipo = tipo;
        this.partidosPoliticos = [];
        this.listas = [];
        this.votantes = [];
        this.votos = [];
    }
    agregarPartidoPolitico (partido: PartidoPolitico){
        this.partidosPoliticos.push(partido);
    }
    agregarLista (lista: Lista){
        this.listas.push(lista);
    }
    agregarVotante (votante: Votante){
        this.votantes.push(votante);
    }
    agregarVoto (votante: Votante, lista: Lista): boolean {
        if (this.votantes.includes(votante)){
            const voto = new Voto(votante,lista);
            this.votos.push(voto);
            return true;
            }
            else{
                return false;
            }
    }
}
