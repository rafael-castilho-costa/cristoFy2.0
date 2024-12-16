import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    currentUser: any;

    public get welcomeMessage(): string {
      let welcomeMessage :string ='';

      switch (this.currentUser?.persona?.genderType){
        case 'MALE':
          welcomeMessage += 'Bem-vindo';
          break;
        case 'FEMALE':
          welcomeMessage += 'Bem-vinda';
          break;
        default:
          welcomeMessage += 'Bem-vindo (a)'
          break;
      }
      welcomeMessage += ' ao Cristo FY';

      return welcomeMessage;
    }
}
