import { Component, OnInit } from '@angular/core';
import { SiteRegisterServiceService } from "../services/site-register-service.service";
import { ToastrService } from "ngx-toastr";
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
    private toastr:ToastrService,
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
      this.toastr.error('אנא מלא את כל השדות!');
      return false;
    }
    if(!this.siteRegServ.validateEmail(SiteUser.email)){
      this.toastr.error('הכנס מחדש את האימייל!');
      return false;
    }

    //register Site User
    this.auth.registerSiteUser(SiteUser).subscribe(data=>{
      if(data.success){
        this.toastr.success('נרשמתה בהצלחה');
        this.router.navigate(['/login']);
      }else{
        this.toastr.error('לא נרשמתה בהצלחה');
        this.router.navigate(['/register']);
      }
    })
  }
}
