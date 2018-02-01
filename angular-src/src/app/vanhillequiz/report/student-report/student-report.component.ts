import { Component, OnInit } from '@angular/core';
import { VanhilereportService } from "../../../services/vanhilereport.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { ChartsModule } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-student-report',
  templateUrl: './student-report.component.html',
  styleUrls: ['./student-report.component.css']
})
export class StudentReportComponent implements OnInit {
  Options: [any];
  selectID: Number;
  barChartData1: any[] = [{ //chart for correct answers 1
  }];

  barChartData2: any[] = [{ //chart for correct answers 2
  }];
  //tryNum: any = localStorage.getItem('tryNum');
  showSecondChart: Boolean = false;
  sDate: Date;
  fDate: Date;

  constructor(
    private reportServise: VanhilereportService,
    private flashmessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.reportServise.getUsersLast3Hours().subscribe(data => {
      if (data.success) {
        this.Options = data.users;
      } else {
        this.flashmessage.show('משהו קרה', { cssClass: 'alert-danger', timeout: 3000 });
      }
    });
  }

  /**
   * options for Bar chart
   */
  private barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          steps: 5,
          stepValue: 1,
          max: 5,
          min: 0
        }
      }]
    }
  };
  private barChartLabels: string[] = ['רמה 1', 'רמה 2', 'רמה 3', 'רמה 4', 'רמה 5'];
  private barChartType: string = 'bar';
  private barChartLegend: boolean = true;

  private colors: any[] = [{
    backgroundColor: [
      'rgba(255, 99, 132, 2)',
      'rgba(54, 162, 235, 2)',
      'rgba(255, 206, 86, 2)',
      'rgba(0, 255, 0, 2)',
      'rgba(102, 0, 204, 2)'
    ]
  }];

  private chartClicked(e: any): void {
    console.log(e);
  }

  private chartHovered(e: any): void {
    console.log(e);
  }

  clearSelection() {
    this.selectID = null;
    this.sDate = null;
    this.fDate = null;
  }
  /**
   * shows or hides the users chart 
   * true if a user selelcted
   * false if selected is empty
   */
  showHideChartOfUser() {
    if (this.selectID == null)
      return false;
    else
      return true;
  }

  showHideSecondChart() {
    if (this.showHideChartOfUser() && this.showSecondChart) {
      return true;
    } else return false;
  }

  findCorrectAnswerData() {
    //console.log(this.selectID)
    this.reportServise.getUser(this.selectID).subscribe(data => {
      if (data.success) {
        if(data.user.length==1){
          if(data.user[0].correctAperdif2[0] != undefined){
            this.barChartData1 = [{ data: data.user[0].correctAperdif1, label: this.selectID }];
            this.barChartData2 = [{ data: data.user[0].correctAperdif2, label: this.selectID }];
            this.showSecondChart = true;
          }else{
            this.barChartData1 = [{ data: data.user[0].correctAperdif1, label: this.selectID }];
          }
        }else{
          this.flashmessage.show('לא נמצאו תשובות של הסטונדט בעל ת.ז' + this.selectID,{cssClass: 'alert-danger', timeout: 3000 })
          return false;
        }
        //console.log(JSON.stringify(data))
        // if (this.tryNum == 1) {
        //   this.barChartData1 = [{ data: data.user[0].correctAperdif1, label: this.selectID }];
        //   console.log(JSON.stringify(this.barChartData1));
        // } else {
        //   if (this.tryNum == 2) {
        //     this.barChartData1 = [{ data: data.user[0].correctAperdif1, label: this.selectID }];
        //     this.barChartData2 = [{ data: data.user[0].correctAperdif2, label: this.selectID }];
        //     this.showSecondChart = true;
        //   }
        // }

      } else {
        this.flashmessage.show('שגיאה', { cssClass: 'alert-danger', timeout: 3000 })
      }
    });
  };

  findStudentsBetweenDates() {
    if (this.sDate > this.fDate) {
      this.flashmessage.show("שגיאה! תאריך סיום לפני תאריך התחלה", { cssClass: 'alert-danger', timeout: 3000 })
    } else {
      if (this.sDate == null || this.fDate == null) {
        this.flashmessage.show("אנא מלא את גם תאריך התחלה וגם תאריך סיום", { cssClass: 'alert-danger', timeout: 3000 })
      } else {
        this.reportServise.getStudentsBetweenDates(this.sDate, this.fDate).subscribe(data => {
          if (data.success) {
            if (data.students.length == 0) {
              this.flashmessage.show("אין סטודנטים שעשו את השאלון בתאריכים שביקשת", { cssClass: 'alert-danger', timeout: 3000 })
            } else {
              this.flashmessage.show("נמצאו סטודנטים מתאים אנא בחר אחד", { cssClass: 'alert-success', timeout: 3000 })
              this.Options = data.students;
              //console.log(this.Options)
            }
          } else {
            this.flashmessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 })
          }

        });
      }

    }

  }

}
