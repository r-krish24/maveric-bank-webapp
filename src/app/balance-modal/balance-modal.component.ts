import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Balance } from '../account-details/balance';
import { BalanceService } from '../account-details/balance.service';

@Component({
  selector: 'app-balance-modal',
  templateUrl: './balance-modal.component.html',
  styleUrls: ['./balance-modal.component.css']
})
export class BalanceModalComponent implements OnInit {
  balance: Balance = new Balance();
  aid:String
  cid:String
  constructor(private dialogRef: MatDialogRef<BalanceModalComponent>,@Inject(MAT_DIALOG_DATA) public data:any,
  private balanceService: BalanceService,private router: Router) { }

  ngOnInit(): void {
    this.cid = this.data.cid
    this.aid = this.data.aid
  }
  onNoClick(): void {
  
    this.dialogRef.close();
  }
  balancesave() {
    this.balance.accountId = this.aid;
    this.balanceService.createBalance(this.aid, this.balance).subscribe(data => {
      this.dialogRef.close();
    });
    this.dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
    });
  }
}
