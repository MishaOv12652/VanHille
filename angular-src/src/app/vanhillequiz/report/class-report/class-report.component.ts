import { Component, OnInit } from '@angular/core';
import { VanhilereportService } from "../../../services/vanhilereport.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { ChartsModule } from 'ng2-charts/ng2-charts';
import set = Reflect.set;

@Component({
  selector: 'app-class-report',
  templateUrl: './class-report.component.html',
  styleUrls: ['./class-report.component.css']
})
export class ClassReportComponent implements OnInit {
  //options for choise fields pre and post results
  courseNumPreOptions:[any];
  groupNumPreOptions:[any];
  courseNumPostOptions:[any];
  groupNumPostOptions:[any];
  //binding for the choise fields pre and post results
  groupNumPre: Number;
  courseNumPre: Number;
  groupNumPost: Number;
  courseNumPost: Number;
  //radar charts for comparison
  radarChartDataPre: any[] = [{}];
  radarChartDataPost: any[] = [{}];
  //radar chart for calc and Show Imidiate results
  radarChartData: any[] = [{}];
  //get the try number for the calc
  tryNum: any = localStorage.getItem('tryNum');
  //show comparison mode
  showpast: boolean = false;
  noDupArr:[any];
  //delete those four after finishing
  Options: [any];
  groupNum: Number;
  courseNum: Number;
  //bar chart options
  barChartLabels:string[] = ['רמה 1', 'רמה 2', 'רמה 3', 'רמה 4', 'רמה 5'];
  barChartType:string = 'bar';
  barChartLegend:boolean = true;
  barChartData:any[any] = [{data:[],label:""}];
  barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  radarChartPastData: any[] = [{
  }];

  constructor(
    private reportServise: VanhilereportService,
    private flashmessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.findResultsForComparison();
    //this.findAllQuizesDoneInTheLastSemster();
  }

  /**
   * options for radar chart
   *
   */
  private radarChartLabels: string[] = ['רמה 1', 'רמה 2', 'רמה 3', 'רמה 4', 'רמה 5'];

  private radarChartType: string = 'radar';


  private radarChartOptions: any = {
    scale: {
      ticks: {
        min: 0,
        steps: 10,
        beginAtZero: true,
        max: 100
      }
    }
  };

  private radarcolors: any[] = [{
    backgroundColor: [
      // 'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.5)',
      //'rgba(255, 206, 86, 0.2)',
      //'rgb(22, 19, 190)'
      // 'rgba(0, 255, 0, 0.2)',
      'rgba(102, 0, 204, 0.2)'
    ]
  }];
  // events
  private chartClicked(e: any): void {
    console.log(e);
  }

  private chartHovered(e: any): void {
    console.log(e);
  }

  clearSelection(PrePost:Number) {
    if(PrePost==1){
      this.courseNumPre = null;
      this.groupNumPre = null;
      this.radarChartDataPre = [{data:"",label:''}];
    }
    if(PrePost==2){
      this.courseNumPost = null;
      this.groupNumPost = null;
      this.radarChartDataPost = [{data:"",label:''}];
    }
    this.barChartData=[{data:"",label:""}];
  }

  calcAll() {
    this.reportServise.createAllResults(this.tryNum).subscribe(data => {
      if (data.success) {
        //console.log(data.resQuiz[0].results)
        this.radarChartData = [{ data: data.resQuiz[0].results, label:data.resQuiz[0].groupNum + " - " + data.resQuiz[0].courseNum }];
        //  this.Options = data.resQuiz;
      } else {
        this.flashmessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 })
      }
    })
  }

  clearRadar() {
    this.radarChartData = [{ data: "", label: '' }];
  }


  findResultsForComparison(){
    this.reportServise.getAllQuizesDoneInTheLastSemeter().subscribe(data=>{
      if(data.success){
        //console.log(JSON.stringify(data));
          if(data.quiz.length==0){
            this.flashmessage.show('אין שאלונים שבוצעו בסמסטר האחרון',{cssClass: 'alert-danger', timeout: 3000})
          }else if(data.quiz.length==1){
              this.courseNumPreOptions=[data.quiz[0].courseNum];
          }else{
            this.courseNumPreOptions = [data.quiz[0].courseNum];
            for (var index = 1; index < data.quiz.length; index++) {
              if(data.quiz[index].courseNum == data.quiz[index-1].courseNum){
                if(this.courseNumPostOptions==undefined){
                  this.courseNumPostOptions = [data.quiz[index].courseNum];
                }else{
                  this.courseNumPostOptions[index] = data.quiz[index].courseNum;
                }

              }else{
                this.courseNumPreOptions[index] = data.quiz[index].courseNum;
              }
            }
          }
      }else{
        this.flashmessage.show('שגיאה בטעינת שאלונים שבוצעו בסמסטר האחרון',{cssClass: 'alert-danger', timeout: 3000})
      }
    });
  }

  findGroupNumByCourseNumSelected(PrePost:Number){
    if(PrePost == 1){
      this.reportServise.getQuizByCourseNum(this.courseNumPre).subscribe(data=>{
        if(data.success){
          this.groupNumPreOptions = [data.quiz[0].groupNum];
        }else{
            this.flashmessage.show('שגיאה במציאת ערכים לתוצאות לפני לשדה של מס קורס',{cssClass: 'alert-danger', timeout: 3000});
        }
      });
    }
    if(PrePost == 2){
      this.reportServise.getQuizByCourseNum(this.courseNumPost).subscribe(data=>{
        if(data.success){
            if(data.quiz.length>1){
              this.groupNumPostOptions = [data.quiz[1].groupNum];
            }
        }else{
          this.flashmessage.show('שגיאה במציאת ערכים לתוצאות אחרי לשדה של מס קורס',{cssClass: 'alert-danger', timeout: 3000});
        }
      });
    }
  }

  // findAllQuizesDoneInTheLastSemster() {
  //   this.reportServise.getAllQuizesDoneInTheLastSemeter().subscribe(data => {
  //     if (data.success) {
  //       if (data.quiz.length == 1) {
  //         this.Options = data.quiz;
  //       } else {
  //         this.noDupArr=[data.quiz[0]];
  //         var j = 1;
  //         for (var index = 1; index < data.quiz.length; index++) {
  //           if(data.quiz[index].courseNum==this.noDupArr[j-1].courseNum){
  //             continue;
  //           }else{
  //             this.noDupArr[j]=data.quiz[index];
  //             j++;
  //           }
  //         }
  //         this.Options=this.noDupArr;
  //       }
  //     } else {
  //       this.flashmessage.show('שגיאה במציאת סטודנטים מהסמטר האחרון', { cssClass: 'alert-danger', timeout: 3000 })
  //     }
  //   });
  // }

  findQuizByGroupAndCourseNum(PrePost:Number) {
    if(PrePost == 1){
      this.reportServise.getQuizesByGroupAndCourse(this.courseNumPre,this.groupNumPre).subscribe(data=>{
        if(data.success){
          this.radarChartDataPre = [{ data: data.quiz[0].results, label: data.quiz[0].groupNum + " - " + data.quiz[0].courseNum }];
          setTimeout(()=>{
            this.barChartData = [{ data: data.quiz[0].results, label: data.quiz[0].groupNum + " - " + data.quiz[0].courseNum }];
          },500);
        }else{
          return false;
        }
      });
    }
    if(PrePost == 2){
      this.reportServise.getQuizesByGroupAndCourse(this.courseNumPost,this.groupNumPost).subscribe(data=>{
        if(data.success){
          this.radarChartDataPost = [{ data: data.quiz[0].results, label: data.quiz[0].groupNum + " - " + data.quiz[0].courseNum }];
          setTimeout(()=>{
            this.barChartData = [this.barChartData[0],{ data: data.quiz[0].results, label: data.quiz[0].groupNum + " - " + data.quiz[0].courseNum }];
          },500);
        }else{
          return false;
        }
      });
    }
  }

  showHideChartPast() {
    if (this.courseNum == null || this.groupNum == null)
      return false;
    else
      return true;
  }

  showPast() {
    this.showpast = !this.showpast;
  }
}
