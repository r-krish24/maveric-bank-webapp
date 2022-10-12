import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/shared/auth.guard';
import { AccountDetailsComponent } from './account-details.component';

const routes: Routes = [
  {path:'',component:AccountDetailsComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountDetailsRoutingModule { }
