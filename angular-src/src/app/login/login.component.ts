import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  login() {
    const SiteUser = { username: this.username, password: this.password };
    this.auth.authUser(SiteUser).subscribe(data => {
      if (data.success) {
        this.auth.storeUserData(data.token, data.siteUser.username, data.siteUser.role);
        this.toastr.success('התחברת בהצלחה');
        this.router.navigate(['/profile']);
      } else {
        this.toastr.error(data.msg);
        this.router.navigate(['/login']);
      }
    });
  }
}
