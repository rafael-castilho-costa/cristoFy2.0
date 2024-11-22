import {Component} from "@angular/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';



@Component({
  standalone:true,
  selector: 'app-header',
  imports: [MatSlideToggleModule, MatSidenavModule,  MatToolbarModule,
    MatIconModule, MatListModule, MatMenuModule],
  templateUrl:'full.component.html',
  styleUrls: ['full.component.css']

}) export class fullComponent {
    isOpened = false;
    constructor(private router: Router){}
    toggleSidenav() {
      const sidenav: any = document.querySelector('mat-sidenav');
      sidenav.toggle();
      this.isOpened = !this.isOpened;
    }

    logout(): void {
      console.log('Logout Realizado');
      this.router.navigate(['/login']);
    }

}
