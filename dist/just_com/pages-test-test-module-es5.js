(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-test-test-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/test/first/first.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/test/first/first.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-body\">\n        <h2>Test of Angualr Material</h2>\n        <div class=\"row\">\n            <div class=\"col-3\">\n                <app-select-date [control]=\"''\"></app-select-date>\n            </div>\n            <div class=\"col-6\">\n                <mat-form-field>\n                    <mat-label>الإسم</mat-label>\n                    <input matInput placeholder=\"Ex. Pizza\" value=\"سفيان\"\n                           >\n                </mat-form-field>\n            </div>\n            <style>\n                .rounded-t {\n                    border-radius: 30px !important;\n                }\n            </style>\n\n            <mat-form-field appearance=\"\">\n                <mat-label>Favorite food</mat-label>\n                <input matInput placeholder=\"Ex. Pizza\"\n                       class=\"form-control px-3 rounded-t float-right primary-shadow\">\n            </mat-form-field>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/test/second/second.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/test/second/second.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<h1>test table</h1>-->\n\n<app-personne-physique></app-personne-physique>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/test/third/third.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/test/third/third.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-test-list></app-test-list>\n"

/***/ }),

/***/ "./src/app/pages/test/first/first.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/test/first/first.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3QvZmlyc3QvZmlyc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/test/first/first.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/test/first/first.component.ts ***!
  \*****************************************************/
/*! exports provided: FirstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstComponent", function() { return FirstComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FirstComponent = /** @class */ (function () {
    function FirstComponent() {
    }
    FirstComponent.prototype.ngOnInit = function () {
    };
    FirstComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-first',
            template: __webpack_require__(/*! raw-loader!./first.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/test/first/first.component.html"),
            styles: [__webpack_require__(/*! ./first.component.scss */ "./src/app/pages/test/first/first.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FirstComponent);
    return FirstComponent;
}());



/***/ }),

/***/ "./src/app/pages/test/second/second.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/test/second/second.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3Qvc2Vjb25kL3NlY29uZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/test/second/second.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/test/second/second.component.ts ***!
  \*******************************************************/
/*! exports provided: SecondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondComponent", function() { return SecondComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SecondComponent = /** @class */ (function () {
    function SecondComponent() {
    }
    SecondComponent.prototype.ngOnInit = function () {
    };
    SecondComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-second',
            template: __webpack_require__(/*! raw-loader!./second.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/test/second/second.component.html"),
            styles: [__webpack_require__(/*! ./second.component.scss */ "./src/app/pages/test/second/second.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SecondComponent);
    return SecondComponent;
}());



/***/ }),

/***/ "./src/app/pages/test/test-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/test/test-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestRoutingModule", function() { return TestRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_test_first_first_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/test/first/first.component */ "./src/app/pages/test/first/first.component.ts");
/* harmony import */ var _pages_test_second_second_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pages/test/second/second.component */ "./src/app/pages/test/second/second.component.ts");
/* harmony import */ var _pages_test_third_third_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pages/test/third/third.component */ "./src/app/pages/test/third/third.component.ts");
/* harmony import */ var _app_components_personnePhysique_personne_physique_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/personnePhysique/personne-physique.component */ "./src/app/components/personnePhysique/personne-physique.component.ts");
/* harmony import */ var _app_components_personne_morale_personne_morale_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/components/personne-morale/personne-morale.component */ "./src/app/components/personne-morale/personne-morale.component.ts");








var routes = [
    {
        path: '',
        children: [
            {
                path: 'first',
                component: _pages_test_first_first_component__WEBPACK_IMPORTED_MODULE_3__["FirstComponent"],
                data: {
                    title: 'Currency Page'
                }
            },
            {
                path: 'second',
                component: _pages_test_second_second_component__WEBPACK_IMPORTED_MODULE_4__["SecondComponent"],
                data: {
                    title: 'Currency Page'
                }
            },
            {
                path: 'third',
                component: _pages_test_third_third_component__WEBPACK_IMPORTED_MODULE_5__["ThirdComponent"],
                data: {
                    title: 'Currency Page'
                }
            },
            {
                path: 'ppp',
                component: _app_components_personnePhysique_personne_physique_component__WEBPACK_IMPORTED_MODULE_6__["PersonnePhysiqueComponent"],
                data: {}
            },
            {
                path: 'mmm',
                component: _app_components_personne_morale_personne_morale_component__WEBPACK_IMPORTED_MODULE_7__["PersonneMoraleComponent"],
                data: {}
            }
        ]
    }
];
var TestRoutingModule = /** @class */ (function () {
    function TestRoutingModule() {
    }
    TestRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TestRoutingModule);
    return TestRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/test/test.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/test/test.module.ts ***!
  \*******************************************/
/*! exports provided: TestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestModule", function() { return TestModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_test_test_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/test/test-routing.module */ "./src/app/pages/test/test-routing.module.ts");
/* harmony import */ var _first_first_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./first/first.component */ "./src/app/pages/test/first/first.component.ts");
/* harmony import */ var _second_second_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./second/second.component */ "./src/app/pages/test/second/second.component.ts");
/* harmony import */ var _app_components_ui_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/ui-components.module */ "./src/app/components/ui-components.module.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _third_third_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./third/third.component */ "./src/app/pages/test/third/third.component.ts");










var TestModule = /** @class */ (function () {
    function TestModule() {
    }
    TestModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _first_first_component__WEBPACK_IMPORTED_MODULE_4__["FirstComponent"],
                _second_second_component__WEBPACK_IMPORTED_MODULE_5__["SecondComponent"],
                _third_third_component__WEBPACK_IMPORTED_MODULE_9__["ThirdComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _pages_test_test_routing_module__WEBPACK_IMPORTED_MODULE_3__["TestRoutingModule"],
                _app_components_ui_components_module__WEBPACK_IMPORTED_MODULE_6__["UIComponentsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"]
            ],
        })
    ], TestModule);
    return TestModule;
}());



/***/ }),

/***/ "./src/app/pages/test/third/third.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/test/third/third.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3QvdGhpcmQvdGhpcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/test/third/third.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/test/third/third.component.ts ***!
  \*****************************************************/
/*! exports provided: ThirdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdComponent", function() { return ThirdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThirdComponent = /** @class */ (function () {
    function ThirdComponent() {
    }
    ThirdComponent.prototype.ngOnInit = function () {
    };
    ThirdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-third',
            template: __webpack_require__(/*! raw-loader!./third.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/test/third/third.component.html"),
            styles: [__webpack_require__(/*! ./third.component.scss */ "./src/app/pages/test/third/third.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ThirdComponent);
    return ThirdComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-test-test-module-es5.js.map