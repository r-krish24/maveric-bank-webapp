import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from 'src/account-details/account-details.component';
import { AccountsComponent } from 'src/accounts/accounts.component';
import { AuthGuard } from 'src/shared/auth.guard';
import { SigninComponent } from 'src/signin/signin.component';
import { SignupComponent } from 'src/signup/signup.component';


const routes: Routes = [
  {path:'login',component:SigninComponent},
  {path: 'signup', loadChildren: () => import('../signup/signup.module').then(m => m.SignupModule) },
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path: 'accounts/:cid', loadChildren: () => import('../accounts/accounts.module').then(m => m.AccountsModule) },
  {path: 'account-details/:cid/:aid', loadChildren: () => import('../account-details/account-details.module').then(m => m.AccountDetailsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
