import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type CardContent = {
  title: string;
  description: string;
  type: string;
  feeling: string;
  objective: string;
  category: string;
  image: string;
  list: string;
}

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  private apiUrl = 'http://localhost:3000/content';  // URL to the json-server endpoint

  constructor(private http: HttpClient) { }

  getCardContent(): Observable<CardContent[]> {
    return this.http.get<CardContent[]>(this.apiUrl);
  }
}
