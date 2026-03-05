import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';
import { VanhilereportService } from '../../../services/vanhilereport.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-report',
  templateUrl: './student-report.component.html',
  styleUrls: ['./student-report.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, NgChartsModule]
})
export class StudentReportComponent implements OnInit {
  Options: any[] = [];
  selectID: any = null;
  showSecondChart: boolean = false;
  sDate: string = '';
  fDate: string = '';

  barChartData1: ChartData<'bar'> = {
    labels: ['רמה 1', 'רמה 2', 'רמה 3', 'רמה 4', 'רמה 5'],
    datasets: []
  };
  barChartData2: ChartData<'bar'> = {
    labels: ['רמה 1', 'רמה 2', 'רמה 3', 'רמה 4', 'רמה 5'],
    datasets: []
  };

  barChartType = 'bar' as const;
  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      y: { min: 0, max: 5, ticks: { stepSize: 1 } }
    }
  };

  constructor(
    private reportServise: VanhilereportService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.reportServise.getUsersLast3Hours().subscribe(data => {
      if (data.success) {
        this.Options = data.users;
      } else {
        this.toastr.error('משהו קרה');
      }
    });
  }

  clearSelection() {
    this.selectID = null;
    this.sDate = '';
    this.fDate = '';
    this.showSecondChart = false;
  }

  showHideChartOfUser(): boolean {
    return this.selectID != null && this.barChartData1.datasets.length > 0;
  }

  showHideSecondChart(): boolean {
    return this.showHideChartOfUser() && this.showSecondChart;
  }

  findCorrectAnswerData() {
    this.reportServise.getUser(this.selectID).subscribe(data => {
      if (data.success) {
        if (data.user.length == 1) {
          const colors = [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(0, 255, 0, 0.8)',
            'rgba(102, 0, 204, 0.8)'
          ];
          if (data.user[0].correctAperdif2[0] != undefined) {
            this.barChartData1 = {
              labels: ['רמה 1', 'רמה 2', 'רמה 3', 'רמה 4', 'רמה 5'],
              datasets: [{ data: data.user[0].correctAperdif1, label: String(this.selectID), backgroundColor: colors }]
            };
            this.barChartData2 = {
              labels: ['רמה 1', 'רמה 2', 'רמה 3', 'רמה 4', 'רמה 5'],
              datasets: [{ data: data.user[0].correctAperdif2, label: String(this.selectID), backgroundColor: colors }]
            };
            this.showSecondChart = true;
          } else {
            this.barChartData1 = {
              labels: ['רמה 1', 'רמה 2', 'רמה 3', 'רמה 4', 'רמה 5'],
              datasets: [{ data: data.user[0].correctAperdif1, label: String(this.selectID), backgroundColor: colors }]
            };
          }
        } else {
          this.toastr.error('לא נמצאו תשובות של הסטודנט בעל ת.ז ' + this.selectID);
        }
      } else {
        this.toastr.error('שגיאה');
      }
    });
  }

  findStudentsBetweenDates() {
    if (!this.sDate || !this.fDate) {
      this.toastr.error('אנא מלא את גם תאריך התחלה וגם תאריך סיום');
      return;
    }
    if (new Date(this.sDate) > new Date(this.fDate)) {
      this.toastr.error('שגיאה! תאריך סיום לפני תאריך התחלה');
      return;
    }
    this.reportServise.getStudentsBetweenDates(this.sDate, this.fDate).subscribe(data => {
      if (data.success) {
        if (data.students.length == 0) {
          this.toastr.error('אין סטודנטים שעשו את השאלון בתאריכים שביקשת');
        } else {
          this.toastr.success('נמצאו סטודנטים מתאים אנא בחר אחד');
          this.Options = data.students;
        }
      } else {
        this.toastr.error(data.msg);
      }
    });
  }
}
