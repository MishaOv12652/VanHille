import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-radar-view',
  templateUrl: './radar-view.component.html',
  styleUrls: ['./radar-view.component.css'],
  standalone: true,
  imports: [CommonModule, NgChartsModule]
})
export class RadarViewComponent implements OnInit {
  radarChartType = 'radar' as const;
  radarChartOptions: ChartOptions<'radar'> = {
    scales: { r: { min: 0, max: 100, ticks: { stepSize: 10 } } }
  };

  @Input() radarChartDataPre: any[] = [{}];
  @Input() radarChartDataPost: any[] = [{}];

  get preChartData(): ChartData<'radar'> {
    return {
      labels: ['רמה 1', 'רמה 2', 'רמה 3', 'רמה 4', 'רמה 5'],
      datasets: this.radarChartDataPre || []
    };
  }

  get postChartData(): ChartData<'radar'> {
    return {
      labels: ['רמה 1', 'רמה 2', 'רמה 3', 'רמה 4', 'רמה 5'],
      datasets: this.radarChartDataPost || []
    };
  }

  constructor() {}
  ngOnInit() {}
}
