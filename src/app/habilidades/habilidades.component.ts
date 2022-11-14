import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidades: any = [];

  constructor( private porfolioService: PorfolioService ) { }

  ngOnInit(): void {
    this.porfolioService.getDatos().subscribe(porfolio =>{
       //definir info a mostrar
       this.habilidades=porfolio.habilidades;
    });
  }

}
