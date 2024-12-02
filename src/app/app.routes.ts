import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { fullComponent } from './full/full.component';

export const routes: Routes = [
  {
    path: '',
    //component:fullComponent,

    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path:'full',
        component: fullComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path:'login',
        component:LoginComponent
      },
    ],
  },
];
