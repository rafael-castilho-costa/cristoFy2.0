import {Component} from "@angular/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from "@angular/router";

@Component({
  standalone:true,
  selector: 'app-header',
  imports: [MatSlideToggleModule, MatSidenavModule,  MatToolbarModule,
    MatIconModule, MatListModule],
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
}) export class headerComponent {
    isOpened = false;
    toggleSidenav() {
      const sidenav: any = document.querySelector('mat-sidenav');
      sidenav.toggle();
      this.isOpened = !this.isOpened;
  }

}
