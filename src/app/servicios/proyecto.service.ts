import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';
@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url= 'http://localhost:8080/proyecto/'
  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.url + 'lista');
      }
    
      public find(id: number): Observable<any>{
        return this.httpClient.get<any>(this.url + `ver/${id}`);
      }
      public create(proyecto: Proyecto): Observable<any>{
        return this.httpClient.post<any>(this.url + 'crear', proyecto);
      }
    
      public update(proyecto: Proyecto): Observable<any>{        
        return this.httpClient.put<any>(this.url + 'editar', proyecto);
      }
      public delete(id: number): Observable<any>{
        return this.httpClient.delete<any>(this.url + `borrar/${id}`);
      }
}
