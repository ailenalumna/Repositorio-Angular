import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {  HttpClientModule } from '@angular/common/http';


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
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { EliminarComponent } from './modals/eliminar/eliminar.component';
import { RedesPanelComponent } from './dashboard/redes-panel/redes-panel.component';
import { BannerPanelComponent } from './dashboard/banner-panel/banner-panel.component';
import { AboutPanelComponent } from './dashboard/about-panel/about-panel.component';
import { WorkPanelComponent } from './dashboard/work-panel/work-panel.component';
import { EducPanelComponent } from './dashboard/educ-panel/educ-panel.component';
import { SkillsPanelComponent } from './dashboard/skills-panel/skills-panel.component';
import { ProyecPanelComponent } from './dashboard/proyec-panel/proyec-panel.component';
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
    DashboardComponent,
    ErrorComponent,
    IndexComponent,
    EliminarComponent,
    RedesPanelComponent,
    BannerPanelComponent,
    AboutPanelComponent,
    WorkPanelComponent,
    EducPanelComponent,
    SkillsPanelComponent,
    ProyecPanelComponent,
    EditarAcercaDeMiComponent,
    EditarExperienciaComponent,
    EditarEducacionComponent,
    EditarHabilidadesComponent,
    EditarProyectosComponent,
    AgregarEducacionComponent,
    AgregarHabilidadesComponent,
    AgregarProyectosComponent,
    AgregarExperienciaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
