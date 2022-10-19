import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/signup/user';
import { SigninService } from 'src/app/signin/signin.service';
import { UserService } from 'src/app/signup/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm:FormGroup
  user:User=new User();
  constructor(private signinService:SigninService,
    private router:Router) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      middleName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      address: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      dateOfBirth: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      gender: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(50)])
      });
  }
  onSubmit(){
    this.signinService.createUser(this.user).subscribe(data=>{
      this.router.navigate(['login']);
    });
  }

}
