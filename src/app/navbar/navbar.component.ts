import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/persona';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { PersonaService } from '../servicios/persona.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  persona: Persona = new Persona("", "", "", "", "", "", "", "", "", "");
  //userLoginOn:boolean=false; 
  modoEdit: any;



  constructor(private persoService: PersonaService, private autService: AutenticacionService) { }

  ngOnInit(): void {

      this.persoService.find().subscribe(data =>{this.persona=data});
    
  //  this.cargarPersona();

    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    }else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    }else{
      this.modoEdit = true;
    }

  }    
 // cargarPersona(): void {
    //this.persoService.list().subscribe(data =>{this.persona=data});
 // }
  
  
  cerrarSesion(){
    sessionStorage.setItem('currentUser', "null");
    this.modoEdit = false;
    alert("Sesión cerrada");
    window.location.reload();
    return this.modoEdit;
    
  }

  }

      

