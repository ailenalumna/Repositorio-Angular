import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url= 'http://localhost:8080/experiencia/'
  constructor(private httpClient:HttpClient) { }

  public list(): Observable<any>{
return this.httpClient.get<any>(this.url + 'lista');
  }

  public find(id: number): Observable<any>{
    return this.httpClient.get<any>(this.url + `ver/${id}`);
  }
  public create(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', experiencia);
  }

  public update(experiencia: Experiencia): Observable<any>{        
    return this.httpClient.put<any>(this.url + 'editar', experiencia);
  }
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
}
