import {Component, OnInit} from '@angular/core';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {FlashMessagesService} from "angular2-flash-messages";
import {VanhilereportService} from "../../../../services/vanhilereport.service";

@Component({
  selector: 'app-past-present-report',
  templateUrl: './past-present-report.component.html',
  styleUrls: ['./past-present-report.component.css']
})
export class PastPresentReportComponent implements OnInit {
  showBarGraph: boolean;
  // pre data
  courseNumPre: any;
  groupNumPre: any;
  radarChartDataPre: [{ data: string; label: string }];
  // post date
  groupNumPost: any;
  courseNumPost: any;
  radarChartDataPost: [{ data: string; label: string }];
  // bar chart data
  barChartData: { data: string; label: string; }[];
  // options for choise fields pre and post results
  courseNumPreOptions: [any];
  groupNumPreOptions: [any];
  courseNumPostOptions: [any];
  groupNumPostOptions: [any];
  groupNum: Number;
  courseNum: Number;
  constructor(private reportServise: VanhilereportService,
              private flashmessage: FlashMessagesService) {
  }

  ngOnInit() {
    this.findResultsForComparison();
  }

  switchGraphs() {
    this.showBarGraph = !this.showBarGraph;
  }

  /**
   * clears the selection of pre or post and the bar chart
   * @param {Number} PrePost
   */
  clearSelection(PrePost: Number) {
    if (PrePost == 1) {
      this.courseNumPre = null;
      this.groupNumPre = null;
      this.radarChartDataPre = [{data: "", label: ''}];
    }
    if (PrePost == 2) {
      this.courseNumPost = null;
      this.groupNumPost = null;
      this.radarChartDataPost = [{data: "", label: ''}];
    }
    this.barChartData = [{data: "", label: ""}];
  }

  findResultsForComparison() {
    this.reportServise.getAllQuizesDoneInTheLastSemeter().subscribe(data => {
      if (data.success) {
        if (data.quiz.length == 0) {
          this.flashmessage.show('אין שאלונים שבוצעו בסמסטר האחרון', {cssClass: 'alert-danger', timeout: 3000});
        } else if (data.quiz.length == 1) {
          this.courseNumPreOptions = [data.quiz[0].courseNum];
        } else {
          this.courseNumPreOptions = [data.quiz[0].courseNum];
          for (var index = 1; index < data.quiz.length; index++) {
            if (data.quiz[index].courseNum == data.quiz[index - 1].courseNum) {
              if (this.courseNumPostOptions == undefined) {
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
        this.flashmessage.show('שגיאה בטעינת שאלונים שבוצעו בסמסטר האחרון', {cssClass: 'alert-danger', timeout: 3000})
      }
    });
  }

  findGroupNumByCourseNumSelected(PrePost: any) {
    if (parseFloat(PrePost) == 1) {
      this.reportServise.getQuizByCourseNum(this.courseNumPre).subscribe(data => {
        if (data.success) {
          this.groupNumPreOptions = [data.quiz[0].groupNum];
        } else {
          this.flashmessage.show('שגיאה במציאת ערכים לתוצאות לפני לשדה של מס קורס', {
            cssClass: 'alert-danger',
            timeout: 3000
          });
        }
      });
    }
    if (parseFloat(PrePost) == 2) {
      this.reportServise.getQuizByCourseNum(this.courseNumPost).subscribe(data => {
        if (data.success) {
          if (data.quiz.length > 1) {
            this.groupNumPostOptions = [data.quiz[1].groupNum];
          }
        } else {
          this.flashmessage.show('שגיאה במציאת ערכים לתוצאות אחרי לשדה של מס קורס', {
            cssClass: 'alert-danger',
            timeout: 3000
          });
        }
      });
    }
  }

  findQuizByGroupAndCourseNum(PrePost: any) {
    if (parseFloat(PrePost) == 1) {
      this.reportServise.getQuizesByGroupAndCourse(this.courseNumPre, this.groupNumPre).subscribe(data => {
        if (data.success) {
          this.radarChartDataPre = [{
            data: data.quiz[0].results,
            label: `${data.quiz[0].groupNum} - ${data.quiz[0].courseNum}`
          }];
          setTimeout(() => {
            this.barChartData = [{
              data: data.quiz[0].results,
              label: `${data.quiz[0].groupNum} - ${data.quiz[0].courseNum}`
            }];
          }, 500);
        } else {
          return false;
        }
      });
    }
    if (parseFloat(PrePost) == 2) {
      this.reportServise.getQuizesByGroupAndCourse(this.courseNumPost, this.groupNumPost).subscribe(data => {
        if (data.success) {
          this.radarChartDataPost = [{
            data: data.quiz[0].results,
            label: `${data.quiz[0].groupNum} - ${data.quiz[0].courseNum}`
          }];
          setTimeout(() => {
            this.barChartData = [this.barChartData[0], {
              data: data.quiz[0].results,
              label: `${data.quiz[0].groupNum} - ${data.quiz[0].courseNum}`
            }];
          }, 500);
        } else {
          return false;
        }
      });
    }
  }
}
