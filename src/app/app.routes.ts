
import {RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { fullComponent } from './full/full.component';
import { NgModule } from '@angular/core';
import { AgendaComponent } from './agenda/agenda.component';
import { VisitantesComponent } from './visitantes/visitantes.component';
import { MembrosComponent } from './membros/membros.component';

export const routes: Routes = [

      {
        path: '', redirectTo: 'login', pathMatch: 'full',
      },
      {
        path:'full', component: fullComponent,
      },
      {
        path: 'home', component: HomeComponent,
      },
      {
        path:'login', component:LoginComponent,
      },
      {
        path:'agenda', component: AgendaComponent,
      },
      {
        path:'visitantes', component: VisitantesComponent,
      },
      {
        path:'membros', component: MembrosComponent,
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRountingModule{}
