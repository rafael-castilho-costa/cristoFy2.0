import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { headerComponent } from './header/header.component';

export const routes: Routes = [
  {
    path: '',
    component:headerComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'header',
        component:headerComponent
      }
    ],
  },
];
