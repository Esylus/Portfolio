webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-navbar></app-navbar>\r\n\r\n<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_send_msg_service__ = __webpack_require__("./src/app/services/send-msg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_portfolio_portfolio_component__ = __webpack_require__("./src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_about_about_component__ = __webpack_require__("./src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_contact_contact_component__ = __webpack_require__("./src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_notfound_notfound_component__ = __webpack_require__("./src/app/components/notfound/notfound.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_10__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_11__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_9__components_portfolio_portfolio_component__["a" /* PortfolioComponent */] },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_12__components_notfound_notfound_component__["a" /* NotfoundComponent */] },
    { path: '**', redirectTo: '/404' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_portfolio_portfolio_component__["a" /* PortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_notfound_notfound_component__["a" /* NotfoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_send_msg_service__["a" /* SendMsgService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/***/ (function(module, exports) {

module.exports = "/* -------------------------------------Landing Hero---------- */\r\nsection {\r\n    padding-bottom: 200px;\r\n}\r\n.bgAbout {\r\n    background: url('about.088b2baed438e0236f6a.jpg')  no-repeat 50% 50%;\r\n    width: 100%;\r\n    height: 100vh;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    background-size: cover;\r\n}\r\n/* -------------------------------------Hero Parralax---------- */\r\n.bgHome {\r\n\tbackground: url('home.f8711b24ad3e41fabb9e.jpg') no-repeat center center fixed;\r\n\tdisplay: table;\r\n\tposition: relative;\r\n\theight: 100vh;\r\n\twidth: 100%;\r\n\tbackground-size: cover;\r\n\tz-index: -1;\r\n}\r\n.bgHome:before{\r\n\tcontent: '';\r\n\tbackground: url('home.f8711b24ad3e41fabb9e.jpg') no-repeat center center fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\theight: 100vh;\r\n\twidth: 100%;\r\n\tbackground-size: cover; \r\n\tz-index: -1;\r\n}\r\n/*----------------------------------------Welcome Section--------------------------*/\r\n/* About section */\r\n.about {\r\n    width: 75%;\r\n    margin: 0 auto; \r\n    padding-top: 4rem;\r\n    }\r\n/* About horizontal line */\r\n.about hr {\r\n    border-top: 2px solid #000;\r\n    width: 95%; \r\n    margin-top: .3rem;\r\n    margin-bottom: 1rem; \r\n    }\r\n/* About heading */\r\n.about h2 {\r\n    font-size: 500%;\r\n    font-weight: 500;\r\n    color: #000;\r\n    text-shadow: 2px 2px 3px #FFF;       \r\n    }\r\n/* About text */\r\n.about h6 {\r\n    font-size: 200%;\r\n    font-weight: 500;\r\n    color: #FFF ;\r\n    text-shadow: 2px 2px 1px #000;     \r\n    padding-bottom: 20px; \r\n    }\r\n#imgPJ{\r\n    width: 20%;\r\n    padding-bottom: 30px;\r\n    }\r\n/*-------------------------------------------Media Queries ---------------------------*/\r\n@media (max-width: 992px) {\r\n\r\n}\r\n@media (max-width: 768px) {\r\n\r\n    /* About heading */\r\n    .about h2 {\r\n        font-size: 400%;      \r\n        }\r\n\r\n        /* About text */\r\n    .about h6 {\r\n        font-size: 150%; \r\n        }\r\n\r\n    #imgPJ{\r\n        width: 40%;\r\n        padding-bottom: 30px;\r\n        }\r\n}\r\n@media (max-width: 576px) {\r\n\r\n        /* About heading */\r\n    .about h2 {\r\n        font-size: 300%;      \r\n        }\r\n\r\n        /* About text */\r\n    .about h6 {\r\n        font-size: 100%; \r\n        }\r\n\r\n    #imgPJ{\r\n        width: 50%;\r\n        padding-bottom: 30px;\r\n        }\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"bgAbout\"></section>\r\n       \r\n<!-- fixed image background -->\r\n\r\n <section class=\"bgHome\">\r\n        <div class=\"container-fluid landing-text \"> \r\n                <div class=\"row about text-center\">\r\n                    <div class=\"col-12\">\r\n                            <img id=\"imgPJ\" src=\"../../../assets/images/profile/pj.jpg\">\r\n\r\n\r\n                        <h2 class=\"display-4\">PJ Miller</h2>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"col-12\">       \r\n\r\n\r\n\r\n                        <h6>PJ is an up-and-coming developer who has found passion in writing code and \r\n                        actualizing ideas into software. By delving both into web technologies \r\n                        (MEAN / XAMPP / ASP.NET) and backend OOP languages (C++, C#) he has become effective \r\n                        and proficient at seeing prototypes developed and deployed.</h6>\r\n\r\n                        <!-- <h6> Having studied Electrical Engineering Technologies (SAIT, 2005) he went on to become \r\n                        part-owner and lead sound designer / engineer for an international sound company - PK Sound. \r\n                        There he worked closely in an elite R&D team creating roboticised large-format line-array loudspeakers. \r\n                        As the lead sound designer, PJ was heavily involved in sound sculpting the industry recoginized \r\n                        \"Trinty\" loudspeaker. As the lead acoustic engineer, PJ was in charge of a lab that created 3D \r\n                        polar plots of acoustic radiation patterns that are used to create GLL acoustic libraries for end-users.</h6> -->\r\n\r\n                        <h6>PJ resides in Langford, BC where he thrives on coding, creating music and hiking with his \r\n                        partner Anna and Spyra, their Catahoula Lepoard dog.</h6>        \r\n                        \r\n\r\n                   </div>\r\n                </div>\r\n           </div>\r\n </section>\r\n\r\n<div></div> \r\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/components/about/about.component.html"),
            styles: [__webpack_require__("./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.bgContact \r\n{\r\n    width: 100%;\r\n    height: 100vh;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    background: url('contact.24d2ad9de7951ce76de4.jpg') no-repeat center center fixed;\r\n    background-size: cover;\r\n}\r\n\r\n\r\n\r\n  /* -----------------------------------Contact Form----------------------------- */\r\n\r\n\r\n\r\n  #getInTouch {\r\n\tfont-size: 300%;\r\n\ttext-shadow: 7px 2px 6px #000000;       /*Shadow is 1px horz, 1px vert, 10px width, color black*/\r\n\tcolor: #FFF;\r\n    margin-top: 30px;\r\n    margin-bottom: 15px; \r\n}\r\n\r\n\r\n\r\n  .modal-dialog{\r\n    margin: 0 auto;\r\n    padding-top: 50px;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n\r\n\r\n  .main-section{\r\n      margin: 0 auto;\r\n    padding: 0;\r\n}\r\n\r\n\r\n\r\n  /* Main container */\r\n\r\n\r\n\r\n  .modal-content {\r\n    background-color:#000;\r\n    opacity: 0.95;\r\n    padding: 0 18px;\r\n    -webkit-box-shadow: 0px 0px 3px #848484;\r\n            box-shadow: 0px 0px 3px #848484; \r\n}\r\n\r\n\r\n\r\n  /* Spacing between inputs */\r\n\r\n\r\n\r\n  .form-group {\r\n    margin-top: 25px;\r\n}\r\n\r\n\r\n\r\n  /* Input shaping */\r\n\r\n\r\n\r\n  .form-group input {\r\n    height: 42px;\r\n    border-radius: 5px;\r\n    border: 0;\r\n    font-size: 18px;\r\n    padding-left: 54px;\r\n}\r\n\r\n\r\n\r\n  /* Textbox shaping */\r\n\r\n\r\n\r\n  .form-group textarea {\r\n\r\n    border-radius: 5px;\r\n    border: 0;\r\n    font-size: 18px;\r\n    padding-left: 54px;\r\n}\r\n\r\n\r\n\r\n  .form-group::before{\r\n    font-family: 'Font Awesome\\ 5 Free';\r\n    content: \"\\f007\";\r\n    position: absolute;\r\n    font-size: 22px;\r\n    color: #555e60;\r\n    left: 28px;\r\n    padding-top: 4px;\r\n}\r\n\r\n\r\n\r\n  /* Email */\r\n\r\n\r\n\r\n  .form-group:nth-child(2)::before {\r\n    content: \"\\f0e0\";\r\n}\r\n\r\n\r\n\r\n  /* Phone */\r\n\r\n\r\n\r\n  .form-group:nth-child(3)::before {\r\n    content: \"\\f3cd\";\r\n}\r\n\r\n\r\n\r\n  /* Message */\r\n\r\n\r\n\r\n  .form-group:last-of-type::before {\r\n    content: \"\\f11c\";\r\n}\r\n\r\n\r\n\r\n  button {\r\n    width: 90px;\r\n    margin: 5px 0 25px;\r\n}\r\n\r\n\r\n\r\n  .btn {\r\n    background-color:#122C48;\r\n    color: #fff;\r\n    font-size: 19px;\r\n    padding: 7px 10px;\r\n    border-radius: 5px;\r\n    /* border-bottom: 4px solid rgb(34, 75, 129); */\r\n}\r\n\r\n\r\n\r\n  .btn:hover, .btn:focus {\r\n    background-color: #166EDF !important;\r\n    /* border-bottom: 4px solid rgb(16, 43, 73); */\r\n}\r\n\r\n\r\n\r\n  .svg-inline--fa {\r\n    font-size: 20px; \r\n     margin-right: 7px;   \r\n}\r\n\r\n\r\n\r\n  .response p {\r\n\tfont-size: 100%;\r\n    font-weight: 500;\r\n\ttext-shadow: 7px 2px 6px #000;    \r\n\tcolor: #FFF;\r\n}\r\n\r\n\r\n\r\n  .social a {\r\n    font-size: 2em;\r\n    padding-left : 0.5rem;\r\n        margin-bottom: 40px;\r\n}\r\n\r\n\r\n\r\n  .fa-github{\r\n    color: #3b5998;\r\n    font-size: 1.5em;\r\n}\r\n\r\n\r\n\r\n  .fa-soundcloud{\r\n    color: #517fa8;\r\n    font-size: 1.5em;\r\n}\r\n\r\n\r\n\r\n  .fa-linkedin{\r\n    color: #395fdd;\r\n    font-size: 1.5em;\r\n}\r\n\r\n\r\n\r\n  .fa-github:hover,\r\n.fa-linkedin:hover,\r\n.fa-soundcloud:hover {\r\n color: #d5d5d5;\r\n}\r\n\r\n\r\n\r\n  /*-------------------------------------------Media Queries ---------------------------*/\r\n\r\n\r\n\r\n  @media (max-width: 992px) {\r\n\r\n}\r\n\r\n\r\n\r\n  @media (max-width: 768px) {\r\n\r\n}\r\n\r\n\r\n\r\n  @media (max-width: 576px) {\r\n\r\n}"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"bgContact\">\r\n\r\n    <div class=\"modal-dialog text-center\">\r\n        <div class=\"col-sm-12 main-section\">\r\n          <div class=\"modal-content\">\r\n\r\n             <h1 id=\"getInTouch\">Get in touch</h1>\r\n            \r\n                  <div class=\"social\">\r\n                    <a href=\"https://github.com/Esylus\"><i class=\"fab fa-github\"></i></a>\r\n                    <a href=\"https://www.linkedin.com/in/pj-miller/\"><i class=\"fab fa-linkedin\"></i></a>         \r\n                    <a href=\"https://soundcloud.com/esylus\"><i class=\"fab fa-soundcloud\"></i></a>   \r\n                  </div>\r\n  \r\n            <form class=\"col-12\" type=\"post\" (submit)=\"messageSubmit()\">           \r\n              <div class=\"form-group fullName\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" [(ngModel)]=\"name\" name=\"name\">\r\n              </div>           \r\n              <div class=\"form-group\">\r\n                <input  type=\"email\" class=\"form-control\" placeholder=\"Enter Email\" [(ngModel)]=\"email\" name=\"email\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Phone Number\" [(ngModel)]=\"phone\" name=\"phone\">\r\n              </div>\r\n              <div class=\"form-group\">  \r\n                <textarea  class=\"form-control\" name=\"message\" [(ngModel)]=\"message\" rows=\"4\" placeholder=\"Enter Message\"></textarea>\r\n              </div>\r\n              <button href=\"#\" type=\"submit\" class=\"btn\"><i class=\"fas fa-sign-in-alt\"></i>Send</button>\r\n            </form>\r\n    \r\n            <div class=\"col-12 response\">\r\n              <p>{{response}}</p>\r\n            </div> \r\n\r\n          </div>    \r\n       </div>\r\n    </div>  \r\n</section>\r\n\r\n\r\n\r\n    \r\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_send_msg_service__ = __webpack_require__("./src/app/services/send-msg.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(sendMsgService) {
        this.sendMsgService = sendMsgService;
        this.response = '';
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.messageSubmit = function () {
        var _this = this;
        var message = {
            name: this.name,
            email: this.email,
            phone: this.phone,
            message: this.message
        };
        this.response = 'Message sent';
        this.name = '';
        this.email = '';
        this.phone = '';
        this.message = '';
        console.log(message);
        this.sendMsgService.sendMessage(message).subscribe(function (data) {
            if (data.success) {
                console.log('Message sent - Thanks');
            }
            else {
                console.log('There was an error');
                _this.response = 'Error';
            }
        });
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_send_msg_service__["a" /* SendMsgService */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.some {\r\n\r\n}\r\n\r\n.bgHome {\r\n    width: 100%;\r\n    height: 100vh;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    background: url('home.f8711b24ad3e41fabb9e.jpg')  no-repeat 50% 50%;\r\n    display: table;\r\n    position: relative;\r\n    background-size: cover;\r\n}\r\n\r\n/* Style caption sitting directly in the center */\r\n\r\n.landing-text {\r\n\tdisplay: table-cell;\r\n\ttext-align: center;\r\n\tvertical-align: middle;\r\n}\r\n\r\n/* Main Spheres heading */\r\n\r\n.landing-text h1 {\r\n\tfont-size: 600%;\r\n\ttext-shadow: 2px 2px 4px #FFF;       \r\n\tcolor: #000;\r\n\tmargin-top: 65px;\r\n}\r\n\r\n/* School Of Music heading */\r\n\r\n.landing-text h3 {\r\n\tfont-size: 300%;\r\n\tfont-weight: 500;\r\n\ttext-shadow: 2px 2px 4px #FFF;\r\n\tcolor: #000;\r\n}\r\n\r\n/* Main Name Animation */\r\n\r\n#PJName {\r\n  -webkit-animation-duration: 2s;\r\n  -webkit-animation-delay: 1s;\r\n}\r\n\r\n/* Sub-heading animation */\r\n\r\n#PJDev {\r\n  -webkit-animation-duration: 2s;\r\n  -webkit-animation-delay: 2s;\r\n}\r\n\r\n/*-------------------------------------------Media Queries ---------------------------*/\r\n\r\n@media (max-width: 992px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n  /* Main Spheres heading */\r\n  .landing-text h1 {\r\n    font-size: 400%;\r\n    margin-top: 55px;\r\n  }\r\n\r\n  /* School Of Music heading */\r\n  .landing-text h3 {\r\n    font-size: 250%;\r\n  }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n\r\n  /* Main Spheres heading */\r\n  .landing-text h1 {\r\n    font-size: 250%;\r\n    margin-top: 40px;\r\n  }\r\n\r\n  /* School Of Music heading */\r\n  .landing-text h3 {\r\n    font-size: 150%;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"bgHome\">\r\n        <div class=\"landing-text\">\r\n          <h1 id=\"PJName\" class=\"display-2 animated fadeIn\">Peter Joel Miller</h1>\r\n          <h3 id=\"PJDev\" class=\"display-2 animated fadeIn\">Developer</h3>\r\n       </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\nnav.navbar {\r\n    background-color: black;\r\n    position: fixed;\r\n    width: 100%;\r\n    border-top: 1px solid #FFF;\r\n    \r\n    \r\n}\r\n\r\n/* make nav items white */\r\n\r\n.navbar .nav-item .nav-link{\r\n    color: #FFF;\r\n    font-size: 140%;\r\n    padding-left: 15px;\r\n    text-shadow: 2px -1px #000000; \r\n}\r\n\r\n/* make nav items white HOVER */\r\n\r\n.navbar .nav-item .nav-link:hover{\r\n    color: #166EDF;\r\n}\r\n\r\n/* change hamburger button border color HOVER */\r\n\r\n.navbar .navbar-toggler:hover{\r\n\r\n}\r\n\r\n/* change hamburger button border color */\r\n\r\n.navbar .navbar-toggler{\r\n    outline: none;\r\n    border-color: #FFF;\r\n}\r\n\r\n\r\n\r\n \r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<nav class=\"navbar navbar-expand-md navbar-dark fixed-bottom  justify-content-center\" >\r\n\t<div class=\"container-fluid\">\r\n\t\t<a class=\"navbar-brand\" ></a>\r\n\t\t<button class=\"navbar-toggler \" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\">\r\n\t\t\t<span class=\"navbar-toggler-icon\"></span>\r\n\t\t</button>\r\n\t\t<div class=\"collapse navbar-collapse justify-content-between align-items-center w-100\" id=\"navbarResponsive\">\r\n\t\t\t<ul class=\"navbar-nav ml-auto mx-auto text-center\">\r\n\t\t\t\t<li class=\"nav-item\" active><a class=\"nav-link\" [routerLink]=\"['/']\">Home</a></li>\r\n\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/portfolio']\">Portfolio</a></li>\r\n\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/about']\" >About</a></li>\r\n\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/contact']\">Contact</a></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/notfound/notfound.component.css":
/***/ (function(module, exports) {

module.exports = ".bgNotFound {\r\n    width: 100%;\r\n    height: 100vh;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    background: url('home.f8711b24ad3e41fabb9e.jpg')  no-repeat 50% 50%;\r\n    display: table;\r\n    position: relative;\r\n    background-size: cover;\r\n}\r\n\r\n/* Style caption sitting directly in the center */\r\n\r\n.landing-text {\r\n\tdisplay: table-cell;\r\n\ttext-align: center;\r\n\tvertical-align: middle;\r\n}\r\n\r\n/* Main Spheres heading */\r\n\r\n.landing-text h1 {\r\n\tfont-size: 400%;\r\n\ttext-shadow: 2px 2px 4px #FFF;       \r\n\tcolor: #000;\r\n}\r\n\r\n/* School Of Music heading */\r\n\r\n.landing-text h3 {\r\n\tfont-size: 300%;\r\n\tfont-weight: 500;\r\n\ttext-shadow: 2px 2px 4px #FFF;\r\n\tcolor: #000;\r\n}"

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"bgNotFound\">\r\n    <div class=\"landing-text\">\r\n      <h1 class=\"display-2\">404- Page Not Found</h1>\r\n   </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notfound',
            template: __webpack_require__("./src/app/components/notfound/notfound.component.html"),
            styles: [__webpack_require__("./src/app/components/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.css":
/***/ (function(module, exports) {

module.exports = "/* Global Padding */\r\n.padding {\r\n\tpadding-bottom: 4rem;\r\n}\r\n/* ----------------------- Portfolio Images Section */\r\n.bgPortfolio {\r\n  background: url('contact.24d2ad9de7951ce76de4.jpg')  no-repeat center center fixed;\r\n  display: table; \r\n  position: relative;\r\n  height: 100vh;\r\n  width: 100%;\r\n  background-size: cover;\r\n  z-index: -1;\r\n}\r\n.bgPortfolio:before {\r\n\tcontent: '';\r\n\tbackground: url('contact.24d2ad9de7951ce76de4.jpg') no-repeat;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\theight: 100vh;\r\n\twidth: 100%;\r\n\tbackground-size: cover; \r\n  z-index: -1;\r\n  -webkit-filter: brightness(40%);\r\n          filter: brightness(40%);\r\n}\r\n/*----------------------------------------------------- Portfolio Intro */\r\n/* Align caption sitting directly in the center */\r\n.port-intro {\r\n  display: table-cell;\r\n\ttext-align: center;\r\n  vertical-align: middle;\r\n  }\r\n/* Main Portfolio heading */\r\n.port-intro h1 {\r\n\tfont-size: 700%;\r\n\ttext-shadow: 2px 2px 2px #166EDF;      \r\n\tcolor: #FFF;          \r\n  padding-bottom: 20px;\r\n}\r\n/* Portfolio Subheading */\r\n.port-intro h2 {\r\n  font-size: 400%;\r\n  text-shadow: 2px 2px 4px #166EDF;       \r\n  color: #FFF;          \r\n  padding-bottom: 20px;\r\n}\r\n/* Portfolio blurb */\r\n.port-intro h5 {\r\n  font-size: 200%;\r\n  font-weight: 500;\r\n  color: #FFF;\r\n  text-shadow: 2px 2px 4px #000000; \r\n  margin-bottom: 20px;\r\n}\r\n/*----------------------------------------Global Projects Section--------------------------*/\r\n/* Project container */\r\n.port {\r\n  width: 60%;\r\n  margin: 0 auto; \r\n  padding-top: 4rem;\r\n}\r\n/* Project heading */\r\n.port h2 {\r\n  font-size: 400%;\r\n  font-weight: 500;\r\n  color: #FFF;\r\n  text-shadow: 2px 2px 4px #166EDF;         \r\n}\r\n/* Project Sub-heading */\r\n.port h3 {\r\n  font-size: 200%;\r\n  font-weight: 500;\r\n  color: #FFF;\r\n  text-shadow: 2px 2px 4px #000;      \r\n}\r\n/* Project Sub-heading */\r\n.port h4 {\r\n  font-size: 150%;\r\n  font-weight: 500;\r\n  color: #FFF;\r\n  text-shadow: 2px 2px 4px #000;      \r\n}\r\n/* Project blurb info */\r\n.port h6 {\r\n  font-size: 200%;\r\n  font-weight: 500;\r\n  color: #FFF;\r\n  text-shadow: 7px 2px 6px #000000; \r\n}\r\n/* Container for hyperlinks */\r\n.projLinks{\r\n  padding: 30px;\r\n}\r\n/* View Website button primary */\r\n.btn-primary {\r\n  background-color: #FFF;\r\n  color: #000;\r\n  border: 1px solid #000;\r\n  margin: 20px;\r\n  margin-top: -20px;\r\n}\r\n.btn-primary:hover {\r\n  background-color: #166EDF;\r\n  color: #FFF;  \r\n  border: 1px solid #000;\r\n}\r\n/* View github icon */\r\n.fa-github{\r\n  color: #FFF;\r\n  font-size: 4.5em;\r\n}\r\n/* View soundcloud icon */\r\n.fa-soundcloud{\r\n  color: #FFF;\r\n  font-size: 4.5em;\r\n}\r\n.fa-github:hover,\r\n.fa-soundcloud:hover {\r\n  color: #166EDF;\r\n}\r\n/* Project seperator horizontal line */\r\n.port hr { \r\n  border-top: 2px solid #FFF;\r\n  width: 95%; \r\n  margin-top: 7rem;\r\n  margin-bottom: 1rem; \r\n}\r\n/* ------------------------------Project image sizing */\r\n#imgSpheres{\r\n  width: 100%;  \r\n  padding-bottom: 20px;    \r\n}\r\n#imgNoterize{\r\n  width: 70%;\r\n  padding-bottom: 20px;    \r\n}\r\n#imgEarTraining{\r\n  width: 70%;\r\n  padding-bottom: 20px;  \r\n}\r\n#imgDvorak{\r\n  width: 70%;\r\n  padding-bottom: 20px;    \r\n}\r\n#imgAbleton{\r\n  width: 70%;\r\n  padding-bottom: 30px;\r\n}\r\n.port iframe {\r\n  padding-bottom: 40px;\r\n}\r\n.pk h4 {\r\n  padding-bottom: 20px;\r\n}\r\n#imgAward {\r\n  width: 50%;\r\n  padding-top: 40px;\r\n}\r\n/*-------------------------------------------Media Queries ---------------------------*/\r\n@media (max-width: 992px) {\r\n\r\n}\r\n@media (max-width: 768px) {\r\n\r\n  /* Main Portfolio heading */\r\n  .port-intro h1 {\r\n    font-size: 500%;\r\n  }\r\n\r\n  /* Portfolio Subheading */\r\n  .port-intro h2 {\r\n    font-size: 300%;\r\n  }\r\n\r\n  /* Portfolio blurb */\r\n  .port-intro h5 {\r\n    font-size: 150%;\r\n  }\r\n\r\n  /* Project heading */ \r\n  .port h2 {\r\n    font-size: 300%;\r\n    font-weight: 500;\r\n    color: #FFF;\r\n    text-shadow: 2px 2px 4px #166EDF;         \r\n  }\r\n\r\n  /* Project Sub-heading */ \r\n  .port h3 {\r\n    font-size: 150%;\r\n    font-weight: 500;\r\n    color: #FFF;\r\n    text-shadow: 2px 2px 4px #000;      \r\n  }\r\n\r\n  /* Project Sub-heading */ \r\n  .port h4 {\r\n    font-size: 125%;\r\n    font-weight: 500;\r\n    color: #FFF;\r\n    text-shadow: 2px 2px 4px #000;      \r\n  }\r\n\r\n  /* Project blurb info */\r\n  .port h6 {\r\n    font-size: 125%;\r\n    font-weight: 500;\r\n    color: #FFF;\r\n    text-shadow: 7px 2px 6px #000000; \r\n  }\r\n\r\n}\r\n@media (max-width: 576px) {\r\n\r\n  /* Main Portfolio heading */\r\n  .port-intro h1 {\r\n    font-size: 300%;\r\n  }\r\n\r\n  /* Portfolio Subheading */\r\n  .port-intro h2 {\r\n    font-size: 200%;\r\n  }\r\n  \r\n  /* Portfolio blurb */\r\n  .port-intro h5 {\r\n    font-size: 100%;\r\n  }\r\n\r\n  /* Project heading */ \r\n  .port h2 {\r\n    font-size: 250%;\r\n    font-weight: 500;\r\n    color: #FFF;\r\n    text-shadow: 2px 2px 4px #166EDF;         \r\n  }\r\n\r\n  /* Project Sub-heading */ \r\n  .port h3 {\r\n    font-size: 150%;\r\n    font-weight: 500;\r\n    color: #FFF;\r\n    text-shadow: 2px 2px 4px #000;      \r\n  }\r\n\r\n  /* Project Sub-heading */ \r\n  .port h4 {\r\n    font-size: 100%;\r\n    font-weight: 500;\r\n    color: #FFF;\r\n    text-shadow: 2px 2px 4px #000;      \r\n  }\r\n\r\n  /* Project blurb info */\r\n  .port h6 {\r\n    font-size: 100%;\r\n    font-weight: 500;\r\n    color: #FFF;\r\n    text-shadow: 7px 2px 6px #000000; \r\n  }\r\n\r\n  #imgSpheres{\r\n    width: 100%;\r\n    padding: 30px;\r\n  }\r\n  \r\n   #imgNoterize{\r\n    width: 100%;\r\n    padding: 30px;\r\n  }\r\n  \r\n   #imgEarTraining{\r\n    width: 100%;\r\n    padding: 30px;\r\n  }\r\n  \r\n  #imgDvorak{\r\n    width: 100%;\r\n    padding: 30px;\r\n  }\r\n  \r\n  #imgAbleton{\r\n    width: 100%;\r\n    padding: 30px;\r\n  }\r\n  \r\n  #imgAward {\r\n    width: 100%;\r\n    padding-top: 40px;\r\n  }\r\n\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"bgPortfolio\">\r\n    <div class=\"port-intro text-center\">\r\n        <h1>Projects</h1>\r\n        <h2 class=\"display-2\">Developed by Peter Joel Miller</h2>\r\n        <hr>\r\n        <h5>Scroll through works and their linked code via GitHub</h5>\r\n        <h5>Work-in-progress denoted with (-WIP-)</h5>\r\n    </div>\r\n</section>\r\n\r\n\r\n<!---  Spheres Section -->\r\n\r\n        <div class=\"port text-center\">\r\n                <h2>Spheres School of Music</h2>\r\n                <h3>Small business web application (-WIP-)</h3>\r\n                <h4>Built on a MEAN stack</h4>\r\n                <div class=\"projLinks\">\r\n                        <a href=\"http://www.spheresschool.ca\" class=\"btn btn-primary\">See Website</a>\r\n                        <a href=\"https://github.com/Esylus/SpheresSchool\"><i class=\"fab fa-github\"></i></a>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                        <img id=\"imgSpheres\" src=\"../../../assets/images/profile/spheres.png\">\r\n\r\n                        <h6 >Spheres is dedicated to fueling the inspiration and curiosity of every student. Whether it's\r\n                        exploring piano basics, composing songs or producing with music software, Spheres has the expertise.</h6>\r\n\r\n                        <h6 >This website was created for a Victoria, BC based music school start-up that teaches a range of\r\n                        musical technologies. The site was created in Angular 5 with an Express.js / MongoDB backend in\r\n                        anticipation of future development that will add HTML5/js browser learning games to reinforce musical\r\n                        lessons. The following project \"Noterize\" is a prototype of such a musical learning game.</h6>\r\n                </div>\r\n        <hr>\r\n</div>\r\n\r\n<!--- Noterize Section -->\r\n\r\n<div class=\"port text-center\">\r\n                <h2>Noterize</h2>\r\n                <h3>Quickly memorize musical notation</h3>\r\n                <h4>Built with C#, VS, SQLite, N-Unit</h4>\r\n\r\n                <div class=\"projLinks\">\r\n                        <a href=\"https://github.com/Esylus/Noterize\"><i class=\"fab fa-github\"></i></a>\r\n                </div>\r\n\r\n                <div class=\"col-12\">\r\n                        <img id=\"imgNoterize\" src=\"../../../assets/images/profile/noterize.png\">\r\n\r\n                        <h6>Gameplay: User pick notes they want to memorize by selecting from checkboxes on startup. User  can\r\n                        input from typing keyboard or from any USB midi keyboard device. User chosen notes will then be served\r\n                        randomly for 1 minute scoring +5 for correct answers and -3 for incorrect. Practice sets can be saved\r\n                        as user presets to be loaded in future sessions.</h6>\r\n\r\n                        <h6>Pressing 'Learn' button activates a learning optimization that will observe a user through their\r\n                        first round and then optimize via spaced repitition. The following rounds will be weighted to allow players \r\n                        increased exposure to notes they are weak with and decreased exposure to notes they have memorized. \r\n                        This increases the efficiency of their learning curve.</h6>\r\n                </div>\r\n        <hr>\r\n</div>\r\n\r\n<!--- Ear Training Section -->\r\n\r\n<div class=\"port text-center\">\r\n                <h2>Acoustic Training</h2>\r\n                <h3>Audio training web application (-WIP-)</h3>\r\n                <h4>Built on a MEAN stack with Passport.js, Bcrypt.js, Jsonwebtoken,  Mongoose, Nodemailer</h4>\r\n\r\n                <div class=\"projLinks\">\r\n                        <a href=\"https://eartrain.herokuapp.com/\" class=\"btn btn-primary\">See Website</a>\r\n                        <a href=\"https://github.com/Esylus/EarTraining\"><i class=\"fab fa-github\"></i></a>\r\n                </div>\r\n\r\n                <div class=\"col-12\">\r\n                        <img id=\"imgEarTraining\" src=\"../../../assets/images/profile/eartraining.png\">\r\n\r\n                        <h6>Learn to hear how different audio engineering tools process signals. Only by studying the subtle nuances\r\n                        of sound can one become an effective sound designer, producer or sound technologist.</h6>\r\n\r\n                        <h6>This website has been created to host a profitable, online sound engineering curriculum that will teach\r\n                        users to hear the effects of many acoustic processes - compression, saturation, limiting, filtering, gain-structure,\r\n                        panning, delay, phaser, chorus and many more. </h6>\r\n\r\n                        <h6>In preperation for users being able to register, login and use the web app, the backend has been built using\r\n                        Express.js and Mongoose / MongoDB with authentication by Passport, Jsonwebtoken and Bcrypt . Users will play the games\r\n                        in the browser but be able to save their own profile, presets, example wave files, statistics, progress, goals and other deactivated.</h6>\r\n                </div>\r\n        <hr>\r\n</div>\r\n\r\n\r\n<!--- Dvorak Training Section -->\r\n\r\n<div class=\"port text-center\">\r\n                <h2>Dvorak</h2>\r\n                <h3>A typing app designed to master typing the Dvorak layout</h3>\r\n                <h4>Built with C#, VS, SQLite, N-Unit</h4>\r\n\r\n                <div class=\"projLinks\">\r\n                        <a href=\"https://github.com/Esylus/Dvorak\"><i class=\"fab fa-github\"></i></a>\r\n                </div>\r\n\r\n                <div class=\"col-12\">\r\n                        <img id=\"imgDvorak\" src=\"../../../assets/images/profile/dvorak.png\">\r\n\r\n                        <h6>Gameplay: User picks keys they require practice with by selecting from the rendered keyboard on startup. User chosen keys\r\n                        will then be served randomly for 1 minute scoring +5 for correct answers and -3 for incorrect. Practice sets can be saved\r\n                        as user presets to be loaded in future sessions.</h6>\r\n                                \r\n                        <h6>Pressing 'Focus' button activates a learning optimization that will observe a user through their\r\n                        first round and then optimize via spaced repitition. The following rounds will be weighted to allow players \r\n                        increased exposure to keys they are weak with and decreased exposure to keys they are competent with. \r\n                        This increases the efficiency of their learning curve.</h6>\r\n                </div>\r\n        <hr>\r\n</div>\r\n\r\n<!--- Esylus Section -->\r\n\r\n<div class=\"port text-center\">\r\n                <h2>Esylus Music</h2>\r\n                <h3>Original compostions and production studio work</h3>\r\n                <h4>Composed, mixed & mastered with Ableton and Izotope</h4>\r\n\r\n                <div class=\"projLinks\">\r\n                        <a href=\"https://soundcloud.com/esylus\"><i class=\"fab fa-soundcloud\"></i></a>\r\n                </div>\r\n\r\n                <div class=\"soundcloud\">\r\n                     \r\n                </div>\r\n\r\n                <div class=\"col-12\">\r\n                        <img id=\"imgAbleton\" src=\"../../../assets/images/profile/ableton.png\">\r\n\r\n                        <iframe width=\"60%\" height=\"300\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" \r\n                        src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/356554148&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true\"></iframe>\r\n                \r\n                        <h6 >An acoustic whisper in the dark - Esylus pushes classical elements to the forefront of production with nylon string guitars,\r\n                        orchestra and grain delays. Listen as instruments modulate and perish, only to be reborn again. </h6>\r\n                </div>\r\n        <hr>\r\n</div>\r\n\r\n<!--- Kousk Section -->\r\n\r\n<div class=\"port text-center\">\r\n                <h2>Kousk Music</h2>\r\n                <h3>Production studio work</h3>\r\n                <h4>Mixed & Mastered with Ableton and Izotope</h4>\r\n\r\n                <div class=\"projLinks\">\r\n                        <a href=\"https://soundcloud.com/kousk\"><i class=\"fab fa-soundcloud\"></i></a>\r\n                </div>\r\n\r\n                <div class=\"col-12\">\r\n\r\n                        <iframe width=\"60%\" height=\"300\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" \r\n                        src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/251906&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true\"></iframe>\r\n\r\n                        <h6 >Drawing from the natural orchestra of chirping birds, howling monkeys and growling pumas, Kousk weaves a musical adventure through\r\n                        a vibrant jungle of sounds. With intention to design an environment of synchronized movement and growth, her music explores the\r\n                        spirit of imagination. </h6>\r\n                </div>\r\n        <hr>\r\n</div>\r\n\r\n\r\n<!--- PK Sound Section -->\r\n\r\n<div class=\"port pk text-center\">\r\n                <h2>PK Sound</h2>\r\n                <h3>Acoustic Engineer 2008 - 2017</h3>\r\n                <h4>Concert loudspeaker sound design</h4>\r\n\r\n                <div class=\"projLinks\">\r\n                         <a href=\"https://www.pksound.ca/trinity\" class=\"btn btn-primary\">See Website</a>\r\n                </div>\r\n\r\n                <div class=\"videos\">\r\n                                <iframe width=\"60%\" height=\"315\" src=\"https://www.youtube.com/embed/oX45eQDO-T4\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n                                <iframe width=\"60%\" height=\"315\" src=\"https://www.youtube.com/embed/RONAhWfeA7w\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n                        </div>\r\n\r\n                <div class=\"col-12\">\r\n                        <h6 >Lead R&D sound designer for international touring sound company - PK Sound. Developed multiple industry loudspeakers including\r\n                        the \"Trinity\", PK's flagship large-format line array. Head of Acoustic lab responsible for all loudspeaker measurement activities\r\n                        and predictive sound analysis generic loudspeaker library compilation. Lead sound tech / system engineer for hundreds of concerts \r\n                        taking place all over North America and Europe for crowds of up to 25 000. Lead sound educator for external clients and internal \r\n                        junior technicians.</h6>\r\n\r\n                        <img id=\"imgAward\" src=\"../../../assets/images/profile/award.jpg\">\r\n                </div>\r\n        <hr>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-portfolio',
            template: __webpack_require__("./src/app/components/portfolio/portfolio.component.html"),
            styles: [__webpack_require__("./src/app/components/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/services/send-msg.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendMsgService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SendMsgService = /** @class */ (function () {
    function SendMsgService(http) {
        this.http = http;
    }
    SendMsgService.prototype.sendMessage = function (message) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('send', message, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SendMsgService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SendMsgService);
    return SendMsgService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map