import {NgForOf, NgIf} from "@angular/common";
import { Component , signal } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
//import contentData from "../../../../../server/db.json";
import { HttpClientModule } from "@angular/common/http";
import { ListsService } from "../../services/lists.service";


type CardContent = {
  title: string;
  description:string;
  type: string;
  feeling: string;
  objective: string;
  category: string;
  list: string;
  image: string;
}

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf,
    MatTabsModule,
    HttpClientModule,
    NgIf
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  cards = signal<CardContent[]>([]);

  constructor(private listsService: ListsService) {
    this.getCards();
  }

  getCards() {
    this.listsService.getCardContent().subscribe({
      next: (data: CardContent[]) => {
        // Directly set the entire cards array at once
        this.cards.set(data);
      },
      error: (err) => console.error('Error loading cards:', err)
    });
  }

  protected readonly toString = toString;
}
