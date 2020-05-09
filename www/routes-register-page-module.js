(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-register-page-module"],{

/***/ "./src/app/routes/register-page/module.ts":
/*!************************************************!*\
  !*** ./src/app/routes/register-page/module.ts ***!
  \************************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_form_register_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/form-register/module */ "./src/app/shared/form-register/module.ts");
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
            _shared_form_register_module__WEBPACK_IMPORTED_MODULE_2__["FormRegisterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Module, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_form_register_module__WEBPACK_IMPORTED_MODULE_2__["FormRegisterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_form_register_module__WEBPACK_IMPORTED_MODULE_2__["FormRegisterModule"]
                ]
            }]
    }], null, null); })();
;


/***/ }),

/***/ "./src/app/shared/form-register/form-register.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/form-register/form-register.component.ts ***!
  \*****************************************************************/
/*! exports provided: FormRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRegisterComponent", function() { return FormRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FormRegisterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FormRegisterComponent.ɵfac = function FormRegisterComponent_Factory(t) { return new (t || FormRegisterComponent)(); };
FormRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormRegisterComponent, selectors: [["app-form-register"]], decls: 2, vars: 0, template: function FormRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "form-register works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormRegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-register',
                templateUrl: './form-register.component.html',
                styles: [],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/form-register/module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/form-register/module.ts ***!
  \************************************************/
/*! exports provided: FormRegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRegisterModule", function() { return FormRegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _form_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-register.component */ "./src/app/shared/form-register/form-register.component.ts");
/*
Imports
*/
// Angular




// Inner


//
/*
Definition & export
*/
class FormRegisterModule {
}
FormRegisterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormRegisterModule });
FormRegisterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FormRegisterModule_Factory(t) { return new (t || FormRegisterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormRegisterModule, { declarations: [_form_register_component__WEBPACK_IMPORTED_MODULE_4__["FormRegisterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]], exports: [_form_register_component__WEBPACK_IMPORTED_MODULE_4__["FormRegisterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormRegisterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_form_register_component__WEBPACK_IMPORTED_MODULE_4__["FormRegisterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                ],
                exports: [_form_register_component__WEBPACK_IMPORTED_MODULE_4__["FormRegisterComponent"]]
            }]
    }], null, null); })();
;


/***/ })

}]);
//# sourceMappingURL=routes-register-page-module.js.map