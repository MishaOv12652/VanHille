import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcReportComponent } from './calc-report/calc-report.component';
import { PastPresentReportComponent } from './past-present-report/past-present-report.component';

@Component({
  selector: 'app-class-report',
  templateUrl: './class-report.component.html',
  styleUrls: ['./class-report.component.css'],
  standalone: true,
  imports: [CommonModule, CalcReportComponent, PastPresentReportComponent]
})
export class ClassReportComponent implements OnInit {
  showpast: boolean = false;

  constructor() {}

  ngOnInit() {}

  showPast() {
    this.showpast = !this.showpast;
  }
}
