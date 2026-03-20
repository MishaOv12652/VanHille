import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink]
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  loading:  boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  login() {
    this.loading = true;
    const SiteUser = { username: this.username, password: this.password };
    this.auth.authUser(SiteUser).subscribe({
      next: data => {
        this.loading = false;
        if (data.success) {
          this.auth.storeUserData(data.token, data.siteUser.username);
          this.toastr.success('התחברת בהצלחה');
          this.router.navigate(['/profile']);
        } else {
          this.toastr.error(data.msg);
        }
      },
      error: () => {
        this.loading = false;
        this.toastr.error('שגיאת חיבור, נסה שוב');
      }
    });
  }
}
