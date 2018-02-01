import { Component, OnInit } from '@angular/core';
import { VanhilereportService } from "../../services/vanhilereport.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { ChartsModule } from 'ng2-charts/ng2-charts';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  // Options: [any];
  // selectID: Number;
  // barChartData: any[] = [{
  // }];
  // radarChartData: any[] = [{
  // }];
  //
  constructor(private reportServise: VanhilereportService, private flashmessage: FlashMessagesService) { }

  ngOnInit() {
    // this.reportServise.getUsersLast3Hours().subscribe(data => {
    //   if (data.success) {
    //     this.Options = data.users;
    //   } else {
    //     this.flashmessage.show('משהו קרה', { cssClass: 'alert-danger', timeout: 3000 });
    //   }
    // });
  }

  /**
   * options for Bar chart
   */
//   private barChartOptions: any = {
//     scaleShowVerticalLines: false,
//     responsive: true,
//     scales: {
//       yAxes: [{
//         ticks: {
//           steps: 5,
//           stepValue: 1,
//           max: 5,
//           min: 0
//         }
//       }]
//     }
//   };
//   private barChartLabels: string[] = ['רמה 1', 'רמה 2', 'רמה 3', 'רמה 4', 'רמה 5'];
//   private barChartType: string = 'bar';
//   private barChartLegend: boolean = true;
//
//   private colors: any[] = [{
//     backgroundColor: [
//       'rgba(255, 99, 132, 2)',
//       'rgba(54, 162, 235, 2)',
//       'rgba(255, 206, 86, 2)',
//       'rgba(0, 255, 0, 2)',
//       'rgba(102, 0, 204, 2)'
//     ]
//   }];
//
//
//   /**
//    * options for radar chart
//    *
//    */
//   private radarChartLabels: string[] = ['רמה 1', 'רמה 2', 'רמה 3', 'רמה 4', 'רמה 5'];
//
//   private radarChartType: string = 'radar';
//
//
//   private radarChartOptions: any = {
//     scale:{
//       ticks:{
//         min:0,
//         steps:10,
//         beginAtZero: true,
//         max:100
//       }
//     }
//   };
//
//   private radarcolors: any[] = [{
//     backgroundColor: [
//       // 'rgba(255, 99, 132, 0.2)',
//       'rgba(54, 162, 235, 0.5)',
//       // 'rgba(255, 206, 86, 0.2)',
//       // 'rgb(22, 19, 190)'
//       // 'rgba(0, 255, 0, 0.2)',
//       // 'rgba(102, 0, 204, 0.2)'
//     ]
//   }];
//   // events
//   private chartClicked(e: any): void {
//     console.log(e);
//   }
//
//   private chartHovered(e: any): void {
//     console.log(e);
//   }
//
//   clearSelection() {
//     this.selectID = null;
//   }
//   /**
//    * shows or hides the users chart
//    * true if a user selelcted
//    * false if selected is empty
//    */
//   showHideChartOfUser() {
//     if (this.selectID == null)
//       return false;
//     else
//       return true;
//   }
//
//
//
//   findCorrectAnswerData() {
//     this.reportServise.getUser(this.selectID).subscribe(data => {
//       if (data.success) {
//         this.barChartData = [{ data: data.user.correctAperdif, label: this.selectID }];
//       } else {
//         this.flashmessage.show('שגיאה', { cssClass: 'alert-danger', timeout: 3000 })
//       }
//     });
//   };
//
//   calcAll() {
//     this.reportServise.createAllResults().subscribe(data => {
//       if (data.success) {
//         console.log('data.resQuiz: ' + data.resQuiz.results)
//         this.radarChartData = [{ data: data.resQuiz.results, label: 'כיתה' }];
//       } else {
//         this.flashmessage.show('שגיאה בחישוב כללי', { cssClass: 'alert-danger', timeout: 3000 })
//       }
//     })
//   }
//
//   clearRadar(){
//     this.radarChartData = [{ data: "", label: '' }];
//   }
//
 }
