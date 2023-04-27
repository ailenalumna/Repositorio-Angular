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
persona:  Persona[]= [];
modoEdit: any;
imagenFondo: String='';
  constructor (
    //inyectar el servicio para tener acceso enla clase a los metodos
    private pService: PersonaService, private autService: AutenticacionService )  { }

  ngOnInit(): void {
    
    this.pService.list().subscribe(data => {this.persona = data;});

    if (sessionStorage.getItem('currentUser') == "null"){
     this.modoEdit = false;
     }else if (sessionStorage.getItem('currentUser') == null){
     this.modoEdit = false;
     }else {
    this.modoEdit = true;
    }
    
  }
    //esto es almacenar en la variable de instancia los datos recuperados por los servicios?
 
  }