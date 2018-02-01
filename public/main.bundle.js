webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin{\r\n    margin-top: 50px;\r\n}\r\n.backimg{\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/background.jpg") + ");\r\n    background-repeat: no-repeat;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- The content below is only a placeholder and can be replaced.\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{title}}!\r\n  </h1>\r\n  <img width=\"300\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\r\n  </li>\r\n</ul>\r\n -->\r\n\r\n \r\n<app-navbar></app-navbar>\r\n<!-- <app-vanhilequiz></app-vanhilequiz> -->\r\n<div class=\"container margin\">\r\n    <flash-messages></flash-messages>\r\n    <router-outlet></router-outlet>\r\n    <app-spinner></app-spinner>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_date_picker__ = __webpack_require__("../../../../ngx-date-picker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_datetime_picker__ = __webpack_require__("../../../../ngx-datetime-picker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cloudlinks_cloudlinks_component__ = __webpack_require__("../../../../../src/app/cloudlinks/cloudlinks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__edulit_edulit_component__ = __webpack_require__("../../../../../src/app/edulit/edulit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__reslit_reslit_component__ = __webpack_require__("../../../../../src/app/reslit/reslit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__vanhillequiz_vanhillequiz_component__ = __webpack_require__("../../../../../src/app/vanhillequiz/vanhillequiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__vanhillequiz_questions_questions_component__ = __webpack_require__("../../../../../src/app/vanhillequiz/questions/questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__vanhillequiz_vanhileform_vanhileform_component__ = __webpack_require__("../../../../../src/app/vanhillequiz/vanhileform/vanhileform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__vanhillequiz_report_report_component__ = __webpack_require__("../../../../../src/app/vanhillequiz/report/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_questionsservice_service__ = __webpack_require__("../../../../../src/app/services/questionsservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_vanhileform_service__ = __webpack_require__("../../../../../src/app/services/vanhileform.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_vanhilereport_service__ = __webpack_require__("../../../../../src/app/services/vanhilereport.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_site_register_service_service__ = __webpack_require__("../../../../../src/app/services/site-register-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__vanhillequiz_report_student_report_student_report_component__ = __webpack_require__("../../../../../src/app/vanhillequiz/report/student-report/student-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__vanhillequiz_report_class_report_class_report_component__ = __webpack_require__("../../../../../src/app/vanhillequiz/report/class-report/class-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__vanhillequiz_timer_timer_component__ = __webpack_require__("../../../../../src/app/vanhillequiz/timer/timer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//components










//external modules


//services












var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */] },
    { path: 'vanhilequiz', component: __WEBPACK_IMPORTED_MODULE_14__vanhillequiz_vanhillequiz_component__["a" /* VanhillequizComponent */] },
    { path: 'reslit', component: __WEBPACK_IMPORTED_MODULE_13__reslit_reslit_component__["a" /* ReslitComponent */] },
    { path: 'edulit', component: __WEBPACK_IMPORTED_MODULE_10__edulit_edulit_component__["a" /* EdulitComponent */] },
    { path: 'cloudlinks', component: __WEBPACK_IMPORTED_MODULE_9__cloudlinks_cloudlinks_component__["a" /* CloudlinksComponent */] },
    { path: 'vanhille/studentreport', component: __WEBPACK_IMPORTED_MODULE_25__vanhillequiz_report_student_report_student_report_component__["a" /* StudentReportComponent */] },
    { path: 'vanhille/classreport', component: __WEBPACK_IMPORTED_MODULE_26__vanhillequiz_report_class_report_class_report_component__["a" /* ClassReportComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_28__register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_29__login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_30__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_31__dashboard_dashboard_component__["a" /* DashboardComponent */] }
    // ,{path:'vanhileregister',component:VanhileformComponent}
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__cloudlinks_cloudlinks_component__["a" /* CloudlinksComponent */],
            __WEBPACK_IMPORTED_MODULE_10__edulit_edulit_component__["a" /* EdulitComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__reslit_reslit_component__["a" /* ReslitComponent */],
            __WEBPACK_IMPORTED_MODULE_14__vanhillequiz_vanhillequiz_component__["a" /* VanhillequizComponent */],
            __WEBPACK_IMPORTED_MODULE_15__vanhillequiz_questions_questions_component__["a" /* QuestionsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__vanhillequiz_vanhileform_vanhileform_component__["a" /* VanhileformComponent */],
            __WEBPACK_IMPORTED_MODULE_17__vanhillequiz_report_report_component__["a" /* ReportComponent */],
            __WEBPACK_IMPORTED_MODULE_25__vanhillequiz_report_student_report_student_report_component__["a" /* StudentReportComponent */],
            __WEBPACK_IMPORTED_MODULE_26__vanhillequiz_report_class_report_class_report_component__["a" /* ClassReportComponent */],
            __WEBPACK_IMPORTED_MODULE_27__vanhillequiz_timer_timer_component__["a" /* TimerComponent */],
            __WEBPACK_IMPORTED_MODULE_28__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_29__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_30__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_31__dashboard_dashboard_component__["a" /* DashboardComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5_ngx_date_picker__["a" /* DatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_datetime_picker__["a" /* DateTimePickerModule */],
            __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_18_ng2_charts_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__["a" /* Ng4LoadingSpinnerModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__services_questionsservice_service__["a" /* QuestionsserviceService */],
            __WEBPACK_IMPORTED_MODULE_21__services_vanhileform_service__["a" /* VanhileformService */],
            __WEBPACK_IMPORTED_MODULE_22__services_vanhilereport_service__["a" /* VanhilereportService */],
            __WEBPACK_IMPORTED_MODULE_23__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_24__services_site_register_service_service__["a" /* SiteRegisterServiceService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/cloudlinks/cloudlinks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin{\r\n    margin-top: 50px;\r\n    margin-right: 245px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cloudlinks/cloudlinks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center margin\">\r\n  <p dir=\"rtl\">\r\n  קישורים לענן יגיעו בהמשך!\r\n</p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/cloudlinks/cloudlinks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloudlinksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CloudlinksComponent = (function () {
    function CloudlinksComponent() {
    }
    CloudlinksComponent.prototype.ngOnInit = function () {
    };
    return CloudlinksComponent;
}());
CloudlinksComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cloudlinks',
        template: __webpack_require__("../../../../../src/app/cloudlinks/cloudlinks.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cloudlinks/cloudlinks.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CloudlinksComponent);

//# sourceMappingURL=cloudlinks.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dashboard works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/edulit/edulit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin{\r\n    margin-top: 50px;\r\n    margin-right: 245px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edulit/edulit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center margin\">\r\n  <p dir=\"rtl\"> \r\n    ספרות לימודית תגיע בהמשך!\r\n</p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/edulit/edulit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdulitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EdulitComponent = (function () {
    function EdulitComponent() {
    }
    EdulitComponent.prototype.ngOnInit = function () {
    };
    return EdulitComponent;
}());
EdulitComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edulit',
        template: __webpack_require__("../../../../../src/app/edulit/edulit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edulit/edulit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EdulitComponent);

//# sourceMappingURL=edulit.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin{\r\n    margin-top: 50px;\r\n    margin-right: 245px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center margin\">\r\n  <h1>מתמטיקה - למידה ומחקר</h1>\r\n  <p>\r\n    ברוכים הבאים לאתר מתמטיקה - למידה ומחקר \r\n  </p>\r\n  <p>לימינכם אופציות הקיימות</p>\r\n</div>\r\n\r\n<div class=\"row\" style=\"margin-right: 50px ; color:white\">\r\n  <div class=\"col-md-4\">\r\n    <h3>כותרת 1</h3>\r\n    <p>Proident est excepteur esse non voluptate do anim est. Velit do amet laborum ea consequat nulla. Proident quis aliqua\r\n      laborum laboris elit enim consectetur nisi ad. Reprehenderit in proident eiusmod consequat et labore.</p>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n      <h3>כותרת 2</h3>\r\n    <p>Proident est excepteur esse non voluptate do anim est. Velit do amet laborum ea consequat nulla. Proident quis aliqua\r\n      laborum laboris elit enim consectetur nisi ad. Reprehenderit in proident eiusmod consequat et labore.</p>\r\n  </div>\r\n  <div class=\"col-md-2\">\r\n      <h3>כותרת 3</h3>\r\n    <p>Proident est excepteur esse non voluptate do anim est. Velit do amet laborum ea consequat nulla. Proident quis aliqua\r\n      laborum laboris elit enim consectetur nisi ad. Reprehenderit in proident eiusmod consequat et labore.</p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10\" style=\"text-align: center;color: white\">\r\n    <h2 class=\"page-header\">טופס כניסה</h2>\r\n  </div>\r\n  <form (submit)=\"login()\" style=\"color:white\">\r\n    <!-- <div class=\"form-group col-md-10 col-md-pull-0\" dir=\"rtl\">\r\n      <label for=\"\">אימייל</label>\r\n      <input type=\"email\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" placeholder=\"הכנס אימייל\">\r\n    </div> -->\r\n    <div class=\"form-group col-md-10 col-md-pull-0\" dir=\"rtl\">\r\n      <label for=\"\">שם משתמש</label>\r\n      <input type=\"text\" name=\"username\" [(ngModel)]=\"username\" class=\"form-control\" placeholder=\"הכנס שם משתמש\">\r\n    </div>\r\n    <div class=\"form-group col-md-10 col-md-pull-0\" dir=\"rtl\">\r\n      <label for=\"\">סיסמא</label>\r\n      <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"הכנס סיסמא\">\r\n    </div>\r\n    <div class=\"form-group col-md-10 col-md-pull-0\">\r\n      <button type=\"submit\" class=\"btn btn-primary btn-lg\">התחבר</button>\r\n    </div>\r\n  </form>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(auth, router, flashMSG) {
        this.auth = auth;
        this.router = router;
        this.flashMSG = flashMSG;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var SiteUser = {
            username: this.username,
            password: this.password
        };
        this.auth.authUser(SiteUser).subscribe(function (data) {
            if (data.success) {
                //console.log(data.siteUser)
                _this.auth.storeUserData(data.token, data.siteUser.username);
                _this.flashMSG.show('התחברת בהצלחה', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/profile']);
            }
            else {
                _this.flashMSG.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\r\n * Start Bootstrap - SB Admin (http://startbootstrap.com/)\r\n * Copyright 2013-2016 Start Bootstrap\r\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)\r\n */\r\n\r\n/* Global Styles */\r\n\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n/* @media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n} */\r\n\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 215px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n@media (min-width: 768px){\r\n  #wrapper {padding-right: 200px; padding-left: 0;}\r\n  .side-nav{right: 0;left: auto;}\r\n}\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n    \r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n.side-nav>li>ul>li>a>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <!-- Navigation -->\r\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header pull-right\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Math</a>\r\n    </div>\r\n    <div>\r\n      <ul class=\"nav navbar-nav navbar-left top-nav\">\r\n        <!-- <li *ngIf=\"!auth.loggedIn()\">\r\n          <a [routerLink]=\"['register']\"><i class=\"fa fa-fw fa-dashboard\"></i>רישום</a>\r\n        </li> -->\r\n        <li *ngIf=\"!auth.loggedIn()\">\r\n          <a [routerLink]=\"['login']\"><i class=\"fa fa-fw fa-dashboard\"></i>כניסה</a>\r\n        </li>\r\n        <li *ngIf=\"auth.loggedIn()\">\r\n          <a (click)=\"onLogout()\" href=\"#\"><i class=\"fa fa-fw fa-dashboard\"></i>התנתק</a>\r\n        </li>\r\n        <li *ngIf=\"auth.loggedIn()\">\r\n          <a [routerLink]=\"['profile']\"><i class=\"fa fa-fw fa-dashboard\"></i>פרופיל</a>\r\n        </li>\r\n        <li *ngIf=\"auth.loggedIn()\">\r\n          <a [routerLink]=\"['dashboard']\"><i class=\"fa fa-fw fa-dashboard\"></i>לוח עבודה</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->\r\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\" dir=\"rtl\">\r\n      <ul class=\"nav navbar-nav side-nav pull-right\">\r\n        <li>\r\n          <a [routerLink]=\"['cloudlinks']\"><i class=\"fa fa-fw fa-dashboard\"></i>קישורים לענן</a>\r\n        </li>\r\n        <li>\r\n          <a [routerLink]=\"['reslit']\"><i class=\"fa fa-fw fa-bar-chart-o\"></i>ספרות מחקרית</a>\r\n        </li>\r\n        <li>\r\n          <a [routerLink]=\"['edulit']\"><i class=\"fa fa-fw fa-table\"></i>ספרות לימודית</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"javascript:;\" data-toggle=\"collapse\" data-target=\"#demo\"><i class=\"fa fa-fw fa-arrows-v\"></i>כלים פדגוגיים<i class=\"fa fa-fw fa-caret-down\"></i></a>\r\n          <ul id=\"demo\" class=\"collapse\">\r\n            <li>\r\n              <a [routerLink]=\"['vanhilequiz']\">שאלון ואן הילה</a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li *ngIf=\"auth.loggedIn()\">\r\n          <a href=\"javascript:;\" data-toggle=\"collapse\" data-target=\"#repo\"><i class=\"fa fa-fw fa-arrows-v\"></i>דו\"חות<i class=\"fa fa-fw fa-caret-down\"></i></a>\r\n          <ul id=\"repo\" class=\"collapse\">\r\n            <li>\r\n              <a href=\"javascript:;\" data-toggle=\"collapse\" data-target=\"#VanHilleRepo\"><i class=\"fa fa-fw fa-arrows-v\"></i>דו\"חות ואן הילה<i class=\"fa fa-fw fa-caret-down\"></i></a>\r\n              <ul id=\"VanHilleRepo\" class=\"collapse\">\r\n                <li>\r\n                  <a [routerLink]=\"['vanhille/studentreport']\">דו\"ח לסטודנט</a>\r\n                </li>\r\n                <li>\r\n                  <a [routerLink]=\"['vanhille/classreport']\">דו\"ח כללי</a>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n\r\n      </ul>\r\n    </div>\r\n    <!-- /.navbar-collapse -->\r\n  </nav>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(auth, flashMSG, router) {
        this.auth = auth;
        this.flashMSG = flashMSG;
        this.router = router;
        this.SiteUser = localStorage.getItem('admin');
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogout = function () {
        this.auth.logout();
        this.flashMSG.show('התנתקת', { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\" class=\"col-md-10\">\r\n  <h2 class=\"page-header\" style=\"text-align: center;color: white\">\r\n    {{user.username}}\r\n  </h2>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\">\r\n       UserName: {{user.username}}\r\n    </li>\r\n    <li class=\"list-group-item\">\r\n        Email: {{user.email}} \r\n    </li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10\" style=\"text-align: center;color: white\">\r\n    <h2 class=\"page-header\">טופס רישום</h2>\r\n  </div>\r\n  <form (submit)=\"register()\" style=\"color:white\">\r\n    <div class=\"form-group col-md-10 col-md-pull-0\" dir=\"rtl\">\r\n      <label for=\"\">אימייל</label>\r\n      <input type=\"email\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" placeholder=\"הכנס אימייל\">\r\n    </div>\r\n    <div class=\"form-group col-md-10 col-md-pull-0\" dir=\"rtl\">\r\n      <label for=\"\">שם משתמש</label>\r\n      <input type=\"text\" name=\"username\" [(ngModel)]=\"username\" class=\"form-control\" placeholder=\"הכנס שם משתמש\">\r\n  \r\n    </div>\r\n    <div class=\"form-group col-md-10 col-md-pull-0\" dir=\"rtl\">\r\n      <label for=\"\">סיסמא</label>\r\n      <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"הכנס סיסמא\">\r\n    </div>\r\n    <div class=\"form-group col-md-10 col-md-pull-0\">\r\n      <button type=\"submit\" class=\"btn btn-primary btn-lg\">הרשם</button>\r\n    </div>\r\n  </form>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_site_register_service_service__ = __webpack_require__("../../../../../src/app/services/site-register-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(siteRegServ, flashMsg, auth, router) {
        this.siteRegServ = siteRegServ;
        this.flashMsg = flashMsg;
        this.auth = auth;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var SiteUser = {
            email: this.email,
            username: this.username,
            password: this.password
        };
        //requierd fields
        if (!this.siteRegServ.validateRegister(SiteUser)) {
            this.flashMsg.show('אנא מלא את כל השדות!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.siteRegServ.validateEmail(SiteUser.email)) {
            this.flashMsg.show('הכנס מחדש את האימייל!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //register Site User
        this.auth.registerSiteUser(SiteUser).subscribe(function (data) {
            if (data.success) {
                _this.flashMsg.show('נרשמתה בהצלחה', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMsg.show('לא נרשמתה בהצלחה', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_site_register_service_service__["a" /* SiteRegisterServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_site_register_service_service__["a" /* SiteRegisterServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/reslit/reslit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin{\r\n    margin-top: 50px;\r\n    margin-right: 245px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reslit/reslit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center margin\">\r\n  <p dir=\"rtl\">\r\n    ספרות מחקרית תגיע במשך!\r\n  </p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/reslit/reslit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReslitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReslitComponent = (function () {
    function ReslitComponent() {
    }
    ReslitComponent.prototype.ngOnInit = function () {
    };
    return ReslitComponent;
}());
ReslitComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reslit',
        template: __webpack_require__("../../../../../src/app/reslit/reslit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/reslit/reslit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ReslitComponent);

//# sourceMappingURL=reslit.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerSiteUser = function (SiteUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:3050/User/register', SiteUser, { headers: headers })
        //  .map(res => res.json());
        return this.http.post('User/register', SiteUser, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authUser = function (SiteUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3050/User/auth', SiteUser, { headers: headers })
        //   .map(res => res.json());
        return this.http.post('User/auth', SiteUser, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        // return this.http.get('http://localhost:3050/User/profile', { headers: headers })
        //   .map(res => res.json());
        return this.http.get('User/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // getReports() {
    //   let headers = new Headers();
    //   this.loadToken();
    //   headers.append('Authorization',this.authToken);
    //   headers.append('Content-Type', 'application/json');
    //   return this.http.get('http://localhost:3050/User/report', { headers: headers })
    //     .map(res => res.json());
    //     // return this.http.get('User/report', { headers: headers })
    //     // .map(res => res.json());
    // }
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('admin', JSON.stringify(user));
        //console.log(JSON.stringify(user))
        this.authToken = token;
        this.SiteUser = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        //console.log("logged: " + tokenNotExpired());
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.SiteUser = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/questionsservice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsserviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionsserviceService = (function () {
    function QuestionsserviceService(http) {
        this.http = http;
    }
    QuestionsserviceService.prototype.getUser = function (ID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.get('http://localhost:3050/VHS/'+ID,{headers:headers}).map(res=>res.json());
        return this.http.get('VHS/' + ID, { headers: headers }).map(function (res) { return res.json(); });
    };
    QuestionsserviceService.prototype.getAllQuestions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:3050/VanHilleQuiz/questions',{headers:headers}).map(res=>res.json());
        return this.http.get('VanHilleQuiz/questions', { headers: headers }).map(function (res) { return res.json(); });
    };
    QuestionsserviceService.prototype.saveCorrectAnsPerDiff = function (id, arr, tryNum) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:3050/VHS/calc/' + tryNum  +  '/' + id  +  '/' + arr ,{headers:headers}).map(res=>res.json());
        return this.http.post('/VHS/calc/' + tryNum + '/' + id + '/' + arr, { headers: headers }).map(function (res) { return res.json(); });
    };
    QuestionsserviceService.prototype.getNextQuestion = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:3050/VanHilleQuiz/'+id,{headers:headers})
        //  .map(res=>res.json());
        return this.http.get('VanHilleQuiz/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    QuestionsserviceService.prototype.saveUserAnswer = function (id, ansNum, qnumber, tryNum) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.put('http://localhost:3050/VHS/'+id+'/'+ansNum + '/' + qnumber + '/' + tryNum,{headers:headers})
        //   .map(res=>res.json());
        return this.http.put('VHS/' + id + '/' + ansNum + '/' + qnumber + '/' + tryNum, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    QuestionsserviceService.prototype.calcUser = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3050/VHS/calc/'+id,{headers:headers})
        //   .map(res=>res.json());
        return this.http.post('VHS/calc/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return QuestionsserviceService;
}());
QuestionsserviceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], QuestionsserviceService);

var _a;
//# sourceMappingURL=questionsservice.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/site-register-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteRegisterServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteRegisterServiceService = (function () {
    function SiteRegisterServiceService() {
    }
    SiteRegisterServiceService.prototype.validateRegister = function (SiteUser) {
        if (SiteUser.username == undefined || SiteUser.email == undefined || SiteUser.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    SiteRegisterServiceService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return SiteRegisterServiceService;
}());
SiteRegisterServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SiteRegisterServiceService);

//# sourceMappingURL=site-register-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/vanhileform.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VanhileformService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VanhileformService = (function () {
    function VanhileformService(http) {
        this.http = http;
    }
    VanhileformService.prototype.validateForm = function (user) {
        if (user.courseNum == undefined || user.groupNum == undefined || user.ID == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    VanhileformService.prototype.validateID = function (ID) {
        if (ID.toString().length >= 8 && ID.toString().length <= 9)
            return true;
        else
            return false;
    };
    VanhileformService.prototype.getUser = function (ID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:3050/VHS/'+ID,{headers:headers}).map(res=>res.json());
        return this.http.get('VHS/' + ID, { headers: headers }).map(function (res) { return res.json(); });
    };
    VanhileformService.prototype.createUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3050/VHS/register',user,{headers:headers})
        //   .map(res=>res.json());
        return this.http.post('VHS/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    VanhileformService.prototype.nullifyAnswers = function (id, tryNum) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3050/VHS/nullifyAnswers/' + id + '/' + tryNum,{headers:headers})
        // .map(res=>res.json());
        return this.http.post('/VHS/nullifyAnswers/' + id + '/' + tryNum, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    VanhileformService.prototype.updateGroupNumOfStudent = function (id, groupNum) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3050/VHS/updateGroupNum/' + id + '/' + groupNum,{headers:headers})
        // .map(res=>res.json());
        return this.http.post('/VHS/updateGroupNum/' + id + '/' + groupNum, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return VanhileformService;
}());
VanhileformService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], VanhileformService);

var _a;
//# sourceMappingURL=vanhileform.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/vanhilereport.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VanhilereportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VanhilereportService = (function () {
    function VanhilereportService(http) {
        this.http = http;
    }
    VanhilereportService.prototype.getUsersLast3Hours = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3050/VHS/', { headers: headers })
            .map(function (res) { return res.json(); });
        // return this.http.get('VHS/',{headers:headers})
        // .map(res=>res.json());
    };
    VanhilereportService.prototype.getUser = function (ID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:3050/VHS/'+ID,{headers:headers}).map(res=>res.json());
        return this.http.get('VHS/' + ID, { headers: headers }).map(function (res) { return res.json(); });
    };
    VanhilereportService.prototype.getAllQuestions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:3050/VanHilleQuiz/questions',{headers:headers}).map(res=>res.json());
        return this.http.get('VanHilleQuiz/questions', { headers: headers }).map(function (res) { return res.json(); });
    };
    VanhilereportService.prototype.createAllResults = function (tryNum) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3050/VanHilleQuiz/calcAll/' +tryNum ,{headers:headers})
        // .map(res=>res.json());
        return this.http.post('VanHilleQuiz/calcAll/' + tryNum, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    VanhilereportService.prototype.getAllQuizesDoneInTheLastSemeter = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.get('http://localhost:3050/VanHilleQuiz/studentSemester/get',{headers:headers})
        // .map(res=>res.json());
        return this.http.get('VanHilleQuiz/studentSemester/get', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    VanhilereportService.prototype.getQuizesByGroupAndCourse = function (cNum, gNum) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.get('http://localhost:3050/VanHilleQuiz/studentSemester/' + cNum + '/' + gNum,{headers:headers})
        // .map(res=>res.json());
        return this.http.get('VanHilleQuiz/studentSemester/' + cNum + '/' + gNum, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    VanhilereportService.prototype.getQuizByCourseNum = function (cNum) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.get('http://localhost:3050/VanHilleQuiz/quizByCnum/' + cNum,{headers:headers})
        // .map(res=>res.json());
        return this.http.get('VanHilleQuiz/quizByCnum/' + cNum, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    VanhilereportService.prototype.getStudentsBetweenDates = function (sDate, fDate) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.get('http://localhost:3050/VHS/students/' + sDate + '/' + fDate,{headers:headers})
        // .map(res=>res.json());
        return this.http.get('/VHS/students/' + sDate + '/' + fDate, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return VanhilereportService;
}());
VanhilereportService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], VanhilereportService);

var _a;
//# sourceMappingURL=vanhilereport.service.js.map

/***/ }),

/***/ "../../../../../src/app/vanhillequiz/questions/questions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.margin{\r\n\tmargin-top: 50px;\r\n\tmargin-right:115px; \r\n}\r\n.header{\r\n    text-decoration: underline;\r\n    text-align: center;\r\n\tmargin-right: 150px;\r\n\tcolor: white;\r\n}\r\nh3{\r\n\tcolor: white;\r\n}\r\nsection { clear: both; margin: 0 80px; }\r\n\r\nlabel {   width: 100%;/* SET BTN WIDTH */ border-radius: 3px; border: 1px solid #D1D3D4; color: white }\r\n\r\n/* HIDE <input> */\r\ninput.radio:empty { display: none }\r\n\r\n/* CUSTOM LABEL */\r\ninput.radio:empty ~ label {\r\n position: relative;\r\n float: left;\r\n font-size: 15px;\r\n line-height: 2.5em;\r\n text-indent: 1.25em;\r\n margin-top: 1em;\r\n cursor: pointer;\r\n -webkit-user-select: none;\r\n -moz-user-select: none;\r\n -ms-user-select: none;\r\n user-select: none;\r\n background-color: #1A948E;\r\n color: white;\r\n /* width: 1000px; */\r\n}\r\n\r\n/* Label, not hovered or checked */\r\ninput.radio:empty ~ label:before {\r\n\tposition: absolute;\r\n\tdisplay: block;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tcontent: '';\r\n\twidth: 2.5em;\r\n\tbackground: #102EB3; /*#D4D1D4;*/\r\n\tborder-radius: 3px 0 0 3px;\r\n}\r\n\r\n/* On Hover */\r\ninput.radio:hover:not(:checked) ~ label:before {\r\n\tcontent:'\\2714';\r\n\ttext-indent: .9em;\r\n\tcolor: #C2C2C2;\r\n}\r\n\r\ninput.radio:hover:not(:checked) ~ label { color: black; }\r\n\r\n/* Checked */\r\ninput.radio:checked ~ label:before {\r\n\tcontent:'\\2714';\r\n\ttext-indent: .9em;\r\n\tcolor: #9CE2AE;\r\n\tbackground-color: #4DCB6D;\r\n}\r\n\r\ninput.radio:checked ~ label { color: black; }\r\n\r\n/* On Focus */\r\ninput.radio:focus ~ label:before { box-shadow: 0 0 0 3px #999; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vanhillequiz/questions/questions.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!showFinish\" class=\"row\">\r\n    <!-- <app-timer></app-timer> -->\r\n    <h2 class=\" header\">שאלה מס' {{qnumber}}</h2>\r\n    \r\n</div>    \r\n<div *ngIf=\"!showFinish\" class=\"margin\">\r\n    \r\n  <!-- <div class=\"row\" dir=\"rtl\" style=\"margin-bottom: 0\">\r\n          <div class=\"col-md-6  col-md-pull-2 pull-right\">\r\n              <br>\r\n                  <h3 [innerHTML]=\"question\"></h3>\r\n          </div>\r\n      <div class=\"col-md-6\">\r\n              <img class=\"media-object\" src=\"{{img}}\">\r\n      </div>\r\n  </div> -->\r\n\r\n  <div class=\"row\" dir=\"rtl\"> <!--last best alignemt-->\r\n          <div class=\"col-md-4\">\r\n                  <img class=\"media-object\" src=\"{{img}}\">\r\n          </div>\r\n          <div class=\"col-md-7\">\r\n                  <h3 [innerHTML]=\"question\"></h3>\r\n          </div>\r\n      </div>\r\n  \r\n  \r\n  <div *ngIf=\"!showFinish\" class=\"col-md-12 pull-right col-md-offset-3\">\r\n      <section *ngFor=\"let answer of Answers\" dir=\"rtl\">\r\n          <input id={{answer.num}} type=\"radio\" class=\"radio\" [(ngModel)]=radiogroup name=\"radiogroup\" value={{answer.num}}>\r\n          <label for={{answer.num}} dir=\"rtl\">\r\n                  {{answer.ans}}\r\n          </label>\r\n      </section>\r\n  </div>\r\n  <div class=\"row col-md-8 pull-left\">\r\n      <button id=\"next\" type=\"button\" class=\"btn btn-primary\" (click)=\"saveAnswer()\">שאלה הבאה</button>\r\n      <button id=\"back\" type=\"button\" class=\"btn btn-danger\" (click)=\"backQuestion()\">שאלה קודמת</button>\r\n      <button *ngIf=\"finish\" id=\"finish\" type=\"button\" class=\"btn btn-danger\" (click)=\"calcUser()\">סיים שאלון</button>\r\n  </div>\r\n  \r\n</div>\r\n<div *ngIf=\"showFinish\" class=\"col-md-7 margin\" style=\"color: white\" dir=\"rtl\">\r\n    <h2>סיימת את השאלון, בהצלחה!</h2>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/vanhillequiz/questions/questions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_questionsservice_service__ = __webpack_require__("../../../../../src/app/services/questionsservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_vanhileform_service__ = __webpack_require__("../../../../../src/app/services/vanhileform.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.esm.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 //update user answer

var QuestionsComponent = (function () {
    function QuestionsComponent(questionService, flashmessage, vanhileservice, spinner) {
        this.questionService = questionService;
        this.flashmessage = flashmessage;
        this.vanhileservice = vanhileservice;
        this.spinner = spinner;
        this.showFinish = false;
        this.finish = false;
        this.User = localStorage.getItem('User');
        this.tryTime = localStorage.getItem('tryNum');
        //calc User variables
        this.CorrectAnswersForQuestions = [];
        this.AnswersOfUser = [];
        this.CorrectAnsPerDiff = [0, 0, 0, 0, 0];
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        this.qnumber = 1;
        this.nextQuestion(this.qnumber.toString());
    };
    QuestionsComponent.prototype.nextQuestion = function (id) {
        var _this = this;
        if (this.qnumber > 25) {
            return false;
        }
        this.questionService.getNextQuestion(id).subscribe(function (data) {
            if (data.success) {
                _this.Qid = data.question.Qid;
                _this.question = data.question.Question;
                _this.img = data.question.Image;
                _this.Answers = data.question.Answers;
                if (_this.qnumber == 25) {
                    _this.hideButtons();
                }
            }
            else {
                _this.flashmessage.show('שגיאה לא ניתן לעבור לשאלה הבאה', { cssClass: 'alert-danger', timeout: 3000 });
            }
            _this.spinner.hide();
        });
    };
    QuestionsComponent.prototype.saveAnswer = function () {
        var _this = this;
        var Answer = {
            radiogroup: this.radiogroup
        };
        if (Answer.radiogroup == 'a1') {
            this.questionService.saveUserAnswer(parseInt(this.User), 1, this.qnumber, this.tryTime).subscribe(function (data) {
                _this.spinner.show();
                if (data.success) {
                    _this.radiogroup = 0;
                    _this.qnumber++;
                    if (_this.qnumber > 25) {
                        return false;
                    }
                    else {
                        _this.nextQuestion(_this.qnumber.toString());
                        return true;
                    }
                }
                else {
                    _this.flashmessage.show('לא נשמרה התשובה', { cssClass: 'alert-danger', timeout: 3000 });
                    return false;
                }
            });
        }
        else if (Answer.radiogroup == 'a2') {
            this.questionService.saveUserAnswer(this.User, 2, this.qnumber, parseInt(this.tryTime)).subscribe(function (data) {
                _this.spinner.show();
                if (data.success) {
                    _this.radiogroup = 0;
                    _this.qnumber++;
                    if (_this.qnumber > 25) {
                        return false;
                    }
                    else {
                        _this.nextQuestion(_this.qnumber.toString());
                        return true;
                    }
                }
                else {
                    _this.flashmessage.show('לא נשמרה התשובה', { cssClass: 'alert-danger', timeout: 3000 });
                    return false;
                }
            });
        }
        else if (Answer.radiogroup == 'a3') {
            this.questionService.saveUserAnswer(this.User, 3, this.qnumber, parseInt(this.tryTime)).subscribe(function (data) {
                _this.spinner.show();
                if (data.success) {
                    _this.radiogroup = 0;
                    _this.qnumber++;
                    if (_this.qnumber > 25) {
                        return false;
                    }
                    else {
                        _this.nextQuestion(_this.qnumber.toString());
                        return true;
                    }
                }
                else {
                    _this.flashmessage.show('לא נשמרה התשובה', { cssClass: 'alert-danger', timeout: 3000 });
                    return false;
                }
            });
        }
        else if (Answer.radiogroup == 'a4') {
            this.questionService.saveUserAnswer(this.User, 4, this.qnumber, parseInt(this.tryTime)).subscribe(function (data) {
                _this.spinner.show();
                if (data.success) {
                    _this.radiogroup = 0;
                    _this.qnumber++;
                    if (_this.qnumber > 25) {
                        return false;
                    }
                    else {
                        _this.nextQuestion(_this.qnumber.toString());
                        return true;
                    }
                }
                else {
                    _this.flashmessage.show('לא נשמרה התשובה', { cssClass: 'alert-danger', timeout: 3000 });
                    return false;
                }
            });
        }
        else if (Answer.radiogroup == 'a5') {
            this.questionService.saveUserAnswer(this.User, 5, this.qnumber, parseInt(this.tryTime)).subscribe(function (data) {
                _this.spinner.show();
                if (data.success) {
                    _this.radiogroup = 0;
                    _this.qnumber++;
                    if (_this.qnumber > 25) {
                        return false;
                    }
                    else {
                        _this.nextQuestion(_this.qnumber.toString());
                        return true;
                    }
                }
                else {
                    _this.flashmessage.show('לא נשמרה התשובה', { cssClass: 'alert-danger', timeout: 3000 });
                    return false;
                }
            });
        }
        else {
            this.flashmessage.show('לא נבחרה תשובה', { cssClass: 'alert-danger', timeout: 3000 });
        }
    };
    QuestionsComponent.prototype.hideButtons = function () {
        document.getElementById('next').style.display = 'none';
        document.getElementById('back').style.display = 'none';
        this.finish = true;
    };
    QuestionsComponent.prototype.saveCorrectUserAnswers = function () {
        var _this = this;
        var arrstring = "";
        for (var index = 0; index < this.CorrectAnsPerDiff.length; index++) {
            arrstring = arrstring + this.CorrectAnsPerDiff[index].toString() + '/';
            console.log("arrstring: " + arrstring);
        }
        this.questionService.saveCorrectAnsPerDiff(this.User, arrstring, this.tryTime).subscribe(function (data) {
            if (data.success) {
                _this.showFinish = true;
            }
            else {
                _this.flashmessage.show('לא ניתן לשמור תשובות נכונות של סטודנט', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    //calcs the Users Correct Answers for difficulties
    QuestionsComponent.prototype.calcUser = function () {
        var _this = this;
        this.saveAnswer();
        console.log("calc start: " + this.CorrectAnsPerDiff);
        this.questionService.getAllQuestions().subscribe(function (data) {
            _this.spinner.hide();
            if (data.success) {
                for (var index = 0; index < data.questions.length; index++) {
                    _this.CorrectAnswersForQuestions[index] = { corA: data.questions[index].correctA, diff: data.questions[index].dif };
                }
                _this.questionService.getUser(_this.User).subscribe(function (data) {
                    if (data.success) {
                        if (_this.tryTime == 1) {
                            _this.AnswersOfUser = data.user[0].Answers1;
                            if (_this.Answers.length < 25) {
                                _this.CorrectAnsPerDiff = [0, 0, 0, 0, 0];
                            }
                        }
                        if (_this.tryTime == 2) {
                            _this.AnswersOfUser = data.user[0].Answers2;
                            if (_this.Answers.length < 25) {
                                _this.CorrectAnsPerDiff = [0, 0, 0, 0, 0];
                            }
                        }
                        if (_this.CorrectAnswersForQuestions.length == 0 || _this.AnswersOfUser.length == 0) {
                            _this.flashmessage.show('תשובות נכונות לשאלות או תשובות של סטודנט לא קיימים', { cssClass: 'alert-danger', timeout: 3000 });
                            return false;
                        }
                        else {
                            for (var index = 0; index < _this.CorrectAnswersForQuestions.length; index++) {
                                if (_this.AnswersOfUser[index] == _this.CorrectAnswersForQuestions[index].corA) {
                                    switch (parseInt(_this.CorrectAnswersForQuestions[index].diff)) {
                                        case 1:
                                            _this.CorrectAnsPerDiff[0] = parseInt(_this.CorrectAnsPerDiff[0]) + 1;
                                            // this.CorrectAnsPerDiff[0] += 1;
                                            // console.log("CorrectAnsPerDiff[0]: " + this.CorrectAnsPerDiff[0]);
                                            // console.log("case 1 CorrectAnsPerDiff" + this.CorrectAnsPerDiff);
                                            break;
                                        case 2:
                                            _this.CorrectAnsPerDiff[1] = parseInt(_this.CorrectAnsPerDiff[1]) + 1;
                                            //this.CorrectAnsPerDiff[1] += 1;
                                            //this.CorrectAnsPerDiff[1]++;
                                            // console.log("CorrectAnsPerDiff[1]: " + this.CorrectAnsPerDiff[1]);
                                            // console.log("case 2 CorrectAnsPerDiff" + this.CorrectAnsPerDiff);
                                            break;
                                        case 3:
                                            _this.CorrectAnsPerDiff[2] = parseInt(_this.CorrectAnsPerDiff[2]) + 1;
                                            //this.CorrectAnsPerDiff[2] += 1;
                                            //this.CorrectAnsPerDiff[2]++;
                                            // console.log("CorrectAnsPerDiff[2]: " + this.CorrectAnsPerDiff[2]);
                                            // console.log("case 3 CorrectAnsPerDiff" + this.CorrectAnsPerDiff);
                                            break;
                                        case 4:
                                            _this.CorrectAnsPerDiff[3] = parseInt(_this.CorrectAnsPerDiff[3]) + 1;
                                            //this.CorrectAnsPerDiff[3] += 1;
                                            // this.CorrectAnsPerDiff[3]++;
                                            // console.log("CorrectAnsPerDiff[3]: " + this.CorrectAnsPerDiff[3]);
                                            // console.log("case 4 CorrectAnsPerDiff" + this.CorrectAnsPerDiff);
                                            break;
                                        case 5:
                                            _this.CorrectAnsPerDiff[4] = parseInt(_this.CorrectAnsPerDiff[4]) + 1;
                                            //this.CorrectAnsPerDiff[4] += 1;
                                            //this.CorrectAnsPerDiff[4]++;
                                            // console.log("CorrectAnsPerDiff[4]: " + this.CorrectAnsPerDiff[4]);
                                            // console.log("case 5 CorrectAnsPerDiff" + this.CorrectAnsPerDiff);
                                            break;
                                    }
                                }
                            }
                            // for (var index = 0; index < this.CorrectAnsPerDiff.length; index++) {
                            //   console.log("index: " + this.CorrectAnsPerDiff[index]);
                            // }
                            //this.CorrectAnsPerDiff = this.CorrectAnsPerDiff.slice(0,-1);
                            // console.log("CorrectAnsPerDiff: " + this.CorrectAnsPerDiff)
                            _this.saveCorrectUserAnswers();
                        }
                    }
                    else {
                        _this.flashmessage.show('לא ניתן למצוא תשובות של סטודנט', { cssClass: 'alert-danger', timeout: 3000 });
                    }
                });
            }
            else {
                _this.flashmessage.show('לא ניתן למצוא תשובות נכונות לשאלות', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    QuestionsComponent.prototype.backQuestion = function () {
        if (this.qnumber == 1) {
            return false;
        }
        else {
            this.qnumber--;
            this.nextQuestion(this.qnumber.toString());
        }
    };
    return QuestionsComponent;
}());
QuestionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-questions',
        template: __webpack_require__("../../../../../src/app/vanhillequiz/questions/questions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vanhillequiz/questions/questions.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_questionsservice_service__["a" /* QuestionsserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_questionsservice_service__["a" /* QuestionsserviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_vanhileform_service__["a" /* VanhileformService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_vanhileform_service__["a" /* VanhileformService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["b" /* Ng4LoadingSpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["b" /* Ng4LoadingSpinnerService */]) === "function" && _d || Object])
], QuestionsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=questions.component.js.map

/***/ }),

/***/ "../../../../../src/app/vanhillequiz/report/class-report/class-report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header{\r\n    text-decoration: underline;\r\n    text-align: center;\r\n    /* margin-right: 250px; */\r\n    margin-right: 150px;\r\n    color: white;\r\n}\r\nh1,h2{\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vanhillequiz/report/class-report/class-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"container-fluid\" dir=\"rtl\">\r\n  <h1 class=\"header\">תוצאות כל הכיתה</h1>\r\n  <div *ngIf=\"!showpast\" class=\"row col-md-12 col-md-pull-1\">\r\n    <div class=\"col-md-offset-2\">\r\n        <h3 class=\"header\">תוצאות נוכחיות</h3>\r\n    </div>\r\n    <div style=\"display: block;background-color: white\" >\r\n      <canvas baseChart [colors]=\"radarcolors\" [datasets]=\"radarChartData\" [labels]=\"radarChartLabels\" [options]=\"radarChartOptions\"\r\n        [chartType]=\"radarChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n    </div>\r\n    <div class=\"button-group\" style=\"margin-top: 5px\">\r\n      <button type=\"button\" class=\"btn btn-success btn-block\" (click)=\"calcAll()\">חשב נתונים כללים</button>\r\n      <button type=\"button\" class=\"btn btn-danger  btn-block\" (click)=\"clearRadar()\">נקה גרף</button>\r\n      <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"showPast()\">הצג/הסתר השוואת נתונים קודמים</button>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"showpast\" >\r\n    <h2 class=\"header\">השוואת תוצאות</h2>\r\n  </div>\r\n  \r\n  <div *ngIf=\"showpast\" class=\"row\" style=\"margin-right: 150px\">\r\n      \r\n    <div class=\"col-md-6\">\r\n      <div class=\"col-md-offset-3\">\r\n        <h3 class=\"header\">תוצאות אחרי</h3>\r\n      </div>\r\n      <div style=\"display: block;background-color: white\">\r\n        <canvas baseChart [colors]=\"radarcolors\" [datasets]=\"radarChartDataPost\" [labels]=\"radarChartLabels\" [options]=\"radarChartOptions\"\r\n          [chartType]=\"radarChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n      </div>\r\n      <div class=\"button-group\">\r\n        <div style=\"margin-top:5px\">\r\n          <select name=\"courseNum\" class=\"form-control\" [(ngModel)]=\"courseNumPost\" (change) = \"findGroupNumByCourseNumSelected(2)\">\r\n            <option disabled hidden [value]=\"selectUndefinedOptionValue\">בחר מספר קורס</option>\r\n            <option *ngFor = \"let coursePostOption of courseNumPostOptions\" [value]=\"coursePostOption\">{{coursePostOption}}</option>\r\n        </select>\r\n        </div>\r\n        <div style=\"margin-top:5px;margin-bottom: 5px\">\r\n          <select name=\"groupNum\" class=\"form-control\" [(ngModel)]=\"groupNumPost\">\r\n             <option disabled hidden [value]=\"selectUndefinedOptionValue\">בחר מס' קבוצת לימוד</option>\r\n             <option *ngFor = \"let gpro of groupNumPostOptions\" [value]=\"gpro\">{{gpro}}</option>\r\n        </select>\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-danger  btn-block\" (click)=\"clearSelection(2)\">נקה בחירה</button>\r\n        <button type=\"button\" class=\"btn btn-success  btn-block\" (click)=\"findQuizByGroupAndCourseNum(2)\">חפש</button>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-md-6 \">\r\n      <div class=\"col-md-offset-3\">\r\n        <h3 class=\"header\">תוצאות לפני</h3>\r\n      </div>\r\n      <div style=\"display: block;background-color: white\">\r\n          <canvas baseChart [colors]=\"radarcolors\" [datasets]=\"radarChartDataPre\" [labels]=\"radarChartLabels\" [options]=\"radarChartOptions\"\r\n            [chartType]=\"radarChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n        <div class=\"button-group\">\r\n            <div style=\"margin-top:5px\">\r\n              <select name=\"courseNum\" class=\"form-control\" [(ngModel)]=\"courseNumPre\" (change) = \"findGroupNumByCourseNumSelected(1)\">\r\n                <option disabled hidden [value]=\"selectUndefinedOptionValue\">בחר מספר קורס</option>\r\n                <option *ngFor = \"let coursePreOption of courseNumPreOptions\" [value]=\"coursePreOption\">{{coursePreOption}}</option>\r\n            </select>\r\n            </div>\r\n            <div style=\"margin-top:5px;margin-bottom: 5px\">\r\n              <select name=\"groupNum\" class=\"form-control\" [(ngModel)]=\"groupNumPre\">\r\n                 <option disabled hidden [value]=\"selectUndefinedOptionValue\">בחר מס' קבוצת לימוד</option>\r\n                 <option *ngFor = \"let gpoo of groupNumPreOptions\" [value]=\"gpoo\">{{gpoo}}</option>\r\n            </select>\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-danger  btn-block\" (click)=\"clearSelection(1)\">נקה בחירה</button>\r\n            <button type=\"button\" class=\"btn btn-success  btn-block\" (click)=\"findQuizByGroupAndCourseNum(1)\">חפש</button> \r\n      <!-- <div style=\"display: block;background-color: white\">\r\n        <canvas baseChart [colors]=\"radarcolors\" [datasets]=\"radarChartData\" [labels]=\"radarChartLabels\" [options]=\"radarChartOptions\"\r\n          [chartType]=\"radarChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n      </div>\r\n      <div class=\"button-group\" style=\"margin-top: 5px\">\r\n        <button type=\"button\" class=\"btn btn-success btn-block\" (click)=\"calcAll()\">חשב נתונים כללים</button>\r\n        <button type=\"button\" class=\"btn btn-danger  btn-block\" (click)=\"clearRadar()\">נקה גרף</button>\r\n        <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"showPast()\">הצג/הסתר השוואת נתונים קודמים</button>      \r\n      </div> -->\r\n    </div>\r\n    \r\n  </div>\r\n\r\n</div>\r\n<br>\r\n<div class=\"col-md-11 col-md-pull-1\" style=\"margin-left: 50px\" >\r\n  <button *ngIf=\"showpast\" type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"showPast()\">הצג/הסתר השוואת נתונים קודמים</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/vanhillequiz/report/class-report/class-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_vanhilereport_service__ = __webpack_require__("../../../../../src/app/services/vanhilereport.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClassReportComponent = (function () {
    function ClassReportComponent(reportServise, flashmessage) {
        this.reportServise = reportServise;
        this.flashmessage = flashmessage;
        //radar charts for comparison
        this.radarChartDataPre = [{}];
        this.radarChartDataPost = [{}];
        //radar chart for calc and Show Imidiate results
        this.radarChartData = [{}];
        //get the try number for the calc
        this.tryNum = localStorage.getItem('tryNum');
        //show comparison mode 
        this.showpast = false;
        this.radarChartPastData = [{}];
        /**
         * options for radar chart
         *
         */
        this.radarChartLabels = ['רמה 1', 'רמה 2', 'רמה 3', 'רמה 4', 'רמה 5'];
        this.radarChartType = 'radar';
        this.radarChartOptions = {
            scale: {
                ticks: {
                    min: 0,
                    steps: 10,
                    beginAtZero: true,
                    max: 100
                }
            }
        };
        this.radarcolors = [{
                backgroundColor: [
                    // 'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.5)',
                    //'rgba(255, 206, 86, 0.2)',
                    //'rgb(22, 19, 190)'
                    // 'rgba(0, 255, 0, 0.2)',
                    'rgba(102, 0, 204, 0.2)'
                ]
            }];
    }
    ClassReportComponent.prototype.ngOnInit = function () {
        this.findResultsForComparison();
        //this.findAllQuizesDoneInTheLastSemster();
    };
    // events
    ClassReportComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ClassReportComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ClassReportComponent.prototype.clearSelection = function (PrePost) {
        if (PrePost == 1) {
            this.courseNumPre = null;
            this.groupNumPre = null;
            this.radarChartDataPre = [{ data: "", label: '' }];
        }
        if (PrePost == 2) {
            this.courseNumPost = null;
            this.groupNumPost = null;
            this.radarChartDataPost = [{ data: "", label: '' }];
        }
    };
    ClassReportComponent.prototype.calcAll = function () {
        var _this = this;
        this.reportServise.createAllResults(this.tryNum).subscribe(function (data) {
            if (data.success) {
                console.log(data.resQuiz[0].results);
                _this.radarChartData = [{ data: data.resQuiz[0].results, label: data.resQuiz[0].groupNum + " - " + data.resQuiz[0].courseNum }];
                //  this.Options = data.resQuiz;
            }
            else {
                _this.flashmessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    ClassReportComponent.prototype.clearRadar = function () {
        this.radarChartData = [{ data: "", label: '' }];
    };
    ClassReportComponent.prototype.findResultsForComparison = function () {
        var _this = this;
        this.reportServise.getAllQuizesDoneInTheLastSemeter().subscribe(function (data) {
            if (data.success) {
                //console.log(JSON.stringify(data));
                if (data.quiz.length == 0) {
                    _this.flashmessage.show('אין שאלונים שבוצעו בסמסטר האחרון', { cssClass: 'alert-danger', timeout: 3000 });
                }
                else if (data.quiz.length == 1) {
                    _this.courseNumPreOptions = [data.quiz[0].courseNum];
                }
                else {
                    _this.courseNumPreOptions = [data.quiz[0].courseNum];
                    for (var index = 1; index < data.quiz.length; index++) {
                        if (data.quiz[index].courseNum == data.quiz[index - 1].courseNum) {
                            if (_this.courseNumPostOptions == undefined) {
                                _this.courseNumPostOptions = [data.quiz[index].courseNum];
                            }
                            else {
                                _this.courseNumPostOptions[index] = data.quiz[index].courseNum;
                            }
                        }
                        else {
                            _this.courseNumPreOptions[index] = data.quiz[index].courseNum;
                        }
                    }
                }
            }
            else {
                _this.flashmessage.show('שגיאה בטעינת שאלונים שבוצעו בסמסטר האחרון', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    ClassReportComponent.prototype.findGroupNumByCourseNumSelected = function (PrePost) {
        var _this = this;
        console.log("PrePost: " + PrePost);
        if (PrePost == 1) {
            this.reportServise.getQuizByCourseNum(this.courseNumPre).subscribe(function (data) {
                if (data.success) {
                    _this.groupNumPreOptions = [data.quiz[0].groupNum];
                }
                else {
                    _this.flashmessage.show('שגיאה במציאת ערכים לתוצאות לפני לשדה של מס קורס', { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
        if (PrePost == 2) {
            this.reportServise.getQuizByCourseNum(this.courseNumPost).subscribe(function (data) {
                if (data.success) {
                    if (data.quiz.length > 1) {
                        _this.groupNumPostOptions = [data.quiz[1].groupNum];
                    }
                }
                else {
                    _this.flashmessage.show('שגיאה במציאת ערכים לתוצאות אחרי לשדה של מס קורס', { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
    };
    // findAllQuizesDoneInTheLastSemster() {
    //   this.reportServise.getAllQuizesDoneInTheLastSemeter().subscribe(data => {
    //     if (data.success) {
    //       if (data.quiz.length == 1) {
    //         this.Options = data.quiz;
    //       } else {
    //         this.noDupArr=[data.quiz[0]];
    //         var j = 1;
    //         for (var index = 1; index < data.quiz.length; index++) {
    //           if(data.quiz[index].courseNum==this.noDupArr[j-1].courseNum){
    //             continue;
    //           }else{
    //             this.noDupArr[j]=data.quiz[index];
    //             j++;
    //           }
    //         }
    //         this.Options=this.noDupArr;
    //       }
    //     } else {
    //       this.flashmessage.show('שגיאה במציאת סטודנטים מהסמטר האחרון', { cssClass: 'alert-danger', timeout: 3000 })
    //     }
    //   });
    // }
    ClassReportComponent.prototype.findQuizByGroupAndCourseNum = function (PrePost) {
        var _this = this;
        if (PrePost == 1) {
            this.reportServise.getQuizesByGroupAndCourse(this.courseNumPre, this.groupNumPre).subscribe(function (data) {
                if (data.success) {
                    _this.radarChartDataPre = [{ data: data.quiz[0].results, label: data.quiz[0].groupNum + " - " + data.quiz[0].courseNum }];
                }
                else {
                    return false;
                }
            });
        }
        if (PrePost == 2) {
            this.reportServise.getQuizesByGroupAndCourse(this.courseNumPost, this.groupNumPost).subscribe(function (data) {
                if (data.success) {
                    console.log(JSON.stringify(data));
                    _this.radarChartDataPost = [{ data: data.quiz[0].results, label: data.quiz[0].groupNum + " - " + data.quiz[0].courseNum }];
                }
                else {
                    return false;
                }
                //   console.log(JSON.stringify(data));
                //   if(data.quiz.length>1)
                //   this.radarChartDataPost = [{ data: data.quiz[1].results, label: data.quiz[1].groupNum + " - " + data.quiz[1].courseNum }];
                // else{
                //   this.flashmessage.show('',{ cssClass: 'alert-danger', timeout: 3000 });
                //   return false;
                // }
            });
        }
    };
    ClassReportComponent.prototype.showHideChartPast = function () {
        if (this.courseNum == null || this.groupNum == null)
            return false;
        else
            return true;
    };
    ClassReportComponent.prototype.showPast = function () {
        this.showpast = !this.showpast;
    };
    return ClassReportComponent;
}());
ClassReportComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-class-report',
        template: __webpack_require__("../../../../../src/app/vanhillequiz/report/class-report/class-report.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vanhillequiz/report/class-report/class-report.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_vanhilereport_service__["a" /* VanhilereportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_vanhilereport_service__["a" /* VanhilereportService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], ClassReportComponent);

var _a, _b;
//# sourceMappingURL=class-report.component.js.map

/***/ }),

/***/ "../../../../../src/app/vanhillequiz/report/report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header{\r\n    text-decoration: underline;\r\n    text-align: center;\r\n    /* margin-right: 250px; */\r\n    margin-right: 150px;\r\n    color: white;\r\n}\r\nh1{\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vanhillequiz/report/report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row allclass\" dir=\"rtl\">\r\n  <h1 class=\"header\">תוצאות כל הכיתה</h1>\r\n  <div class=\"row\">\r\n    <div style=\"display: block;background-color: white\" class=\"col-md-10 col-md-offset-0\">\r\n      <canvas baseChart [colors]=\"radarcolors\" [datasets]=\"radarChartData\" [labels]=\"radarChartLabels\" [options]=\"radarChartOptions\"\r\n        [chartType]=\"radarChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-1\">\r\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"clearRadar()\">נקה גרף</button>\r\n    </div>\r\n    <div class=\"col-md-9 pull-left\">\r\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"calcAll()\">חשב נתונים כללים</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row allclass\" dir=\"rtl\">\r\n  <h1 class=\"header\">תוצאה לפי סטודנט</h1>\r\n  <br>\r\n  <div class=\"form-group col-md-10 col-md-offset-0\">\r\n    <div class=\"row\">\r\n      <label style=\"color:white;font-size: 18px\" for=\"\">ת.ז של הסטודנט</label>\r\n      <select name=\"selectID\" class=\"form-control\" [(ngModel)]=\"selectID\" (change)=\"findCorrectAnswerData()\">\r\n            <option *ngFor = \"let op of Options\" [value]=\"op.ID\">{{op.ID}}</option>\r\n          </select>\r\n    </div>\r\n    <div class=\"row\">\r\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"clearSelection()\">נקה בחירה</button>\r\n    </div>\r\n    <br>\r\n    <div *ngIf=\"showHideChartOfUser()\" style=\"display: block;background-color: white  \">\r\n      <canvas baseChart [colors]=\"colors\" [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\" [legend]=\"barChartLegend\"\r\n        [chartType]=\"barChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/vanhillequiz/report/report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_vanhilereport_service__ = __webpack_require__("../../../../../src/app/services/vanhilereport.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportComponent = (function () {
    // Options: [any];
    // selectID: Number;
    // barChartData: any[] = [{
    // }];
    // radarChartData: any[] = [{
    // }];
    //
    function ReportComponent(reportServise, flashmessage) {
        this.reportServise = reportServise;
        this.flashmessage = flashmessage;
    }
    ReportComponent.prototype.ngOnInit = function () {
        // this.reportServise.getUsersLast3Hours().subscribe(data => {
        //   if (data.success) {
        //     this.Options = data.users;
        //   } else {
        //     this.flashmessage.show('משהו קרה', { cssClass: 'alert-danger', timeout: 3000 });
        //   }
        // });
    };
    return ReportComponent;
}());
ReportComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-report',
        template: __webpack_require__("../../../../../src/app/vanhillequiz/report/report.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vanhillequiz/report/report.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_vanhilereport_service__["a" /* VanhilereportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_vanhilereport_service__["a" /* VanhilereportService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], ReportComponent);

var _a, _b;
//# sourceMappingURL=report.component.js.map

/***/ }),

/***/ "../../../../../src/app/vanhillequiz/report/student-report/student-report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header{\r\n    text-decoration: underline;\r\n    text-align: center;\r\n    /* margin-right: 250px; */\r\n    margin-right: 150px;\r\n    color: white;\r\n}\r\nh1{\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vanhillequiz/report/student-report/student-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row allclass\" dir=\"rtl\">\r\n  <h1 class=\"header\">תוצאה לפי סטודנט</h1>\r\n  <br>\r\n  <div class=\"form-group col-md-11 col-md-pull-1\">\r\n    <div class=\"input-append\">\r\n      <label style=\"color:white;font-size: 18px\"> תאריך התחלה\r\n        <ngx-datepicker [(ngModel)]=\"sDate\"></ngx-datepicker>\r\n      </label>\r\n      <label style=\"color:white;font-size: 18px\"> תאריך סיום\r\n        <ngx-datepicker [(ngModel)]=\"fDate\"></ngx-datepicker>\r\n      </label>\r\n      <button type=\"button\" class=\"btn btn-success pull-left\" (click)=\"findStudentsBetweenDates()\">חפש</button>\r\n    </div>\r\n    <br>\r\n    <div class=\"input-append\">\r\n      <label style=\"color:white;font-size: 18px\" for=\"\">ת.ז של הסטודנט</label>\r\n      <select name=\"selectID\" class=\"form-control\" [(ngModel)]=\"selectID\" (change)=\"findCorrectAnswerData()\">\r\n        <option *ngFor=\"let op of Options\" [value]=\"op.ID\">{{op.ID}}</option>\r\n      </select>\r\n      <button type=\"button\" class=\"btn btn-danger pull-left\" (click)=\"clearSelection()\">נקה בחירה</button>\r\n    </div>\r\n\r\n    <br>\r\n    <br>\r\n    <div class=\"row\" style=\"margin-left:5px\">\r\n      <div class=\"col-md-6\" *ngIf=\"showHideSecondChart()\" style=\"display: block;background-color: white  \">\r\n        <h3 style=\"text-align: center\">תוצאות אחרי</h3>\r\n        <canvas baseChart [colors]=\"colors\" [datasets]=\"barChartData2\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\" [legend]=\"barChartLegend\"\r\n          [chartType]=\"barChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n      </div>\r\n      <div class=\"col-md-6\" *ngIf=\"showHideChartOfUser()\" style=\"display: block;background-color: white  \">\r\n        <h3 style=\"text-align: center\">תוצאות לפני</h3>\r\n        <canvas baseChart [colors]=\"colors\" [datasets]=\"barChartData1\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\" [legend]=\"barChartLegend\"\r\n          [chartType]=\"barChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/vanhillequiz/report/student-report/student-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_vanhilereport_service__ = __webpack_require__("../../../../../src/app/services/vanhilereport.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentReportComponent = (function () {
    function StudentReportComponent(reportServise, flashmessage) {
        this.reportServise = reportServise;
        this.flashmessage = flashmessage;
        this.barChartData1 = [{}];
        this.barChartData2 = [{}];
        //tryNum: any = localStorage.getItem('tryNum');
        this.showSecondChart = false;
        /**
         * options for Bar chart
         */
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            scales: {
                yAxes: [{
                        ticks: {
                            steps: 5,
                            stepValue: 1,
                            max: 5,
                            min: 0
                        }
                    }]
            }
        };
        this.barChartLabels = ['רמה 1', 'רמה 2', 'רמה 3', 'רמה 4', 'רמה 5'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.colors = [{
                backgroundColor: [
                    'rgba(255, 99, 132, 2)',
                    'rgba(54, 162, 235, 2)',
                    'rgba(255, 206, 86, 2)',
                    'rgba(0, 255, 0, 2)',
                    'rgba(102, 0, 204, 2)'
                ]
            }];
    }
    StudentReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reportServise.getUsersLast3Hours().subscribe(function (data) {
            if (data.success) {
                _this.Options = data.users;
            }
            else {
                _this.flashmessage.show('משהו קרה', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    StudentReportComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    StudentReportComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    StudentReportComponent.prototype.clearSelection = function () {
        this.selectID = null;
        this.sDate = null;
        this.fDate = null;
    };
    /**
     * shows or hides the users chart
     * true if a user selelcted
     * false if selected is empty
     */
    StudentReportComponent.prototype.showHideChartOfUser = function () {
        if (this.selectID == null)
            return false;
        else
            return true;
    };
    StudentReportComponent.prototype.showHideSecondChart = function () {
        if (this.showHideChartOfUser() && this.showSecondChart) {
            return true;
        }
        else
            return false;
    };
    StudentReportComponent.prototype.findCorrectAnswerData = function () {
        var _this = this;
        //console.log(this.selectID)
        this.reportServise.getUser(this.selectID).subscribe(function (data) {
            if (data.success) {
                if (data.user.length == 1) {
                    if (data.user[0].correctAperdif2[0] != undefined) {
                        _this.barChartData1 = [{ data: data.user[0].correctAperdif1, label: _this.selectID }];
                        _this.barChartData2 = [{ data: data.user[0].correctAperdif2, label: _this.selectID }];
                        _this.showSecondChart = true;
                    }
                    else {
                        _this.barChartData1 = [{ data: data.user[0].correctAperdif1, label: _this.selectID }];
                    }
                }
                else {
                    _this.flashmessage.show('לא נמצאו תשובות של הסטונדט בעל ת.ז' + _this.selectID, { cssClass: 'alert-danger', timeout: 3000 });
                    return false;
                }
                //console.log(JSON.stringify(data))
                // if (this.tryNum == 1) {
                //   this.barChartData1 = [{ data: data.user[0].correctAperdif1, label: this.selectID }];
                //   console.log(JSON.stringify(this.barChartData1));
                // } else {
                //   if (this.tryNum == 2) {
                //     this.barChartData1 = [{ data: data.user[0].correctAperdif1, label: this.selectID }];
                //     this.barChartData2 = [{ data: data.user[0].correctAperdif2, label: this.selectID }];
                //     this.showSecondChart = true;
                //   }
                // }
            }
            else {
                _this.flashmessage.show('שגיאה', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    ;
    StudentReportComponent.prototype.findStudentsBetweenDates = function () {
        var _this = this;
        if (this.sDate > this.fDate) {
            this.flashmessage.show("שגיאה! תאריך סיום לפני תאריך התחלה", { cssClass: 'alert-danger', timeout: 3000 });
        }
        else {
            if (this.sDate == null || this.fDate == null) {
                this.flashmessage.show("אנא מלא את גם תאריך התחלה וגם תאריך סיום", { cssClass: 'alert-danger', timeout: 3000 });
            }
            else {
                this.reportServise.getStudentsBetweenDates(this.sDate, this.fDate).subscribe(function (data) {
                    if (data.success) {
                        if (data.students.length == 0) {
                            _this.flashmessage.show("אין סטודנטים שעשו את השאלון בתאריכים שביקשת", { cssClass: 'alert-danger', timeout: 3000 });
                        }
                        else {
                            _this.flashmessage.show("נמצאו סטודנטים מתאים אנא בחר אחד", { cssClass: 'alert-success', timeout: 3000 });
                            _this.Options = data.students;
                            //console.log(this.Options)
                        }
                    }
                    else {
                        _this.flashmessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                    }
                });
            }
        }
    };
    return StudentReportComponent;
}());
StudentReportComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-student-report',
        template: __webpack_require__("../../../../../src/app/vanhillequiz/report/student-report/student-report.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vanhillequiz/report/student-report/student-report.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_vanhilereport_service__["a" /* VanhilereportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_vanhilereport_service__["a" /* VanhilereportService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], StudentReportComponent);

var _a, _b;
//# sourceMappingURL=student-report.component.js.map

/***/ }),

/***/ "../../../../../src/app/vanhillequiz/timer/timer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n    color: #e73f0c;\r\n    margin-top: 24px; \r\n    float: left;\r\n    text-align: center;    \r\n}    ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vanhillequiz/timer/timer.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  {{hoursDisplay ? hoursDisplay : '00'}} : {{(minutesDisplay) && (minutesDisplay <= 59) ? minutesDisplay : '00'}} : {{(secondsDisplay) && (secondsDisplay <= 59) ? secondsDisplay : '00'}} <br/>\r\n</h1>"

/***/ }),

/***/ "../../../../../src/app/vanhillequiz/timer/timer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TimerComponent = (function () {
    function TimerComponent() {
        this.ticks = 0;
        this.minutesDisplay = 0;
        this.hoursDisplay = 0;
        this.secondsDisplay = 0;
    }
    TimerComponent.prototype.ngOnInit = function () {
        this.startTimer();
    };
    TimerComponent.prototype.startTimer = function () {
        var _this = this;
        var timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].timer(1, 1000);
        this.sub = timer.subscribe(function (t) {
            _this.ticks = t;
            _this.secondsDisplay = _this.getSeconds(_this.ticks);
            _this.minutesDisplay = _this.getMinutes(_this.ticks);
            _this.hoursDisplay = _this.getHours(_this.ticks);
        });
    };
    TimerComponent.prototype.getSeconds = function (ticks) {
        return this.pad(ticks % 60);
    };
    TimerComponent.prototype.getMinutes = function (ticks) {
        return this.pad((Math.floor(ticks / 60)) % 60);
    };
    TimerComponent.prototype.getHours = function (ticks) {
        return this.pad(Math.floor((ticks / 60) / 60));
    };
    TimerComponent.prototype.pad = function (digit) {
        return digit <= 9 ? '0' + digit : digit;
    };
    return TimerComponent;
}());
TimerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-timer',
        template: __webpack_require__("../../../../../src/app/vanhillequiz/timer/timer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vanhillequiz/timer/timer.component.css")]
    })
], TimerComponent);

//# sourceMappingURL=timer.component.js.map

/***/ }),

/***/ "../../../../../src/app/vanhillequiz/vanhileform/vanhileform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin{\r\n    margin-right: 75px;\r\n}\r\nh2, label{\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vanhillequiz/vanhileform/vanhileform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"margin\">\r\n  <h2 class=\"page-header margin text-center\" dir=\"rtl\">פרטים אישיים</h2>\r\n  <form (submit)=\"startQuiz()\">\r\n    <!-- <div class=\"form-group col-md-9 col-md-offset-1\" dir=\"rtl\">\r\n      <label for=\"\">שם פרטי</label>\r\n      <input type=\"text\" [(ngModel)]=\"Fname\" name=\"Fname\" class=\"form-control\" placeholder=\"הכנס שם פרטי בלבד\">\r\n    </div>\r\n    <div class=\"form-group col-md-9 col-md-offset-1\" dir=\"rtl\">\r\n      <label for=\"\">שם משפחה</label>\r\n      <input type=\"text\" [(ngModel)]=\"Lname\" name=\"Lname\" class=\"form-control\" placeholder=\"הכנס שם מפחה בלבד\">\r\n    </div> -->\r\n    <div class=\"form-group col-md-9 col-md-offset-1\" dir=\"rtl\">\r\n      <label for=\"\">ת.ז</label>\r\n      <input type=\"number\" [(ngModel)]=\"ID\" name=\"ID\" class=\"form-control\" placeholder=\"הכנס ת.ז כולל ספרת ביקורת\">\r\n    </div>\r\n    <div class=\"form-group col-md-9 col-md-offset-1\" dir=\"rtl\">\r\n      <label for=\"\">מס' קורס</label>\r\n      <input type=\"number\" [(ngModel)]=\"courseNum\" name=\"courseNum\" class=\"form-control\" placeholder=\"הכנס את מס' הקורס\">\r\n    </div>\r\n    <div class=\"form-group col-md-9 col-md-offset-1\" dir=\"rtl\">\r\n      <label for=\"\">קבוצת לימוד</label>\r\n      <input type=\"number\" [(ngModel)]=\"groupNum\" name=\"groupNum\" class=\"form-control\" placeholder=\"הכנס את מס' קבוצת לימוד\">\r\n    </div>\r\n    <div class=\"form-group col-md-9 col-md-offset-1\" >\r\n      <button type=\"submit\" class=\"btn btn-primary btn-lg\">התחל שאלון</button>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/vanhillequiz/vanhileform/vanhileform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VanhileformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_vanhileform_service__ = __webpack_require__("../../../../../src/app/services/vanhileform.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.esm.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VanhileformComponent = (function () {
    function VanhileformComponent(vanhileformservice, flashmessage, spinner) {
        this.vanhileformservice = vanhileformservice;
        this.flashmessage = flashmessage;
        this.spinner = spinner;
        this.showvnahileform = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    VanhileformComponent.prototype.ngOnInit = function () {
    };
    VanhileformComponent.prototype.startQuiz = function () {
        var _this = this;
        var user = {
            // Fname: this.Fname,
            // Lname: this.Lname,
            ID: this.ID,
            courseNum: this.courseNum,
            groupNum: this.groupNum
        };
        this.spinner.show();
        //required fields
        if (!this.vanhileformservice.validateForm(user)) {
            this.flashmessage.show('מלא את כל השדות', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //validate ID length
        if (!this.vanhileformservice.validateID(user.ID)) {
            this.flashmessage.show('ת.ז שהכנסת הוא קצר או ארוך מידי אנא בדוק שנית!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //check if user exists
        this.vanhileformservice.getUser(user.ID).subscribe(function (data) {
            if (data.success && data.user.length == 0) {
                //create new User
                _this.vanhileformservice.createUser(user).subscribe(function (data) {
                    _this.spinner.hide();
                    if (!data.success) {
                        _this.flashmessage.show('לא קיים משתמש כזה אך קרה שגיאה שגיאה', { cssClass: 'alert-danger', timeout: 3000 });
                        return false;
                    }
                    else {
                        _this.flashmessage.show('נרשמת בהצלחה', { cssClass: 'alert-success', timeout: 3000 });
                        localStorage.setItem('User', user.ID.toString());
                        localStorage.setItem('tryNum', "1");
                        //hide form
                        _this.showvnahileform.emit(false);
                        return true;
                    }
                });
            }
            else {
                if (data.user[0].Answers1.length == 0) {
                    _this.flashmessage.show('נרשמת בהצלחה', { cssClass: 'alert-success', timeout: 3000 });
                    localStorage.setItem('User', user.ID.toString());
                    localStorage.setItem('tryNum', "1");
                    //hide form
                    _this.showvnahileform.emit(false);
                    return true;
                }
                else if (data.user[0].Answers1.length > 0 && data.user[0].Answers2.length < 25 && data.user[0].correctAperdif1.length == 0) {
                    _this.flashmessage.show('היית באמצע השאלון (ניסיון 1) ויצאת, השאלון יתחיל מהתחלה!', { cssClass: 'alert-danger', timeout: 5000 });
                    _this.vanhileformservice.nullifyAnswers(user.ID, 1).subscribe(function (data) {
                        if (data.success) {
                            localStorage.setItem('User', data.student.ID.toString());
                            localStorage.setItem('tryNum', "1");
                            _this.showvnahileform.emit(false);
                        }
                        else {
                            _this.flashmessage.show('שגיאה בהתחלת שאלון מחדש (ניסיון 1). אנא נסה שנית', { cssClass: 'alert-danger', timeout: 3000 });
                            return false;
                        }
                    });
                    //return false;
                }
                else {
                    if (data.user[0].Answers1.length == 25 && data.user[0].Answers2.length == 0) {
                        _this.vanhileformservice.updateGroupNumOfStudent(user.ID, user.groupNum).subscribe(function (data) {
                            if (data.success) {
                                localStorage.setItem('User', user.ID.toString());
                                localStorage.setItem('tryNum', "2");
                                //hide form
                                _this.showvnahileform.emit(false);
                                return true;
                            }
                            else {
                                _this.flashmessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                                return false;
                            }
                        });
                    }
                    else if (data.user[0].Answers2.length > 0 && data.user[0].Answers2.length < 25 && data.user[0].correctAperdif2.length == 0) {
                        _this.flashmessage.show('היית באמצע השאלון (ניסיון 2) ויצאת, השאלון יתחיל מהתחלה!', { cssClass: 'alert-danger', timeout: 5000 });
                        _this.vanhileformservice.nullifyAnswers(user.ID, 2).subscribe(function (data) {
                            if (data.success) {
                                localStorage.setItem('User', data.student.ID.toString());
                                localStorage.setItem('tryNum', "2");
                                _this.showvnahileform.emit(false);
                            }
                            else {
                                _this.flashmessage.show('שגיאה בהתחלת שאלון מחדש (ניסיון 2). אנא נסה שנית', { cssClass: 'alert-danger', timeout: 3000 });
                                return false;
                            }
                        });
                        //return false;
                    }
                    else {
                        _this.flashmessage.show('עשית את השאלון פעמיים, לא ניתן לבצע את השאלון שוב, אנא פנה למרצה', { cssClass: 'alert-danger', timeout: 3000 });
                        return false;
                    }
                }
                // this.flashmessage.show('קיים משתמש עם ת.ז זהה', { cssClass: 'alert-danger', timeout: 3000 });
                // return false;
            }
        });
    };
    return VanhileformComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], VanhileformComponent.prototype, "showvnahileform", void 0);
VanhileformComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vanhileform',
        template: __webpack_require__("../../../../../src/app/vanhillequiz/vanhileform/vanhileform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vanhillequiz/vanhileform/vanhileform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_vanhileform_service__["a" /* VanhileformService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_vanhileform_service__["a" /* VanhileformService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["b" /* Ng4LoadingSpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["b" /* Ng4LoadingSpinnerService */]) === "function" && _d || Object])
], VanhileformComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=vanhileform.component.js.map

/***/ }),

/***/ "../../../../../src/app/vanhillequiz/vanhillequiz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header{\r\n    text-decoration: underline;\r\n    text-align: center;\r\n    /* margin-right: 250px; */\r\n    margin-right: 150px;\r\n    color: white;\r\n}\r\n.margin{\r\n    margin-top: 30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vanhillequiz/vanhillequiz.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"margin\">\r\n  <h1 class=\"header\">שאלון ואן-הילה</h1>\r\n  <!-- <app-questions></app-questions> -->\r\n  <!-- <app-answers></app-answers> -->\r\n  <app-vanhileform *ngIf=\"showForm\" (showvnahileform) = \"showhideform($event)\"></app-vanhileform>\r\n  <app-questions *ngIf=\"!showForm\"></app-questions>\r\n  <!-- <app-answers *ngIf=\"!showForm\"></app-answers> -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/vanhillequiz/vanhillequiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VanhillequizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VanhillequizComponent = (function () {
    function VanhillequizComponent() {
        this.showForm = true;
    }
    VanhillequizComponent.prototype.ngOnInit = function () {
    };
    VanhillequizComponent.prototype.showhideform = function (flag) {
        this.showForm = flag;
    };
    return VanhillequizComponent;
}());
VanhillequizComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vanhillequiz',
        template: __webpack_require__("../../../../../src/app/vanhillequiz/vanhillequiz.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vanhillequiz/vanhillequiz.component.css")]
    }),
    __metadata("design:paramtypes", [])
], VanhillequizComponent);

//# sourceMappingURL=vanhillequiz.component.js.map

/***/ }),

/***/ "../../../../../src/assets/background.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.27264652ae14a46948dd.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map