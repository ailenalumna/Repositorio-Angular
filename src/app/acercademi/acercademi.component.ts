import { Component, OnInit } from '@angular/core';
//import { PorfolioService } from '../servicios/porfolio.service';
import { Persona } from '../model/persona';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { PersonaService } from '../servicios/persona.service';
@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {
persona: Persona =  new Persona("","", "","", "","","","","");
modoEdit: any;
  //crear variable de instancia para almacenar los datos con los que trata el servicio e inicializar variables de instancia
  nombre: string = '';
  apellido: string = '';
  acerca: string = '';
  tituloPerfil: string = '';
  imagenPerfil: string = '';
  imagenFondo: string = '';
  tituloAcerca: string = '';


  constructor (
    //inyectar el servicio para tener acceso enla clase a los metodos
    private personaService: PersonaService, private autService: AutenticacionService,) 
    //private porfolioService: PorfolioService) { }
{}
  ngOnInit(): void {
    //esto es almacenar en la variable de instancia los datos recuperados por los servicios?
    this.personaService.find().subscribe(data =>{
      
     // console.log(porfolio);
       //definir info a mostrar
     this.nombre= this.nombre;
       this.apellido= this.apellido;
       this.acerca= this.acerca;
       this.tituloPerfil= this.tituloPerfil;
       this.imagenPerfil= this.imagenPerfil;
       this.imagenFondo= this.imagenFondo;
       this.tituloAcerca= this.tituloAcerca;
    });
   
  this.personaService.find().subscribe(data => {this.persona = data;});

     if (sessionStorage.getItem('currentUser') == "null"){
    this.modoEdit = false;
     }else if (sessionStorage.getItem('currentUser') == null){
     this.modoEdit = false;
     }else {
     this.modoEdit = true;
    
 }

}
}
