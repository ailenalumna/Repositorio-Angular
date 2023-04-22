import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { GuardGuard } from './servicios/guard.guard';
import { LoginComponent } from './modals/login/login.component';
const routes: Routes = [
  {path:'inicio', component:IndexComponent, canActivate: [GuardGuard]},
  {path:'login', component:LoginComponent},
  //{path:'dashboard', component:DashboardComponent},
  {path:'', redirectTo:'/', pathMatch:'full'},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
