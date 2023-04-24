import { Component, OnInit } from '@angular/core';
//import { PorfolioService } from '../servicios/porfolio.service';
import { Habilidades } from '../model/habilidad';
import { HabilidadService } from '../servicios/habilidad.service';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidades: Habilidades[]=[]; //se llama al modelo que es un array
  modoEdit: any;
  constructor( private sHabilidad: HabilidadService, private autService: AutenticacionService ) { }

  ngOnInit(): void {
    this.cargarHabilidad();
    
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    }else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    }else {
      this.modoEdit = true;
    }
 
  }
cargarHabilidad():void{
  this.sHabilidad.list().subscribe(data =>{this.habilidades=data});
}
delete(id?:number){
  if(id != undefined){
    this.sHabilidad.delete(id).subscribe(
      data =>{
        this.cargarHabilidad();
      });
  window.location.reload();
    }
  }

}
