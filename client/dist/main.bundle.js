webpackJsonp([1,4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(169),
        styles: [__webpack_require__(161)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__welcome_welcome_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_login_admin_login_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__student_login_student_login_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_home_admin_home_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__student_home_student_home_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__all_books_all_books_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__books_borrowed_students_books_borrowed_students_component__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__admin_login_admin_login_component__["a" /* AdminLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__student_login_student_login_component__["a" /* StudentLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__admin_home_admin_home_component__["a" /* AdminHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__student_home_student_home_component__["a" /* StudentHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__all_books_all_books_component__["a" /* AllBooksComponent */],
            __WEBPACK_IMPORTED_MODULE_12__books_borrowed_students_books_borrowed_students_component__["a" /* BooksBorrowedStudentsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__books_borrowed_students_books_borrowed_students_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__all_books_all_books_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_home_student_home_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_home_admin_home_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student_login_student_login_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__welcome_welcome_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_login_admin_login_component__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_7__welcome_welcome_component__["a" /* WelcomeComponent */],
    },
    {
        path: "welcome",
        component: __WEBPACK_IMPORTED_MODULE_7__welcome_welcome_component__["a" /* WelcomeComponent */],
    },
    {
        path: "adminlogin",
        component: __WEBPACK_IMPORTED_MODULE_8__admin_login_admin_login_component__["a" /* AdminLoginComponent */],
    },
    {
        path: "studentlogin",
        component: __WEBPACK_IMPORTED_MODULE_4__student_login_student_login_component__["a" /* StudentLoginComponent */]
    },
    {
        path: "admindashboard",
        component: __WEBPACK_IMPORTED_MODULE_3__admin_home_admin_home_component__["a" /* AdminHomeComponent */]
    },
    {
        path: "studentdashboard",
        component: __WEBPACK_IMPORTED_MODULE_2__student_home_student_home_component__["a" /* StudentHomeComponent */]
    },
    {
        path: "studentdashboard/home",
        component: __WEBPACK_IMPORTED_MODULE_2__student_home_student_home_component__["a" /* StudentHomeComponent */]
    },
    {
        path: "studentdashboard/allbooks",
        component: __WEBPACK_IMPORTED_MODULE_1__all_books_all_books_component__["a" /* AllBooksComponent */]
    },
    {
        path: "studentdashboard/booksborrowed",
        component: __WEBPACK_IMPORTED_MODULE_0__books_borrowed_students_books_borrowed_students_component__["a" /* BooksBorrowedStudentsComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true })
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 104:
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

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".heading{\r\n        text-align: center;\r\n        font-family: 'Barrio', cursive;\r\n        font-size: 28px;\r\n    }\r\n.centering{\r\n        padding-top: 20%;\r\n        padding-bottom: 20%;\r\n        padding-left: 30%;\r\n        padding-right: 30%;\r\n        background-image: -webkit-radial-gradient(center, ellipse farthest-corner, #FFFFFF 0%, #00A3EF 100%);\r\n\r\n    };", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".centering{\r\n        padding-top: 20%;\r\n        padding-bottom: 20%;\r\n        padding-left: 40%;\r\n        padding-right: 30%;\r\n        background-image: -webkit-radial-gradient(center, ellipse farthest-corner, #FFFFFF 0%, #00A3EF 100%);\r\n\r\n    };\r\n\r\n.fontstyle{\r\n    font-family: 'Cantarell', sans-serif;\r\n    font-size: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".centering{\r\n        padding-top: 20%;\r\n        padding-bottom: 20%;\r\n        padding-left: 40%;\r\n        padding-right: 30%;\r\n        background-image: -webkit-radial-gradient(center, ellipse farthest-corner, #FFFFFF 0%, #00A3EF 100%);\r\n\r\n    };\r\n\r\n.fontstyle{\r\n    font-family: 'Cantarell', sans-serif;\r\n    font-size: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".centering{\r\n        padding-top: 20%;\r\n        padding-bottom: 20%;\r\n        padding-left: 40%;\r\n        padding-right: 30%;\r\n        background-image: -webkit-radial-gradient(center, ellipse farthest-corner, #FFFFFF 0%, #00A3EF 100%);\r\n\r\n    };\r\n\r\n.fontstyle{\r\n    font-family: 'Cantarell', sans-serif;\r\n    font-size: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".heading{\r\n        text-align: center;\r\n        font-family: 'Barrio', cursive;\r\n        font-size: 28px;\r\n    }\r\n.centering{\r\n        padding-top: 20%;\r\n        padding-bottom: 20%;\r\n        padding-left: 30%;\r\n        padding-right: 30%;\r\n        background-image: -webkit-radial-gradient(center, ellipse farthest-corner, #FFFFFF 0%, #00A3EF 100%);\r\n\r\n    };", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.parent {\r\n   padding-top: 20%;\r\n        padding-bottom: 20%;\r\n        padding-left: 45%;\r\n        padding-right: 30%;\r\n        background-image: -webkit-radial-gradient(center, ellipse farthest-corner, #FFFFFF 0%, #00A3EF 100%);\r\n}\r\n\r\n.wel{\r\n    font-family: 'Galada', cursive;\r\n    font-size: 42px;\r\n    color: #e8041f;\r\n}\r\n\r\n.who{\r\n    font-family: 'Ravi Prakash', cursive;\r\n    font-size: 24px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-home works!\n</p>\n"

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Barrio|Dosis\" rel=\"stylesheet\">\n<div class=\"centering\">\n<form class=\"form-horizontal\">\n  <div class=\"heading\">\n    Admin Login\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\n    <div class=\"col-sm-10\">\n      <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password</label>\n    <div class=\"col-sm-10\">\n      <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n      <button type=\"submit\" class=\"btn btn-success\" routerLink=\"/admindashboard\" routerLinkActive=\"active\">Sign in</button>\n    </div>\n  </div>\n</form>\n</div>"

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Cantarell:400i\" rel=\"stylesheet\">\n\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\"> Welcome Studen One</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav\">\n            <li><a routerLink=\"/studentdashboard/home\" routerLinkActive=\"active\">Home</a></li>\n            <li class=\"active\"><a routerLink=\"/studentdashboard/allbooks\" routerLinkActive=\"active\">All Books</a></li>\n            <li><a routerLink=\"/studentdashboard/booksborrowed\" routerLinkActive=\"active\">Borrowed Books</a></li>\n            <li><a type=\"button\" class=\"btn btn-danger\" routerLink=\"/welcome\" routerLinkActive=\"active\">Sign Out</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n<div class=\"centering\">\n <h1>All Books will be listed here</h1>\n</div>"

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Cantarell:400i\" rel=\"stylesheet\">\n\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\"> Welcome Studen One</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav\">\n            <li><a routerLink=\"/studentdashboard/home\" routerLinkActive=\"active\">Home</a></li>\n            <li><a routerLink=\"/studentdashboard/allbooks\" routerLinkActive=\"active\">All Books</a></li>\n            <li class=\"active\"><a routerLink=\"/studentdashboard/booksborowed\" routerLinkActive=\"active\">Borrowed Books</a></li>\n            <li><a type=\"button\" class=\"btn btn-danger\" routerLink=\"/welcome\" routerLinkActive=\"active\">Sign Out</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n<div class=\"centering\">\n <h1>Books borrowed will be listed here</h1>\n</div>"

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Cantarell:400i\" rel=\"stylesheet\">\n\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\"> Welcome Studen One</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav\">\n            <li class=\"active\"><a routerLink=\"/studentdashboard/home\" routerLinkActive=\"active\">Home</a></li>\n            <li><a routerLink=\"/studentdashboard/allbooks\" routerLinkActive=\"active\">All Books</a></li>\n            <li><a routerLink=\"/studentdashboard/home\" routerLinkActive=\"active\">Borrowed Books</a></li>\n            <li>  <a type=\"button\" class=\"btn btn-danger\" routerLink=\"/welcome\" routerLinkActive=\"active\">Sign Out</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n<div class=\"centering\">\n  <div> \n  <label style=\"font-size: 18px\">Name :</label><label style=\"font-family: 'Cantarell', sans-serif; font-size:26px;\"> Student One</label><br>\n  <label style=\"font-size: 18px\">Department :</label><label style=\"font-family: 'Cantarell', sans-serif; font-size:26px;\"> CSE</label><br>\n  <label style=\"font-size: 18px\">Year :</label><label style=\"font-family: 'Cantarell', sans-serif; font-size:26px;\"> 1st Year</label><br>\n  <label style=\"font-size: 18px\">Contact No :</label><label style=\"font-family: 'Cantarell', sans-serif; font-size:26px;\"> 1234567890</label><br>\n  <label style=\"font-size: 18px\">Roll :</label><label style=\"font-family: 'Cantarell', sans-serif; font-size:26px;\"> 1</label><br>\n  <label style=\"font-size: 18px\">Email/Username :</label><label style=\"font-family: 'Cantarell', sans-serif; font-size:26px;\"> one@gmail.com</label>\n</div>"

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Barrio|Dosis\" rel=\"stylesheet\">\n<div class=\"centering\">\n<form class=\"form-horizontal\">\n  <div class=\"heading\">\n    Student Login\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\n    <div class=\"col-sm-10\">\n      <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password</label>\n    <div class=\"col-sm-10\">\n      <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n      <button type=\"submit\" class=\"btn btn-success\" routerLink=\"/studentdashboard\" routerLinkActive=\"active\">Sign in</button>\n    </div>\n  </div>\n</form>\n</div>"

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Galada\" rel=\"stylesheet\">\n<link href=\"https://fonts.googleapis.com/css?family=Ravi+Prakash\" rel=\"stylesheet\">\n<div class=\"background-img\">\n  <div class=\"parent\">\n    <div class=\"wel\">\n      Welcome\n    </div>\n    <div class=\"who\">\n      Who are you?\n    </div>\n    <a type=\"button\" class=\"btn btn-primary\" routerLink=\"/adminlogin\" routerLinkActive=\"active\">Admin</a>   <a type=\"button\" class=\"btn btn-primary\" routerLink=\"/studentlogin\" routerLinkActive=\"active\">Student</a>\n  </div>\n</div>"

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(93);


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminHomeComponent = (function () {
    function AdminHomeComponent() {
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
    };
    return AdminHomeComponent;
}());
AdminHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-admin-home',
        template: __webpack_require__(166),
        styles: [__webpack_require__(158)]
    }),
    __metadata("design:paramtypes", [])
], AdminHomeComponent);

//# sourceMappingURL=admin-home.component.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminLoginComponent = (function () {
    function AdminLoginComponent() {
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
    };
    return AdminLoginComponent;
}());
AdminLoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-admin-login',
        template: __webpack_require__(167),
        styles: [__webpack_require__(159)]
    }),
    __metadata("design:paramtypes", [])
], AdminLoginComponent);

//# sourceMappingURL=admin-login.component.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllBooksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AllBooksComponent = (function () {
    function AllBooksComponent() {
    }
    AllBooksComponent.prototype.ngOnInit = function () {
    };
    return AllBooksComponent;
}());
AllBooksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-all-books',
        template: __webpack_require__(168),
        styles: [__webpack_require__(160)]
    }),
    __metadata("design:paramtypes", [])
], AllBooksComponent);

//# sourceMappingURL=all-books.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksBorrowedStudentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BooksBorrowedStudentsComponent = (function () {
    function BooksBorrowedStudentsComponent() {
    }
    BooksBorrowedStudentsComponent.prototype.ngOnInit = function () {
    };
    return BooksBorrowedStudentsComponent;
}());
BooksBorrowedStudentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-books-borrowed-students',
        template: __webpack_require__(170),
        styles: [__webpack_require__(162)]
    }),
    __metadata("design:paramtypes", [])
], BooksBorrowedStudentsComponent);

//# sourceMappingURL=books-borrowed-students.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentHomeComponent = (function () {
    function StudentHomeComponent() {
    }
    StudentHomeComponent.prototype.ngOnInit = function () {
    };
    return StudentHomeComponent;
}());
StudentHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-student-home',
        template: __webpack_require__(171),
        styles: [__webpack_require__(163)]
    }),
    __metadata("design:paramtypes", [])
], StudentHomeComponent);

//# sourceMappingURL=student-home.component.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentLoginComponent = (function () {
    function StudentLoginComponent() {
    }
    StudentLoginComponent.prototype.ngOnInit = function () {
    };
    return StudentLoginComponent;
}());
StudentLoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-student-login',
        template: __webpack_require__(172),
        styles: [__webpack_require__(164)]
    }),
    __metadata("design:paramtypes", [])
], StudentLoginComponent);

//# sourceMappingURL=student-login.component.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-welcome',
        template: __webpack_require__(173),
        styles: [__webpack_require__(165)]
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);

//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 92;


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(104);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.bundle.js.map