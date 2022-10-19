import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { SigninService } from 'src/app/signin/signin.service';
import { Authrequest } from './authrequest';
import { Authresponse } from './authresponse';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public myForm: FormGroup;
  authresponse:Authresponse
  authrequest:Authrequest = new Authrequest()
  constructor(private signin:SigninService,private router:Router,private app:AppComponent) { }

  ngOnInit(): void {
    this.app.loginhide();
    sessionStorage.setItem('token', '');
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(50)])
      });
  }

  getToken(){
    console.log(this.myForm);


    this.signin.getJwtToken(this.authrequest).subscribe(data=>{
      this.authresponse=data;
      let tokenStr = 'Bearer '+data.token;
      sessionStorage.setItem('token', tokenStr);
      let userEmail = data.user.email;
      sessionStorage.setItem('userEmail', userEmail+"");
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
