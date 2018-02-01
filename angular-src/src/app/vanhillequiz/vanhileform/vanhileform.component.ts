import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VanhileformService } from "../../services/vanhileform.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';



@Component({
  selector: 'app-vanhileform',
  templateUrl: './vanhileform.component.html',
  styleUrls: ['./vanhileform.component.css']
})
export class VanhileformComponent implements OnInit {
  Fname: String;
  Lname: String;
  ID: Number;
  courseNum: Number;
  groupNum: Number;
  @Output() showvnahileform: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor(private vanhileformservice: VanhileformService, private flashmessage: FlashMessagesService,private spinner: Ng4LoadingSpinnerService) { }

  ngOnInit() {
  }

  startQuiz() {
    const user = {
      // Fname: this.Fname,
      // Lname: this.Lname,
      ID: this.ID,
      courseNum: this.courseNum,
      groupNum: this.groupNum
    }
    this.spinner.show();
    //required fields
    if (!this.vanhileformservice.validateForm(user)) {
      this.flashmessage.show('מלא את כל השדות', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }
    //validate ID length
    if (!this.vanhileformservice.validateID(user.ID)) {
      this.flashmessage.show('ת.ז שהכנסת הוא קצר או ארוך מידי אנא בדוק שנית!', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }
    //check if user exists
    this.vanhileformservice.getUser(user.ID).subscribe(data => {
      if (data.success && data.user.length == 0) {
        //create new User
        this.vanhileformservice.createUser(user).subscribe(data => {
          this.spinner.hide();
          if (!data.success) {
            this.flashmessage.show('לא קיים משתמש כזה אך קרה שגיאה שגיאה', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
          } else {
            this.flashmessage.show('נרשמת בהצלחה', { cssClass: 'alert-success', timeout: 3000 });
            localStorage.setItem('User', user.ID.toString());
            localStorage.setItem('tryNum', "1");
            //hide form
            this.showvnahileform.emit(false);
            return true;
          }
        });
      } else {
        if (data.user[0].Answers1.length == 0) {
          this.flashmessage.show('נרשמת בהצלחה', { cssClass: 'alert-success', timeout: 3000 });
          localStorage.setItem('User', user.ID.toString());
          localStorage.setItem('tryNum', "1");
          //hide form
          this.showvnahileform.emit(false);
          return true;
        } else
          if (data.user[0].Answers1.length > 0 && data.user[0].Answers2.length < 25 && data.user[0].correctAperdif1.length == 0) {
            this.flashmessage.show('היית באמצע השאלון (ניסיון 1) ויצאת, השאלון יתחיל מהתחלה!', { cssClass: 'alert-danger', timeout: 5000 });
            this.vanhileformservice.nullifyAnswers(user.ID, 1).subscribe(data => {
              if (data.success) {
                localStorage.setItem('User', data.student.ID.toString());
                localStorage.setItem('tryNum', "1");
                this.showvnahileform.emit(false);
              } else {
                this.flashmessage.show('שגיאה בהתחלת שאלון מחדש (ניסיון 1). אנא נסה שנית',{cssClass:'alert-danger',timeout:3000});
                return false;
              }
            })
            //return false;
          } else {
            if (data.user[0].Answers1.length == 25 && data.user[0].Answers2.length == 0) {
              this.vanhileformservice.updateGroupNumOfStudent(user.ID,user.groupNum).subscribe(data=>{
                if(data.success){
                  localStorage.setItem('User', user.ID.toString());
                  localStorage.setItem('tryNum', "2");
                   //hide form
                  this.showvnahileform.emit(false);
                  return true;
                }else{
                  this.flashmessage.show(data.msg,{cssClass:'alert-danger',timeout:3000});
                  return false;
                }
              })
              
             
              
            } else
              if (data.user[0].Answers2.length > 0 && data.user[0].Answers2.length < 25 && data.user[0].correctAperdif2.length == 0) {
                this.flashmessage.show('היית באמצע השאלון (ניסיון 2) ויצאת, השאלון יתחיל מהתחלה!', { cssClass: 'alert-danger', timeout: 5000 });
                this.vanhileformservice.nullifyAnswers(user.ID, 2).subscribe(data => {
                  if (data.success) {
                    localStorage.setItem('User', data.student.ID.toString());
                    localStorage.setItem('tryNum', "2");
                    this.showvnahileform.emit(false);
                  } else {
                    this.flashmessage.show('שגיאה בהתחלת שאלון מחדש (ניסיון 2). אנא נסה שנית',{cssClass:'alert-danger',timeout:3000});
                    return false;
                  }
                })
                //return false;
              }else{
                this.flashmessage.show('עשית את השאלון פעמיים, לא ניתן לבצע את השאלון שוב, אנא פנה למרצה',{cssClass:'alert-danger',timeout:3000});
                return false;
              }
          }
        // this.flashmessage.show('קיים משתמש עם ת.ז זהה', { cssClass: 'alert-danger', timeout: 3000 });
        // return false;
      }
    })


  }
}
