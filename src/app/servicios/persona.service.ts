import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url= 'http://localhost:8080/persona/'
  constructor(private http: HttpClient) { }

  public list(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url + 'lista');
      }
    
      public find(): Observable<any>{
        return this.http.get<any>(this.url + 'ver');
      }
      public create(persona: Persona): Observable<any>{
        return this.http.post<any>(this.url + 'crear', persona);
      }
    
      public update(persona: Persona): Observable<any>{        
        return this.http.put<any>(this.url + 'editar', persona);
      }
      public delete(id: number): Observable<any>{
        return this.http.delete<any>(this.url + `borrar/${id}`);
      }
}
