import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Content} from "../model/content.entity";

@Injectable({
  providedIn: 'root'
})
export class ExplorerService extends BaseService<Content> {

  constructor() {
    super();
    this.resourceEndpoint = '/content';
  }
}
