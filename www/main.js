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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/crud/crud.service */ "./src/app/services/crud/crud.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");

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
    constructor(CrudService, Router) {
        this.CrudService = CrudService;
        this.Router = Router;
        this.getUserInfo = (email) => {
            // Use CrudService to get user infos
            this.CrudService.readOneItem('user', `email=${email}`)
                .then(data => {
                console.log('SUCCES request', data);
            })
                .catch(error => {
                console.log('ERROR request', error);
            });
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userInfo = yield this.CrudService.readOneItem('user', `email=${localStorage.getItem('userEmail')}`);
            // Check user info
            if (userInfo.length > 0) {
                // Change route endpoint
                this.Router.navigateByUrl('/connected');
            }
            ;
        });
    }
    ;
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_crud_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                template: `
      <app-header></app-header>
      <router-outlet></router-outlet>
    `
            }]
    }], function () { return [{ type: _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


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
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.router */ "./src/app/app.router.ts");
/* harmony import */ var _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/crud/crud.service */ "./src/app/services/crud/crud.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _routes_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/home-page/home-page.component */ "./src/app/routes/home-page/home-page.component.ts");
/* harmony import */ var _routes_connected_page_connected_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/connected-page/connected-page.component */ "./src/app/routes/connected-page/connected-page.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_form_login_form_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/form-login/form-login.component */ "./src/app/shared/form-login/form-login.component.ts");
/* harmony import */ var _shared_item_post_item_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/item-post/item-post.component */ "./src/app/shared/item-post/item-post.component.ts");
/* harmony import */ var _routes_campaign_page_campaign_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routes/campaign-page/campaign-page.component */ "./src/app/routes/campaign-page/campaign-page.component.ts");
/* harmony import */ var _routes_application_page_application_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routes/application-page/application-page.component */ "./src/app/routes/application-page/application-page.component.ts");
/* harmony import */ var _routes_message_page_message_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routes/message-page/message-page.component */ "./src/app/routes/message-page/message-page.component.ts");
/* harmony import */ var _routes_proposition_page_proposition_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./routes/proposition-page/proposition-page.component */ "./src/app/routes/proposition-page/proposition-page.component.ts");
/* harmony import */ var _routes_history_page_history_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./routes/history-page/history-page.component */ "./src/app/routes/history-page/history-page.component.ts");
/* harmony import */ var _routes_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./routes/calendar-page/calendar-page.component */ "./src/app/routes/calendar-page/calendar-page.component.ts");
/* harmony import */ var _routes_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./routes/profile-page/profile-page.component */ "./src/app/routes/profile-page/profile-page.component.ts");
/* harmony import */ var _routes_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./routes/register-page/register-page.component */ "./src/app/routes/register-page/register-page.component.ts");
/* harmony import */ var _routes_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./routes/login-page/login-page.component */ "./src/app/routes/login-page/login-page.component.ts");




// Router


// Services


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_crud_crud_service__WEBPACK_IMPORTED_MODULE_6__["CrudService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_router__WEBPACK_IMPORTED_MODULE_5__["AppRouterModule"], { onSameUrlNavigation: 'reload' })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _routes_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"],
        _routes_connected_page_connected_page_component__WEBPACK_IMPORTED_MODULE_9__["ConnectedPageComponent"],
        _shared_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
        _shared_form_login_form_login_component__WEBPACK_IMPORTED_MODULE_11__["FormLoginComponent"],
        _shared_item_post_item_post_component__WEBPACK_IMPORTED_MODULE_12__["ItemPostComponent"],
        _routes_campaign_page_campaign_page_component__WEBPACK_IMPORTED_MODULE_13__["CampaignPageComponent"],
        _routes_application_page_application_page_component__WEBPACK_IMPORTED_MODULE_14__["ApplicationPageComponent"],
        _routes_message_page_message_page_component__WEBPACK_IMPORTED_MODULE_15__["MessagePageComponent"],
        _routes_proposition_page_proposition_page_component__WEBPACK_IMPORTED_MODULE_16__["PropositionPageComponent"],
        _routes_history_page_history_page_component__WEBPACK_IMPORTED_MODULE_17__["HistoryPageComponent"],
        _routes_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_18__["CalendarPageComponent"],
        _routes_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_19__["ProfilePageComponent"],
        _routes_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_20__["RegisterPageComponent"],
        _routes_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_21__["LoginPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _routes_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"],
                    _routes_connected_page_connected_page_component__WEBPACK_IMPORTED_MODULE_9__["ConnectedPageComponent"],
                    _shared_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                    _shared_form_login_form_login_component__WEBPACK_IMPORTED_MODULE_11__["FormLoginComponent"],
                    _shared_item_post_item_post_component__WEBPACK_IMPORTED_MODULE_12__["ItemPostComponent"],
                    _routes_campaign_page_campaign_page_component__WEBPACK_IMPORTED_MODULE_13__["CampaignPageComponent"],
                    _routes_application_page_application_page_component__WEBPACK_IMPORTED_MODULE_14__["ApplicationPageComponent"],
                    _routes_message_page_message_page_component__WEBPACK_IMPORTED_MODULE_15__["MessagePageComponent"],
                    _routes_proposition_page_proposition_page_component__WEBPACK_IMPORTED_MODULE_16__["PropositionPageComponent"],
                    _routes_history_page_history_page_component__WEBPACK_IMPORTED_MODULE_17__["HistoryPageComponent"],
                    _routes_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_18__["CalendarPageComponent"],
                    _routes_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_19__["ProfilePageComponent"],
                    _routes_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_20__["RegisterPageComponent"],
                    _routes_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_21__["LoginPageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_router__WEBPACK_IMPORTED_MODULE_5__["AppRouterModule"], { onSameUrlNavigation: 'reload' })
                ],
                providers: [_services_crud_crud_service__WEBPACK_IMPORTED_MODULE_6__["CrudService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.router.ts":
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/*! exports provided: AppRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouterModule", function() { return AppRouterModule; });
/* harmony import */ var _routes_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/home-page/home-page.component */ "./src/app/routes/home-page/home-page.component.ts");
/* harmony import */ var _routes_connected_page_connected_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/connected-page/connected-page.component */ "./src/app/routes/connected-page/connected-page.component.ts");
/* harmony import */ var _routes_campaign_page_campaign_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/campaign-page/campaign-page.component */ "./src/app/routes/campaign-page/campaign-page.component.ts");
/* harmony import */ var _routes_message_page_message_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/message-page/message-page.component */ "./src/app/routes/message-page/message-page.component.ts");
/* harmony import */ var _routes_application_page_application_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/application-page/application-page.component */ "./src/app/routes/application-page/application-page.component.ts");
/* harmony import */ var _routes_proposition_page_proposition_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/proposition-page/proposition-page.component */ "./src/app/routes/proposition-page/proposition-page.component.ts");
/* harmony import */ var _routes_history_page_history_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/history-page/history-page.component */ "./src/app/routes/history-page/history-page.component.ts");
/* harmony import */ var _routes_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/calendar-page/calendar-page.component */ "./src/app/routes/calendar-page/calendar-page.component.ts");
/* harmony import */ var _routes_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/profile-page/profile-page.component */ "./src/app/routes/profile-page/profile-page.component.ts");
/* harmony import */ var _routes_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/register-page/register-page.component */ "./src/app/routes/register-page/register-page.component.ts");
/* harmony import */ var _routes_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/login-page/login-page.component */ "./src/app/routes/login-page/login-page.component.ts");
// Inner











//
/*
Export
*/
const AppRouterModule = [
    {
        path: '',
        component: _routes_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__["HomePageComponent"]
    },
    {
        path: 'connected',
        component: _routes_connected_page_connected_page_component__WEBPACK_IMPORTED_MODULE_1__["ConnectedPageComponent"],
    },
    {
        path: 'campagne',
        component: _routes_campaign_page_campaign_page_component__WEBPACK_IMPORTED_MODULE_2__["CampaignPageComponent"],
    },
    {
        path: 'message',
        component: _routes_message_page_message_page_component__WEBPACK_IMPORTED_MODULE_3__["MessagePageComponent"],
    },
    {
        path: 'candidature',
        component: _routes_application_page_application_page_component__WEBPACK_IMPORTED_MODULE_4__["ApplicationPageComponent"],
        //canActivate: [ AuthGuard ],
        children: [
            {
                path: 'candidature/:id',
                component: _routes_application_page_application_page_component__WEBPACK_IMPORTED_MODULE_4__["ApplicationPageComponent"]
            }
        ]
    },
    {
        path: 'proposition',
        component: _routes_proposition_page_proposition_page_component__WEBPACK_IMPORTED_MODULE_5__["PropositionPageComponent"],
        //canActivate: [ AuthGuard ],
        children: [
            {
                path: 'proposition/:id',
                component: _routes_proposition_page_proposition_page_component__WEBPACK_IMPORTED_MODULE_5__["PropositionPageComponent"]
            }
        ]
    },
    {
        path: 'historique',
        component: _routes_history_page_history_page_component__WEBPACK_IMPORTED_MODULE_6__["HistoryPageComponent"],
    },
    {
        path: 'calendrier',
        component: _routes_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_7__["CalendarPageComponent"],
    },
    {
        path: 'profil',
        component: _routes_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_8__["ProfilePageComponent"],
    },
    {
        path: 'inscription',
        component: _routes_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_9__["RegisterPageComponent"]
    },
    {
        path: 'connexion',
        component: _routes_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_10__["LoginPageComponent"]
    }
];
//


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

/***/ "./src/app/routes/connected-page/connected-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/routes/connected-page/connected-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConnectedPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedPageComponent", function() { return ConnectedPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/crud/crud.service */ "./src/app/services/crud/crud.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_item_post_item_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/item-post/item-post.component */ "./src/app/shared/item-post/item-post.component.ts");

/*
Import
*/
// Angular





function ConnectedPageComponent_article_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-item-post", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("post", item_r71);
} }
//
/*
Componant configuration
*/
//
/*
Componant class definition
*/
class ConnectedPageComponent {
    constructor(CrudService) {
        this.CrudService = CrudService;
        //
        /*
        Methods
        */
        // Method to get the post list
        this.getPostList = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.postCollection = yield this.CrudService.readAllItems('posts');
        });
    }
    //
    /*
    Hooks
    */
    ngOnInit() {
        // Get the poost list
        this.getPostList();
    }
    ;
}
ConnectedPageComponent.ɵfac = function ConnectedPageComponent_Factory(t) { return new (t || ConnectedPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_crud_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"])); };
ConnectedPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConnectedPageComponent, selectors: [["app-connected-page"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "post"]], template: function ConnectedPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ConnectedPageComponent_article_0_Template, 2, 1, "article", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.postCollection);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_item_post_item_post_component__WEBPACK_IMPORTED_MODULE_4__["ItemPostComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConnectedPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-connected-page',
                templateUrl: './connected-page.component.html',
            }]
    }], function () { return [{ type: _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] }]; }, null); })();
;


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

/***/ "./src/app/routes/home-page/home-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/home-page/home-page.component.ts ***!
  \*********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/crud/crud.service */ "./src/app/services/crud/crud.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_observable_observable_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/observable/observable.service */ "./src/app/services/observable/observable.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_form_login_form_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/form-login/form-login.component */ "./src/app/shared/form-login/form-login.component.ts");
/*
Import
*/
// Angular







function HomePageComponent_app_form_login_0_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-form-login", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formSubmit", function HomePageComponent_app_form_login_0_Template_app_form_login_formSubmit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r87.getUserInfo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
//
class HomePageComponent {
    constructor(CrudService, Router, ObservablesService) {
        this.CrudService = CrudService;
        this.Router = Router;
        this.ObservablesService = ObservablesService;
        this.getUserInfo = (email) => {
            // Get user infos
            const userInfo = this.CrudService.readOneItem('user', `email=${email}`);
            // Check user info
            //if(userInfo.length > 0) {
            // Change route endpoint
            this.Router.navigateByUrl('/connected');
            //}
        };
        // Get user data observer
        this.ObservablesService.getUserInfo().subscribe(userDataObserver => {
            console.log(userDataObserver);
            if (userDataObserver === null) {
                this.userData = null;
            }
            else {
                if (userDataObserver.data.length > 0) {
                    console.log(userDataObserver);
                    // Set local storage
                    localStorage.setItem('userEmail', userDataObserver.data[0].email);
                    // Update userData value
                    this.userData = userDataObserver.data[0];
                }
                else {
                    this.userData = null;
                }
            }
        });
    }
    ngOnInit() { }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_crud_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_observable_observable_service__WEBPACK_IMPORTED_MODULE_3__["ObservablesService"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 1, vars: 1, consts: [[3, "formSubmit", 4, "ngIf"], [3, "formSubmit"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomePageComponent_app_form_login_0_Template, 1, 0, "app-form-login", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_form_login_form_login_component__WEBPACK_IMPORTED_MODULE_5__["FormLoginComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_observable_observable_service__WEBPACK_IMPORTED_MODULE_3__["ObservablesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/routes/login-page/login-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/routes/login-page/login-page.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoginPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 2, vars: 0, template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page',
                templateUrl: './login-page.component.html',
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


class ProfilePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfilePageComponent.ɵfac = function ProfilePageComponent_Factory(t) { return new (t || ProfilePageComponent)(); };
ProfilePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfilePageComponent, selectors: [["app-profile-page"]], decls: 2, vars: 0, template: function ProfilePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "profile-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-page',
                templateUrl: './profile-page.component.html',
                styles: [],
            }]
    }], function () { return []; }, null); })();


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

/***/ "./src/app/services/crud/crud.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/crud/crud.service.ts ***!
  \***********************************************/
/*! exports provided: CrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudService", function() { return CrudService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _observable_observable_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observable/observable.service */ "./src/app/services/observable/observable.service.ts");
// Angular






//
/*
Definition
*/
class CrudService {
    //
    // Inject module(s) in the service
    constructor(HttpClient, ObservablesService) {
        this.HttpClient = HttpClient;
        this.ObservablesService = ObservablesService;
        /*
        Methods to get API responses
        */
        // Get the API response
        this.getData = (endpoint, apiResponse) => {
            // Switch endpoint to set observable value
            switch (endpoint) {
                case 'user':
                    // Set user info observabale value
                    this.ObservablesService.setObservableData('user', apiResponse);
                    // Return data
                    return apiResponse || {};
                    break;
                case 'posts':
                    // Set post list observabale value
                    this.ObservablesService.setObservableData('post', apiResponse);
                    // Return data
                    return apiResponse || {};
                    break;
                default:
                    // Retun data anytime
                    return apiResponse || {};
                    break;
            }
            ;
        };
        // Get the API error
        this.handleError = (apiError) => Promise.reject(apiError.error);
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    ;
    // CRUD method: read item
    readOneItem(endpoint, param) {
        return this.HttpClient.get(`${this.apiUrl}/${endpoint}?${param}`)
            .toPromise()
            .then(data => this.getData(endpoint, data))
            .catch(this.handleError);
    }
    ;
    // CRUD method: read all items
    readAllItems(endpoint) {
        return this.HttpClient.get(`https://jsonplaceholder.typicode.com/posts/`)
            .toPromise()
            .then(data => this.getData(endpoint, data))
            .catch(this.handleError);
    }
    ;
    // CRUD method: create item
    createItem(endpoint, data) {
        // Set header
        let myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        myHeader.append('Content-Type', 'application/json');
        // Launch request
        return this.HttpClient.post(`https://jsonplaceholder.typicode.com/posts`, data, { headers: myHeader })
            .toPromise()
            .then(data => this.getData(endpoint, data))
            .catch(this.handleError);
    }
    ;
    // CRUD method: edit an item
    updateItem(endpoint, _id, data) {
        // Set header
        let myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        myHeader.append('Content-Type', 'application/json');
        // Launch request
        return this.HttpClient.put(`https://jsonplaceholder.typicode.com/posts/${_id}`, data, { headers: myHeader })
            .toPromise()
            .then(data => this.getData(endpoint, data))
            .catch(this.handleError);
    }
    ;
    // CRUD method: delete an item
    deleteItem(endpoint, _id) {
        // Set header
        let myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        myHeader.append('Content-Type', 'application/json');
        // Launch request
        return this.HttpClient.delete(`https://jsonplaceholder.typicode.com/posts/${_id}`, { headers: myHeader })
            .toPromise()
            .then(data => this.getData(endpoint, data))
            .catch(this.handleError);
    }
    ;
}
CrudService.ɵfac = function CrudService_Factory(t) { return new (t || CrudService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_observable_observable_service__WEBPACK_IMPORTED_MODULE_3__["ObservablesService"])); };
CrudService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CrudService, factory: CrudService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrudService, [{
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
                case 'post':
                    this.postList.next(data);
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
    getPostList() {
        return this.postList;
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

/***/ "./src/app/shared/form-login/form-login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/form-login/form-login.component.ts ***!
  \***********************************************************/
/*! exports provided: FormLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoginComponent", function() { return FormLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class FormLoginComponent {
    // Inject FormBuilder
    constructor(FormBuilder) {
        this.FormBuilder = FormBuilder;
        this.formSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Method to reset form
        this.resetForm = () => {
            this.formData = this.FormBuilder.group({
                email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
        };
    }
    // Start
    ngOnInit() {
        this.resetForm();
    }
}
FormLoginComponent.ɵfac = function FormLoginComponent_Factory(t) { return new (t || FormLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
FormLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormLoginComponent, selectors: [["app-form-login"]], outputs: { formSubmit: "formSubmit" }, decls: 4, vars: 2, consts: [[3, "formGroup", "submit"], ["formControlName", "email", "type", "email", "name", "email", "required", "", "minlength", "5", "placeholder", "Your email"], ["type", "submit", 3, "disabled"]], template: function FormLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function FormLoginComponent_Template_form_submit_0_listener() { return ctx.formSubmit.emit(ctx.formData.value.email); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formData.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-login',
                templateUrl: './form-login.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { formSubmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
;


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
/* harmony import */ var _services_observable_observable_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/observable/observable.service */ "./src/app/services/observable/observable.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function HeaderComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tableau de bord");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");
} }
function HeaderComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Campagnes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/campagne");
} }
function HeaderComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/message");
} }
function HeaderComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Candidatures");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/candidature");
} }
function HeaderComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Propositions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/proposition");
} }
function HeaderComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Historique");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/historique");
} }
function HeaderComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mon calendrier");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/calendrier");
} }
function HeaderComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mon profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/profil");
} }
function HeaderComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Inscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/inscription");
} }
function HeaderComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/connexion");
} }
function HeaderComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_12_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "D\u00E9connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_h1_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h1", 4);
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerText", ctx_r64.userData.first_name);
} }
class HeaderComponent {
    constructor(ObservablesService) {
        this.ObservablesService = ObservablesService;
        this.logout = () => {
            // Delete localstorage
            localStorage.removeItem('userEmail');
            // Set user info observabale value
            this.ObservablesService.setObservableData('user', null);
        };
        // Get user data observer
        this.ObservablesService.getUserInfo().subscribe(userDataObserver => {
            if (userDataObserver === null) {
                this.userData = null;
            }
            else {
                if (userDataObserver.data.length > 0) {
                    // Set local storage
                    localStorage.setItem('userEmail', userDataObserver.data[0].email);
                    // Update userData value
                    this.userData = userDataObserver.data[0];
                }
                else {
                    this.userData = null;
                }
            }
        });
    }
    ngOnInit() { }
    ;
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_observable_observable_service__WEBPACK_IMPORTED_MODULE_1__["ObservablesService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 14, vars: 12, consts: [[4, "ngIf"], [3, "innerText", 4, "ngIf"], [3, "routerLink"], ["href", "#", 3, "click"], [3, "innerText"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_h1_13_Template, 1, 1, "h1", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userData);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData !== null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _services_observable_observable_service__WEBPACK_IMPORTED_MODULE_1__["ObservablesService"] }]; }, null); })();


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