import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Authrequest } from 'src/app/models/authrequest';
import { Authresponse } from 'src/app/models/authresponse';
import { SigninService } from 'src/app/services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  authresponse:Authresponse
  authrequest:Authrequest = new Authrequest()
  constructor(private signin:SigninService,private router:Router,private app:AppComponent) { }

  ngOnInit(): void {
    this.app.loginhide();
    console.log("Iniittttt");
  }

  getToken(){
    this.signin.getJwtToken(this.authrequest).subscribe(data=>{
      this.authresponse=data;
      let tokenStr = 'Bearer '+data.token;
      sessionStorage.setItem('token', tokenStr);
      console.log("Output->",data);
      console.log("Token->",sessionStorage.getItem('token'));
      if(sessionStorage.getItem('token'))
      {
        let userId = data.user._id;
        this.router.navigate(['/accounts',userId]);
      }
    });
  }
  signupnavigate(){
    this.router.navigate(['signup']);
  }


}
