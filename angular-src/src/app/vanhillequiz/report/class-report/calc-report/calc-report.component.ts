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

  exportCSV() {
    if (!this.courseNum || !this.groupNum) {
      this.toastr.error('אנא בחר קורס וקבוצה תחילה');
      return;
    }
    this.reportService.getStudentsByGroup(this.courseNum, this.groupNum).subscribe(res => {
      if (!res.success) { this.toastr.error(res.msg); return; }
      const students = res.students as any[];
      if (!students.length) { this.toastr.error('לא נמצאו סטודנטים בקבוצה זו'); return; }

      const header = 'ת.ז,קורס,קבוצה,ניסיון1-רמה1,ניסיון1-רמה2,ניסיון1-רמה3,ניסיון1-רמה4,ניסיון1-רמה5,סה"כ1,ניסיון2-רמה1,ניסיון2-רמה2,ניסיון2-רמה3,ניסיון2-רמה4,ניסיון2-רמה5,סה"כ2';
      const rows = students.map(s => {
        const a1 = s.correctAperdif1?.length ? s.correctAperdif1 : [0,0,0,0,0];
        const a2 = s.correctAperdif2?.length ? s.correctAperdif2 : [0,0,0,0,0];
        const t1 = a1.reduce((x: number, y: number) => x + y, 0);
        const t2 = a2.reduce((x: number, y: number) => x + y, 0);
        return `${s.ID},${s.courseNum},${s.groupNum},${a1.join(',')},${t1},${a2.join(',')},${t2}`;
      });
      this.downloadCSV([header, ...rows].join('\n'), `group_${this.courseNum}_${this.groupNum}.csv`);
    });
  }

  printReport() {
    window.print();
  }

  private downloadCSV(content: string, filename: string) {
    const bom = '\uFEFF'; // UTF-8 BOM for Hebrew in Excel
    const blob = new Blob([bom + content], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename; a.click();
    URL.revokeObjectURL(url);
  }

  chartClicked(e: any): void { console.log(e); }
  chartHovered(e: any): void { console.log(e); }
}
