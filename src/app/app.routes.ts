
import {RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { fullComponent } from './full/full.component';
import { NgModule } from '@angular/core';

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
        path:'login', component:LoginComponent
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRountingModule{}
