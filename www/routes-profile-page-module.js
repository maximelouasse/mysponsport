(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-profile-page-module"],{

/***/ "./src/app/routes/profile-page/module.ts":
/*!***********************************************!*\
  !*** ./src/app/routes/profile-page/module.ts ***!
  \***********************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-page.component */ "./src/app/routes/profile-page/profile-page.component.ts");
/*
Imports
*/
// Angular




// Inner


//
/*
Definition & export
*/
class Module {
}
Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Module });
Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Module_Factory(t) { return new (t || Module)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Module, { declarations: [_profile_page_component__WEBPACK_IMPORTED_MODULE_4__["ProfilePageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]], exports: [_profile_page_component__WEBPACK_IMPORTED_MODULE_4__["ProfilePageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_profile_page_component__WEBPACK_IMPORTED_MODULE_4__["ProfilePageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
                ],
                exports: [_profile_page_component__WEBPACK_IMPORTED_MODULE_4__["ProfilePageComponent"]]
            }]
    }], null, null); })();
;


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
/* harmony import */ var _services_observable_observable_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/observable/observable.service */ "./src/app/services/observable/observable.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ProfilePageComponent_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h1", 1);
} if (rf & 2) {
    const ctx_r527 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerText", ctx_r527.userData.athlete.first_name);
} }
class ProfilePageComponent {
    constructor(ObservablesService) {
        this.ObservablesService = ObservablesService;
        // Get user data observer
        this.ObservablesService.getUserInfo().subscribe(userDataObserver => {
            if (userDataObserver === null || userDataObserver === 'undefined') {
                this.userData = null;
            }
            else {
                // Set local storage
                sessionStorage.setItem('userData', JSON.stringify(userDataObserver));
                // Update userData value
                this.userData = userDataObserver;
            }
            console.log(this.userData);
        });
    }
    ngOnInit() { }
    ;
}
ProfilePageComponent.ɵfac = function ProfilePageComponent_Factory(t) { return new (t || ProfilePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_observable_observable_service__WEBPACK_IMPORTED_MODULE_1__["ObservablesService"])); };
ProfilePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfilePageComponent, selectors: [["app-profile-page"]], decls: 3, vars: 1, consts: [[3, "innerText", 4, "ngIf"], [3, "innerText"]], template: function ProfilePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "profile-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfilePageComponent_h1_2_Template, 1, 1, "h1", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData !== null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-page',
                templateUrl: './profile-page.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _services_observable_observable_service__WEBPACK_IMPORTED_MODULE_1__["ObservablesService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=routes-profile-page-module.js.map