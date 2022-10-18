import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/signup/user';
import { SigninService } from 'src/app/signin/signin.service';
import { UserService } from 'src/app/signup/user.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:User=new User();
  constructor(private signinService:SigninService,
    private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.signinService.createUser(this.user).subscribe(data=>{
      this.router.navigate(['login']);
    });
  }

}
