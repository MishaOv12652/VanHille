import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

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
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DpDatePickerModule} from 'ng2-date-picker';
import { CountdownModule } from 'ngx-countdown';
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
import { CustomEditorComponent } from './cloudlinks/custom-editor/custom-editor.component';
import { PastPresentReportComponent } from './vanhillequiz/report/class-report/past-present-report/past-present-report.component';
import { CalcReportComponent } from './vanhillequiz/report/class-report/calc-report/calc-report.component';
import { BarViewComponent } from './vanhillequiz/report/class-report/past-present-report/bar-view/bar-view.component';
import { RadarViewComponent } from './vanhillequiz/report/class-report/past-present-report/radar-view/radar-view.component';

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

];
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
    CustomEditorComponent,
    PastPresentReportComponent,
    CalcReportComponent,
    BarViewComponent,
    RadarViewComponent,
  ],
  entryComponents: [CustomEditorComponent],
  imports: [
    BrowserModule,
    FlashMessagesModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    ChartsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    Ng2SmartTableModule,
    NgbModule.forRoot(),
    DpDatePickerModule,
    CountdownModule

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
