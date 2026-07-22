import { Component, OnInit } from '@angular/core';
import {AuthService  } from "../services/auth.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

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
    private toastr:ToastrService) { }

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
        this.toastr.success('התחברת בהצלחה');
        this.router.navigate(['/profile']);

      }else{
        this.toastr.error(data.msg);
        this.router.navigate(['/login']);
      }
    })

  }
}
