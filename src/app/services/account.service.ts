import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private base_url="http://localhost:3010/api/v1/customers";
  constructor(private httpClient:HttpClient) { }

  header= new HttpHeaders()
  .set('userEmail', sessionStorage.getItem('userEmail')+""); 

  getAccountdetailsById(cid:String,_id:String):Observable<Account>{
    console.log("headers -",this.header);
    return this.httpClient.get<Account>(`${this.base_url}/${cid}/accounts/${_id}`, { 'headers': this.header });
  }

  getAccount(cid:String):Observable<Account[]>{
    console.log("headers -",this.header);
    return this.httpClient.get<Account[]>(`${this.base_url}/${cid}/accounts`, { 'headers': this.header });
  }
  createAccount(cid:String,account:Account):Observable<Object>{
    console.log("headers -",this.header);
    return this.httpClient.post(`${this.base_url}/${cid}/accounts`,account, { 'headers': this.header });
  }
}
