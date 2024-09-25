import { NgForOf } from "@angular/common";
import { Component , signal } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import contentData from "../../../../../server/db.json";


type CardContent = {
  postId: string;
  userId:string;
  contentId: string;
  comment: string;
  score: string;
}

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf,
    MatTabsModule
  ],
  templateUrl: './forum-list.component.html',
  styleUrl: './forum-list.component.css'
})
export class FavoritesComponent {
  cards = signal<CardContent[]>([]);

  constructor() {
    const data = contentData.content;
    const cards: CardContent[] = data.map((item: any) => ({
      title: item.title,
      description: item.description,
      type: item.type,
      feeling: item.feeling,
      objective: item.objective
    }));
    this.cards.set(cards);
  }

}
