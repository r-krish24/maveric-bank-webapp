import { Component, OnInit } from '@angular/core';
import { SigninService } from 'src/app/services/signin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hello:Object;
  constructor(private signin:SigninService) { }

  ngOnInit(): void {
    this.signin.helloMaveric().subscribe(data=>{
      console.log(data);
      this.hello = data;
    });
  }

}
