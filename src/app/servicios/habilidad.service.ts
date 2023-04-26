import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../model/habilidad';
@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  url= 'https://portfolio-back-8y7e.onrender.com/habilidad/';
  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Habilidades[]>{
    return this.httpClient.get<Habilidades[]>(this.url + 'lista');
      }
    
      public find(id: number): Observable<any>{
        return this.httpClient.get<any>(this.url + `ver/${id}`);
      }
      public create(habilidad: Habilidades): Observable<any>{
        return this.httpClient.post<any>(this.url + 'crear',habilidad);
      }
    
      public update(habilidad: Habilidades): Observable<any>{        
        return this.httpClient.put<any>(this.url + 'editar', habilidad);
      }
      public delete(id: number): Observable<any>{
        return this.httpClient.delete<any>(this.url + `borrar/${id}`);
      }
}
