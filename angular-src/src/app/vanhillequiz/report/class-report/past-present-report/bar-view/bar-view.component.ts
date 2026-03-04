import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-bar-view',
  templateUrl: './bar-view.component.html',
  styleUrls: ['./bar-view.component.css'],
  standalone: true,
  imports: [CommonModule, BaseChartDirective]
})
export class BarViewComponent implements OnInit {
  @Input() barChartData: any[] = [{ data: [], label: '' }];

  barChartType = 'bar' as const;
  barChartOptions: ChartOptions<'bar'> = { responsive: true };

  get chartData(): ChartData<'bar'> {
    return {
      labels: ['רמה 1', 'רמה 2', 'רמה 3', 'רמה 4', 'רמה 5'],
      datasets: this.barChartData || []
    };
  }

  constructor() {}
  ngOnInit() {}
}
