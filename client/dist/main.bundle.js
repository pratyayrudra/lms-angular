webpackJsonp([1,4],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 111;


/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(124);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(203),
        styles: [__webpack_require__(188)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__welcome_welcome_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_login_admin_login_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__student_login_student_login_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_home_admin_home_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__student_home_student_home_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__all_books_all_books_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__books_borrowed_students_books_borrowed_students_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__admin_book_admin_book_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__admin_student_admin_student_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__admin_add_student_admin_add_student_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__admin_add_book_admin_add_book_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__admin_book_details_admin_book_details_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__admin_student_details_admin_student_details_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__student_book_details_student_book_details_component__ = __webpack_require__(79);
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
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__admin_login_admin_login_component__["a" /* AdminLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__student_login_student_login_component__["a" /* StudentLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__admin_home_admin_home_component__["a" /* AdminHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__student_home_student_home_component__["a" /* StudentHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__all_books_all_books_component__["a" /* AllBooksComponent */],
            __WEBPACK_IMPORTED_MODULE_14__books_borrowed_students_books_borrowed_students_component__["a" /* BooksBorrowedStudentsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__admin_book_admin_book_component__["a" /* AdminBookComponent */],
            __WEBPACK_IMPORTED_MODULE_16__admin_student_admin_student_component__["a" /* AdminStudentComponent */],
            __WEBPACK_IMPORTED_MODULE_17__admin_add_student_admin_add_student_component__["a" /* AdminAddStudentComponent */],
            __WEBPACK_IMPORTED_MODULE_18__admin_add_book_admin_add_book_component__["a" /* AdminAddBookComponent */],
            __WEBPACK_IMPORTED_MODULE_19__admin_book_details_admin_book_details_component__["a" /* AdminBookDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__admin_student_details_admin_student_details_component__["a" /* AdminStudentDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__student_book_details_student_book_details_component__["a" /* StudentBookDetailsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MdCardModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__student_book_details_student_book_details_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_add_book_admin_add_book_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_book_details_admin_book_details_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_student_details_admin_student_details_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_add_student_admin_add_student_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_student_admin_student_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_book_admin_book_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__books_borrowed_students_books_borrowed_students_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__all_books_all_books_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__student_home_student_home_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_home_admin_home_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__student_login_student_login_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__welcome_welcome_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__admin_login_admin_login_component__ = __webpack_require__(74);
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
        component: __WEBPACK_IMPORTED_MODULE_14__welcome_welcome_component__["a" /* WelcomeComponent */],
    },
    {
        path: "welcome",
        component: __WEBPACK_IMPORTED_MODULE_14__welcome_welcome_component__["a" /* WelcomeComponent */],
    },
    {
        path: "adminlogin",
        component: __WEBPACK_IMPORTED_MODULE_15__admin_login_admin_login_component__["a" /* AdminLoginComponent */],
    },
    {
        path: "studentlogin",
        component: __WEBPACK_IMPORTED_MODULE_11__student_login_student_login_component__["a" /* StudentLoginComponent */]
    },
    {
        path: "admindashboard",
        component: __WEBPACK_IMPORTED_MODULE_10__admin_home_admin_home_component__["a" /* AdminHomeComponent */]
    },
    {
        path: "studentdashboard",
        component: __WEBPACK_IMPORTED_MODULE_9__student_home_student_home_component__["a" /* StudentHomeComponent */]
    },
    {
        path: "studentdashboard/home",
        component: __WEBPACK_IMPORTED_MODULE_9__student_home_student_home_component__["a" /* StudentHomeComponent */]
    },
    {
        path: "studentdashboard/allbooks",
        component: __WEBPACK_IMPORTED_MODULE_8__all_books_all_books_component__["a" /* AllBooksComponent */]
    },
    {
        path: "studentdashboard/booksborrowed",
        component: __WEBPACK_IMPORTED_MODULE_7__books_borrowed_students_books_borrowed_students_component__["a" /* BooksBorrowedStudentsComponent */]
    },
    {
        path: "admindashboard/allbooks",
        component: __WEBPACK_IMPORTED_MODULE_6__admin_book_admin_book_component__["a" /* AdminBookComponent */]
    },
    {
        path: "admindashboard/allstudents",
        component: __WEBPACK_IMPORTED_MODULE_5__admin_student_admin_student_component__["a" /* AdminStudentComponent */]
    },
    {
        path: "admindashboard/addstudent",
        component: __WEBPACK_IMPORTED_MODULE_4__admin_add_student_admin_add_student_component__["a" /* AdminAddStudentComponent */]
    },
    {
        path: "admindashboard/allstudents/studentdetails",
        component: __WEBPACK_IMPORTED_MODULE_3__admin_student_details_admin_student_details_component__["a" /* AdminStudentDetailsComponent */]
    },
    {
        path: "admindashboard/allbooks/bookdetails",
        component: __WEBPACK_IMPORTED_MODULE_2__admin_book_details_admin_book_details_component__["a" /* AdminBookDetailsComponent */]
    },
    {
        path: "admindashboard/addbook",
        component: __WEBPACK_IMPORTED_MODULE_1__admin_add_book_admin_add_book_component__["a" /* AdminAddBookComponent */]
    },
    {
        path: "studentdashboard/allbooks/bookdetails",
        component: __WEBPACK_IMPORTED_MODULE_0__student_book_details_student_book_details_component__["a" /* StudentBookDetailsComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_13__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true })
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_13__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 124:
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

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".example-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.button{\r\n    background-color: transparent;\r\n    border: none;\r\n}\r\n.pos{\r\n  position: relative;\r\n  padding-left: 28%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".example-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.button{\r\n    background-color: transparent;\r\n    border: none;\r\n}\r\n.pos{\r\n  position: relative;\r\n  padding-left: 28%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".example-card {\r\n  width: 600px;\r\n  text-align: center;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('https://prodimage.images-bn.com/pimages/9780735211209_p0_v3_s192x300.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.button{\r\n    background-color: transparent;\r\n    border: none;\r\n}\r\n\r\n.example-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".example-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.button{\r\n    background-color: transparent;\r\n    border: none;\r\n}\r\n\r\n.pos{\r\n  position: relative;\r\n  padding-left: 45%;\r\n  padding-bottom: 3%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".example-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\nmd-grid-tile {\r\n  background-image: -webkit-radial-gradient(center, ellipse farthest-corner, #FFFFFF 0%, #00A3EF 100%);\r\n  font-family: 'Kumar One', cursive;\r\n  font-size: 36px;\r\n}\r\n\r\n.button{\r\n    background-color: transparent;\r\n    border: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".heading{\r\n        text-align: center;\r\n        font-family: 'Barrio', cursive;\r\n        font-size: 28px;\r\n    }\r\n.centering{\r\n        padding-top: 20%;\r\n        padding-bottom: 20%;\r\n        padding-left: 30%;\r\n        padding-right: 30%;\r\n        background-image: -webkit-radial-gradient(center, ellipse farthest-corner, #FFFFFF 0%, #00A3EF 100%);\r\n\r\n    };", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".example-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.button{\r\n    background-color: transparent;\r\n    border: none;\r\n}\r\n\r\n.heading{\r\n    font-family: 'Merriweather', serif;\r\n}\r\n\r\n.example-card {\r\n  width: 600px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".example-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.button{\r\n    background-color: transparent;\r\n    border: none;\r\n}\r\n\r\n.pos{\r\n  position: relative;\r\n  padding-left: 45%;\r\n  padding-bottom: 3%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".example-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.button{\r\n    background-color: transparent;\r\n    border: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".example-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.button{\r\n    background-color: transparent;\r\n    border: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".example-card {\r\n  width: 600px;\r\n  text-align: center;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('https://prodimage.images-bn.com/pimages/9780735211209_p0_v3_s192x300.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.button{\r\n    background-color: transparent;\r\n    border: none;\r\n}\r\n\r\n.example-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".example-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.button{\r\n    background-color: transparent;\r\n    border-top: none;\r\n    border-bottom: none;\r\n    border-left-width: 4px;\r\n    border-right-width: 4px;\r\n    border-left-color: black;\r\n    border-right-color: black;\r\n}\r\n\r\n.buttonsignout{\r\n    background-color: transparent;\r\n    border: none;\r\n}\r\n\r\n.heading{\r\n    font-family: 'Merriweather', serif;\r\n}\r\n\r\n.example-card {\r\n  width:600px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".heading{\r\n        text-align: center;\r\n        font-family: 'Barrio', cursive;\r\n        font-size: 28px;\r\n    }\r\n.centering{\r\n        padding-top: 20%;\r\n        padding-bottom: 20%;\r\n        padding-left: 30%;\r\n        padding-right: 30%;\r\n        background-image: -webkit-radial-gradient(center, ellipse farthest-corner, #FFFFFF 0%, #00A3EF 100%);\r\n\r\n    };", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.parent {\r\n   padding-top: 20%;\r\n        padding-bottom: 20%;\r\n        padding-left: 45%;\r\n        padding-right: 30%;\r\n        background-image: -webkit-radial-gradient(center, ellipse farthest-corner, #FFFFFF 0%, #00A3EF 100%);\r\n}\r\n\r\n.wel{\r\n    font-family: 'Galada', cursive;\r\n    font-size: 42px;\r\n    color: #e8041f;\r\n}\r\n\r\n.who{\r\n    font-family: 'Ravi Prakash', cursive;\r\n    font-size: 24px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports = "<md-toolbar style=\"background-color:#00A3EF; color:yellow\">\n  <span style=\"font-family: 'Montserrat Subrayada', sans-serif;\" routerLink=\"/admindashboard\">Admin Dashboard</span>\n\n    <span class=\"example-spacer\"></span>\n    <button class=\"button\" routerLink=\"/welcome\">Sign Out</button>\n</md-toolbar>\n\n<div style=\"text-align:center\">\n    <h2>New Book Registration</h2>\n  </div>\n\n<form class=\"pos\">\n  <div class=\"form-group col-xs-7\">\n    <h5>NAME : </h5>\n    <input type=\"text\" class=\"form-control\">\n  </div>  \n  <div class=\"form-group col-xs-7\">\n    <h5>PUBLISHER : </h5>\n    <input type=\"text\" class=\"form-control\">\n  </div>\n  <div class=\"form-group col-xs-7\">\n    <h5>AUTHOR : </h5>\n    <input type=\"text\" class=\"form-control\">\n  </div>\n  <div class=\"form-group col-xs-7\">\n    <h5>PAGES </h5>\n    <input type=\"number\" class=\"form-control\">\n  </div>\n  <div class=\"form-group col-xs-7\">\n    <h5>IMAGE-URL : </h5>\n    <input type=\"text\" class=\"form-control\">\n  </div>\n</form> \n<div style=\"position:absolute; padding-top:33%; padding-left:45%;\">\n  <button class=\"btn btn-primary\">Submit</button> \n</div>\n"

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports = "<md-toolbar style=\"background-color:#00A3EF; color:yellow\">\n  <span style=\"font-family: 'Montserrat Subrayada', sans-serif;\" routerLink=\"/admindashboard\">Admin Dashboard</span>\n\n    <span class=\"example-spacer\"></span>\n    <button class=\"button\" routerLink=\"/welcome\">Sign Out</button>\n</md-toolbar>\n\n<div style=\"text-align:center\">\n    <h2>New Student Registration</h2>\n  </div>\n<form class=\"pos\"> \n  \n  <div class=\"form-group col-xs-7\">\n    <h5>NAME </h5>\n    <input type=\"text\" class=\"form-control\">\n  </div>\n  <div class=\"form-group col-xs-7\">\n    <h5>DEPARTMENT </h5>\n      <select class=\"form-control\">\n          <option>CSE</option>\n          <option>IT</option>\n          <option>Electronics</option>\n        </select>  \n    </div>  \n    <div class=\"form-group col-xs-7\">\n    <h5>YEAR </h5>\n      <select class=\"form-control\">\n          <option>1st Year</option>\n          <option>2nd Year</option>\n          <option>3rd Year</option>\n          <option>4th Year</option>\n        </select>  \n    </div> \n    <div class=\"form-group col-xs-7\">\n    <h5>PHONE </h5>\n    <input type=\"numer\" class=\"form-control\">\n  </div>\n  <div class=\"form-group col-xs-7\">\n    <h5>ROLL</h5>\n    <input type=\"number\" class=\"form-control\">\n  </div>\n  <div class=\"form-group col-xs-7\">\n    <h5>EMAIL/USERNAME </h5>\n    <input type=\"email\" class=\"form-control\">\n  </div>\n  <div class=\"form-group col-xs-7\">\n    <h5>PASSWORD </h5>\n    <input type=\"password\" class=\"form-control\">\n  </div>\n</form>\n\n<div style=\"position:absolute; padding-top:45%; padding-left:46%; padding-bottom:3%\">\n  <button type=\"submit\" class=\"btn btn-primary\">Submit</button> \n</div>\n"

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = "<md-toolbar style=\"background-color:#00A3EF; color:yellow\">\n  <span style=\"font-family: 'Montserrat Subrayada', sans-serif;\" routerLink=\"/admindashboard\">Admin Dashboard</span>\n\n    <span class=\"example-spacer\"></span>\n    <button class=\"button\" routerLink=\"/welcome\">Sign Out</button>\n</md-toolbar>\n\n<div style=\"padding-left:25%\">\n<md-card class=\"example-card\">\n  <md-card-header>\n    <div md-card-avatar class=\"example-header-image\"></div>\n    <md-card-title>Into the Water</md-card-title>\n    <md-card-subtitle>by Paula Hawkins</md-card-subtitle>\n  </md-card-header>\n  <img md-card-image src=\"https://prodimage.images-bn.com/pimages/9780735211209_p0_v3_s192x300.jpg\" style=\"width:200px;height:auto\">\n  <md-card-content>\n    <p>\n      <label>Description :</label>\n      Hawkins is at the forefront of a group of female authors – think Gillian Flynn and Megan Abbott – who have reinvigorated the literary suspense novel by tapping a rich vein of psychological menace and social unease… there’s a certain solace to a dark escape, in the promise of submerged truths coming to light.\n    </p>\n    <p>\n      <label>Publisher : </label> Penguin Publishing Group\n   </p>\n   <p>\n      <label>Pages : </label> 400\n   </p>\n  </md-card-content>\n</md-card>"

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = "<div>\n<md-toolbar style=\"background-color:#00A3EF; color:yellow\">\n  <span style=\"font-family: 'Montserrat Subrayada', sans-serif;\" routerLink=\"/admindashboard\">Admin Dashboard</span>\n\n    <span class=\"example-spacer\"></span>\n    <button class=\"button\" routerLink=\"/welcome\">Sign Out</button>\n</md-toolbar>\n</div>\n\n<div>\n<md-list>\n  <md-list-item routerLink=\"/admindashboard/allbooks/bookdetails\">\n    <img md-list-avatar src=\"https://prodimage.images-bn.com/pimages/9780735211209_p0_v3_s192x300.jpg\" alt=\"...\">\n    <h2 md-line> Into the Water </h2>\n    <p md-line>\n      <span> By -- Paula Hawkins </span>\n    </p>\n    <button class=\"btn btn-danger\">Delete</button>\n    <button class=\"btn btn-primary\">Update</button>\n  </md-list-item>\n  <md-list-item routerLink=\"/admindashboard/allbooks/bookdetails\">\n    <img md-list-avatar src=\"https://prodimage.images-bn.com/pimages/9780735211209_p0_v3_s192x300.jpg\" alt=\"...\">\n    <h2 md-line> Into the Water </h2>\n    <p md-line>\n      <span> By -- Paula Hawkins </span>\n    </p>\n    <button class=\"btn btn-danger\">Delete</button>\n    <button class=\"btn btn-primary\">Update</button>\n  </md-list-item>\n  <md-list-item routerLink=\"/admindashboard/allbooks/bookdetails\">\n    <img md-list-avatar src=\"https://prodimage.images-bn.com/pimages/9780735211209_p0_v3_s192x300.jpg\" alt=\"...\">\n    <h2 md-line> Into the Water </h2>\n    <p md-line>\n      <span> By -- Paula Hawkins </span>\n    </p>\n    <button class=\"btn btn-danger\">Delete</button>\n    <button class=\"btn btn-primary\">Update</button>\n  </md-list-item>\n  <md-list-item routerLink=\"/admindashboard/allbooks/bookdetails\">\n    <img md-list-avatar src=\"https://prodimage.images-bn.com/pimages/9780735211209_p0_v3_s192x300.jpg\" alt=\"...\">\n    <h2 md-line> Into the Water </h2>\n    <p md-line>\n      <span> By -- Paula Hawkins </span>\n    </p>\n    <button class=\"btn btn-danger\">Delete</button>\n    <button class=\"btn btn-primary\">Update</button>\n  </md-list-item>\n  <md-list-item routerLink=\"/admindashboard/allbooks/bookdetails\">\n    <img md-list-avatar src=\"https://prodimage.images-bn.com/pimages/9780735211209_p0_v3_s192x300.jpg\" alt=\"...\">\n    <h2 md-line> Into the Water </h2>\n    <p md-line>\n      <span> By -- Paula Hawkins </span>\n    </p>\n    <button class=\"btn btn-danger\">Delete</button>\n    <button class=\"btn btn-primary\">Update</button>\n  </md-list-item>\n  <md-list-item routerLink=\"/admindashboard/allbooks/bookdetails\">\n    <img md-list-avatar src=\"https://prodimage.images-bn.com/pimages/9780735211209_p0_v3_s192x300.jpg\" alt=\"...\">\n    <h2 md-line>Into the Water </h2>\n    <p md-line>\n      <span> By -- Paula Hawkins </span>\n    </p>\n    <button class=\"btn btn-danger\">Delete</button>\n    <button class=\"btn btn-primary\">Update</button>\n  </md-list-item>\n  <md-list-item routerLink=\"/admindashboard/allbooks/bookdetails\">\n    <img md-list-avatar src=\"https://prodimage.images-bn.com/pimages/9780735211209_p0_v3_s192x300.jpg\" alt=\"...\">\n    <h2 md-line> Into the Water </h2>\n    <p md-line>\n      <span> By -- Paula Hawkins </span>\n    </p>\n    <button class=\"btn btn-danger\">Delete</button>\n    <button class=\"btn btn-primary\">Update</button>\n  </md-list-item>\n  \n</md-list>\n</div>\n<div class=\"pos\">\n  <button class=\"btn btn-primary\" routerLink=\"/admindashboard/addbook\">Add Book</button>\n</div>"

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports = "\n<md-toolbar style=\"background-color:#00A3EF; color:yellow\">\n  <span style=\"font-family: 'Montserrat Subrayada', sans-serif;\">Admin Dashboard</span>\n\n    <span class=\"example-spacer\"></span>\n    <button class=\"button\" routerLink=\"/welcome\">Sign Out</button>\n</md-toolbar>\n\n<md-grid-list cols=\"3\" rowHeight=\"1:1.4\">\n  <md-grid-tile routerLink=\"/admindashboard/allbooks\">Manage Books</md-grid-tile>\n  <md-grid-tile routerLink=\"/admindashboard/allstudents\">Manage Students</md-grid-tile>\n  <md-grid-tile>Ebooks</md-grid-tile>\n</md-grid-list>"

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Barrio|Dosis\" rel=\"stylesheet\">\n<div class=\"centering\">\n<form class=\"form-horizontal\">\n  <div class=\"heading\">\n    Admin Login\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\n    <div class=\"col-sm-10\">\n      <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password</label>\n    <div class=\"col-sm-10\">\n      <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n      <button type=\"submit\" class=\"btn btn-success\" routerLink=\"/admindashboard\" routerLinkActive=\"active\">Sign in</button>\n    </div>\n  </div>\n</form>\n</div>"

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

module.exports = "<md-toolbar style=\"background-color:#00A3EF; color:yellow\">\n  <span style=\"font-family: 'Montserrat Subrayada', sans-serif;\" routerLink=\"/admindashboard\">Admin Dashboard</span>\n\n    <span class=\"example-spacer\"></span>\n    <button class=\"button\" routerLink=\"/welcome\">Sign Out</button>\n</md-toolbar>\n\n<div style=\"padding-left:28%;padding-top:5%;\">\n<md-card class=\"example-card\">\n  <md-card-header>\n    <md-card-title class=\"heading\">Pratyay Rudra's Details =></md-card-title>\n  </md-card-header>\n  <md-card-content>\n    <p>\n      <label>Name :</label>\n        Pratyay Rudra\n    </p>\n    <p>\n      <label>Department :</label>\n        CSE\n    </p>\n    <p>\n      <label>Year : </label> 1st Year\n   </p>\n   <p>\n      <label>Roll : </label> 1\n   </p>\n   <p>\n      <label>Email/Username :</label>\n        xyz@gmail.com\n    </p>\n  </md-card-content>\n  <md-card-actions style=\"text-align:center\">\n    <button md-button>Books Borrowed</button>\n  </md-card-actions>\n</md-card>"

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

module.exports = "<div>\n<md-toolbar style=\"background-color:#00A3EF; color:yellow\">\n  <span style=\"font-family: 'Montserrat Subrayada', sans-serif;\" routerLink=\"/admindashboard\">Admin Dashboard</span>\n\n    <span class=\"example-spacer\"></span>\n    <button class=\"button\" routerLink=\"/welcome\">Sign Out</button>\n</md-toolbar>\n</div>\n\n<md-list>\n  <md-list-item routerLink=\"/admindashboard/allstudents/studentdetails\"> \n    <div md-line style=\"font-size:24px;\">Student 1</div>\n    <button class=\"btn btn-danger\">Delete</button>\n    <button class=\"btn btn-primary\">Update</button>\n  </md-list-item>\n  <hr>\n  <md-list-item routerLink=\"/admindashboard/allstudents/studentdetails\"> \n    <div md-line style=\"font-size:24px;\">Student 2</div>\n    <button class=\"btn btn-danger\">Delete</button>\n    <button class=\"btn btn-primary\">Update</button>\n  </md-list-item>\n  <hr>\n  <md-list-item routerLink=\"/admindashboard/allstudents/studentdetails\"> \n    <div md-line style=\"font-size:24px;\">Student 3</div>\n    <button class=\"btn btn-danger\">Delete</button>\n    <button class=\"btn btn-primary\">Update</button>\n  </md-list-item>\n  <hr>\n  <md-list-item routerLink=\"/admindashboard/allstudents/studentdetails\"> \n    <div md-line style=\"font-size:24px;\">Student 4</div>\n    <button class=\"btn btn-danger\">Delete</button>\n    <button class=\"btn btn-primary\">Update</button>\n  </md-list-item>\n  <hr>\n  <md-list-item routerLink=\"/admindashboard/allstudents/studentdetails\"> \n    <div md-line style=\"font-size:24px;\">Student 5</div>\n    <button class=\"btn btn-danger\">Delete</button>\n    <button class=\"btn btn-primary\">Update</button>\n  </md-list-item>\n  <hr>\n  <md-list-item>\n    <div class=\"pos\">  \n    <button class=\"btn btn-primary\" routerLink=\"/admindashboard/addstudent\">Add Student</button>\n    </div>\n  </md-list-item>\n</md-list>"

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

module.exports = "<div>\n<md-toolbar style=\"background-color:#00A3EF; color:yellow\">\n  <span style=\"font-family: 'Montserrat Subrayada', sans-serif;\">Welcome Pratyay</span>\n    <ul class=\"nav navbar-nav\">\n      <li><a routerLink=\"/studentdashboard/home\">Home</a></li>\n      <li  class=\"active\"><a routerLink=\"/studentdashboard/allbooks\">All Books</a></li>\n      <li><a routerLink=\"/studentdashboard/booksborrowed\">Books Borrowed</a></li>\n    </ul>\n    <span class=\"example-spacer\"></span>\n    <button class=\"button\" routerLink=\"/welcome\">Sign Out</button>\n</md-toolbar>\n</div>\n\n<div>\n<md-list>\n  <md-list-item routerLink=\"/studentdashboard/allbooks/bookdetails\">\n    <img md-list-avatar src=\"https://prodimage.images-bn.com/pimages/9780735211209_p0_v3_s192x300.jpg\" alt=\"...\">\n    <h2 md-line> Into the Water </h2>\n    <p md-line>\n      <span> By -- Paula Hawkins </span>\n    </p>\n    <button class=\"btn btn-primary\">Borrow</button>\n  </md-list-item>\n  <md-list-item routerLink=\"/studentdashboard/allbooks/bookdetails\">\n    <img md-list-avatar src=\"https://prodimage.images-bn.com/pimages/9780735211209_p0_v3_s192x300.jpg\" alt=\"...\">\n    <h2 md-line> Into the Water </h2>\n    <p md-line>\n      <span> By -- Paula Hawkins </span>\n    </p>\n    <button class=\"btn btn-primary\">Borrow</button>\n  </md-list-item>\n  <md-list-item routerLink=\"/studentdashboard/allbooks/bookdetails\">\n    <img md-list-avatar src=\"https://prodimage.images-bn.com/pimages/9780735211209_p0_v3_s192x300.jpg\" alt=\"...\">\n    <h2 md-line> Into the Water </h2>\n    <p md-line>\n      <span> By -- Paula Hawkins </span>\n    </p>\n    <button class=\"btn btn-primary\">Borrow</button>\n  </md-list-item>\n  <md-list-item routerLink=\"/studentdashboard/allbooks/bookdetails\">\n    <img md-list-avatar src=\"https://prodimage.images-bn.com/pimages/9780735211209_p0_v3_s192x300.jpg\" alt=\"...\">\n    <h2 md-line> Into the Water </h2>\n    <p md-line>\n      <span> By -- Paula Hawkins </span>\n    </p>\n    <button class=\"btn btn-primary\">Borrow</button>\n  </md-list-item>\n  <md-list-item routerLink=\"/studentdashboard/allbooks/bookdetails\">\n    <img md-list-avatar src=\"https://prodimage.images-bn.com/pimages/9780735211209_p0_v3_s192x300.jpg\" alt=\"...\">\n    <h2 md-line> Into the Water </h2>\n    <p md-line>\n      <span> By -- Paula Hawkins </span>\n    </p>\n    <button class=\"btn btn-primary\">Borrow</button>\n  </md-list-item>\n  \n  \n</md-list>"

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

module.exports = "<div>\n<md-toolbar style=\"background-color:#00A3EF; color:yellow\">\n  <span style=\"font-family: 'Montserrat Subrayada', sans-serif;\">Welcome Pratyay</span>\n    <ul class=\"nav navbar-nav\">\n      <li><a routerLink=\"/studentdashboard/home\">Home</a></li>\n      <li><a routerLink=\"/studentdashboard/allbooks\">All Books</a></li>\n      <li class=\"active\"><a routerLink=\"/studentdashboard/booksborrowed\">Books Borrowed</a></li>\n    </ul>\n    <span class=\"example-spacer\"></span>\n    <button class=\"button\" routerLink=\"/welcome\">Sign Out</button>\n</md-toolbar>\n</div>\n\n<h1>List of borrowed books will be shown here</h1>"

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports = "<div>\n<md-toolbar style=\"background-color:#00A3EF; color:yellow\">\n  <span style=\"font-family: 'Montserrat Subrayada', sans-serif;\">Welcome Pratyay</span>\n    <ul class=\"nav navbar-nav\">\n      <li><a routerLink=\"/studentdashboard/home\">Home</a></li>\n      <li  class=\"active\"><a routerLink=\"/studentdashboard/allbooks\">All Books</a></li>\n      <li><a routerLink=\"/studentdashboard/booksborrowed\">Books Borrowed</a></li>\n    </ul>\n    <span class=\"example-spacer\"></span>\n    <button class=\"button\" routerLink=\"/welcome\">Sign Out</button>\n</md-toolbar>\n</div>\n\n<div style=\"padding-left:25%\">\n<md-card class=\"example-card\">\n  <md-card-header>\n    <div md-card-avatar class=\"example-header-image\"></div>\n    <md-card-title>Into the Water</md-card-title>\n    <md-card-subtitle>by Paula Hawkins</md-card-subtitle>\n  </md-card-header>\n  <img md-card-image src=\"https://prodimage.images-bn.com/pimages/9780735211209_p0_v3_s192x300.jpg\" style=\"width:200px;height:auto\">\n  <md-card-content>\n    <p>\n      <label>Description :</label>\n      Hawkins is at the forefront of a group of female authors – think Gillian Flynn and Megan Abbott – who have reinvigorated the literary suspense novel by tapping a rich vein of psychological menace and social unease… there’s a certain solace to a dark escape, in the promise of submerged truths coming to light.\n    </p>\n    <p>\n      <label>Publisher : </label> Penguin Publishing Group\n   </p>\n   <p>\n      <label>Pages : </label> 400\n   </p>\n  </md-card-content>\n  <md-card-actions>\n    <button class=\"btn btn-primary\">Borrow</button>\n  </md-card-actions>\n</md-card>"

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

module.exports = "<div>\n<md-toolbar style=\"background-color:#00A3EF; color:yellow\">\n  <span style=\"font-family: 'Montserrat Subrayada', sans-serif;\">Welcome Pratyay</span>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active\"><a routerLink=\"/studentdashboard/home\">Home</a></li>\n      <li><a routerLink=\"/studentdashboard/allbooks\">All Books</a></li>\n      <li><a routerLink=\"/studentdashboard/booksborrowed\">Books Borrowed</a></li>\n    </ul>\n    <span class=\"example-spacer\"></span>\n    <button class=\"buttonsignout\" routerLink=\"/welcome\">Sign Out</button>\n</md-toolbar>\n</div>\n<div style=\"padding-left:28%;padding-top:5%;\">\n<md-card class=\"example-card\">\n  <md-card-header>\n    <md-card-title class=\"heading\">Pratyay Rudra's Details =></md-card-title>\n  </md-card-header>\n  <md-card-content>\n    <p>\n      <label>Name :</label>\n        Pratyay Rudra\n    </p>\n    <p>\n      <label>Department :</label>\n        CSE\n    </p>\n    <p>\n      <label>Year : </label> 1st Year\n   </p>\n   <p>\n      <label>Roll : </label> 1\n   </p>\n   <p>\n      <label>Email/Username :</label>\n        xyz@gmail.com\n    </p>\n  </md-card-content>\n \n</md-card>"

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Barrio|Dosis\" rel=\"stylesheet\">\n<div class=\"centering\">\n<form class=\"form-horizontal\">\n  <div class=\"heading\">\n    Student Login\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\n    <div class=\"col-sm-10\">\n      <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password</label>\n    <div class=\"col-sm-10\">\n      <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n      <button type=\"submit\" class=\"btn btn-success\" routerLink=\"/studentdashboard\" routerLinkActive=\"active\">Sign in</button>\n    </div>\n  </div>\n</form>\n</div>"

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Galada\" rel=\"stylesheet\">\n<link href=\"https://fonts.googleapis.com/css?family=Ravi+Prakash\" rel=\"stylesheet\">\n<div class=\"background-img\">\n  <div class=\"parent\">\n    <div class=\"wel\">\n      Welcome\n    </div>\n    <div class=\"who\">\n      Who are you?\n    </div>\n    <a type=\"button\" class=\"btn btn-primary\" routerLink=\"/adminlogin\" routerLinkActive=\"active\">Admin</a>   <a type=\"button\" class=\"btn btn-primary\" routerLink=\"/studentlogin\" routerLinkActive=\"active\">Student</a>\n  </div>\n</div>"

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(112);


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAddBookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminAddBookComponent = (function () {
    function AdminAddBookComponent() {
    }
    AdminAddBookComponent.prototype.ngOnInit = function () {
    };
    return AdminAddBookComponent;
}());
AdminAddBookComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-admin-add-book',
        template: __webpack_require__(194),
        styles: [__webpack_require__(179)]
    }),
    __metadata("design:paramtypes", [])
], AdminAddBookComponent);

//# sourceMappingURL=admin-add-book.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAddStudentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminAddStudentComponent = (function () {
    function AdminAddStudentComponent() {
    }
    AdminAddStudentComponent.prototype.ngOnInit = function () {
    };
    return AdminAddStudentComponent;
}());
AdminAddStudentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-admin-add-student',
        template: __webpack_require__(195),
        styles: [__webpack_require__(180)]
    }),
    __metadata("design:paramtypes", [])
], AdminAddStudentComponent);

//# sourceMappingURL=admin-add-student.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminBookDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminBookDetailsComponent = (function () {
    function AdminBookDetailsComponent() {
    }
    AdminBookDetailsComponent.prototype.ngOnInit = function () {
    };
    return AdminBookDetailsComponent;
}());
AdminBookDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-admin-book-details',
        template: __webpack_require__(196),
        styles: [__webpack_require__(181)]
    }),
    __metadata("design:paramtypes", [])
], AdminBookDetailsComponent);

//# sourceMappingURL=admin-book-details.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminBookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminBookComponent = (function () {
    function AdminBookComponent() {
    }
    AdminBookComponent.prototype.ngOnInit = function () {
    };
    return AdminBookComponent;
}());
AdminBookComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-admin-book',
        template: __webpack_require__(197),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [])
], AdminBookComponent);

//# sourceMappingURL=admin-book.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-admin-home',
        template: __webpack_require__(198),
        styles: [__webpack_require__(183)]
    }),
    __metadata("design:paramtypes", [])
], AdminHomeComponent);

//# sourceMappingURL=admin-home.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-admin-login',
        template: __webpack_require__(199),
        styles: [__webpack_require__(184)]
    }),
    __metadata("design:paramtypes", [])
], AdminLoginComponent);

//# sourceMappingURL=admin-login.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminStudentDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminStudentDetailsComponent = (function () {
    function AdminStudentDetailsComponent() {
    }
    AdminStudentDetailsComponent.prototype.ngOnInit = function () {
    };
    return AdminStudentDetailsComponent;
}());
AdminStudentDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-admin-student-details',
        template: __webpack_require__(200),
        styles: [__webpack_require__(185)]
    }),
    __metadata("design:paramtypes", [])
], AdminStudentDetailsComponent);

//# sourceMappingURL=admin-student-details.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminStudentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminStudentComponent = (function () {
    function AdminStudentComponent() {
    }
    AdminStudentComponent.prototype.ngOnInit = function () {
    };
    return AdminStudentComponent;
}());
AdminStudentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-admin-student',
        template: __webpack_require__(201),
        styles: [__webpack_require__(186)]
    }),
    __metadata("design:paramtypes", [])
], AdminStudentComponent);

//# sourceMappingURL=admin-student.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-all-books',
        template: __webpack_require__(202),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [])
], AllBooksComponent);

//# sourceMappingURL=all-books.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-books-borrowed-students',
        template: __webpack_require__(204),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [])
], BooksBorrowedStudentsComponent);

//# sourceMappingURL=books-borrowed-students.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentBookDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentBookDetailsComponent = (function () {
    function StudentBookDetailsComponent() {
    }
    StudentBookDetailsComponent.prototype.ngOnInit = function () {
    };
    return StudentBookDetailsComponent;
}());
StudentBookDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-student-book-details',
        template: __webpack_require__(205),
        styles: [__webpack_require__(190)]
    }),
    __metadata("design:paramtypes", [])
], StudentBookDetailsComponent);

//# sourceMappingURL=student-book-details.component.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-student-home',
        template: __webpack_require__(206),
        styles: [__webpack_require__(191)]
    }),
    __metadata("design:paramtypes", [])
], StudentHomeComponent);

//# sourceMappingURL=student-home.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-student-login',
        template: __webpack_require__(207),
        styles: [__webpack_require__(192)]
    }),
    __metadata("design:paramtypes", [])
], StudentLoginComponent);

//# sourceMappingURL=student-login.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-welcome',
        template: __webpack_require__(208),
        styles: [__webpack_require__(193)]
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);

//# sourceMappingURL=welcome.component.js.map

/***/ })

},[263]);
//# sourceMappingURL=main.bundle.js.map