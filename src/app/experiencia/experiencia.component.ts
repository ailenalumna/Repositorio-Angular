import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../model/experiencia';
//import { PorfolioService } from '../servicios/porfolio.service';
import { ExperienciaService } from '../servicios/experiencia.service';
import { AutenticacionService } from '../servicios/autenticacion.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
experiencia:  string='';
modoEdit: any;

  constructor(private sExperiencia: ExperienciaService, private autService: AutenticacionService ) { }

  ngOnInit(): void {
    this.cargarExperiencia();
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    }else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    }else {
      this.modoEdit = true;
    }
    //this.porfolioService.getDatos().subscribe(porfolio =>{
     //this.experiencia=porfolio.experiencia;
    
    }

    cargarExperiencia():void{
      this.sExperiencia.list().subscribe(data => {this.experiencia=data});
    }
    delete(id?:number){
      if(id != undefined){
        this.sExperiencia.delete(id).subscribe(
          data =>{
            alert("Eliminado correctamente");
            this.cargarExperiencia();
          }, err =>{
            alert("No se pudo eliminar la experiencia");
          })
      }}
}
