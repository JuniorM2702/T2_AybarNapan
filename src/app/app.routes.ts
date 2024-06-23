import { Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { authGuard } from './auth.guard';
import { Pregunta2Component } from './dashboard/pregunta2/pregunta2.component';
import { Pregunta1Component } from './dashboard/pregunta1/pregunta1.component';
import { Pregunta3Component } from './dashboard/pregunta3/pregunta3.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent, canActivate: [authGuard],
    children: [
      { path: "home", component: HomeComponent },
      { path: "pregunta1", component: Pregunta1Component },
      { path: "pregunta2", component: Pregunta2Component },
      { path: "pregunta3", component: Pregunta3Component },
    ]
  },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent}
];

