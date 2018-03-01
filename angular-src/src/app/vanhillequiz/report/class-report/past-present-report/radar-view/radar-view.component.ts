import { Component, OnInit } from '@angular/core';
import {ChartsModule} from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-radar-view',
  templateUrl: './radar-view.component.html',
  styleUrls: ['./radar-view.component.css']
})
export class RadarViewComponent implements OnInit {
  radarChartLabels: string[] = ['רמה 1', 'רמה 2', 'רמה 3', 'רמה 4', 'רמה 5'];
  radarChartType: string = 'radar';
  radarChartOptions: any = {
    scale: {
      ticks: {
        min: 0,
        steps: 10,
        beginAtZero: true,
        max: 100
      }
    }
  };
  radarcolors: any[] = [{
    backgroundColor: [
      'rgba(54, 162, 235, 0.5)',
      'rgba(102, 0, 204, 0.2)'
    ]
  }];

  radarChartDataPre: any[] = [{}];
  radarChartDataPost: any[] = [{}];
  constructor() { }

  ngOnInit() {
  }

  private chartClicked(e: any): void {
    console.log(e);
  }

  private chartHovered(e: any): void {
    console.log(e);
  }
}
