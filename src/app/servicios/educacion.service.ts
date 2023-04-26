import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion  } from '../model/educacion';
@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url= 'https://portfolio-back-8y7e.onrender.com/educacion/';
  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url + 'lista');
      }
    
      public find(id: number): Observable<any>{
        return this.httpClient.get<any>(this.url + `ver/${id}`);
      }
      public create(educacion: Educacion): Observable<any>{
        return this.httpClient.post<any>(this.url + 'crear', educacion);
      }
    
      public update(educacion: Educacion): Observable<any>{        
        return this.httpClient.put<any>(this.url + 'editar', educacion);
      }
      public delete(id: number): Observable<any>{
        return this.httpClient.delete<any>(this.url + `borrar/${id}`);
      }
}
