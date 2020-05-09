(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-login-page-module"],{

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
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_observable_observable_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/observable/observable.service */ "./src/app/services/observable/observable.service.ts");
/* harmony import */ var _shared_form_login_form_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/form-login/form-login.component */ "./src/app/shared/form-login/form-login.component.ts");
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
class LoginPageComponent {
    // Module injection
    constructor(AuthService, Router, cookieService, ObservablesService) {
        this.AuthService = AuthService;
        this.Router = Router;
        this.cookieService = cookieService;
        this.ObservablesService = ObservablesService;
        // Register form data
        this.resetFormDataRegister = false;
        this.displayReturnRegister = false;
        // Login form data
        this.resetFormDataLogin = false;
        this.displayReturnLogin = false;
        /*
        Methods
        */
        // Register new user
        this.registerUser = (data) => {
            // Send user data
            this.AuthService.register(data)
                .then((apiResponse) => {
                // API success response
                this.messageClassRegister = 'success';
                this.apiMessageRegister = apiResponse.message;
                this.displayReturnRegister = true;
                // Reset form data
                this.resetFormDataRegister = true;
                this.cookieService.set('userId', apiResponse.data.user._id);
                this.Router.navigate(['/']);
            })
                .catch((apiResponse) => {
                // API error response
                this.messageClassRegister = 'error';
                this.apiMessageRegister = apiResponse.message;
                this.displayReturnRegister = true;
            });
        };
        // Connnect new user
        this.connectUser = (data) => {
            // Send user data
            this.AuthService.login(data)
                .then((apiResponse) => {
                // API success response
                this.messageClassLogin = 'success';
                this.apiMessageLogin = apiResponse.message;
                this.displayReturnLogin = true;
                // Reset form data
                this.resetFormDataLogin = true;
                console.log(apiResponse.data);
                this.ObservablesService.setObservableData('user', apiResponse.data);
                this.cookieService.set('userId', apiResponse.data.user._id);
                this.Router.navigate(['/']);
            })
                .catch((apiResponse) => {
                // API error response
                this.messageClassLogin = 'error';
                this.apiMessageLogin = apiResponse.message;
                this.displayReturnLogin = true;
            });
        };
    }
    ;
    //
    /*
    Hooks
    */
    ngOnInit() { }
    ;
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_observable_observable_service__WEBPACK_IMPORTED_MODULE_4__["ObservablesService"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])], decls: 3, vars: 1, consts: [[3, "resetFormData", "sendFormData"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Connexion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-form-login", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sendFormData", function LoginPageComponent_Template_app_form_login_sendFormData_2_listener($event) { return ctx.connectUser($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resetFormData", ctx.resetFormDataLogin);
    } }, directives: [_shared_form_login_form_login_component__WEBPACK_IMPORTED_MODULE_5__["FormLoginComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page',
                templateUrl: './login-page.component.html',
                providers: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]]
            }]
    }], function () { return [{ type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }, { type: _services_observable_observable_service__WEBPACK_IMPORTED_MODULE_4__["ObservablesService"] }]; }, null); })();
;


/***/ }),

/***/ "./src/app/routes/login-page/module.ts":
/*!*********************************************!*\
  !*** ./src/app/routes/login-page/module.ts ***!
  \*********************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./src/app/routes/login-page/router.ts");
/* harmony import */ var _login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-page.component */ "./src/app/routes/login-page/login-page.component.ts");
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Module, { declarations: [_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _shared_form_login_module__WEBPACK_IMPORTED_MODULE_4__["FormLoginModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _router__WEBPACK_IMPORTED_MODULE_2__["Routing"],
                    _shared_form_login_module__WEBPACK_IMPORTED_MODULE_4__["FormLoginModule"]
                ]
            }]
    }], null, null); })();
;


/***/ }),

/***/ "./src/app/routes/login-page/router.ts":
/*!*********************************************!*\
  !*** ./src/app/routes/login-page/router.ts ***!
  \*********************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-page.component */ "./src/app/routes/login-page/login-page.component.ts");


//
/*
Definition
*/
const route = [
    {
        path: '',
        component: _login_page_component__WEBPACK_IMPORTED_MODULE_1__["LoginPageComponent"]
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
//# sourceMappingURL=routes-login-page-module.js.map