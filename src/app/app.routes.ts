import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component:LoginComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path:'login',
        component:LoginComponent
      }
    ],
  },
];
