import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class NavbarComponent implements OnInit {
  constructor(
    public auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {}

  onLogout() {
    this.auth.logout();
    this.toastr.warning('התנתקת');
    this.router.navigate(['/login']);
    return false;
  }
}
