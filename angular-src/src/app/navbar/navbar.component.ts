import { Component, OnInit } from '@angular/core';
import {AuthService  } from "../services/auth.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  SiteUser:any = localStorage.getItem('admin');
  constructor(
    private auth:AuthService,
    private toastr:ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onLogout(){
    this.auth.logout();
    this.toastr.info('התנתקת');
    this.router.navigate(['/login']);
    return false;
  }
}
