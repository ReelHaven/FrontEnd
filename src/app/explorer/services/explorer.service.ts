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
    this.loadRecentContent();
  }

  private recentContent: Content[] = [];

  addContent(content: Content) {
    const index = this.recentContent.findIndex(c => c.contentId === content.contentId);
    if (index === -1) {
      this.recentContent.push(content);
    } else {
      this.recentContent.splice(index, 1);
    }
    this.saveToLocalStorage();
  }

  getRecentContent(): Content[] {
    return this.recentContent;
  }

  private saveToLocalStorage() {
    localStorage.setItem('recentContent', JSON.stringify(this.recentContent));
  }

  private loadRecentContent() {
    const storedContent = localStorage.getItem('recentContent');
    if (storedContent) {
      this.recentContent = JSON.parse(storedContent);
    }
  }
}
