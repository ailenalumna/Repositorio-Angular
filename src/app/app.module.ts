import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { AcercademiComponent } from './acercademi/acercademi.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { EliminarComponent } from './modals/eliminar/eliminar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarAcercaDeMiComponent } from './modals/editar-acerca-de-mi/editar-acerca-de-mi.component';
import { EditarExperienciaComponent } from './modals/editar-experiencia/editar-experiencia.component';
import { EditarEducacionComponent } from './modals/editar-educacion/editar-educacion.component';
import { EditarHabilidadesComponent } from './modals/editar-habilidades/editar-habilidades.component';
import { EditarProyectosComponent } from './modals/editar-proyectos/editar-proyectos.component';
import { AgregarEducacionComponent } from './modals/agregar-educacion/agregar-educacion.component';
import { AgregarHabilidadesComponent } from './modals/agregar-habilidades/agregar-habilidades.component';
import { AgregarProyectosComponent } from './modals/agregar-proyectos/agregar-proyectos.component';
import { AgregarExperienciaComponent } from './modals/agregar-experiencia/agregar-experiencia.component';
import { AgregarRedComponent } from './modals/agregar-red/agregar-red.component';
import { InterceptorService } from './servicios/interceptor.service';
import { PersonaService } from './servicios/persona.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    AcercademiComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    ErrorComponent,
    IndexComponent,
    EliminarComponent,
    EditarAcercaDeMiComponent,
    EditarExperienciaComponent,
    EditarEducacionComponent,
    EditarHabilidadesComponent,
    EditarProyectosComponent,
    AgregarEducacionComponent,
    AgregarHabilidadesComponent,
    AgregarProyectosComponent,
    AgregarExperienciaComponent,
    AgregarRedComponent,
  ],
 
  providers: [ PersonaService, { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}],
  bootstrap: [AppComponent],
   imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]

})
export class AppModule { }
