import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { FormsModule } from '@angular/forms';
import { AccountsComponent } from './accounts.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { AccountModalComponent } from '../account-modal/account-modal.component';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AccountsComponent,
    
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class AccountsModule { }
