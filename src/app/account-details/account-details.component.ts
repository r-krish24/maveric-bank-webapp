import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';


import {MatCardModule} from '@angular/material/card';
import { Account } from 'src/app/accounts/account';
import { Balance } from './balance';
import { AccountService } from 'src/app/accounts/account.service';
import { User } from 'src/app/signup/user';
import { UserService } from 'src/app/signup/user.service';
import { BalanceService } from './balance.service';
import { Transactions } from './transactions';
import { TransactionsService } from './transactions.service';
import { MatDialog } from '@angular/material/dialog';
import { BalanceModalComponent } from '../balance-modal/balance-modal.component';
import { TransactionModalComponent } from '../transaction-modal/transaction-modal.component';
declare var window: any;
@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  account: Account = new Account();
  balance: Balance = new Balance();
  user: User = new User();
  transactions: Transactions[];
  transaction: Transactions = new Transactions();
  cid: String;
  aid: String;
  displayedColumns=['_id','createdAt','credit','debit']
  constructor(private route: ActivatedRoute, private transactionService: TransactionsService, private router: Router,
    private accountService: AccountService, private userService: UserService, 
    private dialog:MatDialog) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  display = "none";
  ngOnInit(): void {
    this.cid = this.route.snapshot.params['cid'];
    this.aid = this.route.snapshot.params['aid'];
    this.userService.getUserById(this.cid).subscribe(data => {
      this.user = data;
    });
    this.accountService.getAccountdetailsById(this.cid, this.aid).subscribe(acc => {
      this.account = acc;
    });
    this.transactionService.getTransactions(this.aid).subscribe(tran => {
      this.transactions = tran;
      console.log("tran=",this.transactions)
    });
  }
  openBalanceModal(enteranimation:any,exitanimation:any)
  {
    this.dialog.open(BalanceModalComponent,{
      enterAnimationDuration:enteranimation,
      exitAnimationDuration:exitanimation,
      width:"250px",
      data:{
        cid:this.cid,
        aid:this.aid
      }
    })
  }
  openTransactionModal(enteranimation:any,exitanimation:any)
  {
    this.dialog.open(TransactionModalComponent,{
      enterAnimationDuration:enteranimation,
      exitAnimationDuration:exitanimation,
      width:"250px",
      data:{
        cid:this.cid,
        aid:this.aid
      }
    })
  }

}
