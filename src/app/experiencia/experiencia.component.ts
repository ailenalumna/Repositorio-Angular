import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../model/experiencia';
//import { PorfolioService } from '../servicios/porfolio.service';
import { ExperienciaService } from '../servicios/experiencia.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
experiencia: Experiencia | undefined;

  constructor(private sExperiencia: ExperienciaService ) { }

  ngOnInit(): void {
    this.cargarExperiencia();
    //this.porfolioService.getDatos().subscribe(porfolio =>{
     //this.experiencia=porfolio.experiencia;
    
    }

    cargarExperiencia():void{
      this.sExperiencia.list().subscribe(data => {this.experiencia=data});
    }
}
