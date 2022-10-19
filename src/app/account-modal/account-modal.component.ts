import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../accounts/account';
import { AccountService } from '../accounts/account.service';

@Component({
  selector: 'app-account-modal',
  templateUrl: './account-modal.component.html',
  styleUrls: ['./account-modal.component.css']
})
export class AccountModalComponent implements OnInit {
  account: Account = new Account();
  cid: String;
  constructor(private route: ActivatedRoute, private router: Router,private dialogRef: MatDialogRef<AccountModalComponent>,
    private accountService: AccountService,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.cid = this.data.cid
  }
  accountsave() {
    this.account.customerId = this.cid;
    this.accountService.createAccount(this.cid, this.account).subscribe(data => {
      this.dialogRef.close();
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      let userId = this.cid;
      this.router.navigate(['accounts', userId]);
      this.ngOnInit()
    });
  }
  onNoClick(): void {
  
    this.dialogRef.close();
  }
}
