import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Urls } from 'src/app/urls';
import { Balance } from './balance';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor(private httpClient:HttpClient) { }

  header= new HttpHeaders()
  .set('userEmail', sessionStorage.getItem('userEmail')+""); 

  createBalance(aid:String,balance:Balance):Observable<Object>{
    return this.httpClient.post(`${Urls.balanceUrl}/${aid}/balances`,balance, { 'headers': this.header });
  }
}
