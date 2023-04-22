import { Component, OnInit } from '@angular/core';
//import { PorfolioService } from '../servicios/porfolio.service';
import { Habilidades } from '../model/habilidad';
import { HabilidadService } from '../servicios/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidades: Habilidades[]=[]; //se llama al modelo que es un array
  modoEdit: any;
  constructor( private sHabilidad: HabilidadService ) { }

  ngOnInit(): void {
    this.cargarHabilidad();
 
  }
cargarHabilidad():void{
  this.sHabilidad.list().subscribe(data =>{this.habilidades=data});
}
delete(id?:number){
  if(id != undefined){
    this.sHabilidad.delete(id).subscribe(
      data =>{
        alert("Eliminado correctamente");
        this.cargarHabilidad();
      }, err =>{
        alert("No se pudo eliminar la habilidad");
      })
  }}
}
