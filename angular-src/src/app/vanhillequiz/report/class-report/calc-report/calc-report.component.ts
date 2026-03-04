import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';
import { VanhilereportService } from '../../../../services/vanhilereport.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-calc-report',
  templateUrl: './calc-report.component.html',
  styleUrls: ['./calc-report.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, BaseChartDirective]
})
export class CalcReportComponent implements OnInit {
  radarChartLabels: string[] = ['רמה 1', 'רמה 2', 'רמה 3', 'רמה 4', 'רמה 5'];
  radarChartOptions: ChartOptions<'radar'> = {
    scales: {
      r: { min: 0, max: 100, ticks: { stepSize: 10 } }
    }
  };
  radarChartType = 'radar' as const;
  radarChartData: ChartData<'radar'> = {
    labels: ['רמה 1', 'רמה 2', 'רמה 3', 'רמה 4', 'רמה 5'],
    datasets: []
  };

  tryNum: any;
  groupNum: any;
  courseNum: any;
  courseNumOptions: any[] = [];
  groupNumOptions: any[] = [];
  tryNumOptions: any[] = [1, 2];
  selectUndefinedOptionValue: any = null;

  constructor(
    private reportService: VanhilereportService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getAllUniqueCourseNum();
  }

  calcAll() {
    this.reportService.createAllResults(this.tryNum, this.courseNum, this.groupNum).subscribe(data => {
      if (data.success) {
        this.radarChartData = {
          labels: ['רמה 1', 'רמה 2', 'רמה 3', 'רמה 4', 'רמה 5'],
          datasets: [{
            data: data.classResult[0].results.slice(0, 5),
            label: `${data.classResult[0].groupNum} - ${data.classResult[0].courseNum}`,
            backgroundColor: 'rgba(54, 162, 235, 0.3)',
            borderColor: 'rgba(54, 162, 235, 1)'
          }]
        };
      } else {
        this.toastr.error(data.msg);
      }
    });
  }

  getAllUniqueCourseNum() {
    this.reportService.getAllUniqueCourseNum().subscribe(data => {
      if (!data.success) {
        this.toastr.error(data.msg);
      } else {
        this.courseNumOptions = data.result;
      }
    });
  }

  getCorepondingGroupNums() {
    this.reportService.getCorepondingGroupNums(this.courseNum).subscribe(data => {
      if (!data.success) {
        this.toastr.error(data.msg);
      } else {
        this.groupNumOptions = data.result;
      }
    });
  }

  clearRadar() {
    this.radarChartData = {
      labels: ['רמה 1', 'רמה 2', 'רמה 3', 'רמה 4', 'רמה 5'],
      datasets: []
    };
  }

  chartClicked(e: any): void { console.log(e); }
  chartHovered(e: any): void { console.log(e); }
}
