import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {


  constructor(private porfolioService: PorfolioService) { }

  ngOnInit(): void {
    
  }

}
