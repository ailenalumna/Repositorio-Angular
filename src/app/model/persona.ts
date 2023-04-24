
export class Persona {

    id?: number;
    nombre: String;
    apellido: String;
    imagenPerfil: String;
    tituloPerfil: String;
    tituloAcerca: String;
    acerca: String;
    imagenFondo: String;
    imagenLogoAP: String;
    clave: String;
    email: String;   

    constructor(nombre: String, apellido: String, imagenPerfil: String,  tituloPerfil: String, tituloAcerca: String, acerca: String, imagenFondo: String,imagenLogoAP:String ,clave: String,email: String )

    {
      
        this.nombre = nombre;
        this.apellido = apellido;
        this.imagenPerfil = imagenPerfil;
        this.tituloPerfil = tituloPerfil;
        this.tituloAcerca = tituloAcerca;
        this.acerca = acerca;
        this.imagenFondo = imagenFondo;
        this.imagenLogoAP = imagenLogoAP;
        this.clave = clave;
        this.email = email;
    
 
         }
}
