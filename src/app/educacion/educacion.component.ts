import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
educacion: any = [];

  constructor( private porfolioService: PorfolioService ) { }

  ngOnInit(): void {
    this.porfolioService.getDatos().subscribe(porfolio =>{
      this.educacion=porfolio.educacion;
   });
  }

}
