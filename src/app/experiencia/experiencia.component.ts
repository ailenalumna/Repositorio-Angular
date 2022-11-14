import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
experiencia: string = '';
  constructor(private porfolioService: PorfolioService ) { }

  ngOnInit(): void {
    this.porfolioService.getDatos().subscribe(porfolio =>{
     this.experiencia=porfolio.experiencia;
    
   });
  
  }

}
