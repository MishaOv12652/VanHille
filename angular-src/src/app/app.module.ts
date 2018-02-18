import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {DatepickerModule} from "ngx-date-picker";
import {DateTimePickerModule} from 'ngx-datetime-picker';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
//components
import {AppComponent} from './app.component';
import {CloudlinksComponent} from './cloudlinks/cloudlinks.component';
import {EdulitComponent} from './edulit/edulit.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ReslitComponent} from './reslit/reslit.component';
import {VanhillequizComponent} from './vanhillequiz/vanhillequiz.component';
import {QuestionsComponent} from './vanhillequiz/questions/questions.component';
import {VanhileformComponent} from './vanhillequiz/vanhileform/vanhileform.component';
import {ReportComponent} from './vanhillequiz/report/report.component';
//external modules
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {FlashMessagesModule} from "angular2-flash-messages";
import {Ng2SmartTableModule} from 'ng2-smart-table';


//services
import {QuestionsserviceService} from "./services/questionsservice.service";
import {VanhileformService} from "./services/vanhileform.service";
import {VanhilereportService} from "./services/vanhilereport.service";
import {AuthService} from "./services/auth.service";
import {SiteRegisterServiceService} from "./services/site-register-service.service";
import {CloudlinksService} from "./services/cloudlinks.service"
import {StudentReportComponent} from './vanhillequiz/report/student-report/student-report.component';
import {ClassReportComponent} from './vanhillequiz/report/class-report/class-report.component';
import {TimerComponent} from './vanhillequiz/timer/timer.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'vanhilequiz', component: VanhillequizComponent},
  {path: 'reslit', component: ReslitComponent},
  {path: 'edulit', component: EdulitComponent},
  {path: 'cloudlinks', component: CloudlinksComponent},
  {path: 'vanhille/studentreport', component: StudentReportComponent},
  {path: 'vanhille/classreport', component: ClassReportComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'dashboard', component: DashboardComponent}
  // ,{path:'vanhileregister',component:VanhileformComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    CloudlinksComponent,
    EdulitComponent,
    HomeComponent,
    NavbarComponent,
    ReslitComponent,
    VanhillequizComponent,
    QuestionsComponent,
    VanhileformComponent,
    ReportComponent,
    StudentReportComponent,
    ClassReportComponent,
    TimerComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FlashMessagesModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    DatepickerModule,
    DateTimePickerModule,
    FlashMessagesModule,
    ChartsModule,
    Ng4LoadingSpinnerModule,
    Ng2SmartTableModule


  ],
  providers: [
    QuestionsserviceService,
    VanhileformService,
    VanhilereportService,
    AuthService,
    SiteRegisterServiceService,
    CloudlinksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
