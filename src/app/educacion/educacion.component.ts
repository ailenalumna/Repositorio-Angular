import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
educaciones: any = [];

  constructor( private porfolioService: PorfolioService ) { }

  ngOnInit(): void {
    this.porfolioService.getDatos().subscribe(porfolio =>{
      this.educaciones=porfolio.educaciones;
   });
  }

}
