import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maveric-bank-webapp';
  imageSrc = '../assets/images/maveric-logo-updated.png'
  imageSrc1 = '../assets/images/maveric-logo-white.png'
  loginShow: boolean;
  logoutShow: boolean;
  loginshow(){
    this.logoutShow = true;

   }
  loginhide(){
    this.logoutShow = false;
   }
}
