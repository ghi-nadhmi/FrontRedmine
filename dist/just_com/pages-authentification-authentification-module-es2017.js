(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-authentification-authentification-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/authentification/forgot-password/forgot-password-page.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/authentification/forgot-password/forgot-password-page.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Forgot Password Starts-->\n<section id=\"forgot-password\">\n  <div class=\"container-fluid forgot-password-bg\">\n    <div\n      class=\"row full-height-vh m-0  d-flex align-items-center justify-content-center\"\n    >\n      <div class=\"col-md-7 col-sm-12\">\n        <div class=\"card\">\n          <div class=\"card-content\">\n            <div class=\"card-body fg-image\">\n              <div class=\"row m-0\">\n                <div class=\"col-lg-6 d-none d-lg-block text-center py-3\">\n                  <img\n                    src=\"../../../../assets/img/gallery/forgot.png\"\n                    alt=\"\"\n                    class=\"img-fluid\"\n                    width=\"300\"\n                    height=\"230\"\n                  />\n                </div>\n                <div class=\"col-lg-6 col-md-12 bg-white px-4 pt-3\">\n                  <h4 class=\"card-title mb-2\">Recover Password</h4>\n                  <p class=\"card-text mb-3\">\n                    Please enter your email address and we'll send you\n                    instructions on how to reset your password.\n                  </p>\n                  <input\n                    type=\"text\"\n                    class=\"form-control mb-3\"\n                    placeholder=\"Email\"\n                  />\n                  <div class=\"fg-actions d-flex justify-content-between\">\n                    <div class=\"login-btn\">\n                      <button class=\"btn btn-outline-primary\">\n                        <a\n                          class=\"text-decoration-none\"\n                          [routerLink]=\"['/authentification/login']\"\n                          >Back To Login</a\n                        >\n                      </button>\n                    </div>\n                    <div class=\"recover-pass\">\n                      <button class=\"btn btn-primary\">\n                        <a\n                          class=\"text-decoration-none text-white\"\n                          [routerLink]=\"['/pages/forgotpassword']\"\n                        >\n                          Recover\n                        </a>\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Forgot Password Ends-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/authentification/login/login-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/authentification/login/login-page.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Login Page Starts-->\n<section id=\"login\">\n    <div class=\"container-fluid\">\n        <div class=\"row full-height-vh m-0\">\n            <div class=\"col-12 d-flex align-items-center justify-content-center\">\n                <div class=\"card\" [ngClass]=\"{'login-card': currentLang === 'fr'}\">\n                    <div class=\"card-content\">\n                        <div class=\"card-body login-img\">\n                            <div class=\"row m-0\">\n                                <div\n                                    class=\"col-lg-6 d-sm-block py-2 px-3 text-center align-middle float-right background-image\">\n                                    <!--\n                                    <div class=\"row col-md-12\">\n                                        <img src=\"../../assets/img/round-flag-mauritanie.png\" alt=\"\"\n                                             align=\"middle\" class=\" img-logo \"/>\n                                    </div>\n                                    -->\n                                    <div class=\"row col-md-12 justify-content-center\">\n                                        <h1 class=\"text-form-login\"\n                                            [ngClass]=\"{'text-form-login-ar': currentLang=='ar', 'text-form-login-fr': currentLang=='fr'}\">\n                                            {{ 'Message' | translate }}\n                                        </h1>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-lg-6 col-md-12 bg-white px-4 pt-3\">\n                                    <div class=\"row justify-content-center\">\n                                        <img class=\"logo-header\" src=\"../../assets/img/logo-justice-mauritanie.png\">\n                                        <span class=\"vertical-line bg-grey bg-darken-1\"></span>\n                                        <div class=\"col-8 mt-auto mb-auto mx-n2\">\n                                            <div class=\"row\">\n                                                <h4 class=\"titleLogin-form col-12\"\n                                                    [ngClass]=\"{'text-form-title-ar': currentLang=='ar'}\">{{\n                                                    'Republique' | translate }}</h4>\n                                                <h4 class=\"titleLogin-form col-12\"\n                                                    [ngClass]=\"{'text-form-title-ar': currentLang=='ar'}\">{{ 'Ministere'\n                                                    | translate }}</h4>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <h4 class=\"text-login mt-5\" [ngClass]=\"{'connectedYou-ar': currentLang=='ar'}\">\n                                        {{'ConnectedYou'|translate}}</h4>\n                                    <form [formGroup]=\"loginForm\" class=\"mt-5\">\n                                        <div class=\"input-group mb-3\">\n                                            <div class=\"input-group-append\">\n                                                <div class=\"input-group-text\">\n                                                    <span class=\"ft-mail\"></span>\n                                                </div>\n                                            </div>\n                                            <input type=\"text\" class=\"form-control  text-arial\"\n                                                placeholder=\"{{'userName' | translate}}\" formControlName=\"username\" />\n\n                                        </div>\n                                        <div class=\"input-group mb-3\">\n                                            <div class=\"input-group-append\">\n                                                <div class=\"input-group-text\">\n                                                    <span class=\"ft-lock\"></span>\n                                                </div>\n                                            </div>\n                                            <input type=\"password\" class=\"form-control text-arial\"\n                                                placeholder=\"{{'password' | translate}}\" formControlName=\"password\" />\n\n                                        </div>\n                                        <div class=\"fg-actions\">\n                                            <div class=\"row center\">\n\n                                                <div class=\"login-btn col-12\">\n                                                    <button class=\"btn col-12 round bg-green bg-darken-4\" type=\"submit\"\n                                                        (click)=\"login()\">\n                                                        <a class=\"text-decoration-none text-white text-arial\"><span\n                                                                style=\"ont-weight: bold\">{{'Login' |\n                                                                translate}}</span></a>\n                                                    </button>\n                                                </div>\n                                            </div>\n                                            <div class=\"float-left\"\n                                                [ngClass]=\"{'lang-title-ar': currentLang=='ar', 'lang-title-fr': currentLang=='fr'}\">\n                                                <span>{{'Version' |  translate}} : 1.0</span> \n                                            </div>\n                                            <div class=\"float-right\"\n                                                [ngClass]=\"{'lang-title-ar': currentLang=='ar', 'lang-title-fr': currentLang=='fr'}\">\n                                                <a class=\"text-arial\"\n                                                    (click)=\"$event.preventDefault();onChangeLanguage(currentLang==='ar'?'fr':'ar')\">\n                                                    <span *ngIf=\"currentLang==='ar'\"\n                                                        style=\"font-size: 1.35rem; text-decoration: underline;\">{{'Francais'\n                                                        | translate}}</span>\n                                                    <span *ngIf=\"currentLang==='fr'\"\n                                                        style=\"font-size: 1.1rem; text-decoration: underline;\">Arabe</span>\n                                                </a>\n                                            </div>\n                                        </div>\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Login Page Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/authentification/register/register-page.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/authentification/register/register-page.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Registration Page Starts-->\n<section id=\"regestration\">\n  <div class=\"container-fluid\">\n    <div class=\"row full-height-vh m-0\">\n      <div class=\"col-12 d-flex align-items-center justify-content-center\">\n        <div class=\"card\">\n          <div class=\"card-content\">\n            <div class=\"card-body register-img\">\n              <div class=\"row m-0\">\n                <div class=\"col-lg-6 d-none d-lg-block py-2 px-3 text-center\">\n                  <img\n                    src=\"../../assets/img/gallery/register.png\"\n                    alt=\"\"\n                    class=\"img-fluid mt-3 pl-3\"\n                    width=\"400\"\n                    height=\"230\"\n                  />\n                </div>\n                <div class=\"col-lg-6 col-md-12 pt-3 px-4 bg-white\">\n                  <h4 class=\"card-title mb-2\">Create Account</h4>\n                  <p class=\"card-text mb-3\">\n                    Fill the below form to create a new account.\n                  </p>\n                  <input\n                    type=\"text\"\n                    class=\"form-control mb-3\"\n                    placeholder=\"Name\"\n                  />\n                  <input\n                    type=\"email\"\n                    class=\"form-control mb-3\"\n                    placeholder=\"Email\"\n                  />\n                  <input\n                    type=\"password\"\n                    class=\"form-control mb-3\"\n                    placeholder=\"Password\"\n                  />\n                  <input\n                    type=\"password\"\n                    class=\"form-control mb-3\"\n                    placeholder=\"Confirm Password\"\n                  />\n                  <div\n                    class=\"custom-control custom-checkbox custom-control-inline mb-3\"\n                  >\n                    <input\n                      type=\"checkbox\"\n                      id=\"customCheckboxInline1\"\n                      name=\"customCheckboxInline1\"\n                      class=\"custom-control-input\"\n                      checked\n                    />\n                    <label\n                      class=\"custom-control-label\"\n                      for=\"customCheckboxInline1\"\n                    >\n                      I accept the terms & conditions.\n                    </label>\n                  </div>\n                  <div class=\"fg-actions d-flex justify-content-between\">\n                    <div class=\"login-btn\">\n                      <button class=\"btn btn-outline-primary\">\n                        <a\n                          href=\"login-page.html\"\n                          class=\"text-decoration-none\"\n                          [routerLink]=\"['/authentification/login']\"\n                        >\n                          Back To Login\n                        </a>\n                      </button>\n                    </div>\n                    <div class=\"recover-pass\">\n                      <button class=\"btn btn-primary\">\n                        <a class=\"text-decoration-none text-white\">\n                          Register\n                        </a>\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Registration Page Ends-->\n"

/***/ }),

/***/ "./src/app/pages/authentification/authentification-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/authentification/authentification-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: AuthentificationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthentificationRoutingModule", function() { return AuthentificationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password/forgot-password-page.component */ "./src/app/pages/authentification/forgot-password/forgot-password-page.component.ts");
/* harmony import */ var _login_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login-page.component */ "./src/app/pages/authentification/login/login-page.component.ts");
/* harmony import */ var _register_register_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register-page.component */ "./src/app/pages/authentification/register/register-page.component.ts");






const routes = [
    {
        path: '',
        children: [
            {
                path: 'forgotpassword',
                component: _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPageComponent"],
                data: {
                    title: 'Forgot Password Page'
                }
            },
            {
                path: 'login',
                component: _login_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"],
                data: {
                    title: 'Login Page'
                }
            },
            {
                path: 'register',
                component: _register_register_page_component__WEBPACK_IMPORTED_MODULE_5__["RegisterPageComponent"],
                data: {
                    title: 'Register Page'
                }
            }
        ]
    }
];
let AuthentificationRoutingModule = class AuthentificationRoutingModule {
};
AuthentificationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AuthentificationRoutingModule);



/***/ }),

/***/ "./src/app/pages/authentification/authentification.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/authentification/authentification.module.ts ***!
  \*******************************************************************/
/*! exports provided: AuthentificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthentificationModule", function() { return AuthentificationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _authentification_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentification-routing.module */ "./src/app/pages/authentification/authentification-routing.module.ts");
/* harmony import */ var _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password/forgot-password-page.component */ "./src/app/pages/authentification/forgot-password/forgot-password-page.component.ts");
/* harmony import */ var _login_login_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login-page.component */ "./src/app/pages/authentification/login/login-page.component.ts");
/* harmony import */ var _register_register_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register-page.component */ "./src/app/pages/authentification/register/register-page.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");









let AuthentificationModule = class AuthentificationModule {
};
AuthentificationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _authentification_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthentificationRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [
            _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPageComponent"],
            _login_login_page_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponent"],
            _register_register_page_component__WEBPACK_IMPORTED_MODULE_7__["RegisterPageComponent"]
        ]
    })
], AuthentificationModule);



/***/ }),

/***/ "./src/app/pages/authentification/forgot-password/forgot-password-page.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/authentification/forgot-password/forgot-password-page.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#forgot-password .forgot-password-bg {\n  background-image: url('light-bg.jpg');\n  background-size: 100% 100%;\n  background-repeat: no-repeat; }\n\n#forgot-password .fg-image {\n  padding: 0;\n  background: #f0f0f0; }\n\n#forgot-password .login-btn .btn.btn-outline-primary:hover a {\n  color: #fff; }\n\n#forgot-password .recover-pass button.btn.btn-primary {\n  color: #fff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aGVudGlmaWNhdGlvbi9mb3Jnb3QtcGFzc3dvcmQvQzpcXFVzZXJzXFxTYWlkaVxcRGVza3RvcFxcd29ya3NwYWNlX3R1bmVwc1xcZnJvbnRcXGp1c3Rjb21fdmYtZGV2XFxqdXN0Q29tLXdlYmFwcC9zcmNcXGFwcFxccGFnZXNcXGF1dGhlbnRpZmljYXRpb25cXGZvcmdvdC1wYXNzd29yZFxcZm9yZ290LXBhc3N3b3JkLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxxQ0FBb0U7RUFDcEUsMEJBQTBCO0VBQzFCLDRCQUE0QixFQUFBOztBQUpoQztFQVFJLFVBQVU7RUFDVixtQkFBbUIsRUFBQTs7QUFUdkI7RUFpQlUsV0FBVyxFQUFBOztBQWpCckI7RUF5Qk0sc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoZW50aWZpY2F0aW9uL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvcmdvdCBQYXNzd29yZFxuXG4jZm9yZ290LXBhc3N3b3JkIHtcbiAgLmZvcmdvdC1wYXNzd29yZC1iZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9nYWxsZXJ5L2xpZ2h0LWJnLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB9XG5cbiAgLmZnLWltYWdlIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gIH1cblxuXG4gIC5sb2dpbi1idG4ge1xuICAgIC5idG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucmVjb3Zlci1wYXNzIHtcbiAgICBidXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/authentification/forgot-password/forgot-password-page.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/authentification/forgot-password/forgot-password-page.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ForgotPasswordPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageComponent", function() { return ForgotPasswordPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ForgotPasswordPageComponent = class ForgotPasswordPageComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    // On submit click, reset form fields
    onSubmit() {
        this.forogtPasswordForm.reset();
    }
};
ForgotPasswordPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
], ForgotPasswordPageComponent.prototype, "forogtPasswordForm", void 0);
ForgotPasswordPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password-page',
        template: __webpack_require__(/*! raw-loader!./forgot-password-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/authentification/forgot-password/forgot-password-page.component.html"),
        styles: [__webpack_require__(/*! ./forgot-password-page.component.scss */ "./src/app/pages/authentification/forgot-password/forgot-password-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ForgotPasswordPageComponent);



/***/ }),

/***/ "./src/app/pages/authentification/login/login-page.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/authentification/login/login-page.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login {\n  background-image: url('light-bg.jpg');\n  background-size: 100% 100%;\n  background-repeat: no-repeat; }\n  #login .login-img {\n    padding: 0;\n    background: #f0f0f0; }\n  #login .login-btn .btn.btn-outline-primary:hover a {\n    color: #fff; }\n  #login .recover-pass button.btn.btn-primary {\n    color: #fff !important; }\n  #login .forgot-password-option a.text-decoration-none,\n  #login .forgot-password-option .custom-control-label,\n  #login .remember-me a.text-decoration-none,\n  #login .remember-me .custom-control-label {\n    font-size: 14px; }\n  .background-image {\n  background-image: url('login.png');\n  width: 645px;\n  height: 550px; }\n  .img-logo {\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  text-align: center;\n  z-index: 1;\n  width: 90px;\n  height: 90px;\n  margin-top: 30px; }\n  .centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%); }\n  .logo-header {\n  width: 6rem;\n  height: 6rem; }\n  .vertical-line {\n  border-left: 2px solid;\n  display: inline-block;\n  height: 6rem;\n  margin: 0 20px;\n  color: #bfbfbf; }\n  .text-style {\n  color: white;\n  font-family: Arial;\n  text-transform: capitalize;\n  margin-top: 150px;\n  font-size: 30px; }\n  .login-card {\n  margin-left: 13rem;\n  margin-right: 13rem; }\n  .text-form-login {\n  font-family: Arial;\n  text-transform: uppercase;\n  color: white;\n  text-align: center;\n  margin-top: 35%; }\n  .text-form-login-ar {\n  font-size: 4.6rem; }\n  .connectedYou-ar {\n  font-size: 1.8rem; }\n  .text-form-login-fr {\n  margin-top: 40%;\n  line-height: 1.4; }\n  .lang-title-fr {\n  margin-top: 6rem; }\n  .lang-title-ar {\n  margin-top: 5.5rem; }\n  .titleLogin-form {\n  font-family: Arial;\n  text-transform: capitalize;\n  font-weight: bold;\n  font-size: medium; }\n  .text-form-title-ar {\n  font-size: 1.35rem; }\n  .img-logo-fr {\n  margin: auto;\n  left: 0;\n  right: 0;\n  text-align: center;\n  width: 290px;\n  height: 90px; }\n  .text-login {\n  color: #056633;\n  font-family: Arial;\n  text-underline-position: auto;\n  text-align: center;\n  text-decoration: underline;\n  -webkit-text-decoration-color: #d70926;\n          text-decoration-color: #d70926;\n  text-decoration-thickness: 4px;\n  text-underline-position: under;\n  text-underline-offset: 2px; }\n  .button-login {\n  text-align: center;\n  color: #056633 !important;\n  font-family: Calibri; }\n  .center {\n  margin: 0;\n  top: 50%;\n  left: 50%; }\n  .text-inputboder[dir=\"rtl\"] {\n  border: none;\n  background-color: #fff8f8;\n  border-left: 5px solid #056633; }\n  .text-inputboder[dir=\"ltr\"] {\n  border: none;\n  background-color: #fff8f8;\n  border-left: 5px solid #056633; }\n  .slogan_fr {\n  display: inline-block;\n  padding-left: 1rem;\n  padding-top: 2rem;\n  font-size: 19px;\n  border-left: 1px solid #dddada;\n  white-space: normal;\n  margin-left: 1em;\n  font-family: Arial; }\n  .slogan_ar {\n  display: inline-block;\n  padding-left: 1rem;\n  padding-top: 2rem;\n  font-size: 19px;\n  vertical-align: middle;\n  border-right: 1px solid #dddada;\n  white-space: normal;\n  margin-right: 1em;\n  font-family: Arial; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aGVudGlmaWNhdGlvbi9sb2dpbi9DOlxcVXNlcnNcXFNhaWRpXFxEZXNrdG9wXFx3b3Jrc3BhY2VfdHVuZXBzXFxmcm9udFxcanVzdGNvbV92Zi1kZXZcXGp1c3RDb20td2ViYXBwL3NyY1xcYXBwXFxwYWdlc1xcYXV0aGVudGlmaWNhdGlvblxcbG9naW5cXGxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQ0FBb0U7RUFDcEUsMEJBQTBCO0VBQzFCLDRCQUE0QixFQUFBO0VBSDlCO0lBTUksVUFBVTtJQUNWLG1CQUFtQixFQUFBO0VBUHZCO0lBY1UsV0FBVyxFQUFBO0VBZHJCO0lBc0JNLHNCQUFzQixFQUFBO0VBdEI1Qjs7OztJQStCTSxlQUFlLEVBQUE7RUFLckI7RUFDRSxrQ0FBaUU7RUFDakUsWUFBWTtFQUNaLGFBQWEsRUFBQTtFQUdmO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixPQUFPO0VBQ1AsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtFQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUF3QztFQUl4QyxnQ0FBZ0MsRUFBQTtFQUdsQztFQUVFLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFXZDtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsWUFBYTtFQUNiLGNBQWM7RUFDZCxjQUF5QixFQUFBO0VBSTNCO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLGVBQ0YsRUFBQTtFQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUNGLEVBQUE7RUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7RUFJakI7RUFDRSxpQkFBaUIsRUFBQTtFQUduQjtFQUNFLGlCQUFpQixFQUFBO0VBR25CO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQixFQUFBO0VBR2xCO0VBQ0UsZ0JBQWdCLEVBQUE7RUFHbEI7RUFDRSxrQkFBa0IsRUFBQTtFQUdwQjtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0VBR25CO0VBQ0Usa0JBQWtCLEVBQUE7RUFHcEI7RUFFRSxZQUFZO0VBQ1osT0FBTztFQUNQLFFBQVE7RUFDUixrQkFBa0I7RUFFbEIsWUFBWTtFQUNaLFlBQVksRUFBQTtFQUlkO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixzQ0FBOEI7VUFBOUIsOEJBQThCO0VBQzlCLDhCQUE4QjtFQUM5Qiw4QkFBOEI7RUFDOUIsMEJBQTBCLEVBQUE7RUFJNUI7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG9CQUFvQixFQUFBO0VBR3RCO0VBQ0UsU0FBUztFQUVULFFBQVE7RUFDUixTQUFTLEVBQUE7RUFJWDtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsOEJBQThCLEVBQUE7RUFJaEM7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLDhCQUE4QixFQUFBO0VBSWhDO0VBQ0UscUJBQXFCO0VBRXJCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFFakIsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBO0VBS3BCO0VBQ0UscUJBQXFCO0VBRXJCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFFakIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QiwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGhlbnRpZmljYXRpb24vbG9naW4vbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExvZ2luIFBhZ2VcblxuI2xvZ2luIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2dhbGxlcnkvbGlnaHQtYmcuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gIC5sb2dpbi1pbWcge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgfVxuXG4gIC5sb2dpbi1idG4ge1xuICAgIC5idG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucmVjb3Zlci1wYXNzIHtcbiAgICBidXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLmZvcmdvdC1wYXNzd29yZC1vcHRpb24sXG4gIC5yZW1lbWJlci1tZSB7XG5cbiAgICBhLnRleHQtZGVjb3JhdGlvbi1ub25lLFxuICAgIC5jdXN0b20tY29udHJvbC1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG59XG5cbi5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9nYWxsZXJ5L2xvZ2luLnBuZ1wiKTtcbiAgd2lkdGg6IDY0NXB4O1xuICBoZWlnaHQ6IDU1MHB4O1xufVxuXG4uaW1nLWxvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogYXV0bztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmNlbnRlcmVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmxvZ28taGVhZGVyIHtcbiAgLy9wYWRkaW5nOiAxcmVtO1xuICB3aWR0aDogNnJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xufVxuXG4vLy5sb2dvLWhlYWRlci1hciB7XG4vLyAgYm9yZGVyLWxlZnQ6IHNvbGlkIDAuMTVyZW0gcmdiYSgxODksIDE4OSwgMTg5LCAwLjc1KTtcbi8vfVxuLy9cbi8vLmxvZ28taGVhZGVyLWZyIHtcbi8vICBib3JkZXItcmlnaHQ6IHNvbGlkIDAuMTVyZW0gcmdiYSgxODksIDE4OSwgMTg5LCAwLjc1KTtcbi8vfVxuXG4udmVydGljYWwtbGluZXtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6ICA2cmVtO1xuICBtYXJnaW46IDAgMjBweDtcbiAgY29sb3I6IHJnYigxOTEsIDE5MSwgMTkxKTtcbn1cblxuXG4udGV4dC1zdHlsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIGZvbnQtc2l6ZTogMzBweFxufVxuXG4ubG9naW4tY2FyZCB7XG4gIG1hcmdpbi1sZWZ0OiAxM3JlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxM3JlbVxufVxuXG4udGV4dC1mb3JtLWxvZ2luIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzUlO1xuXG59XG5cbi50ZXh0LWZvcm0tbG9naW4tYXJ7XG4gIGZvbnQtc2l6ZTogNC42cmVtO1xufVxuXG4uY29ubmVjdGVkWW91LWFye1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLnRleHQtZm9ybS1sb2dpbi1mcntcbiAgbWFyZ2luLXRvcDogNDAlO1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4ubGFuZy10aXRsZS1mcntcbiAgbWFyZ2luLXRvcDogNnJlbTtcbn1cblxuLmxhbmctdGl0bGUtYXJ7XG4gIG1hcmdpbi10b3A6IDUuNXJlbTtcbn1cblxuLnRpdGxlTG9naW4tZm9ybSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IG1lZGl1bTtcbn1cblxuLnRleHQtZm9ybS10aXRsZS1hcntcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xufVxuXG4uaW1nLWxvZ28tZnIge1xuXG4gIG1hcmdpbjogYXV0bztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICB3aWR0aDogMjkwcHg7XG4gIGhlaWdodDogOTBweDtcblxufVxuXG4udGV4dC1sb2dpbiB7XG4gIGNvbG9yOiAjMDU2NjMzO1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIHRleHQtdW5kZXJsaW5lLXBvc2l0aW9uOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNkNzA5MjY7XG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDRweDtcbiAgdGV4dC11bmRlcmxpbmUtcG9zaXRpb246IHVuZGVyO1xuICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDJweDtcblxufVxuXG4uYnV0dG9uLWxvZ2luIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzA1NjYzMyAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQ2FsaWJyaTtcbn1cblxuLmNlbnRlciB7XG4gIG1hcmdpbjogMDtcblxuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuXG59XG5cbi50ZXh0LWlucHV0Ym9kZXJbZGlyPVwicnRsXCJdIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOGY4O1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMwNTY2MzM7XG5cbn1cblxuLnRleHQtaW5wdXRib2RlcltkaXI9XCJsdHJcIl0ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY4Zjg7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzA1NjYzMztcblxufVxuXG4uc2xvZ2FuX2ZyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAvLyBtYXgtd2lkdGg6IDI1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuICAvL3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGRkYWRhO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICBmb250LWZhbWlseTogQXJpYWw7XG5cblxufVxuXG4uc2xvZ2FuX2FyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAvLyAgbWF4LXdpZHRoOiAyNTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgLy92ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmb250LXNpemU6IDE5cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGRhZGE7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICBmb250LWZhbWlseTogQXJpYWw7XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/authentification/login/login-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/authentification/login/login-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/services/config.service */ "./src/app/shared/services/config.service.ts");









let LoginPageComponent = class LoginPageComponent {
    // @Output() directionEvent = new EventEmitter<string>();
    constructor(route, renderer, toastr, router, accountService, translate, layoutService, configService) {
        this.route = route;
        this.renderer = renderer;
        this.toastr = toastr;
        this.router = router;
        this.accountService = accountService;
        this.translate = translate;
        this.layoutService = layoutService;
        this.configService = configService;
    }
    ngOnInit() {
        this.config = this.configService.templateConf;
        this.currentLang = this.config.layout.dir === 'rtl' ? 'ar' : 'fr';
        sessionStorage.setItem('lang', this.currentLang);
        // this.onChangeLanguage(this.currentLang);
        sessionStorage.removeItem('token');
        this.renderer.addClass(document.querySelector('app-root'), 'app-login-page');
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    ngAfterViewInit() {
        if (this.config.layout.dir) {
            setTimeout(() => {
                this.onChangeLanguage(this.currentLang);
            }, 0);
        }
    }
    get f() {
        return this.loginForm.controls;
    }
    // On submit button click
    login() {
        sessionStorage.removeItem('token');
        sessionStorage.clear;
        if (this.loginForm.invalid) {
            return;
        }
        this.accountService.login(this.f.username.value, this.f.password.value).subscribe(response => {
            if (response['code'] === '200') {
                sessionStorage.setItem('token', response['payload']['token']);
                sessionStorage.setItem('lang', this.currentLang);
                //this.whoami();
                this.router.navigate(['/home']);
            }
            else if (response['code'] === '201') {
                this.toastr.error('', 'Pas d\'access pour ce compte');
            }
            else {
                this.toastr.error('', 'Identifiant ou mot de passe incorrect.');
            }
        }, error => {
            this.toastr.error('', 'Erreur interne système');
        });
        this.loginForm.reset();
    }
    whoami() {
        this.accountService.whoiam()
            .subscribe(response => {
            console.log('response ::', response);
            this.userInfo = response['payload'];
        }, error => {
        });
    }
    // On Forgot password link click
    onForgotPassword() {
        this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    }
    // // On registration link click
    // onRegister() {
    //     this.router.navigate(['register'], { relativeTo: this.route.parent });
    // }
    ngOnDestroy() {
        this.renderer.removeClass(document.querySelector('app-root'), 'app-login-page');
    }
    sendOptions(dir) {
        this.layoutService.emitChange({ direction: dir });
        this.configService.setDirection(dir);
        sessionStorage.setItem('direction', dir);
    }
    emitDirection(lang) {
        lang === 'ar' ? this.sendOptions('rtl') : this.sendOptions('ltr');
    }
    onChangeLanguage(lang) {
        this.currentLang = lang;
        this.translate.setDefaultLang(lang);
        this.emitDirection(this.currentLang);
    }
};
LoginPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _app_shared__WEBPACK_IMPORTED_MODULE_5__["AccountService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_7__["LayoutService"] },
    { type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"] }
];
LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-page',
        template: __webpack_require__(/*! raw-loader!./login-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/authentification/login/login-page.component.html"),
        styles: [__webpack_require__(/*! ./login-page.component.scss */ "./src/app/pages/authentification/login/login-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _app_shared__WEBPACK_IMPORTED_MODULE_5__["AccountService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
        _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_7__["LayoutService"],
        _shared_services_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"]])
], LoginPageComponent);



/***/ }),

/***/ "./src/app/pages/authentification/register/register-page.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/authentification/register/register-page.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#regestration {\n  background-image: url('light-bg.jpg');\n  background-size: 100% 100%;\n  background-repeat: no-repeat; }\n  #regestration .register-img {\n    background: #f0f0f0;\n    padding: 0; }\n  #regestration .login-btn .btn.btn-outline-primary:hover a {\n    color: #fff; }\n  #regestration .recover-pass button.btn.btn-primary {\n    color: #fff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aGVudGlmaWNhdGlvbi9yZWdpc3Rlci9DOlxcVXNlcnNcXFNhaWRpXFxEZXNrdG9wXFx3b3Jrc3BhY2VfdHVuZXBzXFxmcm9udFxcanVzdGNvbV92Zi1kZXZcXGp1c3RDb20td2ViYXBwL3NyY1xcYXBwXFxwYWdlc1xcYXV0aGVudGlmaWNhdGlvblxccmVnaXN0ZXJcXHJlZ2lzdGVyLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQ0FBb0U7RUFDcEUsMEJBQTBCO0VBQzFCLDRCQUE0QixFQUFBO0VBSDlCO0lBTUksbUJBQW1CO0lBQ25CLFVBQVUsRUFBQTtFQVBkO0lBY1UsV0FBVyxFQUFBO0VBZHJCO0lBc0JNLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aGVudGlmaWNhdGlvbi9yZWdpc3Rlci9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9yIFJlZ2lzdHJhdGlvbiBwYWdlXG5cbiNyZWdlc3RyYXRpb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2dhbGxlcnkvbGlnaHQtYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAucmVnaXN0ZXItaW1nIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAubG9naW4tYnRuIHtcbiAgICAuYnRuLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnJlY292ZXItcGFzcyB7XG4gICAgYnV0dG9uLmJ0bi5idG4tcHJpbWFyeSB7XG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/authentification/register/register-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/authentification/register/register-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let RegisterPageComponent = class RegisterPageComponent {
    //  On submit click, reset field value
    onSubmit() {
        this.registerForm.reset();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
], RegisterPageComponent.prototype, "registerForm", void 0);
RegisterPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-page',
        template: __webpack_require__(/*! raw-loader!./register-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/authentification/register/register-page.component.html"),
        styles: [__webpack_require__(/*! ./register-page.component.scss */ "./src/app/pages/authentification/register/register-page.component.scss")]
    })
], RegisterPageComponent);



/***/ })

}]);
//# sourceMappingURL=pages-authentification-authentification-module-es2017.js.map