(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-home-page-module"],{

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
class HomePageComponent {
    // Module injection
    constructor(UserService, Router, ObservablesService, cookieService) {
        this.UserService = UserService;
        this.Router = Router;
        this.ObservablesService = ObservablesService;
        this.cookieService = cookieService;
        /*
        Methods
        */
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
    ;
    //
    /*
    Hooks
    */
    ngOnInit() {
        this.getUser();
    }
    ;
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_observable_observable_service__WEBPACK_IMPORTED_MODULE_4__["ObservablesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])], decls: 2, vars: 1, template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userData.athlete.first_name + " " + ctx.userData.athlete.last_name);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                providers: [_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]]
            }]
    }], function () { return [{ type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_observable_observable_service__WEBPACK_IMPORTED_MODULE_4__["ObservablesService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }]; }, null); })();
;


/***/ }),

/***/ "./src/app/routes/home-page/module.ts":
/*!********************************************!*\
  !*** ./src/app/routes/home-page/module.ts ***!
  \********************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./src/app/routes/home-page/router.ts");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page.component */ "./src/app/routes/home-page/home-page.component.ts");
/* harmony import */ var _shared_form_login_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/form-login/module */ "./src/app/shared/form-login/module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/*
Imports
*/
// Angular


// Inner





//
/*
Definition
*/
//
/*
Export
*/
class Module {
}
Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Module });
Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Module_Factory(t) { return new (t || Module)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _router__WEBPACK_IMPORTED_MODULE_2__["Routing"],
            _shared_form_login_module__WEBPACK_IMPORTED_MODULE_4__["FormLoginModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Module, { declarations: [_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _shared_form_login_module__WEBPACK_IMPORTED_MODULE_4__["FormLoginModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _router__WEBPACK_IMPORTED_MODULE_2__["Routing"],
                    _shared_form_login_module__WEBPACK_IMPORTED_MODULE_4__["FormLoginModule"]
                ]
            }]
    }], null, null); })();
;


/***/ }),

/***/ "./src/app/routes/home-page/router.ts":
/*!********************************************!*\
  !*** ./src/app/routes/home-page/router.ts ***!
  \********************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page.component */ "./src/app/routes/home-page/home-page.component.ts");


//
/*
Definition
*/
const route = [
    {
        path: '',
        component: _home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"]
    }
];
//
/*
Export
*/
const Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(route);
//


/***/ })

}]);
//# sourceMappingURL=routes-home-page-module.js.map