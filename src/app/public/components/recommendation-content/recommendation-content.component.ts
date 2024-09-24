import {Component, OnInit} from '@angular/core';
import {MoodService} from "../../../users/services/mood.service";
import {MatCard, MatCardContent, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-recommendation-content',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatDivider,
    MatCardSubtitle,
    NgForOf,
    NgIf
  ],
  templateUrl: './recommendation-content.component.html',
  styleUrl: './recommendation-content.component.css'
})
export class RecommendationContentComponent implements OnInit{

  content: any[] = [];

  constructor(private moodService: MoodService) {

  }

  getRandomItem = (items: any[]) => {
    return items[Math.floor(Math.random() * items.length)];
  };

  ngOnInit() {
    const moodValues = JSON.parse(localStorage.getItem('moodValues')!);

    this.moodService.getFilteredContent(moodValues)
      .subscribe(result => {
        const randomFeeling = this.getRandomItem(result.feelingMatches);
        const randomObjective = this.getRandomItem(result.objectiveMatches);
        const randomCategory = this.getRandomItem(result.categoryMatches);

        this.content.push(randomFeeling);
        this.content.push(randomObjective);
        this.content.push(randomCategory);

        console.log("Content for feeling match:", randomFeeling);
        console.log("Content for objective match:", randomObjective);
        console.log("Content for category match:", randomCategory);
      })
  }

}

