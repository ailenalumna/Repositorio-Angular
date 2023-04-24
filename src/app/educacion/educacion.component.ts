import { Component, OnInit } from '@angular/core';
import { Educacion } from '../model/educacion';
import { EducacionService } from '../servicios/educacion.service';
import { AutenticacionService } from '../servicios/autenticacion.service';
//import { PorfolioService } from '../servicios/porfolio.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
educaciones: Educacion[]=[];
modoEdit: any;
  constructor( private sEducacion: EducacionService, private autService: AutenticacionService ) { }

  ngOnInit(): void {

   this.cargarEducacion();

   if (sessionStorage.getItem('currentUser') == "null"){
    this.modoEdit = false;
  }else if (sessionStorage.getItem('currentUser') == null){
    this.modoEdit = false;
  }else {
    this.modoEdit = true;
  }

  }
  cargarEducacion():void{
    this.sEducacion.list().subscribe(data =>{this.educaciones=data});
  }
  delete(id?:number){
    if(id != undefined){
      this.sEducacion.delete(id).subscribe(
        data =>{
         
          this.cargarEducacion();
        });
        window.location.reload();
    }
  }
}
