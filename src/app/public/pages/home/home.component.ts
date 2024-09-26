import {Component, OnInit} from '@angular/core';
import {SidebarNavigatorComponent} from "../../components/sidebar-navigator/sidebar-navigator.component";
import {MoodService} from "../../../users/services/mood.service";
import {RecommendationContentComponent} from "../../components/recommendation-content/recommendation-content.component";
import {PieChartContentComponent} from "../../components/pie-chart-content/pie-chart-content.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SidebarNavigatorComponent,
    RecommendationContentComponent,
    PieChartContentComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  user: any;

  constructor() {
    this.user= localStorage.getItem('currentUser');

    if(this.user){
      this.user = JSON.parse(this.user);
    }
    console.log('user name: ', this.user.name);
  }

  /*
  ngOnInit() {
    const moodValues = JSON.parse(localStorage.getItem('moodValues')!);

    this.moodService.getFilteredContent(moodValues)
      .subscribe(result => {
        console.log("Content for feeling match:", result.feelingMatch);
        console.log("Content for objective match:", result.objectiveMatch);
        console.log("Content for category match:", result.categoryMatch);
      })
  }

   */
}
