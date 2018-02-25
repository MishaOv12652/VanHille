import {Component, OnInit, Injectable, AfterViewChecked} from '@angular/core';
import {QuestionsserviceService} from "../../services/questionsservice.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {VanhileformService} from "../../services/vanhileform.service";//update user answer
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  showFinish: boolean = false;
  finish: boolean = false;
  Qid: Number;
  qnumber: number;
  question: String;
  img: String;
  Answers: [String];
  User: any = localStorage.getItem('User');
  tryTime: any = localStorage.getItem('tryNum');
  radiogroup: any;
  counterConfig: Object;

  //calc User variables
  CorrectAnswersForQuestions: any[] = [];
  AnswersOfUser: Number[] = [];
  CorrectAnsPerDiff: any[] = [0, 0, 0, 0, 0];


  constructor(private questionService: QuestionsserviceService,
              private flashmessage: FlashMessagesService,
              private spinner: Ng4LoadingSpinnerService) {

  }

  ngOnInit() {
    this.qnumber = 1;
    this.nextQuestion(this.qnumber.toString());
    this.counterConfig = {
      leftTime: 1800,
      template: "$!m!:$!s!",
      size: 'medium'
    }
  }


  nextQuestion(id: String) {
    if (this.qnumber > 25) {
      return false;
    }

    this.questionService.getNextQuestion(id).subscribe(data => {

      if (data.success) {
        this.Qid = data.question.Qid;
        this.question = data.question.Question;
        this.img = data.question.Image;
        this.Answers = data.question.Answers;
        if (this.qnumber == 25) {
          this.hideButtons();
        }
      } else {
        this.flashmessage.show('שגיאה לא ניתן לעבור לשאלה הבאה', {cssClass: 'alert-danger', timeout: 3000});
      }
      this.spinner.hide();
    });
  }

  backQuestion() {
    if (this.qnumber == 1) {
      return false;
    } else {
      this.questionService.getUser(this.User).subscribe(user => {
        this.qnumber--;
        if (this.tryTime == 1) {
          this.radiogroup = user[0].Answers1[this.qnumber];
        } else {
          this.radiogroup = user[0].Answers2[this.qnumber];
        }
         this.nextQuestion(this.qnumber.toString());
      });

    }
  }

  saveAnswer() {
    const Answer = {
      radiogroup: this.radiogroup
    }
    if (Answer.radiogroup == 'a1') {
      this.questionService.saveUserAnswer(parseInt(this.User), 1, this.qnumber, this.tryTime).subscribe(data => {
        this.spinner.show();
        if (data.success) {
          this.radiogroup = 0;
          this.qnumber++;
          if (this.qnumber > 25) {
            return false;
          } else {
            this.nextQuestion(this.qnumber.toString());
            return true;
          }

        } else {
          this.flashmessage.show('לא נשמרה התשובה', {cssClass: 'alert-danger', timeout: 3000});
          return false;
        }
      });
    } else if (Answer.radiogroup == 'a2') {
      this.questionService.saveUserAnswer(this.User, 2, this.qnumber, parseInt(this.tryTime)).subscribe(data => {
        this.spinner.show();
        if (data.success) {
          this.radiogroup = 0;
          this.qnumber++;
          if (this.qnumber > 25) {
            return false;
          } else {
            this.nextQuestion(this.qnumber.toString());
            return true;
          }
        } else {
          this.flashmessage.show('לא נשמרה התשובה', {cssClass: 'alert-danger', timeout: 3000});
          return false;
        }
      });
    } else if (Answer.radiogroup == 'a3') {
      this.questionService.saveUserAnswer(this.User, 3, this.qnumber, parseInt(this.tryTime)).subscribe(data => {
        this.spinner.show();
        if (data.success) {
          this.radiogroup = 0;
          this.qnumber++;
          if (this.qnumber > 25) {
            return false;
          } else {
            this.nextQuestion(this.qnumber.toString());
            return true;
          }
        } else {
          this.flashmessage.show('לא נשמרה התשובה', {cssClass: 'alert-danger', timeout: 3000});
          return false;
        }
      });
    } else if (Answer.radiogroup == 'a4') {
      this.questionService.saveUserAnswer(this.User, 4, this.qnumber, parseInt(this.tryTime)).subscribe(data => {
        this.spinner.show();
        if (data.success) {
          this.radiogroup = 0;
          this.qnumber++;
          if (this.qnumber > 25) {
            return false;
          } else {
            this.nextQuestion(this.qnumber.toString());
            return true;
          }
        } else {
          this.flashmessage.show('לא נשמרה התשובה', {cssClass: 'alert-danger', timeout: 3000});
          return false;
        }
      });
    } else if (Answer.radiogroup == 'a5') {
      this.questionService.saveUserAnswer(this.User, 5, this.qnumber, parseInt(this.tryTime)).subscribe(data => {
        this.spinner.show();
        if (data.success) {
          this.radiogroup = 0;
          this.qnumber++;
          if (this.qnumber > 25) {
            return false;
          } else {
            this.nextQuestion(this.qnumber.toString());
            return true;
          }
        } else {
          this.flashmessage.show('לא נשמרה התשובה', {cssClass: 'alert-danger', timeout: 3000});
          return false;
        }
      });
    } else {
      this.flashmessage.show('לא נבחרה תשובה', {cssClass: 'alert-danger', timeout: 3000});
    }

  }


  hideButtons() {
    document.getElementById('next').style.display = 'none';
    document.getElementById('back').style.display = 'none';
    this.finish = true;
  }


  saveCorrectUserAnswers() {
    var arrstring = "";
    for (var index = 0; index < this.CorrectAnsPerDiff.length; index++) {
      arrstring = arrstring + this.CorrectAnsPerDiff[index].toString() + '/';
      console.log("arrstring: " + arrstring)

    }
    this.questionService.saveCorrectAnsPerDiff(this.User, arrstring, this.tryTime).subscribe(data => {
      if (data.success) {
        this.showFinish = true;
      } else {
        this.flashmessage.show('לא ניתן לשמור תשובות נכונות של סטודנט', {cssClass: 'alert-danger', timeout: 3000});
      }
    });
  }

  //calcs the Users Correct Answers for difficulties
  calcUser(finishedInTime) {
    //handles last question
    if (finishedInTime) {
      this.saveAnswer();
    }
    console.log("student calc started for student: " + this.User);
    this.questionService.calcUser(this.User, this.tryTime).subscribe(userResult => {
      if (!userResult.success) {

      } else {
        this.CorrectAnsPerDiff = userResult.studentRes;
        this.saveCorrectUserAnswers();
      }
    });

  }
  //previous calc method - client side
  // calcUser() {
  //   this.saveAnswer();
  //   console.log("calc start: " + this.CorrectAnsPerDiff);
  //   this.questionService.getAllQuestions().subscribe(data => {
  //     this.spinner.hide();
  //     if (data.success) {
  //       for (var index = 0; index < data.questions.length; index++) {
  //         this.CorrectAnswersForQuestions[index] = {
  //           corA: data.questions[index].correctA,
  //           diff: data.questions[index].dif
  //         };
  //       }
  //       this.questionService.getUser(this.User).subscribe(data => {
  //         if (data.success) {
  //           if (this.tryTime == 1) {
  //             this.AnswersOfUser = data.user[0].Answers1;
  //             if (this.Answers.length < 25) {
  //               this.CorrectAnsPerDiff = [0, 0, 0, 0, 0];
  //             }
  //           }
  //           if (this.tryTime == 2) {
  //             this.AnswersOfUser = data.user[0].Answers2;
  //             if (this.Answers.length < 25) {
  //               this.CorrectAnsPerDiff = [0, 0, 0, 0, 0];
  //             }
  //           }
  //           if (this.CorrectAnswersForQuestions.length == 0 || this.AnswersOfUser.length == 0) {
  //             this.flashmessage.show('תשובות נכונות לשאלות או תשובות של סטודנט לא קיימים', {
  //               cssClass: 'alert-danger',
  //               timeout: 3000
  //             });
  //             return false;
  //           } else {
  //             for (var index = 0; index < this.CorrectAnswersForQuestions.length; index++) {
  //               if (this.AnswersOfUser[index] == this.CorrectAnswersForQuestions[index].corA) {
  //                 switch (parseInt(this.CorrectAnswersForQuestions[index].diff)) {
  //                   case 1:
  //                     this.CorrectAnsPerDiff[0] = parseInt(this.CorrectAnsPerDiff[0]) + 1;
  //                     break;
  //                   case 2:
  //                     this.CorrectAnsPerDiff[1] = parseInt(this.CorrectAnsPerDiff[1]) + 1;
  //                     break;
  //                   case 3:
  //                     this.CorrectAnsPerDiff[2] = parseInt(this.CorrectAnsPerDiff[2]) + 1;
  //                     break;
  //                   case 4:
  //                     this.CorrectAnsPerDiff[3] = parseInt(this.CorrectAnsPerDiff[3]) + 1;
  //                     break;
  //                   case 5:
  //                     this.CorrectAnsPerDiff[4] = parseInt(this.CorrectAnsPerDiff[4]) + 1;
  //                     break;
  //                 }
  //               }
  //             }
  //             this.saveCorrectUserAnswers();
  //
  //           }
  //         } else {
  //           this.flashmessage.show('לא ניתן למצוא תשובות של סטודנט', {cssClass: 'alert-danger', timeout: 3000});
  //         }
  //       })
  //     } else {
  //       this.flashmessage.show('לא ניתן למצוא תשובות נכונות לשאלות', {cssClass: 'alert-danger', timeout: 3000});
  //     }
  //   });
  // }
}
