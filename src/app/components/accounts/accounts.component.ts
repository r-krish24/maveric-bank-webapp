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
  accounts: Account[];
  account: Account = new Account();
  cid: String;
  formModal: any;

  constructor(private route: ActivatedRoute, private router: Router,
    private accountService: AccountService, private app: AppComponent) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  display = "none";
  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
    this.app.loginshow();
    this.cid = this.route.snapshot.params['cid'];
    this.accountService.getAccount(this.cid).subscribe(data => {
      this.accounts = data;
    });
  }
  accountDetails(aid: String) {
    this.cid = this.route.snapshot.params['cid'];
    this.router.navigate(['account-details', this.cid, aid]);
  }
  openFormModal() {
    console.log("Inside open");
    this.display = "block";
    this.formModal.show();
  }
  modalclose() {
    // confirm or save something
    console.log("Inside close");
    this.display = "none";
    this.formModal.hide();
  }
  accountsave() {
    this.account.customerId = this.cid;
    this.accountService.createAccount(this.cid, this.account).subscribe(data => {
      console.log("account save in ", data);
      this.modalclose();
      let userId = this.cid;
      this.router.navigate(['accounts', userId]);
      this.ngOnInit();
      console.log("reload");
    });
  }

}
