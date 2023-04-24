import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../model/proyecto';
import { ProyectoService } from '../servicios/proyecto.service';
import { AutenticacionService } from '../servicios/autenticacion.service';

//import { PorfolioService } from '../servicios/porfolio.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
proyectos: Proyecto[]=[];
modoEdit: any;

  constructor( private sProyecto: ProyectoService, private autServie: AutenticacionService) { }

  ngOnInit(): void {
   this.cargarProyecto();
   if (sessionStorage.getItem('currentUser') == "null"){
    this.modoEdit = false;
  }else if (sessionStorage.getItem('currentUser') == null){
    this.modoEdit = false;
  }else {
    this.modoEdit = true;
  }
  }
  cargarProyecto():void{
    this.sProyecto.list().subscribe(data =>{this.proyectos=data});
  }
  delete(id:number){
    if(id != undefined){
      this.sProyecto.delete(id).subscribe(data =>
        {
          this.cargarProyecto();
        });
    window.location.reload();
}
  }
}
