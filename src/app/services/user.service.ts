import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private base_url="http://localhost:3005/api/v1/users";
  constructor(private httpClient:HttpClient) { }

  getuserlist():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.base_url}`);
  }

  createUser(user: User):Observable<Object>{
    return this.httpClient.post(`${this.base_url}`,user);
  }
  getUserById(_id:String):Observable<User>{
    return this.httpClient.get<User>(`${this.base_url}/${_id}`);
  }
  updateUser(_id:String,user:User):Observable<Object>{
    return this.httpClient.put(`${this.base_url}/${_id}`,user);
  }
  deleteUser(_id:String):Observable<Object>{
    return this.httpClient.delete(`${this.base_url}/${_id}`);
  }
}
