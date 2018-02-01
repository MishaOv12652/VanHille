import { Component, OnInit } from '@angular/core';
import {AuthService  } from "../services/auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:String;
  password:String;
  constructor(private auth:AuthService,
    private router:Router,
    private flashMSG:FlashMessagesService) { }

  ngOnInit() {
  }

  login(){
    const SiteUser = {
      username:this.username,
      password:this.password
    }
    this.auth.authUser(SiteUser).subscribe(data=>{
      if(data.success){
        //console.log(data.siteUser)
        this.auth.storeUserData(data.token,data.siteUser.username);
        this.flashMSG.show('התחברת בהצלחה',{cssClass:'alert-success',timeout:3000});
        this.router.navigate(['/profile']);

      }else{
        this.flashMSG.show(data.msg,{cssClass:'alert-danger',timeout:3000});
        this.router.navigate(['/login']);
      }
    })

  }
}
