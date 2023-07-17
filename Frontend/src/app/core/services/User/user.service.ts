import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICrudEntity } from '../../models/crudEntity';
import { IResponse } from '../../models/response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL = 'http://localhost:8080/';
  addUser = 'user/addUser';
  getUsers = 'user/getAllUsers';
  updateUser = 'user/updateUser';
  deleteUser = 'user/deleteUser';

  loadUSers = new EventEmitter();

  constructor(private http : HttpClient) { }

  getAllUsers(searchText? : any) : Observable<ICrudEntity[]> {
    return this.http.get(`${this.BASE_URL}${this.getUsers}?searchText=${searchText ? searchText : ''}`) as Observable<ICrudEntity[]>;
  }

  update(user : ICrudEntity) : Observable<IResponse> {
    return this.http.put(`${this.BASE_URL}${this.updateUser}?id=${user.id}`, user) as Observable<IResponse>
  }

  add(user : ICrudEntity) : Observable<IResponse> {
    return this.http.post(`${this.BASE_URL}${this.addUser}`, user) as Observable<IResponse>;
  }

  deleteAUser(user : ICrudEntity) : Observable<IResponse> {
    return this.http.delete(`${this.BASE_URL}${this.deleteUser}?id=${user.id}`) as Observable<IResponse>;
  }
}
