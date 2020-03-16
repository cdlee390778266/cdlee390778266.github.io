webpackJsonp(["auth.module"],{

/***/ "./src/app/modules/authModule/auth-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.11@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.11@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_guard_service__ = __webpack_require__("./src/app/service/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/modules/authModule/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("./src/app/modules/authModule/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getpwd_getpwd_component__ = __webpack_require__("./src/app/modules/authModule/getpwd/getpwd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__setpwd_setpwd_component__ = __webpack_require__("./src/app/modules/authModule/setpwd/setpwd.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__service_auth_guard_service__["a" /* AuthGuard */]],
        children: [
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
                data: {
                    title: '登录'
                }
            },
            {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */],
                data: {
                    title: '注册'
                }
            },
            {
                path: 'getpwd',
                component: __WEBPACK_IMPORTED_MODULE_5__getpwd_getpwd_component__["a" /* GetpwdComponent */],
                data: {
                    title: '找回密码'
                }
            },
            {
                path: 'setpwd/:name',
                component: __WEBPACK_IMPORTED_MODULE_6__setpwd_setpwd_component__["a" /* SetpwdComponent */],
                data: {
                    title: '重置密码'
                }
            },
            {
                path: '**',
                component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
                data: {
                    title: '登录'
                }
            },
        ]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/authModule/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.11@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sharedModule_shared_module__ = __webpack_require__("./src/app/modules/sharedModule/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_routing_module__ = __webpack_require__("./src/app/modules/authModule/auth-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/modules/authModule/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("./src/app/modules/authModule/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getpwd_getpwd_component__ = __webpack_require__("./src/app/modules/authModule/getpwd/getpwd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__setpwd_setpwd_component__ = __webpack_require__("./src/app/modules/authModule/setpwd/setpwd.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__getpwd_getpwd_component__["a" /* GetpwdComponent */],
                __WEBPACK_IMPORTED_MODULE_6__setpwd_setpwd_component__["a" /* SetpwdComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__auth_routing_module__["a" /* AuthRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__sharedModule_shared_module__["a" /* SharedModule */]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/modules/authModule/getpwd/getpwd.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/authModule/getpwd/getpwd.component.html":
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"hd-login\" [@simAnim]=\"'flyIn'\">\r\n  <nz-header>\r\n    <hd-nav-bar viewTitle=\"找回密码\"></hd-nav-bar>\r\n  </nz-header>\r\n  <nz-content>\r\n  \t<form #getPwdForm=\"ngForm\" (ngSubmit)=\"getPwd()\">\r\n      <div class=\"hd-form-group bt\" nz-row>\r\n        <label nz-col [nzSpan]=\"6\">用户名</label>\r\n        <input nz-col [nzSpan]=\"18\" type=\"\" name=\"name\" [(ngModel)]=\"name\" placeholder=\"请输入用户名\" required #nameRef=\"ngModel\" (keyup)=\"hideError()\" minlength=\"2\" maxlength=\"6\">\r\n      </div>\r\n      <nz-alert [nzType]=\"'error'\" nzCloseable\r\n        [nzDescription]=\"'请输入2-6位的用户名！'\" [hidden]=\"nameRef.valid || nameRef.pristine\"></nz-alert>\r\n\r\n  \t\t<div class=\"hd-form-group\" nz-row>\r\n  \t\t\t<label nz-col [nzSpan]=\"6\">电子邮箱</label>\r\n  \t\t\t<input nz-col [nzSpan]=\"18\" type=\"\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"请输入用户名\" required #emailRef=\"ngModel\" (keyup)=\"hideError()\" hdEmail>\r\n  \t\t</div>\r\n      <nz-alert [nzType]=\"'error'\" nzCloseable\r\n        [nzDescription]=\"'请输入正确的电子邮箱！'\" [hidden]=\"emailRef.valid || emailRef.pristine\"></nz-alert>\r\n\r\n        <nz-alert [nzType]=\"'error'\" nzCloseable\r\n        [nzDescription]=\"'发送失败，用户名与电子邮箱不匹配！'\" [hidden]=\"isGetSuccess\"></nz-alert>\r\n\r\n  \t\t<div class=\"login-btn-box\">\r\n  \t\t\t<div class=\"login-btn\" [class.login-btn-disabled]=\"!getPwdForm.form.valid\">\r\n          <button type=\"submit\" [disabled]=\"!getPwdForm.form.valid\">发送</button>\r\n        </div>\r\n  \t\t</div>\r\n  \t</form>\r\n  </nz-content>\r\n</nz-layout>\r\n"

/***/ }),

/***/ "./src/app/modules/authModule/getpwd/getpwd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetpwdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.11@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.11@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__("./src/app/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_http_service__ = __webpack_require__("./src/app/service/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd__ = __webpack_require__("./node_modules/_ng-zorro-antd@0.6.15@ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_reducer__ = __webpack_require__("./src/app/ngrx/reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GetpwdComponent = /** @class */ (function () {
    function GetpwdComponent(httpService, nzModalService, router) {
        this.httpService = httpService;
        this.nzModalService = nzModalService;
        this.router = router;
        this.isGetSuccess = true;
    }
    GetpwdComponent.prototype.hideError = function () {
        this.isGetSuccess = true;
    };
    GetpwdComponent.prototype.getPwd = function () {
        var _this = this;
        this.httpService.get('/assets/data/login/login.json')
            .subscribe(function (res) {
            if (res.status == 200) {
                var isloginSuccess = false;
                for (var i = 0, len = __WEBPACK_IMPORTED_MODULE_5__ngrx_reducer__["a" /* DefaultUsers */].length; i < len; i++) {
                    if (__WEBPACK_IMPORTED_MODULE_5__ngrx_reducer__["a" /* DefaultUsers */][i].name == _this.name && __WEBPACK_IMPORTED_MODULE_5__ngrx_reducer__["a" /* DefaultUsers */][i].email == _this.email) {
                        isloginSuccess = true;
                        break;
                    }
                }
                if (isloginSuccess) {
                    _this.isGetSuccess = true;
                    var successModal = _this.nzModalService.open({
                        content: __WEBPACK_IMPORTED_MODULE_6__config__["a" /* CONFIG */].success.s8,
                        closable: false,
                        footer: false,
                        width: 200,
                        wrapClassName: 'vertical-center-modal hd-tip'
                    });
                    setTimeout(function () {
                        successModal.destroy();
                        _this.router.navigate(['/auth/setpwd', _this.name], { skipLocationChange: true });
                    }, 2000);
                }
                else {
                    _this.isGetSuccess = false;
                }
            }
            else {
                _this.nzModalService.open({
                    content: __WEBPACK_IMPORTED_MODULE_6__config__["a" /* CONFIG */].error.e8,
                    closable: false,
                    footer: false,
                    width: 200,
                    wrapClassName: 'vertical-center-modal hd-tip'
                });
            }
        });
    };
    GetpwdComponent.prototype.ngOnInit = function () {
    };
    GetpwdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'hd-getpwd',
            template: __webpack_require__("./src/app/modules/authModule/getpwd/getpwd.component.html"),
            styles: [__webpack_require__("./src/app/modules/authModule/getpwd/getpwd.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_2__animations__["c" /* simAnim */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd__["b" /* NzModalService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], GetpwdComponent);
    return GetpwdComponent;
}());



/***/ }),

/***/ "./src/app/modules/authModule/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/authModule/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"hd-login\" [@simAnim]=\"'zoomIn'\">\r\n  <nz-header>\r\n    <hd-nav-bar viewTitle=\"登录\"></hd-nav-bar>\r\n  </nz-header>\r\n  <nz-content>\r\n  \t<form #loginForm=\"ngForm\" (ngSubmit)=\"login()\">\r\n  \t\t<div class=\"hd-form-group bt\" nz-row>\r\n  \t\t\t<label nz-col [nzSpan]=\"6\">用户名</label>\r\n  \t\t\t<input nz-col [nzSpan]=\"18\" type=\"\" name=\"name\" [(ngModel)]=\"name\" placeholder=\"请输入用户名\" required #user=\"ngModel\" (keyup)=\"hideError()\" minlength=\"2\" maxlength=\"6\">\r\n  \t\t</div>\r\n      <nz-alert [nzType]=\"'error'\" nzCloseable\r\n        [nzDescription]=\"'请输入6-20位的用户名！'\" [hidden]=\"user.valid || user.pristine\"></nz-alert>\r\n      <div class=\"hd-form-group\" nz-row>\r\n        <label nz-col [nzSpan]=\"6\">密码</label>\r\n        <input nz-col [nzSpan]=\"18\" type=\"password\" name=\"password\" minlength=\"6\" maxlength=\"20\" [(ngModel)]=\"password\"  placeholder=\"请输入密码\" required #pwd=\"ngModel\" (keyup)=\"hideError()\"> \r\n      </div>\r\n      <nz-alert [nzType]=\"'error'\" nzCloseable\r\n        [nzDescription]=\"'请输入6-20位的密码！'\" [hidden]=\"pwd.valid || pwd.pristine || !user.valid\"></nz-alert>\r\n\r\n      <nz-alert [nzType]=\"'error'\" nzCloseable\r\n        [nzDescription]=\"'登录失败，用户名或密码错误！'\" [hidden]=\"isLogin\"></nz-alert>\r\n\r\n  \t\t<div class=\"login-btn-box\">\r\n  \t\t\t<div class=\"login-btn\" [class.login-btn-disabled]=\"!loginForm.form.valid\">\r\n  \t\t\t\t<button type=\"submit\" [disabled]=\"!loginForm.form.valid\">登录</button>\r\n  \t\t\t</div>\r\n  \t\t\t<div class=\"login-tip\">\r\n  \t\t\t\t<a routerLink=\"/auth/register\">注册</a>\r\n  \t\t\t\t<a routerLink=\"/auth/getpwd\">忘记密码？</a>\r\n  \t\t\t</div>\r\n  \t\t</div>\r\n  \t</form>\r\n  </nz-content>\r\n</nz-layout>\r\n"

/***/ }),

/***/ "./src/app/modules/authModule/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.11@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.11@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__("./src/app/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_reducer__ = __webpack_require__("./src/app/ngrx/reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_http_service__ = __webpack_require__("./src/app/service/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_hd_state_service__ = __webpack_require__("./src/app/service/hd.state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_zorro_antd__ = __webpack_require__("./node_modules/_ng-zorro-antd@0.6.15@ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config__ = __webpack_require__("./src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__class_cookies__ = __webpack_require__("./src/app/class/cookies.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginComponent = /** @class */ (function () {
    function LoginComponent(httpService, nzModalService, router, hdStateService) {
        this.httpService = httpService;
        this.nzModalService = nzModalService;
        this.router = router;
        this.hdStateService = hdStateService;
        this.isLogin = true;
    }
    LoginComponent.prototype.hideError = function () {
        this.isLogin = true;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.httpService.get('/assets/data/login/login.json')
            .subscribe(function (res) {
            if (res.status == 200) {
                var isloginSuccess = false;
                for (var i = 0, len = __WEBPACK_IMPORTED_MODULE_3__ngrx_reducer__["a" /* DefaultUsers */].length; i < len; i++) {
                    if (__WEBPACK_IMPORTED_MODULE_3__ngrx_reducer__["a" /* DefaultUsers */][i].name == _this.name && __WEBPACK_IMPORTED_MODULE_3__ngrx_reducer__["a" /* DefaultUsers */][i].password == _this.password) {
                        isloginSuccess = true;
                        __WEBPACK_IMPORTED_MODULE_8__class_cookies__["c" /* set_cookie */](__WEBPACK_IMPORTED_MODULE_7__config__["a" /* CONFIG */].cookiesName, __WEBPACK_IMPORTED_MODULE_3__ngrx_reducer__["a" /* DefaultUsers */][i].uid.toString(), 2);
                        _this.hdStateService.resetHdState();
                        _this.hdStateService.setHdState(Object.assign({}, __WEBPACK_IMPORTED_MODULE_3__ngrx_reducer__["a" /* DefaultUsers */][i], { isLogin: true }));
                        break;
                    }
                }
                if (isloginSuccess) {
                    _this.isLogin = true;
                    var successModal = _this.nzModalService.open({
                        content: __WEBPACK_IMPORTED_MODULE_7__config__["a" /* CONFIG */].success.s2,
                        closable: false,
                        footer: false,
                        width: 200,
                        wrapClassName: 'vertical-center-modal hd-tip'
                    });
                    setTimeout(function () {
                        successModal.destroy();
                        _this.router.navigate(['/admin/view']);
                    }, 2000);
                }
                else {
                    _this.isLogin = false;
                }
            }
            else {
                _this.nzModalService.open({
                    content: __WEBPACK_IMPORTED_MODULE_7__config__["a" /* CONFIG */].error.e2 + res.status,
                    closable: false,
                    footer: false,
                    width: 200,
                    wrapClassName: 'vertical-center-modal hd-tip'
                });
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'hd-login',
            template: __webpack_require__("./src/app/modules/authModule/login/login.component.html"),
            styles: [__webpack_require__("./src/app/modules/authModule/login/login.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_2__animations__["c" /* simAnim */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__service_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_6_ng_zorro_antd__["b" /* NzModalService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_5__service_hd_state_service__["a" /* HdStateService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/authModule/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/authModule/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"hd-login\" [@simAnim]=\"'flyIn'\">\r\n  <nz-header>\r\n    <hd-nav-bar viewTitle=\"注册\"></hd-nav-bar>\r\n  </nz-header>\r\n  <nz-content>\r\n  \t<form #registerForm=\"ngForm\" (ngSubmit)=\"register()\">\r\n\r\n  \t\t<div class=\"hd-form-group bt\" nz-row>\r\n  \t\t\t<label nz-col [nzSpan]=\"6\">用户名</label>\r\n  \t\t\t<input nz-col [nzSpan]=\"18\" type=\"\" name=\"name\" [(ngModel)]=\"name\" placeholder=\"请输入用户名\" required #nameRef=\"ngModel\" minlength=\"2\" maxlength=\"6\" (key.up)=\"hideError()\">\r\n  \t\t</div>\r\n      <nz-alert [nzType]=\"'error'\" nzCloseable\r\n        [nzDescription]=\"'请输入2-6位用户名！'\" [hidden]=\"nameRef.valid || nameRef.pristine\"></nz-alert>\r\n\r\n  \t\t<div class=\"hd-form-group\" nz-row>\r\n  \t\t\t<label nz-col [nzSpan]=\"6\">电子邮箱</label>\r\n  \t\t\t<input nz-col [nzSpan]=\"18\" type=\"\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"请输入电子邮箱\" required #emailRef=\"ngModel\" hdEmail (key.up)=\"hideError()\">\r\n  \t\t</div>\r\n      <nz-alert [nzType]=\"'error'\" nzCloseable\r\n        [nzDescription]=\"'请输入正确的电子邮箱！'\" [hidden]=\"emailRef.valid || emailRef.pristine\"></nz-alert>\r\n\r\n  \t\t<div class=\"hd-form-group\" nz-row>\r\n  \t\t\t<label nz-col [nzSpan]=\"6\">密码</label>\r\n  \t\t\t<input nz-col [nzSpan]=\"18\" type=\"password\" minlength=\"6\" maxlength=\"20\" required name=\"pwd\" [(ngModel)]=\"pwd\" placeholder=\"请输入6-20位的密码！\" required #pwdRef=\"ngModel\" (key.up)=\"hideError()\">\r\n  \t\t</div>\r\n      <nz-alert [nzType]=\"'error'\" nzCloseable\r\n        [nzDescription]=\"'请输入6-20位的密码！'\" [hidden]=\"pwdRef.valid || pwdRef.pristine\"></nz-alert>\r\n\r\n      <div class=\"hd-form-group\" nz-row>\r\n        <label nz-col [nzSpan]=\"6\">重复密码</label>\r\n        <input nz-col [nzSpan]=\"18\" type=\"password\" minlength=\"6\" maxlength=\"20\" name=\"cpwd\" [(ngModel)]=\"cpwd\" placeholder=\"请输入6-20位的重复密码！\" required #cpwdRef=\"ngModel\" (key.up)=\"hideError()\">\r\n      </div>\r\n      <nz-alert [nzType]=\"'error'\" nzCloseable\r\n        [nzDescription]=\"'重复密码与密码不一致！'\" [hidden]=\" cpwdRef.pristine || cpwdRef.value == pwdRef.value\"></nz-alert>\r\n\r\n        <nz-alert [nzType]=\"'error'\" nzCloseable\r\n        [nzDescription]=\"'注册失败，请检查输入是否正确！'\" [hidden]=\"isRegisterSuccess\"></nz-alert>\r\n\r\n  \t\t<div class=\"login-btn-box\">\r\n  \t\t\t<div class=\"login-btn\" [class.login-btn-disabled]=\"!registerForm.form.valid || (cpwdRef.value != pwdRef.value)\">\r\n  \t\t\t\t<button type=\"submit\" [disabled]=\"!registerForm.form.valid || (cpwdRef.value != pwdRef.value)\">注册</button>\r\n  \t\t\t</div>\r\n  \t\t\t<div class=\"login-tip\">\r\n  \t\t\t\t<a></a>\r\n  \t\t\t\t<a routerLink=\"/auth/login\">已有账号？</a>\r\n  \t\t\t</div>\r\n  \t\t\t\r\n  \t\t</div>\r\n  \t</form>\r\n  </nz-content>\r\n</nz-layout>\r\n"

/***/ }),

/***/ "./src/app/modules/authModule/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.11@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.11@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__("./src/app/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_reducer__ = __webpack_require__("./src/app/ngrx/reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_http_service__ = __webpack_require__("./src/app/service/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_hd_state_interface__ = __webpack_require__("./src/app/class/hd.state.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_hd_state_service__ = __webpack_require__("./src/app/service/hd.state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_zorro_antd__ = __webpack_require__("./node_modules/_ng-zorro-antd@0.6.15@ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config__ = __webpack_require__("./src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__class_cookies__ = __webpack_require__("./src/app/class/cookies.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(httpService, nzModalService, router, hdStateService, authService) {
        this.httpService = httpService;
        this.nzModalService = nzModalService;
        this.router = router;
        this.hdStateService = hdStateService;
        this.authService = authService;
        this.isRegisterSuccess = true;
        this.defaultData = Object.assign({}, __WEBPACK_IMPORTED_MODULE_5__class_hd_state_interface__["a" /* InitialState */]);
        this.canSubmit = true;
    }
    RegisterComponent.prototype.hideError = function () {
        this.isRegisterSuccess = true;
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (!this.canSubmit)
            return;
        console.log(__WEBPACK_IMPORTED_MODULE_3__ngrx_reducer__["a" /* DefaultUsers */]);
        this.canSubmit = false;
        this.httpService.get('/assets/data/login/login.json')
            .subscribe(function (res) {
            if (res.status == 200) {
                _this.authService.isLoggedIn = true;
                _this.defaultData.uid = Math.floor(Math.random() * 1000);
                _this.defaultData.level = 1;
                _this.defaultData.isLogin = true;
                _this.defaultData.name = _this.name;
                _this.defaultData.email = _this.email;
                _this.defaultData.password = _this.pwd;
                __WEBPACK_IMPORTED_MODULE_10__class_cookies__["c" /* set_cookie */](__WEBPACK_IMPORTED_MODULE_9__config__["a" /* CONFIG */].cookiesName, _this.defaultData.uid.toString(), 2);
                _this.hdStateService.resetHdState();
                _this.hdStateService.setHdState(_this.defaultData, true);
                _this.isRegisterSuccess = true;
                var successModal = _this.nzModalService.open({
                    content: __WEBPACK_IMPORTED_MODULE_9__config__["a" /* CONFIG */].success.s9,
                    closable: false,
                    footer: false,
                    width: 200,
                    wrapClassName: 'vertical-center-modal hd-tip'
                });
                setTimeout(function () {
                    successModal.destroy();
                    _this.router.navigate(['/admin/view']);
                    _this.canSubmit = true;
                }, 2000);
            }
            else {
                _this.isRegisterSuccess = false;
                _this.canSubmit = true;
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'hd-register',
            template: __webpack_require__("./src/app/modules/authModule/register/register.component.html"),
            styles: [__webpack_require__("./src/app/modules/authModule/register/register.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_2__animations__["c" /* simAnim */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__service_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_7_ng_zorro_antd__["b" /* NzModalService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_6__service_hd_state_service__["a" /* HdStateService */], __WEBPACK_IMPORTED_MODULE_8__service_auth_service__["a" /* AuthService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/modules/authModule/setpwd/setpwd.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/authModule/setpwd/setpwd.component.html":
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"hd-login\" [@simAnim]=\"'flyIn'\">\r\n  <nz-header>\r\n    <hd-nav-bar viewTitle=\"重置密码\"></hd-nav-bar>\r\n  </nz-header>\r\n  <nz-content>\r\n  \t<form #setPwdForm=\"ngForm\" (ngSubmit)=\"setPwd()\">\r\n\r\n  \t\t<div class=\"hd-form-group\" nz-row>\r\n        <label nz-col [nzSpan]=\"8\">新密码</label>\r\n        <input nz-col [nzSpan]=\"16\" type=\"password\" minlength=\"6\" maxlength=\"20\" required name=\"pwd\" [(ngModel)]=\"pwd\" placeholder=\"请输入6-20位的新密码！\" required #pwdRef=\"ngModel\" (keyup)=\"hideError()\">\r\n      </div>\r\n      <nz-alert [nzType]=\"'error'\" nzCloseable\r\n        [nzDescription]=\"'请输入6-20位的新密码！'\" [hidden]=\"pwdRef.valid || pwdRef.pristine\"></nz-alert>\r\n\r\n      <div class=\"hd-form-group\" nz-row>\r\n        <label nz-col [nzSpan]=\"8\">重复新密码</label>\r\n        <input nz-col [nzSpan]=\"16\" type=\"password\" minlength=\"6\" maxlength=\"20\" name=\"cpwd\" [(ngModel)]=\"cpwd\" placeholder=\"请输入6-20位的重复新密码！\" required #cpwdRef=\"ngModel\" (keyup)=\"hideError()\">\r\n      </div>\r\n      <nz-alert [nzType]=\"'error'\" nzCloseable\r\n        [nzDescription]=\"'重复新密码与新密码不一致！'\" [hidden]=\" cpwdRef.pristine || cpwdRef.value == pwdRef.value\"></nz-alert>\r\n\r\n        <nz-alert [nzType]=\"'error'\" nzCloseable\r\n        [nzDescription]=\"'保存失败，请检查密码是否正确！'\" [hidden]=\"isSetSuccess\"></nz-alert>\r\n\r\n  \t\t<div class=\"login-btn-box\">\r\n  \t\t\t<div class=\"login-btn\" [class.login-btn-disabled]=\"!setPwdForm.form.valid || cpwdRef.value != pwdRef.value\">\r\n          <button type=\"submit\" [disabled]=\"!setPwdForm.form.valid || cpwdRef.value != pwdRef.value\">保存</button>\r\n        </div>\r\n  \t\t</div>\r\n  \t</form>\r\n  </nz-content>\r\n</nz-layout>\r\n"

/***/ }),

/***/ "./src/app/modules/authModule/setpwd/setpwd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetpwdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.11@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.11@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__("./src/app/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_http_service__ = __webpack_require__("./src/app/service/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd__ = __webpack_require__("./node_modules/_ng-zorro-antd@0.6.15@ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_reducer__ = __webpack_require__("./src/app/ngrx/reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SetpwdComponent = /** @class */ (function () {
    function SetpwdComponent(httpService, nzModalService, rouer, route) {
        this.httpService = httpService;
        this.nzModalService = nzModalService;
        this.rouer = rouer;
        this.route = route;
        this.isSetSuccess = true;
    }
    SetpwdComponent.prototype.hideError = function () {
        this.isSetSuccess = true;
    };
    SetpwdComponent.prototype.setPwd = function () {
        var _this = this;
        if (!this.name) {
            var successModal = this.nzModalService.open({
                content: __WEBPACK_IMPORTED_MODULE_6__config__["a" /* CONFIG */].error.e10,
                closable: false,
                footer: false,
                width: 200,
                wrapClassName: 'vertical-center-modal hd-tip'
            });
            setTimeout(function () {
                successModal.destroy();
                _this.rouer.navigate(['/auth/login']);
            }, 2000);
            return;
        }
        this.httpService.get('/assets/data/login/login.json')
            .subscribe(function (res) {
            if (res.status == 200) {
                var issetSuccess = false;
                for (var i = 0, len = __WEBPACK_IMPORTED_MODULE_5__ngrx_reducer__["a" /* DefaultUsers */].length; i < len; i++) {
                    if (__WEBPACK_IMPORTED_MODULE_5__ngrx_reducer__["a" /* DefaultUsers */][i].name == _this.name) {
                        issetSuccess = true;
                        __WEBPACK_IMPORTED_MODULE_5__ngrx_reducer__["a" /* DefaultUsers */][i].password = _this.pwd;
                        break;
                    }
                }
                if (issetSuccess) {
                    _this.isSetSuccess = true;
                    var successModal = _this.nzModalService.open({
                        content: __WEBPACK_IMPORTED_MODULE_6__config__["a" /* CONFIG */].success.s11,
                        closable: false,
                        footer: false,
                        width: 200,
                        wrapClassName: 'vertical-center-modal hd-tip'
                    });
                    setTimeout(function () {
                        successModal.destroy();
                        _this.rouer.navigate(['/auth/login']);
                    }, 2000);
                }
                else {
                    _this.isSetSuccess = false;
                }
            }
            else {
                _this.nzModalService.open({
                    content: __WEBPACK_IMPORTED_MODULE_6__config__["a" /* CONFIG */].error.e11,
                    closable: false,
                    footer: false,
                    width: 200,
                    wrapClassName: 'vertical-center-modal hd-tip'
                });
            }
        });
    };
    SetpwdComponent.prototype.ngOnInit = function () {
        this.name = this.route.snapshot.paramMap.get('name');
    };
    SetpwdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'hd-setpwd',
            template: __webpack_require__("./src/app/modules/authModule/setpwd/setpwd.component.html"),
            styles: [__webpack_require__("./src/app/modules/authModule/setpwd/setpwd.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_2__animations__["c" /* simAnim */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd__["b" /* NzModalService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], SetpwdComponent);
    return SetpwdComponent;
}());



/***/ })

});
//# sourceMappingURL=auth.module.chunk.js.map