import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountDetailsRoutingModule } from './account-details-routing.module';
import { AccountDetailsComponent } from './account-details.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AccountDetailsComponent
  ],
  imports: [
    CommonModule,
    AccountDetailsRoutingModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class AccountDetailsModule { }
