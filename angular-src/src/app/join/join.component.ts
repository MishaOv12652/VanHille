import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InvitesService } from '../services/invites.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class JoinComponent implements OnInit {
  state: 'loading' | 'code-entry' | 'info' | 'error' = 'code-entry';
  errorMsg: string = '';

  // Resolved group info
  groupName: string = '';
  courseNum: number | null = null;
  groupNum: number | null = null;
  role: string = '';
  token: string = '';

  joinCode: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private invitesService: InvitesService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    const token = this.route.snapshot.queryParamMap.get('token');
    if (token) {
      this.token = token;
      this.state = 'loading';
      this.invitesService.validateToken(token).subscribe(res => {
        if (!res.success) {
          this.state = 'error';
          this.errorMsg = res.msg;
        } else {
          this.groupName = res.group.name;
          this.courseNum = res.group.courseNum;
          this.groupNum = res.group.groupNum;
          this.role = res.role;
          this.state = 'info';
        }
      });
    }
  }

  submitCode() {
    if (!this.joinCode.trim()) {
      this.toastr.error('נא להזין קוד הצטרפות');
      return;
    }
    this.invitesService.joinByCode(this.joinCode.trim()).subscribe(res => {
      if (!res.success) {
        this.toastr.error(res.msg);
      } else {
        this.groupName = res.group.name;
        this.courseNum = res.group.courseNum;
        this.groupNum = res.group.groupNum;
        this.role = res.role;
        this.token = '';
        this.state = 'info';
      }
    });
  }

  proceedToRegister() {
    const extras: any = {
      queryParams: { role: this.role }
    };
    if (this.token) extras.queryParams.token = this.token;
    this.router.navigate(['/register'], extras);
  }
}
