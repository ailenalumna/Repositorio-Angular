import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
 redes: any = [];

  constructor(private porfolioService: PorfolioService) { }

  ngOnInit(): void {
    this.porfolioService.getDatos().subscribe(porfolio =>{
      //definir info a mostrar
      this.redes=porfolio.redes;
   });
  }

}
