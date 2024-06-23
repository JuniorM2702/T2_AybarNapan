import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AuthGuard } from './auth.guard';
import { Pregunta2Component } from './dashboard/pregunta2/pregunta2.component';
import { Pregunta1Component } from './dashboard/pregunta1/pregunta1.component';
import { Pregunta3Component } from './dashboard/pregunta3/pregunta3.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'pregunta1', component: Pregunta1Component, canActivate: [AuthGuard] },
    { path: 'pregunta2', component: Pregunta2Component, canActivate: [AuthGuard] },
    { path: 'pregunta3', component: Pregunta3Component, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '/login' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }