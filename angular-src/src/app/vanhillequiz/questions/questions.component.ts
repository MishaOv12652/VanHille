import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionsserviceService } from '../../services/questionsservice.service';
import { ToastrService } from 'ngx-toastr';
import { CountdownModule, CountdownEvent } from 'ngx-countdown';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, CountdownModule]
})
export class QuestionsComponent implements OnInit {
  showFinish: boolean = false;
  finish: boolean = false;
  Qid: any;
  qnumber: number = 1;
  question: any;
  img: any;
  Answers: any[];
  User: any = localStorage.getItem('User');
  tryTime: any = localStorage.getItem('tryNum');
  radiogroup: any;
  counterConfig: any;

  CorrectAnswersForQuestions: any[] = [];
  AnswersOfUser: number[] = [];

  constructor(
    private questionService: QuestionsserviceService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.qnumber = 1;
    this.nextQuestion(this.qnumber.toString());
    this.counterConfig = { leftTime: 5400, format: 'HH:mm:ss' };
  }

  nextQuestion(id: string) {
    if (this.qnumber > 25) return false;

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
        if (this.qnumber == 25) this.hideButtons();
      } else {
        this.toastr.error('שגיאה לא ניתן לעבור לשאלה הבאה');
      }
    });
    return true;
  }

  backQuestion() {
    if (this.qnumber == 1) return false;
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
    return true;
  }

  saveAnswer() {
    const ansNum = parseInt(this.radiogroup?.replace('a', '') || '0');
    if (!ansNum) {
      this.toastr.error('לא נבחרה תשובה');
      return;
    }
    this.questionService.saveUserAnswer(parseInt(this.User), ansNum, this.qnumber, this.tryTime).subscribe(data => {
      if (data.success) {
        this.radiogroup = 0;
        this.qnumber++;
        if (this.qnumber <= 25) this.nextQuestion(this.qnumber.toString());
      } else {
        this.toastr.error('לא נשמרה התשובה');
      }
    });
  }

  hideButtons() {
    const nextBtn = document.getElementById('next');
    const backBtn = document.getElementById('back');
    if (nextBtn) nextBtn.style.display = 'none';
    if (backBtn) backBtn.style.display = 'none';
    this.finish = true;
  }

  saveCorrectUserAnswers(resultArr: any[]) {
    let arrstring = resultArr.map(r => r.toString()).join('/') + '/';
    this.questionService.saveCorrectAnsPerDiff(this.User, arrstring, this.tryTime).subscribe(data => {
      if (data.success) {
        this.showFinish = true;
      } else {
        this.toastr.error('לא ניתן לשמור תשובות נכונות של סטודנט');
      }
    });
  }

  calcUser(finishedInTime: boolean) {
    if (finishedInTime) this.saveAnswer();
    else this.showFinish = true;

    this.questionService.calcUser(this.User, this.tryTime).subscribe(userResult => {
      if (userResult.success) {
        this.saveCorrectUserAnswers(userResult.studentRes);
      }
    });
  }

  handleCountdownEvent(e: CountdownEvent) {
    if (e.action === 'done') this.calcUser(false);
  }
}
