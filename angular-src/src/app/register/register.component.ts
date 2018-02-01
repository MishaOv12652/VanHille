import { Component, OnInit } from '@angular/core';
import { SiteRegisterServiceService } from "../services/site-register-service.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:String;
  username:String;
  password:String;

  constructor(
    private siteRegServ:SiteRegisterServiceService,
    private flashMsg:FlashMessagesService,
    private auth:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  register(){
    const SiteUser = {
      email:this.email,
      username:this.username,
      password:this.password
    }
    
    //requierd fields
    if(!this.siteRegServ.validateRegister(SiteUser)){
      this.flashMsg.show('אנא מלא את כל השדות!',{ cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }
    if(!this.siteRegServ.validateEmail(SiteUser.email)){
      this.flashMsg.show('הכנס מחדש את האימייל!',{ cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    //register Site User
    this.auth.registerSiteUser(SiteUser).subscribe(data=>{
      if(data.success){
        this.flashMsg.show('נרשמתה בהצלחה',{ cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
      }else{
        this.flashMsg.show('לא נרשמתה בהצלחה',{ cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/register']);
      }
    })
  }
}
