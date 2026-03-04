import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GroupsService } from '../services/groups.service';
import { InvitesService } from '../services/invites.service';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class GroupsComponent implements OnInit {
  groups: any[] = [];

  newGroup = { name: '', courseNum: null as any, groupNum: null as any };

  // Invite modal state
  activeGroupId: string = '';
  activeGroupName: string = '';
  inviteEmail: string = '';
  inviteRole: string = 'student';

  constructor(
    private groupsService: GroupsService,
    private invitesService: InvitesService,
    public authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadGroups();
  }

  loadGroups() {
    this.groupsService.getMyGroups().subscribe(res => {
      if (!res.success) this.toastr.error(res.msg);
      else this.groups = res.groups;
    });
  }

  createGroup() {
    if (!this.newGroup.name || this.newGroup.courseNum == null || this.newGroup.groupNum == null) {
      this.toastr.error('נא למלא את כל השדות');
      return;
    }
    this.groupsService.createGroup(this.newGroup).subscribe(res => {
      if (!res.success) this.toastr.error(res.msg);
      else {
        this.toastr.success('הקבוצה נוצרה בהצלחה');
        this.newGroup = { name: '', courseNum: null, groupNum: null };
        this.loadGroups();
      }
    });
  }

  deleteGroup(id: string) {
    if (!window.confirm('האם אתה בטוח שברצונך למחוק את הקבוצה?')) return;
    this.groupsService.deleteGroup(id).subscribe(res => {
      if (!res.success) this.toastr.error(res.msg);
      else {
        this.toastr.success('הקבוצה נמחקה');
        this.loadGroups();
      }
    });
  }

  openInviteModal(group: any) {
    this.activeGroupId = group._id;
    this.activeGroupName = group.name;
    this.inviteEmail = '';
    this.inviteRole = 'student';
  }

  sendInvite() {
    if (!this.inviteEmail) {
      this.toastr.error('נא להזין כתובת אימייל');
      return;
    }
    this.invitesService.sendEmailInvite({
      email: this.inviteEmail,
      groupId: this.activeGroupId,
      role: this.inviteRole
    }).subscribe(res => {
      if (!res.success) this.toastr.error(res.msg);
      else this.toastr.success('ההזמנה נשלחה בהצלחה');
    });
  }
}
