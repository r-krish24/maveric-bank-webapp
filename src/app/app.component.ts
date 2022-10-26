import { Component } from '@angular/core';
import { SigninService } from './signin/signin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maveric-bank-webapp';
  imageSrc = '../assets/images/maveric-logo-updated.png'
  imageSrc1 = '../assets/images/maveric-logo-white.png'
  constructor(private signin:SigninService) { }
   get isLoggedIn() { return this.signin.isLoggedin(); }
   ngOnInit() {
    console.log(this.signin.isLoggedin());
   this.signin.logout()
   console.log(this.signin.isLoggedin());

   }
}
