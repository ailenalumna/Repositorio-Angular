import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../model/proyecto';
import { ProyectoService } from '../servicios/proyecto.service';

//import { PorfolioService } from '../servicios/porfolio.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
proyectos: any= [];


  constructor( private sProyecto: ProyectoService) { }

  ngOnInit(): void {
   this.cargarProyecto();
  }
  cargarProyecto():void{
    this.sProyecto.list().subscribe(data =>{this.proyectos=data});
  }
  delete(id:number){
    if(id != undefined){
      this.sProyecto.delete(id).subscribe(
        data =>{
          this.cargarProyecto();
        }, err =>{
          alert("No se pudo eliminar el proyecto");
        })
    }}
}
