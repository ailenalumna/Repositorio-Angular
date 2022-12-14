import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
imagenLogoAP: string = '';
imagenTitulo: string = '';

  constructor(private porfolioService: PorfolioService ) { }

  ngOnInit(): void {
    
  }

}
