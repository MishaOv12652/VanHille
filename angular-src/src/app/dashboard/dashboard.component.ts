import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';
import { VanhilereportService } from '../services/vanhilereport.service';
import { ToastrService } from 'ngx-toastr';

const DIFF_LABELS = ['רמה 1', 'רמה 2', 'רמה 3', 'רמה 4', 'רמה 5'];
const BAR_COLORS = [
  'rgba(255, 99, 132, 0.8)',
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(0, 200, 83, 0.8)',
  'rgba(102, 0, 204, 0.8)'
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, BaseChartDirective]
})
export class DashboardComponent implements OnInit {
  studentId: string = '';
  inputId: string = '';
  student: any = null;
  loading = false;
  notFound = false;

  attempt1Chart: ChartData<'bar'> = { labels: DIFF_LABELS, datasets: [] };
  attempt2Chart: ChartData<'bar'> = { labels: DIFF_LABELS, datasets: [] };

  chartType = 'bar' as const;
  chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { min: 0, max: 5, ticks: { stepSize: 1 } } }
  };

  constructor(
    private reportService: VanhilereportService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    const saved = localStorage.getItem('User');
    if (saved) {
      this.studentId = saved;
      this.loadResults(saved);
    }
  }

  lookup() {
    if (!this.inputId) return;
    this.studentId = this.inputId;
    this.loadResults(this.inputId);
  }

  private loadResults(id: string) {
    this.loading = true;
    this.notFound = false;
    this.student = null;
    this.reportService.getUser(id).subscribe(res => {
      this.loading = false;
      if (!res.success || res.user.length === 0) {
        this.notFound = true;
        return;
      }
      this.student = res.user[0];
      this.attempt1Chart = {
        labels: DIFF_LABELS,
        datasets: [{
          data: this.student.correctAperdif1,
          label: 'ניסיון 1',
          backgroundColor: BAR_COLORS
        }]
      };
      if (this.student.correctAperdif2?.length > 0) {
        this.attempt2Chart = {
          labels: DIFF_LABELS,
          datasets: [{
            data: this.student.correctAperdif2,
            label: 'ניסיון 2',
            backgroundColor: BAR_COLORS
          }]
        };
      }
    }, () => {
      this.loading = false;
      this.toastr.error('שגיאה בטעינת הנתונים');
    });
  }

  get hasAttempt1(): boolean {
    return this.student?.correctAperdif1?.length > 0;
  }

  get hasAttempt2(): boolean {
    return this.student?.correctAperdif2?.length > 0;
  }

  totalScore(arr: number[]): number {
    return arr?.reduce((a, b) => a + b, 0) ?? 0;
  }
}
