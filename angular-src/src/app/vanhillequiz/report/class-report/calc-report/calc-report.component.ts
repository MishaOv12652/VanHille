import {Component, OnInit} from '@angular/core';
import {VanhilereportService} from '../../../../services/vanhilereport.service';
import {FlashMessagesService} from 'angular2-flash-messages';
//import {SnotifyService} from 'ng-snotify';
import {ChartsModule} from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-calc-report',
  templateUrl: './calc-report.component.html',
  styleUrls: ['./calc-report.component.css']
})
export class CalcReportComponent implements OnInit {
  // radar chart options
  radarChartLabels: string[] = ['רמה 1', 'רמה 2', 'רמה 3', 'רמה 4', 'רמה 5'];
  radarChartOptions: any = {
    scale: {
      ticks: {
        min: 0,
        steps: 10,
        beginAtZero: true,
        max: 100
      }
    }
  };
  radarColors: any[] = [{
    backgroundColor: [
      'rgba(54, 162, 235, 0.5)',
      'rgba(102, 0, 204, 0.2)'
    ]
  }];
  radarChartType: string = 'radar';
  // values for calculation
  radarChartData: any[] = [{}];
  tryNum: Number; // any = localStorage.getItem('tryNum');
  groupNum: Number;
  courseNum: Number;
  courseNumOptions: [any];
  groupNumOptions: [any];
  tryNumOptions = [1, 2];

  constructor(private reportService: VanhilereportService,
              private flashMessagesService: FlashMessagesService) {
  }

  ngOnInit() {
    this.getAllUniqueCourseNum();
  }

  /**
   * handles the calc of class
   */
  calcAll() {
    this.reportService.createAllResults(this.tryNum, this.courseNum, this.groupNum).subscribe(data => {
      if (data.success) {
        this.radarChartData = [{
          data: data.classResult[0].results.slice(0, 5),
          label: `${data.classResult[0].groupNum} - ${data.classResult[0].courseNum}`
        }];
        //  this.Options = data.resQuiz;
      } else {
        //this.snotifyMessage.error(data.msg, 'שגיאה', {style: 'material'});
        this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
      }
    });
  }

  /**
   * finds CourseAndGroupNumOptions
   */
  getAllUniqueCourseNum() {
    this.reportService.getAllUniqueCourseNum().subscribe(data => {
      if (!data.success) {
        this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
      } else {
        this.courseNumOptions = data.result;
      }
    });
  }

  getCorepondingGroupNums() {
    this.reportService.getCorepondingGroupNums(this.courseNum).subscribe(data => {
      if (!data.success) {
        this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
      } else {
        this.groupNumOptions = data.result;
      }
    });
  }


  /**
   * clears the radar graph
   */
  clearRadar() {
    this.radarChartData = [{data: '', label: ''}];
  }

  /**
   * handles when chart is clicked - shows the percentage value
   * @param e - event
   */
  chartClicked(e: any): void {
    console.log(e);
  }

  /**
   * handles when chart is hovered - shows the percentage value
   * @param e - event
   */
  chartHovered(e: any): void {
    console.log(e);
  }
}
