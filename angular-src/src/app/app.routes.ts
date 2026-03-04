import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'vanhilequiz',
    canActivate: [roleGuard],
    data: { roles: ['student'] },
    loadComponent: () => import('./vanhillequiz/vanhillequiz.component').then(m => m.VanhillequizComponent)
  },
  {
    path: 'literature',
    loadComponent: () => import('./literature/literature.component').then(m => m.LiteratureComponent)
  },
  {
    path: 'cloudlinks',
    loadComponent: () => import('./cloudlinks/cloudlinks.component').then(m => m.CloudlinksComponent)
  },
  {
    path: 'vanhille/studentreport',
    canActivate: [authGuard],
    loadComponent: () => import('./vanhillequiz/report/student-report/student-report.component').then(m => m.StudentReportComponent)
  },
  {
    path: 'vanhille/classreport',
    canActivate: [roleGuard],
    data: { roles: ['student', 'educator', 'admin'] },
    loadComponent: () => import('./vanhillequiz/report/class-report/class-report.component').then(m => m.ClassReportComponent)
  },
  {
    path: 'groups',
    canActivate: [roleGuard],
    data: { roles: ['educator', 'admin'] },
    loadComponent: () => import('./groups/groups.component').then(m => m.GroupsComponent)
  },
  {
    path: 'join',
    loadComponent: () => import('./join/join.component').then(m => m.JoinComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
];
