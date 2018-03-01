import {Component, Input, OnInit} from '@angular/core';
import {ChartsModule} from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-bar-view',
  templateUrl: './bar-view.component.html',
  styleUrls: ['./bar-view.component.css']
})
export class BarViewComponent implements OnInit {
  // bar chart options
  barChartLabels: string[] = ['רמה 1', 'רמה 2', 'רמה 3', 'רמה 4', 'רמה 5'];
  barChartType: string = 'bar';
  barChartLegend: boolean = true;
  @Input() barChartData: any[any] = [{data: [], label: ''}];
  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  constructor() {
  }

  ngOnInit() {
  }

  private chartClicked(e: any): void {
    console.log(e);
  }

  private chartHovered(e: any): void {
    console.log(e);
  }
}
