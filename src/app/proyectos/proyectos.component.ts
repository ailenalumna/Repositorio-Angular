import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
proyectos: any = [];


  constructor( private porfolioService: PorfolioService ) { }

  ngOnInit(): void {
    this.porfolioService.getDatos().subscribe(porfolio =>{
      this.proyectos=porfolio.proyectos;
   });
  }

}
