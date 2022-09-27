import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';
declare var window: any;

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  account:Account[];
  _id:String;
  formModal: any;

  constructor(private route:ActivatedRoute, private router:Router,
    private accountService:AccountService,private app:AppComponent) { }
    display = "none";
  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
    this.app.loginshow();
    this._id=this.route.snapshot.params['id'];
    this.accountService.getAccount(this._id).subscribe(data=>{
    this.account=data;
    });    
  }
  accountDetails(aid:String){
    this._id=this.route.snapshot.params['id'];
    this.router.navigate(['account-details',this._id,aid]);
  }
  openFormModal() {
    console.log("Inside open");
    this.display = "block";
    this.formModal.show();
  }
  saveSomeThing() {
    // confirm or save something
    console.log("Inside close");
    this.display = "none";
    this.formModal.hide();
  }

}
