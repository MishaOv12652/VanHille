import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'vanhilequiz',
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
    loadComponent: () => import('./vanhillequiz/report/student-report/student-report.component').then(m => m.StudentReportComponent)
  },
  {
    path: 'vanhille/classreport',
    loadComponent: () => import('./vanhillequiz/report/class-report/class-report.component').then(m => m.ClassReportComponent)
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
    loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
];
