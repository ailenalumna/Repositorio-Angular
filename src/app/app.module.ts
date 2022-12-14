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
import { EditarComponent } from './modals/editar/editar.component';
import { AgregarComponent } from './modals/agregar/agregar.component';
import { EliminarComponent } from './modals/eliminar/eliminar.component';
import { RedesPanelComponent } from './dashboard/redes-panel/redes-panel.component';
import { BannerPanelComponent } from './dashboard/banner-panel/banner-panel.component';
import { AboutPanelComponent } from './dashboard/about-panel/about-panel.component';
import { WorkPanelComponent } from './dashboard/work-panel/work-panel.component';
import { EducPanelComponent } from './dashboard/educ-panel/educ-panel.component';
import { SkillsPanelComponent } from './dashboard/skills-panel/skills-panel.component';
import { ProyecPanelComponent } from './dashboard/proyec-panel/proyec-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    EditarComponent,
    AgregarComponent,
    EliminarComponent,
    RedesPanelComponent,
    BannerPanelComponent,
    AboutPanelComponent,
    WorkPanelComponent,
    EducPanelComponent,
    SkillsPanelComponent,
    ProyecPanelComponent,
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
