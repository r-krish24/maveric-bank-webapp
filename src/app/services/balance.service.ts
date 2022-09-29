import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Balance } from '../models/balance';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  private base_url="http://localhost:3015/api/v1/accounts";
  constructor(private httpClient:HttpClient) { }

  header= new HttpHeaders()
  .set('userEmail', sessionStorage.getItem('userEmail')+""); 

  createBalance(aid:String,balance:Balance):Observable<Object>{
    return this.httpClient.post(`${this.base_url}/${aid}/balances`,balance, { 'headers': this.header });
  }
}
