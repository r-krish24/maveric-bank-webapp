import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/models/account';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  account:Account=new Account();
  user:User=new User();
  _id:String;
  aid:String;
  constructor(private route:ActivatedRoute,
    private accountService:AccountService,private userService:UserService ) { }

  ngOnInit(): void {
    this._id=this.route.snapshot.params['id'];
    this.aid=this.route.snapshot.params['aid'];
    this.userService.getUserById(this._id).subscribe(data=>{
    this.user=data;
    
    });
    this.accountService.getAccountdetailsById(this._id,this.aid).subscribe(acc=>{
    this.account=acc;
    console.log("acc",acc);
    });
  }

}
