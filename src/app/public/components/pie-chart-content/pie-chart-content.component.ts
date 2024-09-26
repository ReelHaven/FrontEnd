import { Component } from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';
import { ChartData, ChartType } from 'chart.js/auto';
import {MatCard} from "@angular/material/card";
@Component({
  selector: 'app-pie-chart-content',
  standalone: true,
  imports: [BaseChartDirective, MatCard],
  templateUrl: './pie-chart-content.component.html',
  styleUrl: './pie-chart-content.component.css'
})
export class PieChartContentComponent {

  user: any = null;

  constructor() {
    const currentUser = localStorage.getItem('currentUser');
    this.user = currentUser ? JSON.parse(currentUser) : null;
  }

  public pieChartType: ChartType = 'pie';
  public pieChartData: ChartData<'pie'> = {
    labels: ['Ansioso', 'Cansado', 'Motivado', 'Relajado'],
    datasets: [
      {
        data: [0, 0, 0, 0],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0']
      }
    ]
  };

  ngOnInit() {
    const currentUser = localStorage.getItem('currentUser');
    this.user = currentUser ? JSON.parse(currentUser) : null;

    if (this.user && this.user.emotions) {

      this.pieChartData = {
        labels: ['Ansioso', 'Cansado', 'Motivado', 'Relajado'],
        datasets: [
          {
            data: [
              this.user.emotions.ansioso,
              this.user.emotions.cansado,
              this.user.emotions.motivado,
              this.user.emotions.relajado
            ],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0']
          }
        ]
      };
    }
  }
}
