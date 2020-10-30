import {Component, OnInit, Injectable, AfterViewChecked} from '@angular/core';
import {QuestionsserviceService} from '../../services/questionsservice.service';
import {FlashMessagesService} from 'angular2-flash-messages';
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

  // calc User variables
  CorrectAnswersForQuestions: any[] = [];
  AnswersOfUser: Number[] = [];
  // CorrectAnsPerDiff: [];


  constructor(private questionService: QuestionsserviceService,
              private flashmessage: FlashMessagesService,
              private spinner: Ng4LoadingSpinnerService) {

  }

  ngOnInit() {
    this.qnumber = 1;
    this.nextQuestion(this.qnumber.toString());
    this.counterConfig = {
      leftTime: 5400,
      template: '$!h!:$!m!:$!s!',
      size: 'medium'
    };
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
        this.questionService.getUser(this.User).subscribe(user => {
          if (parseFloat(this.tryTime) === 1) {
            if (user.user[0].Answers1[this.qnumber - 1]) {
              this.radiogroup = 'a' + user.user[0].Answers1[this.qnumber - 1];
            }
          } else {
            this.radiogroup = 'a' + user.user[0].Answers2[this.qnumber - 1];
          }
        });
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
      this.User = localStorage.getItem('User');
      this.questionService.getUser(this.User).subscribe(user => {
        this.qnumber--;
        this.tryTime = localStorage.getItem('tryNum');
        if (parseFloat(this.tryTime) === 1) {
          this.radiogroup = 'a' + user.user[0].Answers1[this.qnumber - 1];
        } else {
          this.radiogroup = 'a' + user.user[0].Answers2[this.qnumber - 1];
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
    // document.getElementById('next').style.display = 'none';
    // document.getElementById('back').style.display = 'none';
    this.finish = true;
  }

  showNext(){
    return this.qnumber > 0 && this.qnumber < 25;
  }

  disableButton(){
    return this.radiogroup === 'a' + undefined;
  }


  saveCorrectUserAnswers(resultArr: any[]) {
    // let arrstring = '';
    // for (let index = 0; index < resultArr.length; index++) {
    //   arrstring = arrstring + resultArr[index].toString() + '/';
    //   console.log(arrstring);
    // }
    this.questionService.saveCorrectAnsPerDiff(this.User, resultArr, this.tryTime).subscribe(data => {
      if (data.success) {
        this.showFinish = true;
      } else {
        this.flashmessage.show('לא ניתן לשמור תשובות נכונות של סטודנט', {cssClass: 'alert-danger', timeout: 3000});
      }
    });
  }

  // calcs the Users Correct Answers for difficulties
  calcUser(finishedInTime) {
    // handles last question
    if (finishedInTime) {
      this.saveAnswer();
    } else {
      this.showFinish = true;
    }
    // console.log("student calc started for student: " + this.User);
    this.questionService.calcUser(this.User, this.tryTime).subscribe(userResult => {
      if (!userResult.success) {
        console.log(userResult);

      } else {
        // this.CorrectAnsPerDiff = userResult.studentRes;
        this.saveCorrectUserAnswers(userResult.studentRes);
      }
    });

  }
}
