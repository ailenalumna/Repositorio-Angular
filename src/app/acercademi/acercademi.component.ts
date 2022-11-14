import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {

  //crear variable de instancia para almacenar los datos con los que trata el servicio e inicializar variables de instancia
  nombre: string = '';
  apellido: string = '';
  acerca: string = '';
  tituloPerfil: string = '';
  imagenPerfil: string = '';
  imagenFondo: string = '';
  tituloAcerca: string = '';


  constructor (
    //inyectar el servicio para tener acceso enla clase a los metodos
    private porfolioService: PorfolioService 
  ) { }

  ngOnInit(): void {
    //esto es almacenar en la variable de instancia los datos recuperados por los servicios?
    this.porfolioService.getDatos().subscribe(porfolio =>{
      console.log(porfolio);
       //definir info a mostrar
       this.nombre=porfolio.nombre;
       this.apellido=porfolio.apellido;
       this.acerca=porfolio.acerca;
       this.tituloPerfil=porfolio.tituloPerfil;
       this.imagenPerfil=porfolio.imagenPerfil;
       this.imagenFondo=porfolio.imagenFondo;
       this.tituloAcerca=porfolio.tituloAcerca;
    });
  }

}
