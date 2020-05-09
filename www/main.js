(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/*
Import
*/
// Angular




//
/*
Componant configuration
*/
//
/*
Componant class definition
*/
class AppComponent {
    constructor() {
        this.title = 'MySponsport';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: `
      <header>
        <app-header></app-header>
      </header>

      <main>
        <router-outlet></router-outlet>
      </main>
    `
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.router */ "./src/app/app.router.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_item_post_item_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/item-post/item-post.component */ "./src/app/shared/item-post/item-post.component.ts");
/* harmony import */ var _routes_campaign_page_campaign_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/campaign-page/campaign-page.component */ "./src/app/routes/campaign-page/campaign-page.component.ts");
/* harmony import */ var _routes_application_page_application_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes/application-page/application-page.component */ "./src/app/routes/application-page/application-page.component.ts");
/* harmony import */ var _routes_message_page_message_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes/message-page/message-page.component */ "./src/app/routes/message-page/message-page.component.ts");
/* harmony import */ var _routes_proposition_page_proposition_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routes/proposition-page/proposition-page.component */ "./src/app/routes/proposition-page/proposition-page.component.ts");
/* harmony import */ var _routes_history_page_history_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routes/history-page/history-page.component */ "./src/app/routes/history-page/history-page.component.ts");
/* harmony import */ var _routes_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routes/calendar-page/calendar-page.component */ "./src/app/routes/calendar-page/calendar-page.component.ts");
/* harmony import */ var _routes_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./routes/register-page/register-page.component */ "./src/app/routes/register-page/register-page.component.ts");
/*
  Imports
*/
// Angular





// Inner components














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_router__WEBPACK_IMPORTED_MODULE_7__["MainRouter"], { onSameUrlNavigation: 'reload' })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _shared_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
        _shared_item_post_item_post_component__WEBPACK_IMPORTED_MODULE_9__["ItemPostComponent"],
        _routes_campaign_page_campaign_page_component__WEBPACK_IMPORTED_MODULE_10__["CampaignPageComponent"],
        _routes_application_page_application_page_component__WEBPACK_IMPORTED_MODULE_11__["ApplicationPageComponent"],
        _routes_message_page_message_page_component__WEBPACK_IMPORTED_MODULE_12__["MessagePageComponent"],
        _routes_proposition_page_proposition_page_component__WEBPACK_IMPORTED_MODULE_13__["PropositionPageComponent"],
        _routes_history_page_history_page_component__WEBPACK_IMPORTED_MODULE_14__["HistoryPageComponent"],
        _routes_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_15__["CalendarPageComponent"],
        _routes_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_16__["RegisterPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _shared_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                    _shared_item_post_item_post_component__WEBPACK_IMPORTED_MODULE_9__["ItemPostComponent"],
                    _routes_campaign_page_campaign_page_component__WEBPACK_IMPORTED_MODULE_10__["CampaignPageComponent"],
                    _routes_application_page_application_page_component__WEBPACK_IMPORTED_MODULE_11__["ApplicationPageComponent"],
                    _routes_message_page_message_page_component__WEBPACK_IMPORTED_MODULE_12__["MessagePageComponent"],
                    _routes_proposition_page_proposition_page_component__WEBPACK_IMPORTED_MODULE_13__["PropositionPageComponent"],
                    _routes_history_page_history_page_component__WEBPACK_IMPORTED_MODULE_14__["HistoryPageComponent"],
                    _routes_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_15__["CalendarPageComponent"],
                    _routes_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_16__["RegisterPageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_router__WEBPACK_IMPORTED_MODULE_7__["MainRouter"], { onSameUrlNavigation: 'reload' })
                ],
                providers: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.router.ts":
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/*! exports provided: MainRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRouter", function() { return MainRouter; });
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _routes_campaign_page_campaign_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/campaign-page/campaign-page.component */ "./src/app/routes/campaign-page/campaign-page.component.ts");
/* harmony import */ var _routes_message_page_message_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/message-page/message-page.component */ "./src/app/routes/message-page/message-page.component.ts");
/* harmony import */ var _routes_application_page_application_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/application-page/application-page.component */ "./src/app/routes/application-page/application-page.component.ts");
/* harmony import */ var _routes_proposition_page_proposition_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/proposition-page/proposition-page.component */ "./src/app/routes/proposition-page/proposition-page.component.ts");
/* harmony import */ var _routes_history_page_history_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/history-page/history-page.component */ "./src/app/routes/history-page/history-page.component.ts");
/* harmony import */ var _routes_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/calendar-page/calendar-page.component */ "./src/app/routes/calendar-page/calendar-page.component.ts");
/* harmony import */ var _routes_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/profile-page/profile-page.component */ "./src/app/routes/profile-page/profile-page.component.ts");
// Inner








//
/*
Export
*/
const MainRouter = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | routes-home-page-module */[__webpack_require__.e("common"), __webpack_require__.e("routes-home-page-module")]).then(__webpack_require__.bind(null, /*! ./routes/home-page/module */ "./src/app/routes/home-page/module.ts")).then(m => m.Module)
    },
    {
        path: 'campagne',
        component: _routes_campaign_page_campaign_page_component__WEBPACK_IMPORTED_MODULE_1__["CampaignPageComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'message',
        component: _routes_message_page_message_page_component__WEBPACK_IMPORTED_MODULE_2__["MessagePageComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'candidature',
        component: _routes_application_page_application_page_component__WEBPACK_IMPORTED_MODULE_3__["ApplicationPageComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
        children: [
            {
                path: 'candidature/:id',
                component: _routes_application_page_application_page_component__WEBPACK_IMPORTED_MODULE_3__["ApplicationPageComponent"]
            }
        ]
    },
    {
        path: 'proposition',
        component: _routes_proposition_page_proposition_page_component__WEBPACK_IMPORTED_MODULE_4__["PropositionPageComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
        children: [
            {
                path: 'proposition/:id',
                component: _routes_proposition_page_proposition_page_component__WEBPACK_IMPORTED_MODULE_4__["PropositionPageComponent"]
            }
        ]
    },
    {
        path: 'historique',
        component: _routes_history_page_history_page_component__WEBPACK_IMPORTED_MODULE_5__["HistoryPageComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'calendrier',
        component: _routes_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_6__["CalendarPageComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'profil',
        component: _routes_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_7__["ProfilePageComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'inscription',
        loadChildren: () => __webpack_require__.e(/*! import() | routes-register-page-module */ "routes-register-page-module").then(__webpack_require__.bind(null, /*! ./routes/register-page/module */ "./src/app/routes/register-page/module.ts")).then(m => m.Module)
    },
    {
        path: 'connexion',
        loadChildren: () => Promise.all(/*! import() | routes-login-page-module */[__webpack_require__.e("common"), __webpack_require__.e("routes-login-page-module")]).then(__webpack_require__.bind(null, /*! ./routes/login-page/module */ "./src/app/routes/login-page/module.ts")).then(m => m.Module)
    }
];
//


/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
// Imports




// Definition
// Export
class AuthGuard {
    constructor(AuthService, Router) {
        this.AuthService = AuthService;
        this.Router = Router;
    }
    canActivate(next, state) {
        return new Promise((resolve, reject) => {
            // Use Auth service to check user indentity from the servere
            this.AuthService.getUserId()
                .then((apiResponse) => resolve(true))
                .catch((apiResponse) => this.Router.navigateByUrl('/'));
        });
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/routes/application-page/application-page.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/routes/application-page/application-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: ApplicationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationPageComponent", function() { return ApplicationPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ApplicationPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ApplicationPageComponent.ɵfac = function ApplicationPageComponent_Factory(t) { return new (t || ApplicationPageComponent)(); };
ApplicationPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApplicationPageComponent, selectors: [["app-application-page"]], decls: 2, vars: 0, template: function ApplicationPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "application-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-application-page',
                templateUrl: './application-page.component.html',
                styles: [],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/routes/calendar-page/calendar-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/routes/calendar-page/calendar-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: CalendarPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageComponent", function() { return CalendarPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CalendarPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
CalendarPageComponent.ɵfac = function CalendarPageComponent_Factory(t) { return new (t || CalendarPageComponent)(); };
CalendarPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarPageComponent, selectors: [["app-calendar-page"]], decls: 2, vars: 0, template: function CalendarPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "calendar-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calendar-page',
                templateUrl: './calendar-page.component.html',
                styles: [],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/routes/campaign-page/campaign-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/routes/campaign-page/campaign-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: CampaignPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignPageComponent", function() { return CampaignPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CampaignPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
CampaignPageComponent.ɵfac = function CampaignPageComponent_Factory(t) { return new (t || CampaignPageComponent)(); };
CampaignPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CampaignPageComponent, selectors: [["app-campaign-page"]], decls: 2, vars: 0, template: function CampaignPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "campaign-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CampaignPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-campaign-page',
                templateUrl: './campaign-page.component.html',
                styles: [],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/routes/history-page/history-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/routes/history-page/history-page.component.ts ***!
  \***************************************************************/
/*! exports provided: HistoryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageComponent", function() { return HistoryPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HistoryPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HistoryPageComponent.ɵfac = function HistoryPageComponent_Factory(t) { return new (t || HistoryPageComponent)(); };
HistoryPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HistoryPageComponent, selectors: [["app-history-page"]], decls: 2, vars: 0, template: function HistoryPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "history-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoryPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-history-page',
                templateUrl: './history-page.component.html',
                styles: [],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/routes/message-page/message-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/routes/message-page/message-page.component.ts ***!
  \***************************************************************/
/*! exports provided: MessagePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageComponent", function() { return MessagePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MessagePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
MessagePageComponent.ɵfac = function MessagePageComponent_Factory(t) { return new (t || MessagePageComponent)(); };
MessagePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessagePageComponent, selectors: [["app-message-page"]], decls: 2, vars: 0, template: function MessagePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "message-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-message-page',
                templateUrl: './message-page.component.html',
                styles: [],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/routes/profile-page/profile-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/routes/profile-page/profile-page.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageComponent", function() { return ProfilePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_observable_observable_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/observable/observable.service */ "./src/app/services/observable/observable.service.ts");
/*
Imports & definition
*/
// Imports


// Cookie service






// Definition
//
/*
Export
*/
class ProfilePageComponent {
    constructor(UserService, Router, ObservablesService, cookieService) {
        this.UserService = UserService;
        this.Router = Router;
        this.ObservablesService = ObservablesService;
        this.cookieService = cookieService;
        this.getUser = () => {
            this.UserService.getUserData(this.userId)
                .then((apiResponse) => {
                // API success response
                this.messageClass = 'success';
                this.apiMessage = apiResponse.message;
                console.log(apiResponse.data);
                this.ObservablesService.setObservableData('user', apiResponse.data);
                this.userData = apiResponse.data;
            })
                .catch((apiResponse) => {
                // API error response
                this.messageClass = 'error';
                this.apiMessage = apiResponse.message;
            });
        };
        this.userId = this.cookieService.get('userId');
    }
    ngOnInit() {
        this.getUser();
    }
    ;
}
ProfilePageComponent.ɵfac = function ProfilePageComponent_Factory(t) { return new (t || ProfilePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_observable_observable_service__WEBPACK_IMPORTED_MODULE_4__["ObservablesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"])); };
ProfilePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfilePageComponent, selectors: [["app-profile-page"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])], decls: 2, vars: 1, template: function ProfilePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userData.athlete.first_name + " " + ctx.userData.athlete.last_name);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-page',
                templateUrl: './profile-page.component.html',
                providers: [_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]]
            }]
    }], function () { return [{ type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_observable_observable_service__WEBPACK_IMPORTED_MODULE_4__["ObservablesService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/routes/proposition-page/proposition-page.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/routes/proposition-page/proposition-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: PropositionPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropositionPageComponent", function() { return PropositionPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PropositionPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
PropositionPageComponent.ɵfac = function PropositionPageComponent_Factory(t) { return new (t || PropositionPageComponent)(); };
PropositionPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PropositionPageComponent, selectors: [["app-proposition-page"]], decls: 2, vars: 0, template: function PropositionPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "proposition-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropositionPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-proposition-page',
                templateUrl: './proposition-page.component.html',
                styles: [],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/routes/register-page/register-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/routes/register-page/register-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RegisterPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegisterPageComponent.ɵfac = function RegisterPageComponent_Factory(t) { return new (t || RegisterPageComponent)(); };
RegisterPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterPageComponent, selectors: [["app-register-page"]], decls: 2, vars: 0, template: function RegisterPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "register-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register-page',
                templateUrl: './register-page.component.html',
                styles: [],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _observable_observable_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observable/observable.service */ "./src/app/services/observable/observable.service.ts");
/*
Imports
*/






//
/*
Definition
*/
class AuthService {
    // Inject module(s) in the service
    constructor(HttpClient, ObservablesService) {
        this.HttpClient = HttpClient;
        this.ObservablesService = ObservablesService;
    }
    ;
    // Function to register a user
    register(userData) {
        // Set header
        let myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        myHeader.append('Content-Type', 'application/json');
        // POST '/auth/register'
        return this.HttpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/auth/register`, userData, { headers: myHeader })
            .toPromise().then(this.getData('register', userData)).catch(this.handleError);
    }
    ;
    // Function to register a user
    identityValidation(_id, password) {
        // Set header
        let myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        myHeader.append('Content-Type', 'application/json');
        const userData = {
            _id: _id,
            password: password
        };
        // POST '/auth/register'
        return this.HttpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/auth/identity-validation`, userData, { headers: myHeader })
            .toPromise().then(this.getData('identity-validation', userData)).catch(this.handleError);
    }
    ;
    // Function to connect a user
    login(userData) {
        // Set header
        let myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        myHeader.append('Content-Type', 'application/json');
        // POST '/auth/login'
        return this.HttpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/auth/login`, userData, { headers: myHeader })
            .toPromise().then(this.getData('login', userData)).catch(this.handleError);
    }
    ;
    // Function to reset password
    restPassword(password, newPassword) {
        // Set header
        let myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        myHeader.append('Content-Type', 'application/json');
        // POST '/auth/login'
        return this.HttpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/auth/password`, { password, newPassword }, { headers: myHeader })
            .toPromise().then(this.getData('password', { password, newPassword })).catch(this.handleError);
    }
    ;
    // Function to get user identity from server
    getUserId() {
        // POST '/auth/login'
        console.log("getuserId");
        return this.HttpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/auth`)
            .toPromise().then(data => this.getData('auth', data)).catch(this.handleError);
    }
    ;
    // Get the API response
    getData(endpoint, res) {
        console.log("sucess");
        console.log(res);
        // Switch endpoint to set observable value
        switch (endpoint) {
            case 'login':
                // Set user info observabale value
                this.ObservablesService.setObservableData('user', res);
                // Return data
                return res || {};
                break;
            default:
                // Retun data anytime
                return res || {};
                break;
        }
    }
    ;
    // Get the API error
    handleError(err) {
        console.log("error");
        return Promise.reject(err.error);
    }
    ;
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_observable_observable_service__WEBPACK_IMPORTED_MODULE_3__["ObservablesService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _observable_observable_service__WEBPACK_IMPORTED_MODULE_3__["ObservablesService"] }]; }, null); })();
;


/***/ }),

/***/ "./src/app/services/observable/observable.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/observable/observable.service.ts ***!
  \***********************************************************/
/*! exports provided: ObservablesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservablesService", function() { return ObservablesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/*
Imports
*/



//
/*
Definition and export
*/
class ObservablesService {
    constructor() {
        this.userInfo = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.postList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.setObservableData = (type, data) => {
            switch (type) {
                case 'user':
                    this.userInfo.next(data);
                    break;
                default:
                    break;
            }
            ;
        };
    }
    getUserInfo() {
        return this.userInfo;
    }
    ;
}
ObservablesService.ɵfac = function ObservablesService_Factory(t) { return new (t || ObservablesService)(); };
ObservablesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ObservablesService, factory: ObservablesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObservablesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _observable_observable_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observable/observable.service */ "./src/app/services/observable/observable.service.ts");
/*
Imports
*/





//
/*
Definition
*/
class UserService {
    // Inject module(s) in the service
    constructor(HttpClient, ObservablesService) {
        this.HttpClient = HttpClient;
        this.ObservablesService = ObservablesService;
    }
    ;
    getUserData(userId) {
        return this.HttpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/user/${userId}`)
            .toPromise().then(data => this.getData('user', data)).catch(this.handleError);
    }
    // Get the API response
    getData(endpoint, res) {
        console.log("sucess");
        console.log(res);
        // Switch endpoint to set observable value
        switch (endpoint) {
            default:
                // Retun data anytime
                return res || {};
                break;
        }
    }
    ;
    // Get the API error
    handleError(err) {
        console.log("error");
        return Promise.reject(err.error);
    }
    ;
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_observable_observable_service__WEBPACK_IMPORTED_MODULE_3__["ObservablesService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _observable_observable_service__WEBPACK_IMPORTED_MODULE_3__["ObservablesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _services_observable_observable_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/observable/observable.service */ "./src/app/services/observable/observable.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

// Cookie service






function HeaderComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tableau de bord");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");
} }
function HeaderComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Campagnes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/campagne");
} }
function HeaderComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/message");
} }
function HeaderComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Candidatures");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/candidature");
} }
function HeaderComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Propositions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/proposition");
} }
function HeaderComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Historique");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/historique");
} }
function HeaderComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mon calendrier");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/calendrier");
} }
function HeaderComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mon profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/profil");
} }
function HeaderComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Inscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/inscription");
} }
function HeaderComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/connexion");
} }
function HeaderComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r571 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_12_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r571); const ctx_r570 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r570.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "D\u00E9connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(ObservablesService, cookieService) {
        this.ObservablesService = ObservablesService;
        this.cookieService = cookieService;
        this.logout = () => {
            this.cookieService.delete('userId');
            localStorage.removeItem('userId');
            // Set user info observabale value
            this.ObservablesService.setObservableData('user', null);
        };
        this.userData = this.cookieService.get('userId');
        // Get user data observer
        this.ObservablesService.getUserInfo().subscribe(userDataObserver => {
            if (userDataObserver === null || userDataObserver === 'undefined') {
                this.userData = null;
            }
            else {
                // Set local storage
                sessionStorage.setItem('userId', JSON.stringify(userDataObserver));
                // Update userData value
                this.userData = userDataObserver;
            }
        });
    }
    ngOnInit() { }
    ;
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_observable_observable_service__WEBPACK_IMPORTED_MODULE_2__["ObservablesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]])], decls: 13, vars: 11, consts: [[4, "ngIf"], [3, "routerLink"], ["href", "#", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_li_2_Template, 3, 1, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_li_3_Template, 3, 1, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_li_4_Template, 3, 1, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_li_5_Template, 3, 1, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_li_6_Template, 3, 1, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_li_7_Template, 3, 1, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_li_8_Template, 3, 1, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_li_9_Template, 3, 1, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_li_10_Template, 3, 1, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_li_11_Template, 3, 1, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_li_12_Template, 3, 0, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styles: [],
                providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]]
            }]
    }], function () { return [{ type: _services_observable_observable_service__WEBPACK_IMPORTED_MODULE_2__["ObservablesService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/item-post/item-post.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/item-post/item-post.component.ts ***!
  \*********************************************************/
/*! exports provided: ItemPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPostComponent", function() { return ItemPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/*
Import
*/
// Angular


//
/*
Componant configuration
*/
//
/*
Componant class definition
*/
class ItemPostComponent {
    constructor() { }
    ngOnInit() { }
    ;
}
ItemPostComponent.ɵfac = function ItemPostComponent_Factory(t) { return new (t || ItemPostComponent)(); };
ItemPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemPostComponent, selectors: [["app-item-post"]], inputs: { post: "post" }, decls: 2, vars: 2, consts: [[3, "innerText"]], template: function ItemPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerText", ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerText", ctx.post.body);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-item-post',
                templateUrl: './item-post.component.html'
            }]
    }], function () { return []; }, { post: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: "http://localhost:3000/api"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\mysponsport\ANGclient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map