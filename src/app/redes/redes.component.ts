import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
redes = [
    {
       "id":0,
       "icono": "fa-linkedin"
    
    },
    {
       "id":1,
       "icono": "fa-github"
    
    },
    {
       "id":2,
       "icono": "f16d"
    
    }
    
    ]

  constructor(private porfolioService: PorfolioService) { }

  ngOnInit(): void {
    this.porfolioService.getDatos().subscribe(porfolio =>{
      this.redes=porfolio.redes;
   });
  }

}
