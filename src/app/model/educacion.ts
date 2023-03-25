export class Educacion {
    id? : number;
    tituloCurso : string;
    descripcionCurso : string;
    inicio : string;
    fin : string;
    imagen : string;

    constructor(tituloCurso: string, descripcionCurso:string, inicio:string, fin:string, imagen:string){
        this.tituloCurso = tituloCurso;
        this.descripcionCurso = descripcionCurso;
        this.inicio = inicio;
        this.fin = fin;
        this.imagen = imagen;
    }
}
