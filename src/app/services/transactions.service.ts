import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transactions } from '../models/transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private base_url="http://localhost:3020/api/v1/accounts";
  constructor(private httpClient:HttpClient) { }
  header= new HttpHeaders()
  .set('userEmail', sessionStorage.getItem('userEmail')+"");
   
  getTransactions(aid:String):Observable<Transactions[]>{
    return this.httpClient.get<Transactions[]>(`${this.base_url}/${aid}/transactions`, { 'headers': this.header });
  }
  createTransactions(aid:String,transactions:Transactions):Observable<Object>{
    return this.httpClient.post(`${this.base_url}/${aid}/transactions`,transactions, { 'headers': this.header });
  }

}
