import { Component, OnInit } from '@angular/core';
import { Educacion } from '../model/educacion';
import { EducacionService } from '../servicios/educacion.service';
//import { PorfolioService } from '../servicios/porfolio.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
educaciones: Educacion[]=[];

  constructor( private sEducacion: EducacionService ) { }

  ngOnInit(): void {
   this.cargarEducacion();
  }
  cargarEducacion():void{
    this.sEducacion.list().subscribe(data =>{this.educaciones=data});
  }
  delete(id?:number){
    if(id != undefined){
      this.sEducacion.delete(id).subscribe(
        data =>{
          alert("Eliminado correctamente");
          this.cargarEducacion();
        }, err =>{
          alert("No se pudo eliminar la educación");
        })
    }}
}
