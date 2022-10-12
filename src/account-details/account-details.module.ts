import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountDetailsRoutingModule } from './account-details-routing.module';
import { AccountDetailsComponent } from './account-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccountDetailsComponent
  ],
  imports: [
    CommonModule,
    AccountDetailsRoutingModule,
    FormsModule
  ]
})
export class AccountDetailsModule { }
