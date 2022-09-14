import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  account:Account[];
  _id:String;
  constructor(private route:ActivatedRoute, private router:Router,
    private accountService:AccountService) { }

  ngOnInit(): void {
    this._id=this.route.snapshot.params['id'];
    this.accountService.getAccount(this._id).subscribe(data=>{
    this.account=data;
    });    
  }
  accountDetails(aid:String){
    this._id=this.route.snapshot.params['id'];
    this.router.navigate(['account-details',this._id,aid]);
  }

}
