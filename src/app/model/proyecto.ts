export class Proyecto {
    id? : number;
    logoProyecto : string;
    titulo : string;
    inicio : string;
    fin : string;
    descripcion: string;

    constructor(titulo:string, inicio:string, fin:string, logoProyecto:string, descripcion:string){
        this.titulo = titulo;
        this.inicio = inicio;
        this.fin = fin;
        this.logoProyecto = logoProyecto;
        this.descripcion = descripcion;
    }
}
