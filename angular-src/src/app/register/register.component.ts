import { Component, OnInit } from '@angular/core';
import { SiteRegisterServiceService } from '../services/site-register-service.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class RegisterComponent implements OnInit {
  email: string = '';
  username: string = '';
  password: string = '';
  role: string = 'student';

  constructor(
    private siteRegServ: SiteRegisterServiceService,
    private toastr: ToastrService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  register() {
    const SiteUser = { email: this.email, username: this.username, password: this.password, role: this.role };

    if (!this.siteRegServ.validateRegister(SiteUser)) {
      this.toastr.error('אנא מלא את כל השדות!');
      return false;
    }
    if (!this.siteRegServ.validateEmail(SiteUser.email)) {
      this.toastr.error('הכנס מחדש את האימייל!');
      return false;
    }

    this.auth.registerSiteUser(SiteUser).subscribe(data => {
      if (data.success) {
        this.toastr.success('נרשמתה בהצלחה');
        this.router.navigate(['/login']);
      } else {
        this.toastr.error('לא נרשמתה בהצלחה');
        this.router.navigate(['/register']);
      }
    });
    return true;
  }
}
