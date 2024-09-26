import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Citizen} from "../model/citizen/citizen.entity";

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends BaseService<Citizen>{

  constructor() {
    super();
    this.resourceEndpoint = '/users';
  }
}
