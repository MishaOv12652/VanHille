import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VanhilereportService } from '../../../../services/vanhilereport.service';
import { ToastrService } from 'ngx-toastr';
import { BarViewComponent } from './bar-view/bar-view.component';
import { RadarViewComponent } from './radar-view/radar-view.component';

@Component({
  selector: 'app-past-present-report',
  templateUrl: './past-present-report.component.html',
  styleUrls: ['./past-present-report.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, BarViewComponent, RadarViewComponent]
})
export class PastPresentReportComponent implements OnInit {
  showBarGraph: boolean = false;
  courseNumPre: any;
  groupNumPre: any;
  radarChartDataPre: any[] = [{}];
  groupNumPost: any;
  courseNumPost: any;
  radarChartDataPost: any[] = [{}];
  barChartData: any[] = [];
  courseNumPreOptions: any[] = [];
  groupNumPreOptions: any[] = [];
  courseNumPostOptions: any[] = [];
  groupNumPostOptions: any[] = [];
  selectUndefinedOptionValue: any = null;

  constructor(
    private reportServise: VanhilereportService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.findResultsForComparison();
  }

  switchGraphs() {
    if (this.courseNumPost === undefined || this.courseNumPre === undefined ||
      this.groupNumPre === undefined || this.groupNumPost === undefined) {
      this.toastr.error('אנא בחר את הקבוצות להשוואה לפני מעבר לגרף ברים');
    } else {
      this.showBarGraph = !this.showBarGraph;
    }
  }

  clearSelection(PrePost: number) {
    if (PrePost == 1) {
      this.courseNumPre = null;
      this.groupNumPre = null;
      this.radarChartDataPre = [{ data: '', label: '' }];
    }
    if (PrePost == 2) {
      this.courseNumPost = null;
      this.groupNumPost = null;
      this.radarChartDataPost = [{ data: '', label: '' }];
    }
    this.barChartData = [{ data: '', label: '' }];
  }

  findResultsForComparison() {
    this.reportServise.getAllQuizesDoneInTheLastSemeter().subscribe(data => {
      if (data.success) {
        if (data.quiz.length == 0) {
          this.toastr.error('אין שאלונים שבוצעו בסמסטר האחרון');
        } else if (data.quiz.length == 1) {
          this.courseNumPreOptions = [data.quiz[0].courseNum];
        } else {
          this.courseNumPreOptions = [data.quiz[0].courseNum];
          for (let index = 1; index < data.quiz.length; index++) {
            if (data.quiz[index].courseNum == data.quiz[index - 1].courseNum) {
              if (!this.courseNumPostOptions.length) {
                this.courseNumPostOptions = [data.quiz[index].courseNum];
              } else {
                this.courseNumPostOptions[index] = data.quiz[index].courseNum;
              }
            } else {
              this.courseNumPreOptions[index] = data.quiz[index].courseNum;
            }
          }
        }
      } else {
        this.toastr.error('שגיאה בטעינת שאלונים שבוצעו בסמסטר האחרון');
      }
    });
  }

  findGroupNumByCourseNumSelected(PrePost: any) {
    if (parseFloat(PrePost) === 1) {
      this.reportServise.getQuizByCourseNum(this.courseNumPre).subscribe(data => {
        if (data.success) {
          this.groupNumPreOptions = [data.quiz[0].groupNum];
        } else {
          this.toastr.error('שגיאה במציאת ערכים לתוצאות לפני לשדה של מס קורס');
        }
      });
    }
    if (parseFloat(PrePost) === 2) {
      this.reportServise.getQuizByCourseNum(this.courseNumPost).subscribe(data => {
        if (data.success) {
          if (data.quiz.length > 1) {
            this.groupNumPostOptions = [data.quiz[1].groupNum];
          }
        } else {
          this.toastr.error('שגיאה במציאת ערכים לתוצאות אחרי לשדה של מס קורס');
        }
      });
    }
  }

  findQuizByGroupAndCourseNum(PrePost: any) {
    if (parseFloat(PrePost) === 1) {
      this.reportServise.getQuizesByGroupAndCourse(this.courseNumPre, this.groupNumPre).subscribe(data => {
        if (data.success) {
          this.radarChartDataPre = [{ data: data.quiz[0].results, label: `${data.quiz[0].groupNum} - ${data.quiz[0].courseNum}` }];
          setTimeout(() => {
            this.barChartData = [{ data: data.quiz[0].results, label: `${data.quiz[0].groupNum} - ${data.quiz[0].courseNum}` }];
          }, 500);
        }
      });
    }
    if (parseFloat(PrePost) === 2) {
      this.reportServise.getQuizesByGroupAndCourse(this.courseNumPost, this.groupNumPost).subscribe(data => {
        if (data.success) {
          this.radarChartDataPost = [{ data: data.quiz[0].results, label: `${data.quiz[0].groupNum} - ${data.quiz[0].courseNum}` }];
          setTimeout(() => {
            this.barChartData = [this.barChartData[0], { data: data.quiz[0].results, label: `${data.quiz[0].groupNum} - ${data.quiz[0].courseNum}` }];
          }, 500);
        }
      });
    }
  }
}
