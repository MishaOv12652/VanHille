import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteRegisterServiceService } from '../services/site-register-service.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { InvitesService } from '../services/invites.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class RegisterComponent implements OnInit {
  email: string = '';
  username: string = '';
  password: string = '';
  role: string = 'student';

  // Set when arriving from invite/join code flow
  inviteToken: string = '';
  roleLocked: boolean = false;

  constructor(
    private siteRegServ: SiteRegisterServiceService,
    private toastr: ToastrService,
    private auth: AuthService,
    private invitesService: InvitesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const token = this.route.snapshot.queryParamMap.get('token');
    const role = this.route.snapshot.queryParamMap.get('role');
    if (role) {
      this.role = role;
      this.roleLocked = true;
    }
    if (token) {
      this.inviteToken = token;
    }
  }

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
        if (this.inviteToken) {
          this.invitesService.markUsed(this.inviteToken).subscribe();
        }
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
