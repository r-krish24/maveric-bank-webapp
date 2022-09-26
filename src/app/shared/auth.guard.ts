import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SigninComponent } from '../components/signin/signin.component';
import { SigninService } from '../services/signin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private signinService:SigninService,private route:Router)
  {

  }

  canActivate()
  {
    if(this.signinService.isLoggedin()) 
    { 
      return true; 
    } 
    else 
    { 
      this.route.navigate(['login']);
      return false; 
  }
  
  }
}
