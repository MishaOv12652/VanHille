import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive]
})
export class NavbarComponent implements OnInit {
  sidebarOpen      = false;
  toolsOpen        = false;
  reportsOpen      = false;
  vhReportsOpen    = false;

  constructor(
    public auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {}

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar() {
    this.sidebarOpen = false;
    this.toolsOpen   = false;
    this.reportsOpen = false;
    this.vhReportsOpen = false;
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.sidebarOpen) this.closeSidebar();
  }

  onLogout() {
    this.auth.logout();
    this.toastr.warning('התנתקת');
    this.closeSidebar();
    this.router.navigate(['/login']);
    return false;
  }
}
