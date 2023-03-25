export class Experiencia {
    id? : number;
    descripcion : String;
    personaid : number;

    constructor(descripcion:string, personaid:number){
        this.descripcion = descripcion;
        this.personaid = personaid;
    }
}
