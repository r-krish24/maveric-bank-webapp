import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BalanceService } from '../account-details/balance.service';
import { Transactions } from '../account-details/transactions';
import { TransactionsService } from '../account-details/transactions.service';
import { BalanceModalComponent } from '../balance-modal/balance-modal.component';

@Component({
  selector: 'app-transaction-modal',
  templateUrl: './transaction-modal.component.html',
  styleUrls: ['./transaction-modal.component.css']
})
export class TransactionModalComponent implements OnInit {
  aid:String
  cid:String
  transaction: Transactions = new Transactions();
  constructor(private dialogRef: MatDialogRef<BalanceModalComponent>,@Inject(MAT_DIALOG_DATA) public data:any,
  private transactionService: TransactionsService,private router: Router) { }

  ngOnInit(): void {
    this.cid = this.data.cid
    this.aid = this.data.aid
  }
  onNoClick(): void {
  
    this.dialogRef.close();
  }
  transactionsave() {
    this.transaction.accountId=this.aid;
    this.transactionService.createTransactions(this.aid, this.transaction).subscribe(data => {
      this.dialogRef.close();
    });
    this.dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
    });
  }
}
