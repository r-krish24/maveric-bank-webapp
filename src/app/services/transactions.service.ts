import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transactions } from '../models/transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private base_url="http://localhost:3020/api/v1/accounts";
  constructor(private httpClient:HttpClient) { }

  getTransactions(aid:String):Observable<Transactions[]>{
    return this.httpClient.get<Transactions[]>(`${this.base_url}/${aid}/transactions`);
  }


}
