export class Proyecto {
    id? : number;
    logoProyecto : string;
    titulo : string;
    inicio : string;
    fin : string;
    descripcion: string;

    constructor(logoProyecto:string,titulo:string, inicio:string, fin:string,  descripcion:string){
        this.logoProyecto = logoProyecto;
        this.titulo = titulo;
        this.inicio = inicio;
        this.fin = fin;
        this.descripcion = descripcion;
    }
}
