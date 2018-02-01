import { Component, OnInit } from '@angular/core';
import {AuthService  } from "../services/auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  SiteUser:any = localStorage.getItem('admin');
  constructor(
    private auth:AuthService,
    private flashMSG:FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onLogout(){
    this.auth.logout();
    this.flashMSG.show('התנתקת',{cssClass:'alert-danger',timeout:3000});
    this.router.navigate(['/login']);
    return false;
  }
}
