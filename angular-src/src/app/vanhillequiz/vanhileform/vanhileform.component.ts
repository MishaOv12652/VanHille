import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VanhileformService } from '../../services/vanhileform.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vanhileform',
  templateUrl: './vanhileform.component.html',
  styleUrls: ['./vanhileform.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class VanhileformComponent implements OnInit {
  ID: any;
  courseNum: any;
  groupNum: any;
  @Output() showvnahileform: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private vanhileformservice: VanhileformService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  startQuiz() {
    const user = { ID: this.ID, courseNum: this.courseNum, groupNum: this.groupNum };

    if (!this.vanhileformservice.validateForm(user)) {
      this.toastr.error('מלא את כל השדות');
      return false;
    }
    if (!this.vanhileformservice.validateID(user.ID)) {
      this.toastr.error('ת.ז שהכנסת הוא קצר או ארוך מידי אנא בדוק שנית!');
      return false;
    }

    this.vanhileformservice.getUser(user.ID).subscribe(data => {
      if (data.success && data.user.length == 0) {
        this.vanhileformservice.createUser(user).subscribe(data => {
          if (!data.success) {
            this.toastr.error('לא קיים משתמש כזה אך קרה שגיאה');
          } else {
            this.toastr.success('נרשמת בהצלחה');
            localStorage.setItem('User', user.ID.toString());
            localStorage.setItem('tryNum', '1');
            this.showvnahileform.emit(false);
          }
        });
      } else {
        if (data.user[0].Answers1.length == 0) {
          this.toastr.success('נרשמת בהצלחה');
          localStorage.setItem('User', user.ID.toString());
          localStorage.setItem('tryNum', '1');
          this.showvnahileform.emit(false);
        } else if (data.user[0].Answers1.length > 0 && data.user[0].Answers2.length < 25 && data.user[0].correctAperdif1.length == 0) {
          this.toastr.error('היית באמצע השאלון (ניסיון 1) ויצאת, השאלון יתחיל מהתחלה!', '', { timeOut: 5000 });
          this.vanhileformservice.nullifyAnswers(user.ID, 1).subscribe(data => {
            if (data.success) {
              localStorage.setItem('User', data.student.ID.toString());
              localStorage.setItem('tryNum', '1');
              this.showvnahileform.emit(false);
            } else {
              this.toastr.error('שגיאה בהתחלת שאלון מחדש (ניסיון 1). אנא נסה שנית');
            }
          });
        } else {
          if (data.user[0].Answers1.length == 25 && data.user[0].Answers2.length == 0) {
            this.vanhileformservice.updateGroupNumOfStudent(user.ID, user.groupNum).subscribe(data => {
              if (data.success) {
                localStorage.setItem('User', user.ID.toString());
                localStorage.setItem('tryNum', '2');
                this.showvnahileform.emit(false);
              } else {
                this.toastr.error(data.msg);
              }
            });
          } else if (data.user[0].Answers2.length > 0 && data.user[0].Answers2.length < 25 && data.user[0].correctAperdif2.length == 0) {
            this.toastr.error('היית באמצע השאלון (ניסיון 2) ויצאת, השאלון יתחיל מהתחלה!', '', { timeOut: 5000 });
            this.vanhileformservice.nullifyAnswers(user.ID, 2).subscribe(data => {
              if (data.success) {
                localStorage.setItem('User', data.student.ID.toString());
                localStorage.setItem('tryNum', '2');
                this.showvnahileform.emit(false);
              } else {
                this.toastr.error('שגיאה בהתחלת שאלון מחדש (ניסיון 2). אנא נסה שנית');
              }
            });
          } else {
            this.toastr.error('עשית את השאלון פעמיים, לא ניתן לבצע את השאלון שוב, אנא פנה למרצה');
          }
        }
      }
    });
    return true;
  }
}
