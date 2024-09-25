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
  selector: 'app-forums-list',
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf,
    MatTabsModule
  ],
  templateUrl: './forum-list.component.html',
  styleUrl: './forum-list.component.css'
})
export class ForumsComponent {
  cards = signal<CardContent[]>([]);

  constructor() {
    const data = contentData.content;
    const cards: CardContent[] = data.map((item: any) => ({
      postId: item.postId,
      userId: item.userId,
      contentId: item.contentId,
      comment: item.comment,
      score: item.score
    }));
    this.cards.set(cards);
  }

}
