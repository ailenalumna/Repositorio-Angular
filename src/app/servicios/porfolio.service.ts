import { Injectable } from '@angular/core';
//esto es para suscribirse y que se reciba respuesta de forma asincrona
import { Observable } from 'rxjs';
//esto  es para poder hacer peticiones
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class PorfolioService {
//el primer http se llama alias
  constructor(private http:HttpClient) { }

  // Método observable que devuelve los datos
  getDatos():Observable<any>{
    //se llama al json con su path, o bien, en su lugar se puede poner una URL para traer datos de un json online
  return this.http.get('/assets/json/porfolio.json');
  }


}
