import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Citizen} from "../model/citizen/citizen.entity";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService<Citizen>{
  constructor() {
    super();
    this.resourceEndpoint = '/users';
  }

  authenticateUser(username: string, password: string): Observable<Citizen[]>{
    return this.http.get<Citizen[]>(this.resourcePath()).pipe(map(users=> users.filter
    (user => user.userName === username && user.password === password)));
  }
}
