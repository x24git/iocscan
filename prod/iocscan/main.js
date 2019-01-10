(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"jumbotron\">\n            <h1 class=\"display-3\">About</h1>\n            <h1 class=\"display-3 text-info\">IOCSCAN<wbr>.IO</h1>\n            <br>\n            <br>\n            <br>\n            <p class=\"lead\">This site is designed to assist in DFIR and suspicious traffic pattern analysis. We analyze hundreds of providers, feeds, and dumps to provide an \"at-a-glance\" idea of the threat level posed by a given IP. After scoruing the internet we are\n                able to generate a <span class=\"text-primary\">Threat Index Score</span> and confidence value that will help you make an informed decision.\n            </p>\n            <br>\n            <p>Although this tool was designed to assist cybersecurity professionals, this tool can and should be used by anyone to help increase their personal security. </p>\n            <hr class=\"my-4\">\n            <p>This is a non-exhaustive list of our datasets:</p>\n            <ul class=\"list-group\">\n                <li class=\"list-group-item py-1\"><fa-icon [icon]=\"faShieldAlt\" size=\"sm\" class=\"icon-shild\"></fa-icon> &nbsp;Partner MWAF Blacklists</li>\n                <li class=\"list-group-item py-1\"><fa-icon [icon]=\"faShieldAlt\" size=\"sm\" class=\"icon-shild\"></fa-icon> &nbsp;Internally Maintained Abuse Database</li>\n                <li class=\"list-group-item py-1\"><fa-icon [icon]=\"faShieldAlt\" size=\"sm\" class=\"icon-shild\"></fa-icon> &nbsp;Anonymous Proxies</li>\n                <li class=\"list-group-item py-1\"><fa-icon [icon]=\"faShieldAlt\" size=\"sm\" class=\"icon-shild\"></fa-icon> &nbsp;Tor Exit Nodes</li>\n                <li class=\"list-group-item py-1\"><fa-icon [icon]=\"faShieldAlt\" size=\"sm\" class=\"icon-shild\"></fa-icon> &nbsp;Astroturfing Sites</li>\n                <li class=\"list-group-item py-1\"><fa-icon [icon]=\"faShieldAlt\" size=\"sm\" class=\"icon-shild\"></fa-icon> &nbsp;Comment Spammers</li>\n                <li class=\"list-group-item py-1\"><fa-icon [icon]=\"faShieldAlt\" size=\"sm\" class=\"icon-shild\"></fa-icon> &nbsp;Microsoft</li>\n                <li class=\"list-group-item py-1\"><fa-icon [icon]=\"faShieldAlt\" size=\"sm\" class=\"icon-shild\"></fa-icon> <a href=\"https://www.bambenekconsulting.com/\"> &nbsp;Bambernek Consulting</a> Feeds</li>\n                <li class=\"list-group-item py-1\"><fa-icon [icon]=\"faShieldAlt\" size=\"sm\" class=\"icon-shild\"></fa-icon> <a href=\"https://abuse.ch/\"> &nbsp;Abuse.ch</a> Tracker Feeds</li>\n                <li class=\"list-group-item py-1\"><fa-icon [icon]=\"faShieldAlt\" size=\"sm\" class=\"icon-shild\"></fa-icon> <a href=\"https://www.threatcrowd.org/\"> &nbsp;Threat Crowd</a> Reputation</li>\n                <li class=\"list-group-item py-1\"><fa-icon [icon]=\"faShieldAlt\" size=\"sm\" class=\"icon-shild\"></fa-icon> <a href=\"http://doc.emergingthreats.net/\"> &nbsp;Emerging Treats</a> Intelligence</li>\n                <li class=\"list-group-item py-1\"><fa-icon [icon]=\"faShieldAlt\" size=\"sm\" class=\"icon-shild\"></fa-icon> <a href=\"https://otx.alienvault.com/\"> &nbsp;AlienVault OTX</a> database</li>\n                <li class=\"list-group-item py-1\"><fa-icon [icon]=\"faShieldAlt\" size=\"sm\" class=\"icon-shild\"></fa-icon> <a href=\"https://www.shodan.io/\"> &nbsp;Shodan</a> </li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _searchshare_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../searchshare.service */ "./src/app/searchshare.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutComponent = /** @class */ (function () {
    function AboutComponent(titleService, searchTerm) {
        this.titleService = titleService;
        this.searchTerm = searchTerm;
        this.faShieldAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faShieldAlt"];
        this.titleService.setTitle("iocscan");
        this.searchTerm.changeMessage('');
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ioc-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _searchshare_service__WEBPACK_IMPORTED_MODULE_3__["SearchshareService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ioc-navbar></ioc-navbar>\n  <router-outlet></router-outlet>\n</div>\n\n<ioc-footer></ioc-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'iocscan';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rooter',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");
/* harmony import */ var _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-progressbar/http */ "./node_modules/@ngx-progressbar/http/fesm5/ngx-progressbar-http.js");
/* harmony import */ var ngx_gauge_fix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-gauge-fix */ "./node_modules/ngx-gauge-fix/ngx-gauge-fix.es5.js");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var ngx_popper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-popper */ "./node_modules/ngx-popper/fesm5/ngx-popper.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _search_gauge_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search/gauge.component */ "./src/app/search/gauge.component.ts");
/* harmony import */ var _search_map_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search/map.component */ "./src/app/search/map.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _ipinfo_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ipinfo.service */ "./src/app/ipinfo.service.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _badsearch_badsearch_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./badsearch/badsearch.component */ "./src/app/badsearch/badsearch.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"] },
    { path: 'support', component: _support_support_component__WEBPACK_IMPORTED_MODULE_19__["SupportComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"] },
    { path: 'search/ip/:ip', component: _search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"] },
    { path: 'search/domain/:domain', component: _search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"] },
    { path: 'error/:error', component: _badsearch_badsearch_component__WEBPACK_IMPORTED_MODULE_22__["BadsearchComponent"] },
    { path: 'search', redirectTo: '/home' },
    { path: '**', redirectTo: '/error/404' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"],
                _search_gauge_component__WEBPACK_IMPORTED_MODULE_14__["GaugeComponent"],
                _search_map_component__WEBPACK_IMPORTED_MODULE_15__["MapComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"],
                _support_support_component__WEBPACK_IMPORTED_MODULE_19__["SupportComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
                _badsearch_badsearch_component__WEBPACK_IMPORTED_MODULE_22__["BadsearchComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_popper__WEBPACK_IMPORTED_MODULE_11__["NgxPopperModule"],
                ngx_gauge_fix__WEBPACK_IMPORTED_MODULE_9__["NgxGaugeModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_10__["NgArrayPipesModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
                _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_7__["NgProgressModule"].forRoot({
                    spinner: false,
                    color: '#ff9900',
                    trickleSpeed: 600,
                    thick: true
                }),
                _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_8__["NgProgressHttpModule"].forRoot()
            ],
            providers: [_ipinfo_service__WEBPACK_IMPORTED_MODULE_17__["IpinfoService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/badsearch/badsearch.component.html":
/*!****************************************************!*\
  !*** ./src/app/badsearch/badsearch.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"teapot\">\n    <div class=\"tea\">\n        <div class=\"overlay\" [ngStyle]=\"{'background-image': error.background}\">\n            <div class=\"error-middle py-3 px-3 text-center\">\n                <h1>Error {{error.code}} - {{error.heading}}</h1>\n                <br>\n                <div *ngFor=\"let message of error.message\">\n                    <p>{{message}}</p>\n                </div>\n                <a *ngIf=\"error.code == 503\" class='btn btn-success btn-lg' placement='bottom' ngbTooltip='You are a Hero!' href='https://support.worldwildlife.org/site/Donation2?df_id=12623&12623.donation=form1&s_src=AWE1800OQ18494A01430RX&gclid=CjwKCAjwio3dBRAqEiwAHWsNVefO7wPFxywr0cIWDbAUOimAyBJYwAejaAYcJnKLZFij-jQZ-GpuDBoCk14QAvD_BwE' role='button'>Save a Rhino</a>\n                <a *ngIf=\"error.code != 503\" class='btn btn-success btn-lg' placement='bottom' ngbTooltip='We all make mistakes' href='../home' role='button'>Go Home</a>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/badsearch/badsearch.component.scss":
/*!****************************************************!*\
  !*** ./src/app/badsearch/badsearch.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tea {\n  color: #fefefe; }\n  .tea > div.overlay {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    height: 100vh;\n    width: 100vw;\n    background-color: rgba(0, 0, 0, 0.51);\n    background-blend-mode: darken;\n    background-size: cover;\n    background-position: center; }\n  .tea > div.overlay > .error-middle {\n      position: relative; }\n"

/***/ }),

/***/ "./src/app/badsearch/badsearch.component.ts":
/*!**************************************************!*\
  !*** ./src/app/badsearch/badsearch.component.ts ***!
  \**************************************************/
/*! exports provided: BadsearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadsearchComponent", function() { return BadsearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BadsearchComponent = /** @class */ (function () {
    function BadsearchComponent(titleService, route, router, location) {
        var _this = this;
        this.titleService = titleService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.error = {};
        this.error.code = this.route.snapshot.paramMap.get('error');
        switch (this.error.code) {
            case '418':
                this.error.heading = "I'm a teapot";
                this.error.message = ["This is as much a Coffee Pot as what was searched for was something valid.", "You don't make coffee in a teapot, and you don't search for anything but IPs and Domains on this site."];
                this.error.background = "url('teapot.jpg')";
                this.error.title = "Out of Coffee";
                break;
            case '403':
                this.error.heading = "WHOOOO are you. You don't belong here";
                this.error.message = ["We'll let this slide for now, but you best watch yourself.", "Repeated attemts to circumvent security will result in a ban of your IP."];
                this.error.background = "url('who.jpg')";
                this.error.title = "Get Lost";
                break;
            case '503':
                this.error.heading = "Something Broke";
                this.error.message = ["While we try to fix it, why not take a break and help a beast in need.", "The only thing worse than an IOC is the neadless poaching of rhinos."];
                this.error.background = "url('break.jpg')";
                this.error.title = "Crash";
                break;
            case '429':
                this.error.heading = "Slow down there speedster";
                this.error.message = ["You are so fast you exceeded our rate limit.", "Although we think you are awesome, please try not to tap into the speed force on this site."];
                this.error.background = "url('flash.jpg')";
                this.error.title = "Back in a Flash";
                break;
            case '421':
                this.error.heading = "This isn't your house";
                this.error.message = ["You seem to be trying to search for private address spaces", "It's at this time you should take a good long look at yourself and decide if you yourself are the threat actor."];
                this.error.background = "url('private.jpg')";
                this.error.title = "Respect Privacy";
                break;
            case '404':
                this.error.heading = "Woah, there this isn't right";
                this.error.message = ["You seem to be very lost... lost in space.", "Be careful out there in space, there is no oxygen."];
                this.error.background = "url('space.png')";
                this.error.title = "Lost in Space";
                break;
            default:
                setTimeout(function () {
                    _this.router.navigate(['/error/404'], { replaceUrl: true });
                });
                this.error.code = "404";
                this.error.heading = "Woah, there this isn't right";
                this.error.message = ["You seem to be very lost... lost in space.", "Be careful out there in space, there is no oxygen."];
                this.error.background = "url('space.png')";
                this.error.title = "Lost in Space";
        }
    }
    BadsearchComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    BadsearchComponent.prototype.ngOnInit = function () {
        this.setTitle(this.error.title);
    };
    BadsearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ioc-badsearch',
            template: __webpack_require__(/*! ./badsearch.component.html */ "./src/app/badsearch/badsearch.component.html"),
            styles: [__webpack_require__(/*! ./badsearch.component.scss */ "./src/app/badsearch/badsearch.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"]])
    ], BadsearchComponent);
    return BadsearchComponent;
}());



/***/ }),

/***/ "./src/app/country-code.service.ts":
/*!*****************************************!*\
  !*** ./src/app/country-code.service.ts ***!
  \*****************************************/
/*! exports provided: CountryCodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryCodeService", function() { return CountryCodeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CountryCodeService = /** @class */ (function () {
    function CountryCodeService() {
        this.isoCountries = {
            'AF': 'Afghanistan',
            'AX': 'Aland Islands',
            'AL': 'Albania',
            'DZ': 'Algeria',
            'AS': 'American Samoa',
            'AD': 'Andorra',
            'AO': 'Angola',
            'AI': 'Anguilla',
            'AQ': 'Antarctica',
            'AG': 'Antigua And Barbuda',
            'AR': 'Argentina',
            'AM': 'Armenia',
            'AW': 'Aruba',
            'AU': 'Australia',
            'AT': 'Austria',
            'AZ': 'Azerbaijan',
            'BS': 'Bahamas',
            'BH': 'Bahrain',
            'BD': 'Bangladesh',
            'BB': 'Barbados',
            'BY': 'Belarus',
            'BE': 'Belgium',
            'BZ': 'Belize',
            'BJ': 'Benin',
            'BM': 'Bermuda',
            'BT': 'Bhutan',
            'BO': 'Bolivia',
            'BA': 'Bosnia And Herzegovina',
            'BW': 'Botswana',
            'BV': 'Bouvet Island',
            'BR': 'Brazil',
            'IO': 'British Indian Ocean Territory',
            'BN': 'Brunei Darussalam',
            'BG': 'Bulgaria',
            'BF': 'Burkina Faso',
            'BI': 'Burundi',
            'KH': 'Cambodia',
            'CM': 'Cameroon',
            'CA': 'Canada',
            'CV': 'Cape Verde',
            'KY': 'Cayman Islands',
            'CF': 'Central African Republic',
            'TD': 'Chad',
            'CL': 'Chile',
            'CN': 'China',
            'CX': 'Christmas Island',
            'CC': 'Cocos (Keeling) Islands',
            'CO': 'Colombia',
            'KM': 'Comoros',
            'CG': 'Congo',
            'CD': 'Congo, Democratic Republic',
            'CK': 'Cook Islands',
            'CR': 'Costa Rica',
            'CI': 'Cote D\'Ivoire',
            'HR': 'Croatia',
            'CU': 'Cuba',
            'CY': 'Cyprus',
            'CZ': 'Czech Republic',
            'DK': 'Denmark',
            'DJ': 'Djibouti',
            'DM': 'Dominica',
            'DO': 'Dominican Republic',
            'EC': 'Ecuador',
            'EG': 'Egypt',
            'SV': 'El Salvador',
            'GQ': 'Equatorial Guinea',
            'ER': 'Eritrea',
            'EE': 'Estonia',
            'ET': 'Ethiopia',
            'FK': 'Falkland Islands (Malvinas)',
            'FO': 'Faroe Islands',
            'FJ': 'Fiji',
            'FI': 'Finland',
            'FR': 'France',
            'GF': 'French Guiana',
            'PF': 'French Polynesia',
            'TF': 'French Southern Territories',
            'GA': 'Gabon',
            'GM': 'Gambia',
            'GE': 'Georgia',
            'DE': 'Germany',
            'GH': 'Ghana',
            'GI': 'Gibraltar',
            'GR': 'Greece',
            'GL': 'Greenland',
            'GD': 'Grenada',
            'GP': 'Guadeloupe',
            'GU': 'Guam',
            'GT': 'Guatemala',
            'GG': 'Guernsey',
            'GN': 'Guinea',
            'GW': 'Guinea-Bissau',
            'GY': 'Guyana',
            'HT': 'Haiti',
            'HM': 'Heard Island & Mcdonald Islands',
            'VA': 'Holy See (Vatican City State)',
            'HN': 'Honduras',
            'HK': 'Hong Kong',
            'HU': 'Hungary',
            'IS': 'Iceland',
            'IN': 'India',
            'ID': 'Indonesia',
            'IR': 'Iran, Islamic Republic Of',
            'IQ': 'Iraq',
            'IE': 'Ireland',
            'IM': 'Isle Of Man',
            'IL': 'Israel',
            'IT': 'Italy',
            'JM': 'Jamaica',
            'JP': 'Japan',
            'JE': 'Jersey',
            'JO': 'Jordan',
            'KZ': 'Kazakhstan',
            'KE': 'Kenya',
            'KI': 'Kiribati',
            'KR': 'Korea',
            'KW': 'Kuwait',
            'KG': 'Kyrgyzstan',
            'LA': 'Lao People\'s Democratic Republic',
            'LV': 'Latvia',
            'LB': 'Lebanon',
            'LS': 'Lesotho',
            'LR': 'Liberia',
            'LY': 'Libyan Arab Jamahiriya',
            'LI': 'Liechtenstein',
            'LT': 'Lithuania',
            'LU': 'Luxembourg',
            'MO': 'Macao',
            'MK': 'Macedonia',
            'MG': 'Madagascar',
            'MW': 'Malawi',
            'MY': 'Malaysia',
            'MV': 'Maldives',
            'ML': 'Mali',
            'MT': 'Malta',
            'MH': 'Marshall Islands',
            'MQ': 'Martinique',
            'MR': 'Mauritania',
            'MU': 'Mauritius',
            'YT': 'Mayotte',
            'MX': 'Mexico',
            'FM': 'Micronesia, Federated States Of',
            'MD': 'Moldova',
            'MC': 'Monaco',
            'MN': 'Mongolia',
            'ME': 'Montenegro',
            'MS': 'Montserrat',
            'MA': 'Morocco',
            'MZ': 'Mozambique',
            'MM': 'Myanmar',
            'NA': 'Namibia',
            'NR': 'Nauru',
            'NP': 'Nepal',
            'NL': 'Netherlands',
            'AN': 'Netherlands Antilles',
            'NC': 'New Caledonia',
            'NZ': 'New Zealand',
            'NI': 'Nicaragua',
            'NE': 'Niger',
            'NG': 'Nigeria',
            'NU': 'Niue',
            'NF': 'Norfolk Island',
            'MP': 'Northern Mariana Islands',
            'NO': 'Norway',
            'OM': 'Oman',
            'PK': 'Pakistan',
            'PW': 'Palau',
            'PS': 'Palestinian Territory, Occupied',
            'PA': 'Panama',
            'PG': 'Papua New Guinea',
            'PY': 'Paraguay',
            'PE': 'Peru',
            'PH': 'Philippines',
            'PN': 'Pitcairn',
            'PL': 'Poland',
            'PT': 'Portugal',
            'PR': 'Puerto Rico',
            'QA': 'Qatar',
            'RE': 'Reunion',
            'RO': 'Romania',
            'RU': 'Russian Federation',
            'RW': 'Rwanda',
            'BL': 'Saint Barthelemy',
            'SH': 'Saint Helena',
            'KN': 'Saint Kitts And Nevis',
            'LC': 'Saint Lucia',
            'MF': 'Saint Martin',
            'PM': 'Saint Pierre And Miquelon',
            'VC': 'Saint Vincent And Grenadines',
            'WS': 'Samoa',
            'SM': 'San Marino',
            'ST': 'Sao Tome And Principe',
            'SA': 'Saudi Arabia',
            'SN': 'Senegal',
            'RS': 'Serbia',
            'SC': 'Seychelles',
            'SL': 'Sierra Leone',
            'SG': 'Singapore',
            'SK': 'Slovakia',
            'SI': 'Slovenia',
            'SB': 'Solomon Islands',
            'SO': 'Somalia',
            'ZA': 'South Africa',
            'GS': 'South Georgia And Sandwich Isl.',
            'ES': 'Spain',
            'LK': 'Sri Lanka',
            'SD': 'Sudan',
            'SR': 'Suriname',
            'SJ': 'Svalbard And Jan Mayen',
            'SZ': 'Swaziland',
            'SE': 'Sweden',
            'CH': 'Switzerland',
            'SY': 'Syrian Arab Republic',
            'TW': 'Taiwan',
            'TJ': 'Tajikistan',
            'TZ': 'Tanzania',
            'TH': 'Thailand',
            'TL': 'Timor-Leste',
            'TG': 'Togo',
            'TK': 'Tokelau',
            'TO': 'Tonga',
            'TT': 'Trinidad And Tobago',
            'TN': 'Tunisia',
            'TR': 'Turkey',
            'TM': 'Turkmenistan',
            'TC': 'Turks And Caicos Islands',
            'TV': 'Tuvalu',
            'UG': 'Uganda',
            'UA': 'Ukraine',
            'AE': 'United Arab Emirates',
            'GB': 'United Kingdom',
            'US': 'United States',
            'UM': 'United States Outlying Islands',
            'UY': 'Uruguay',
            'UZ': 'Uzbekistan',
            'VU': 'Vanuatu',
            'VE': 'Venezuela',
            'VN': 'Viet Nam',
            'VG': 'Virgin Islands, British',
            'VI': 'Virgin Islands, U.S.',
            'WF': 'Wallis And Futuna',
            'EH': 'Western Sahara',
            'YE': 'Yemen',
            'ZM': 'Zambia',
            'ZW': 'Zimbabwe'
        };
    }
    CountryCodeService.prototype.getCountryName = function (countryCode) {
        if (this.isoCountries.hasOwnProperty(countryCode)) {
            return this.isoCountries[countryCode];
        }
        else {
            return countryCode;
        }
    };
    CountryCodeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CountryCodeService);
    return CountryCodeService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"bg-dark\">\n\n  <!-- Copyright -->\n  <div class=\"footer-copyright text-center text-muted py-1\">© 2018 Copyright\n    <a href=\"https://christopher-makarem.me/\"> Christopher Makarem</a>\n  </div>\n  <!-- Copyright -->\n\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ioc-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"jumbotron\">\n            <h1 class=\"display-3\">Welcome to</h1>\n            <h1 class=\"display-3 text-info\">IOCSCAN<wbr>.IO</h1>\n            <p class=\"lead\">This site is designed to assist in DFIR and suspicious traffic pattern analysis. We analyze hundreds of providers, feeds, and dumps to provide an \"at-a-glance\" idea of the threat level posed by a given IP or Domain.</p>\n            <hr class=\"my-4\">\n            <p>To get started enter an IP or Root-Level Domain below.</p>\n            <form [formGroup]=\"SearchHome\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">{{whatType()}}</span>\n                    </div>\n                    <input class=\"form-control form-control-lg\" type=\"text\" formControlName=\"search\">\n                </div>\n                <div *ngIf=\"SearchHome.valid && (this.fail)\">\n                    <p class=\"text-info\"> Looks Good!</p>\n                </div>\n                <div *ngIf=\"SearchHome.invalid && (this.fail)\">\n                    <p class=\"text-danger\">{{errorType()}}</p>\n                </div>\n                <p class=\"lead\">\n                    <button class=\"btn btn-primary btn-lg\">Search</button>\n                </p>\n            </form>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _searchshare_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../searchshare.service */ "./src/app/searchshare.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(fb, router, titleService, searchTerm) {
        this.fb = fb;
        this.router = router;
        this.titleService = titleService;
        this.searchTerm = searchTerm;
        this.fail = false;
        this.SearchHome = this.fb.group({
            search: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(^(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)$)|(^(?:([^:/\\s]*)\\.)*((?:[^.:/\\s]+)+(?:\\.[^.:/\\d]+){1})(?:\\/.*)*$)'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.titleService.setTitle("iocscan");
        this.searchTerm.changeMessage('');
    }
    HomeComponent.prototype.onSubmit = function () {
        if (this.SearchHome.valid) {
            console.log("Form Submitted!");
            this.router.navigate(['/search', this.type, this.SearchHome.value.search]);
        }
        else
            this.fail = true;
    };
    HomeComponent.prototype.whatType = function () {
        var ipv4check = new RegExp('^[\\d\\.]+$');
        var urlcheck = new RegExp('\\.+');
        if (ipv4check.test(this.SearchHome.value.search)) {
            this.type = 'ip';
            return 'IP';
        }
        else if (urlcheck.test(this.SearchHome.value.search)) {
            this.type = 'domain';
            return 'Domain';
        }
        else {
            this.type = '***';
            return '***';
        }
    };
    HomeComponent.prototype.errorType = function () {
        if (this.type == 'ip')
            return "..... Hmm, this isn't a valid IP";
        else if (this.type == 'domain')
            return "..... Hmm, this isn't a valid Domain";
        else
            return '..... Hmm, we are not sure what you are trying to say, but it is not a valid entry';
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ioc-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"], _searchshare_service__WEBPACK_IMPORTED_MODULE_4__["SearchshareService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/ipinfo.service.ts":
/*!***********************************!*\
  !*** ./src/app/ipinfo.service.ts ***!
  \***********************************/
/*! exports provided: IpinfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpinfoService", function() { return IpinfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IpinfoService = /** @class */ (function () {
    function IpinfoService(http) {
        this.http = http;
    }
    // Get all posts from the API
    IpinfoService.prototype.getData = function (data, type) {
        var body = {};
        body[type] = data;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post('/api/' + type, body, httpOptions);
        //.subscribe(res => console.log(res.json()));
        // .catch(this.handleErrorObservable);
    };
    IpinfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IpinfoService);
    return IpinfoService;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg sticky-top navbar-dark bg-primary\">\n\n  <a class=\"navbar-brand\" [routerLink]=\"['/home']\"><img style=\"max-width:40px;\"\n             src=\"iocscan.png\">&nbsp;&nbsp;iocscan.io</a>\n  <button class=\"navbar-toggler hidden-sm-up\" type=\"button\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\" data-target=\"#navbarsDefault\" aria-controls=\"navbarsDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div [ngbCollapse]=\"!isNavbarCollapsed\" class=\"collapse navbar-collapse\" id=\"navbarsDefault\" data-target=\"#navbarsDefault\">\n    <div (click)=\"isNavbarCollapsed = !isNavbarCollapsed\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\" [routerLinkActive]=\"['active']\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/about']\" [routerLinkActive]=\"['active']\">About</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/support']\" [routerLinkActive]=\"['active']\">Support</a>\n        </li>\n      </ul>\n    </div>\n    <form class=\"form-group mb-0 mx-4 w-100 mt-3 mt-lg-0 pr-3 pr-lg-0\" [formGroup]=\"SearchNav\" (ngSubmit)=\"onSubmit(errorPOP)\">\n      <div class=\"input-group my-1\" (click)=\"errorPOP.hide()\" [popper]=\"errorPOP\" [popperTrigger]=\"'none'\" [popperHideOnClickOutside]=\"false\" [popperPlacement]=\"'bottom-start'\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">{{whatType(errorPOP)}}</span>\n        </div>\n        <input class=\"form-control nav-bar\" type=\"text\" placeholder=\"Search IOC\" formControlName=\"search\">\n        <popper-content #errorPOP>\n          <p class=\"bold\">{{errorType()}}</p>\n        </popper-content>\n\n      </div>\n    </form>\n  </div>\n</nav>\n\n<!-- [hidden]=\"!(SearchNav.invalid && (SearchNav.dirty))\"-->"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _searchshare_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../searchshare.service */ "./src/app/searchshare.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(fb, router, searchTerm) {
        this.fb = fb;
        this.router = router;
        this.searchTerm = searchTerm;
        this.old_val = '';
        this.isNavbarCollapsed = false;
        this.fail = false;
        this.SearchNav = this.fb.group({
            search: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(^(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)$)|(^(?:([^:/\\s]*)\\.)*((?:[^.:/\\s]+)+(?:\\.[^.:/\\d]+){1})(?:\\/.*)*$)'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchTerm.currentSearch.subscribe(function (term) { return _this.SearchNav.patchValue({ search: term }); });
    };
    NavbarComponent.prototype.onSubmit = function (popover) {
        if (this.SearchNav.valid) {
            console.log("Form Submitted!");
            popover.hide();
            this.fail = false;
            this.router.navigate(['/search', this.type, this.SearchNav.value.search]);
        }
        else {
            popover.show();
            this.fail = true;
        }
    };
    NavbarComponent.prototype.whatType = function (popover) {
        if (this.SearchNav.value.search != this.old_val && this.fail) {
            this.old_val = this.SearchNav.value.search;
            if (this.SearchNav.invalid) {
                popover.show();
            }
            else if (!this.SearchNav.invalid) {
                popover.hide();
            }
        }
        var ipv4check = new RegExp('^[\\d\\.]+$');
        var urlcheck = new RegExp('\\.+');
        if (ipv4check.test(this.SearchNav.value.search)) {
            this.type = 'ip';
            return 'IP';
        }
        else if (urlcheck.test(this.SearchNav.value.search)) {
            this.type = 'domain';
            return 'Domain';
        }
        else {
            this.type = '***';
            return '***';
        }
    };
    NavbarComponent.prototype.errorType = function () {
        if (this.type == 'ip')
            return "This is not a valid IP";
        else if (this.type == 'domain')
            return "This is not a valid Domain";
        else
            return 'This is not valid Data';
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ioc-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _searchshare_service__WEBPACK_IMPORTED_MODULE_3__["SearchshareService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/search/gauge.component.html":
/*!*********************************************!*\
  !*** ./src/app/search/gauge.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"card card-gauge text-white text-center bg-dark mb-3\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\"></h4>\n                <ngx-gauge [type]=\"gaugeType\" [value]=\"score\" [label]=\"ts_gaugeLabel\" [duration]=\"gaugeDuration\" [max]=\"ts_gaugeMax\" [cap]=\"gaugeCap\" [thresholds]=\"thresholdConfig\" [size]=\"ts_gaugeSize\" [thick]=\"ts_gaugeThick\">\n                </ngx-gauge>\n                <div class=\"container category\">\n                    <span *ngIf=\"confidence.malware\" class=\"badge badge-pill mx-1 badge-danger\">Malware</span>\n                    <span *ngIf=\"confidence.adware\" class=\"badge badge-pill mx-1 badge-warning\">Adware</span>\n                    <span *ngIf=\"confidence.phishing\" class=\"badge badge-pill mx-1 badge-warning\">Phishing</span>\n                    <span *ngIf=\"confidence.exploit\" class=\"badge badge-pill mx-1 badge-primary\">Browser Exploit</span>\n                    <span *ngIf=\"confidence.hyjack\" class=\"badge badge-pill mx-1 badge-primary\">System Hyjacking</span>\n                    <span *ngIf=\"confidence.tor\" class=\"badge badge-pill mx-1 badge-light\">Tor Exit Node</span>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card card-gauge text-white text-center bg-dark mb-3\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\"></h4>\n                <ngx-gauge [type]=\"gaugeType\" [value]=\"confidence.score\" [label]=\"conf_gaugeLabel\" [duration]=\"gaugeDuration\" [max]=\"conf_gaugeMax\" [cap]=\"gaugeCap\" [thresholds]=\"conf_thresholdConfig\" [size]=\"conf_gaugeSize\" [thick]=\"conf_gaugeThick\" [append]=\"gaugeAppend\" >\n                </ngx-gauge>\n            </div>\n            <div *ngIf=\"confidence.isReduced\" class=\"card-gauge footer\">\n                <span class=\"align-middle\">\n                <div [ngSwitch]=\"confidence.issues\">\n                    <p *ngSwitchCase=\"4\"class=\"pb-0\"></p>   \n                    <p *ngSwitchCase=\"3\"class=\"pb-1\"></p>   \n                    <p *ngSwitchCase=\"2\"class=\"pb-2\"></p>   \n                    <p *ngSwitchCase=\"1\"class=\"pb-3\"></p>   \n                    <p *ngSwitchDefault class=\"pb-0\"></p>\n                </div>\n                <strong>Confidence is reduced by:</strong>\n                <hr class=\"my-0\">\n                <ul class=\"text-left\">\n                    <li *ngIf=\"confidence.old\"> Not enough recent data </li>\n                    <li *ngIf=\"confidence.country\"> Country of Origin </li>\n                    <li *ngIf=\"confidence.trend\"> Decreasing threat score over time</li>\n                    <li *ngIf=\"confidence.data\"> Limited avaliable data </li>\n                    <li *ngIf=\"confidence.category\"> Uncertain cateogization </li>\n                </ul>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/search/gauge.component.ts":
/*!*******************************************!*\
  !*** ./src/app/search/gauge.component.ts ***!
  \*******************************************/
/*! exports provided: GaugeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugeComponent", function() { return GaugeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GaugeComponent = /** @class */ (function () {
    function GaugeComponent() {
        this.gaugeType = "arch";
        this.ts_gaugeLabel = "Threat Score";
        this.ts_gaugeMax = "10";
        this.ts_gaugeThick = 20;
        this.conf_gaugeLabel = "Confidence";
        this.conf_gaugeMax = "100";
        this.conf_gaugeThick = 10;
        this.gaugeAppend = "%";
        this.gaugeCap = "round";
        this.ts_gaugeSize = 300;
        this.conf_gaugeSize = 200;
        this.gaugeDuration = 2250;
        this.thresholdConfig = {
            '0': { color: 'green' },
            '2': { color: 'yellow' },
            '6': { color: 'orange' },
            '8': { color: 'red' }
        };
        this.conf_thresholdConfig = {
            '0': { color: 'red' },
            '60': { color: 'darkturquoise' }
        };
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], GaugeComponent.prototype, "score", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GaugeComponent.prototype, "confidence", void 0);
    GaugeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gauge-component',
            template: __webpack_require__(/*! ./gauge.component.html */ "./src/app/search/gauge.component.html"),
        })
    ], GaugeComponent);
    return GaugeComponent;
}());



/***/ }),

/***/ "./src/app/search/map.component.ts":
/*!*****************************************!*\
  !*** ./src/app/search/map.component.ts ***!
  \*****************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapComponent = /** @class */ (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
        var fail = false;
        if (!this.lat && !this.lon) {
            this.lat = 0;
            this.lon = 0;
            fail = true;
        }
        else
            fail = false;
        var myLatlng = new google.maps.LatLng(this.lat, this.lon);
        var zoom = 9;
        if (fail)
            zoom = 1;
        var mapOptions = {
            zoom: zoom,
            maxZoom: 12,
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
            center: myLatlng,
            scrollwheel: false,
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#242f3e"
                        }
                    ]
                },
                {
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#3a0c11"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#212121"
                        }
                    ]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#191b1f"
                        }
                    ]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#682020"
                        },
                        {
                            "weight": 2
                        }
                    ]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.province",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#181818"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#260b16"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#1b1b1b"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#2c2c2c"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#8a8a8a"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#373737"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#3c3c3c"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "weight": 0.5
                        }
                    ]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#3d3d3d"
                        }
                    ]
                }
            ]
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "IOC"
        });
        // To add the marker to the map, call setMap();
        if (!fail)
            marker.setMap(map);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MapComponent.prototype, "lat", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MapComponent.prototype, "lon", void 0);
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ioc-map',
            template: "\n          <div id=\"map\" class=\"map\"></div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-progress id=\"header\" #header></ng-progress>\n<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"container\">\n      <ng-container *ngIf=\"progressBar.state$ | async; let state\">\n\n        <p [className]=\"state.active ? 'mt-5' : ''\">\n          <ngb-progressbar type=\"info\" [value]=\"(progressBar.state$ | async)  .value\" [striped]=\"true\" [height]=\"state.active ? '1rem' : '0rem'\" [animated]=\"true\"></ngb-progressbar>\n\n        </p>\n        <div *ngIf=\"!isLoaded\">\n          <br>\n          <br>\n          <p class=\"card-text text-center\">Scanning for IOCs (may take up to 10 seconds to fully scan). Please Wait...</p>\n          <br>\n          <p class=\"lead text-center\">{{loading}}</p>\n        </div>\n          <div class=\"row\" *ngIf=\"result.subdomain\">\n            <div Class=\"card text-white mb-3 bg-warning\">\n              <div class=\"card-header\">\n                <h4>\n                  <fa-icon [icon]=\"faExclamation\" class=\"icon-card\"></fa-icon>&nbsp;&nbsp;&nbsp;Alert</h4>\n              </div>\n              <div class=\"card-body\">\n               <p class=\"card-text\">We only support searching of Root-Level Domains. We are searching instead for: <b class = \"text-dark\">{{result.domain}}</b> <br>\n                  and have dropped the subdomain of: <b class = \"text-dark\">{{result.subdomain}}</b></p>\n              </div>\n              <div class=\"card-footer\">\n              </div>\n            </div>\n          </div>        \n        \n        <gauge-component [hidden]=\"!isLoaded\" [score]=\"score\" [confidence]=\"confidence\"></gauge-component>\n        <div *ngIf=\"isLoaded\">\n          <div class=\"row\">\n            <div [ngClass]=\"['card', 'text-white', 'mb-3', bg]\">\n              <div class=\"card-header\">\n                <h4>\n                  <fa-icon [icon]=\"faChartLine\" class=\"icon-card\"></fa-icon>&nbsp;&nbsp;&nbsp;Analysis</h4>\n              </div>\n              <div class=\"card-body\">\n                <p class=\"card-text\">{{ result.report }}</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"(result.score.multihosted && result.score.multihosted >= 0) || result.ransom || result.shodan || result.score.grey.reputation < 10 || (result.whitelist && result.whitelist.sources) ||result.google\">\n            <div class=\"card text-white mb-3 bg-dark \">\n              <div class=\"card-header\">\n                <h4>\n                  <fa-icon [icon]=\"faKeycdn\" class=\"icon-card\"></fa-icon>&nbsp;&nbsp;&nbsp;Key Notes</h4>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"alert alert-whiter py-1\" *ngIf=\"result.whitelist && result.whitelist.sources\">\n                  <span class=\"lead\" style=\"color: #29335C;\"><b> Domain has been Whitelisted: </b></span>\n                  <br>\n                  <ul>\n                    <li style=\"color: #29335C;\"><b>Reasons:</b>\n                      <div *ngIf=\"result.whitelist.sources.length > 0\" style=\"display: inline-block;\">\n                        <div *ngFor=\"let sources of result.whitelist.sources\" style=\"display: inline-block;\">\n                          <span class=\"badge badge-light mx-1\"> {{ sources }} </span>\n                        </div>\n                      </div>\n                      <div *ngIf=\"result.whitelist.sources.length == 0\" style=\"display: inline-block;\"> <span class=\"badge badge-light mx-1\">Unknown</span></div>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"alert alert-success py-1\" *ngIf=\"(result.score.multihosted == 1 && result.type == 'ip')\">\n                  <span class=\"lead\"><b> IP is multihosted - </b></span> Please verify that the visited domain is one known to be suspicious.\n                </div>\n                <div class=\"alert alert-info py-1\" *ngIf=\"(result.score.multihosted == 0 && result.type == 'domain')\">\n                  <span class=\"lead\"><b> IP may be multihosted - </b></span> You may need to verify that the visited domain is one known to be suspicious.\n                </div>\n                <div class=\"alert alert-success py-1\" *ngIf=\"(result.score.multihosted == 1 && result.type == 'domain')\">\n                  <span class=\"lead\"><b> Domain uses Dynamic DNS - </b></span> DNS entries for this domain are changing frequently which may be a sign of botnet activity.\n                </div>\n                <div class=\"alert alert-info py-1\" *ngIf=\"(result.score.multihosted == 0 && result.type == 'domain')\">\n                  <span class=\"lead\"><b> Domain likely uses Dynamic DNS - </b></span> DNS entries for this domain are changing slowly, botnet activity is possible but unlikely.\n                </div>\n                <div class=\"alert alert-danger py-1\" *ngIf=\"result.google && result.google.count\">\n                  <span class=\"lead\"><b> Blacklisted on Google SafeSearch: </b></span>\n                  <br>\n                  <ul>\n                    <li style=\"color: #29335C;\"><b>Classification:</b>\n                      <div *ngIf=\"result.google.count > 0\" style=\"display: inline-block;\">\n                        <div *ngFor=\"let category of result.google.category\" style=\"display: inline-block;\">\n                          <span class=\"badge badge-warning mx-1\"> {{ category }} </span>\n                        </div>\n                      </div>\n                      <div *ngIf=\"result.google.count == 0\" style=\"display: inline-block;\"> <span class=\"badge badge-warning mx-1\">Unknown</span></div>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"alert alert-danger py-1\" *ngIf=\"result.c2 && result.c2.name\">\n                  <span class=\"lead\"><b> C2 Server Detected - </b></span> {{result.c2.name}} Command & Control Server at <span class=\"text-muted\"> {{result.c2.domain}} </span>\n                </div>\n                <div class=\"alert alert-danger py-1\" *ngIf=\"result.ransom\">\n                  <span class=\"lead\"><b> RansomeWare Detected - </b></span> {{result.ransom.malware}} {{result.ransom.type}} at <span class=\"text-muted\"> {{result.ransom.url}} </span>\n                </div>\n                <div class=\"alert alert-darker py-1\" *ngIf=\"result.shodan\">\n                  <span class=\"lead\"><b> Known to Shodan: </b></span>\n                  <br>\n                  <ul>\n                    <li><b>Category:</b>\n                      <div *ngIf=\"result.shodan.category.length > 0\" style=\"display: inline-block;\">\n                        <div *ngFor=\"let category of result.shodan.category\" style=\"display: inline-block;\">\n                          <span class=\"badge badge-info mx-1\"> {{ category }} </span>\n                        </div>\n                      </div>\n                      <div *ngIf=\"result.shodan.category.length == 0\" style=\"display: inline-block;\"> <span class=\"badge badge-dark mx-1\">Unknown</span></div>\n                    </li>\n                    <li><b>Open Ports:</b>\n                      <div *ngIf=\"result.shodan.ports.length > 0\" style=\"display: inline-block;\">\n                        <div *ngFor=\"let port of result.shodan.ports\" style=\"display: inline-block;\">\n                          <span class=\"badge badge-warning mx-1\"> {{ port }} </span>\n                        </div>\n                      </div>\n                      <div *ngIf=\"result.shodan.ports.length == 0\" style=\"display: inline-block;\"> <span class=\"badge badge-dark\">None</span></div>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"alert alert-darker py-1\" *ngIf=\"result.score.grey && result.score.grey.reputation == 1\">\n                  <div *ngIf=\"result.score.grey.limitedData || result.score.grey.confidence < 1\">\n                    <span class=\"lead\"><b> Mass Scanning is Possible - </b></span> This IP has been weakly flagged as a begnign mass scanner (ie. web crawler). Targeted attacks are possible but unlikely.\n                  </div>\n                  <div *ngIf=\"!result.score.grey.limitedData && result.score.grey.confidence > 0\">\n                    <span class=\"lead\"><b> Mass Scanning Detected - </b></span> This IP has been flagged as a begnign mass scanner (ie. web crawler). Targeted attacks are unlikely.\n                  </div>\n                </div>\n                <div class=\"alert alert-warning py-1\" *ngIf=\"result.score.grey && result.score.grey.reputation < 1\">\n                  <div *ngIf=\"result.score.grey.limitedData || result.score.grey.confidence < 1\">\n                    <span class=\"lead\"><b> Mass Scanning is Possible - </b></span> This IP has been weakly flagged as a malicious mass scanner (ie. vulnerability scanner). Vulnerability scanners may result in future attacks.\n                  </div>\n                  <div *ngIf=\"!result.score.grey.limitedData && result.score.grey.confidence > 0\">\n                    <span class=\"lead\"><b> Mass Scanning Detected - </b></span> This IP has been flagged as a malicious mass scanner (ie. vulnerability scanner). Follow-up attacks are likely.\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"row\" *ngIf=\"result.blacklist.length > 0\">\n            <div Class=\"card text-white mb-3 bg-dark\">\n              <div class=\"card-header bg-danger\">\n                <h4>\n                  <fa-icon [icon]=\"faExclamationTriangle\" class=\"icon-card\"></fa-icon>&nbsp;&nbsp;&nbsp;Blacklists</h4>\n              </div>\n              <div class=\"card-body\">\n                <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th scope=\"col\">Name</th>\n                      <th scope=\"col\">Source</th>\n                      <th scope=\"col\">Date</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of result.blacklist | reverse | slice:0:quantity_blacklist\">\n                      <td>{{ item.description }}</td>\n                      <td>{{ item.source }}</td>\n                      <td>{{ item.last_seen }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n              <div class=\"card-footer\">\n                <p class=\"lead\">\n                  Total Count: <strong>{{ result.blacklist.length }}</strong></p>\n                <a *ngIf=\"result.blacklist && result.blacklist.length > 4 && quantity_blacklist == 4\" href=\"javascript:void(0)\" (click)=\"blacklistQuantity()\" class=\"card-link\">Show More</a>\n                <a *ngIf=\"result.blacklist && result.blacklist.length > 4 && quantity_blacklist > 4\" href=\"javascript:void(0)\" (click)=\"blacklistQuantity()\" class=\"card-link\">Show Less</a>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"row\" *ngIf=\"(result.whois && result.whois.isAvailable && !result.location.lat && result.type == 'domain')\">\n            <div Class=\"card text-white mb-3 bg-success\">\n              <div class=\"card-header\">\n                <h4>\n                  <fa-icon [icon]=\"faFileInvoice\" class=\"icon-card\"></fa-icon>&nbsp;&nbsp;&nbsp;Not Registered</h4>\n              </div>\n              <div class=\"card-body\">\n               <p class=\"lead\"> <b>It appears that this domain has not yet been registered. </b></p>\n              </div>\n              <div class=\"card-footer\">\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"row\" *ngIf=\"((result.location && result.location.country) || (result.whois && !result.whois.isAvailable) || result.asn_registry)\">\n            <div class=\"col-md-12 px-0\">\n              <div class=\"card text-white mb-3 bg-dark \">\n                <div class=\"card-header \">\n                  <h4>\n                    <fa-icon [icon]=\"faMapMarkerAlt\" class=\"icon-card\"></fa-icon>&nbsp;&nbsp;&nbsp;Location <span *ngIf=\"result.location && result.location.country\"> ● </span><span *ngIf=\"result.location && result.location.city\" style=\"font-style: italic; color: palegreen;\"> {{ result.location.city }} — </span>\n                    <span *ngIf=\"result.location && result.location.country\" style=\"font-style: italic; color: palegreen;\">{{ result.location.country }} </span>\n                    <span *ngIf=\"result.as_name  && result.as_name  != 'NA'\"> ● <span style=\"color: coral;\"> {{ result.as_name }} </span></span>\n                  </h4>\n                </div>\n                <div class=\"card-body\">\n                  <div class=\"row location\">\n                    <div class=\"col-lg-8\">\n                      <ioc-map  [lat]=\"result.location.lat\" [lon]=\"result.location.lon\"></ioc-map>\n                    </div>\n                    <div class=\"col-lg-4 order-first pr-0\">\n                      <div class=\"location-info\">\n                        <div class=\"location-item\" *ngIf=\"(result.asn_registry && result.asn_registry != 'NA' && result.type == 'ip')\">\n                          <div class=\"row\">\n                            <div class=\"col-4 category pl-0\">\n                              <fa-icon [icon]=\"faGlobeAmericas\"></fa-icon> Autonomous System\n                              <br>\n                            </div>\n                            <div class=\"col-8 content no-top-border pl-0\">\n                              <div *ngIf=\"result.asn && result.asn != 'NA'\">\n                                <dt>ASN:</dt>\n                                <dd> {{ result.asn }}</dd>\n                              </div>\n                              <div *ngIf=\"result.as_name  && result.as_name  != 'NA'\">\n                                <dt>AS Name:</dt>\n                                <dd> {{ result.as_name }}</dd>\n                              </div>\n                              <div *ngIf=\"result.asn_country_code && result.asn_country_code != 'NA'\">\n                                <dt>AS Country:</dt>\n                                <dd>{{ result.asn_country_code }}<span *ngIf=\"result.asn_country && result.asn_country_code != result.asn_country \"> ({{ result.asn_country }}) </span></dd>\n                              </div>\n                              <div *ngIf=\"result.asn_registry && result.asn_registry != 'NA'\">\n                                <dt>AS Registry:</dt>\n                                <dd>{{ result.asn_registry }}</dd>\n                              </div>\n                              <div *ngIf=\"result.asn_date  && result.asn_date  != 'NA'\">\n                                <dt>AS Date:</dt>\n                                <dd> {{ result.asn_date }}</dd>\n                              </div>\n                              <div *ngIf=\"result.asn_cidr  && result.asn_cidr  != 'NA'\">\n                                <dt>AS CIDR:</dt>\n                                <dd>{{ result.asn_cidr }}</dd>\n                              </div>\n                              <dt><br></dt>\n                              <dd> </dd>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"location-item\" *ngIf=\"result.whois && !result.whois.isAvailable && result.type == 'domain'\">\n                          <div class=\"row\">\n                            <div class=\"col-4 category pl-0\">\n                              <fa-icon [icon]=\"faGlobeAmericas\"></fa-icon> Domain Registration (WHOIS)\n                              <br>\n                            </div>\n                            <div class=\"col-8 content no-top-border pl-1\">\n                              <div *ngIf=\"result.whois && result.whois.length && result.whois.length <= 3 && !result.whois.registrar && !result.whois.status\">\n                                <dt style=\"width: 200px;\">No Registration Data Avaliable</dt>\n                                <dd></dd>\n                              </div>\n                              <div *ngIf=\"result.whois.registrar\">\n                                <dt>Registrar:</dt>\n                                <dd> {{ result.whois.registrar }}</dd>\n                              </div>\n                              <div *ngIf=\"result.whois.name\">\n                                <dt>Registrant:</dt>\n                                <dd> {{ result.whois.name }}</dd>\n                              </div>\n                              <div *ngIf=\"result.whois.org\">\n                                <dt>Organization:</dt>\n                                <dd> {{ result.whois.org }}</dd>\n                              </div>\n                              <div *ngIf=\"result.whois.country\">\n                                <dt>Reg. Country:</dt>\n                                <dd>{{ result.whois.country }}<span *ngIf=\"result.whois.country_full && result.whois.country != result.whois.country_full \"> ({{ result.whois.country_full }}) </span></dd>\n                              </div>\n                              <div *ngIf=\"result.whois.email\">\n                                <dt>Email:</dt>\n                                <dd> {{ result.whois.email }}</dd>\n                              </div>\n                              <div *ngIf=\"result.whois.phone\">\n                                <dt>Phone:</dt>\n                                <dd> {{ result.whois.phone }}</dd>\n                              </div>\n                              <div *ngIf=\"(!result.whois.registrar && !result.whois.name) && result.whois.status \">\n                                <dt>Status:</dt>\n                                <dd> {{ result.whois.status }}</dd>\n                              </div>\n\n                              <dt><br></dt>\n                              <dd> </dd>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"location-item\" *ngIf=\"result.address && result.type == 'ip'\">\n                          <div class=\"row\">\n                            <div class=\"col-4 category pl-0\">\n                              <fa-icon [icon]=\"faBuilding\"></fa-icon> Registrant Information\n                              <br>\n                            </div>\n                            <div class=\"col-8 content pl-0\">\n                              <div *ngIf=\"result.address\">\n                                <dt>Address:</dt>\n                                <dd> {{ result.address }}</dd>\n                              </div>\n                              <div *ngIf=\"result.email\">\n                                <dt>Email:</dt>\n                                <dd *ngFor=\"let mail of result.email\"> {{ mail }}</dd>\n                              </div>\n                              <dt><br></dt>\n                              <dd> </dd>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"location-item\" *ngIf=\"result.whois && (result.whois.created || result.whois.expired) && result.type == 'domain'\">\n                          <div class=\"row\">\n                            <div class=\"col-4 category pl-0\">\n                              <fa-icon [icon]=\"faCalendarAlt\"></fa-icon> Dates\n                              <br>\n                            </div>\n                            <div class=\"col-8 content pl-0\">\n                              <div *ngIf=\"result.whois.updated\">\n                                <dt>Updated:</dt>\n                                <dd> {{ result.whois.updated }}</dd>\n                              </div>\n                              <div *ngIf=\"result.whois.created\">\n                                <dt>Created:</dt>\n                                <dd> {{ result.whois.created }}</dd>\n                              </div>\n                              <div *ngIf=\"result.whois.expired\">\n                                <dt>Expires:</dt>\n                                <dd> {{ result.whois.expired }}</dd>\n                              </div>\n                              <dt><br></dt>\n                              <dd> </dd>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"location-item\" *ngIf=\"result.location && result.location.lat != false\">\n                          <div class=\"row\">\n                            <div class=\"col-4 category pl-0\">\n                              <fa-icon [icon]=\"faMapSigns\"></fa-icon>Location Data\n                              <br>\n                            </div>\n                            <div class=\"col-8 content pl-0\">\n                              <div *ngIf=\"result.location.city\">\n                                <dt>City:</dt>\n                                <dd> {{ result.location.city }}</dd>\n                              </div>\n                              <div *ngIf=\"result.location.region\">\n                                <dt>Region:</dt>\n                                <dd> {{ result.location.region }}</dd>\n                              </div>\n                              <div *ngIf=\"result.location.country\">\n                                <dt>Country:</dt>\n                                <dd> {{ result.location.country }}</dd>\n                              </div>\n                              <div *ngIf=\"result.location.continent\">\n                                <dt>Continent:</dt>\n                                <dd> {{ result.location.continent }}</dd>\n                              </div>\n                              <div *ngIf=\"result.location.radius\">\n                                <dt>Radius (mi):</dt>\n                                <dd> {{ result.location.radius }}</dd>\n                              </div>\n                              <dt><br></dt>\n                              <dd> </dd>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"result.blacklist.length <= 0\">\n            <div Class=\"card text-white mb-3 bg-dark\">\n              <div class=\"card-header\">\n                <h4>\n                  <fa-icon [icon]=\"faExclamationTriangle\" class=\"icon-card\"></fa-icon>&nbsp;&nbsp;&nbsp;Blacklists</h4>\n              </div>\n              <div class=\"card-body\">\n              </div>\n              <div class=\"card-footer\">\n                <p class=\"lead\">\n                  Total Count: <strong>{{ result.blacklist.length }}</strong></p>\n                <a *ngIf=\"result.blacklist && result.blacklist.length > 4 && quantity_blacklist == 4\" href=\"javascript:void(0)\" (click)=\"blacklistQuantity()\" class=\"card-link\">Show More</a>\n                <a *ngIf=\"result.blacklist && result.blacklist.length > 4 && quantity_blacklist > 4\" href=\"javascript:void(0)\" (click)=\"blacklistQuantity()\" class=\"card-link\">Show Less</a>\n\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div Class=\"card text-white mb-3 bg-dark\">\n              <div class=\"card-header\" [class.bg-warning] = \"result.malware.list\">\n                <h4>\n                  <fa-icon [icon]=\"faBug\" class=\"icon-card\"></fa-icon>&nbsp;&nbsp;&nbsp;Malware</h4>\n              </div>\n              <div class=\"card-body\">\n                <table class=\"table table-striped\" *ngIf=\"result.malware.list\">\n                  <thead>\n                    <tr>\n                      <th scope=\"col\">Malware</th>\n                      <th scope=\"col\">Date</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of result.malware.list | slice:0:quantity_malware\">\n                      <td>\n                        <a href=\"https://www.virustotal.com/#/file/{{item.hash}}\">{{ item.hash }}</a></td>\n                      <td>{{ item.date | slice:0:19 }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n                <div *ngIf=\"result.malware == 'FA'\">\n                  <p class=\"lead\"> Something went wrong and we were unable to gather malware information at this time. Please try again later.</p>\n                </div>\n              </div>\n              <div *ngIf=\"result.malware != 'FA'\" class=\"card-footer\">\n                <p class=\"lead\">\n                  Total Count: <strong>{{ result.malware.count }}</strong></p>\n                <a *ngIf=\"result.malware.count > 4 && quantity_malware == 4\" href=\"javascript:void(0)\" (click)=\"malwareQuantity()\" class=\"card-link\">Show More</a>\n                <a *ngIf=\"result.malware.count > 4 && quantity_malware > 4\" href=\"javascript:void(0)\" (click)=\"malwareQuantity()\" class=\"card-link\">Show Less</a>\n              </div>\n              <div *ngIf=\"result.malware == 'FA'\" class=\"card-footer\">\n                <p class=\"lead\">\n                  Total Count: <strong>0</strong></p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\" *ngIf=\"result.type == 'domain'\">\n            <div Class=\"card text-white mb-3 bg-dark\">\n              <div class=\"card-header\">\n                <h4>\n                  <fa-icon [icon]=\"faNetworkWired\" class=\"icon-card\"></fa-icon>&nbsp;&nbsp;&nbsp;Passive DNS</h4>\n              </div>\n              <div class=\"card-body\">\n                <table class=\"table table-striped\" *ngIf=\"result.ip.list\">\n                  <thead>\n                    <tr>\n                      <th scope=\"col\">IP</th>\n                      <th scope=\"col\">Hostname</th>\n                      <th scope=\"col\">Date</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of result.ip.list  | slice:0:quantity_ip\">\n                      <td><a href=\"../search/ip/{{item.ip}}\">{{ item.ip }}</a></td>\n                      <td>{{ item.hostname }}</td>\n                      <td>{{ item.date }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n                <div *ngIf=\"result.ip == 'FA'\">\n                  <p class=\"lead\"> Something went wrong and we were unable to gather DNS information at this time. Please try again later.</p>\n                </div>\n              </div>\n              <div *ngIf=\"result.ip != 'FA'\" class=\"card-footer\">\n                <p class=\"lead\">\n                  Total Count: <strong>{{ result.ip.count }}</strong></p>\n                <a *ngIf=\"result.ip && result.ip.count > 4 && quantity_ip == 4\" href=\"javascript:void(0)\" (click)=\"ipQuantity()\" class=\"card-link\">Show More</a>\n                <a *ngIf=\"result.ip && result.ip.count > 4 && quantity_ip > 4\" href=\"javascript:void(0)\" (click)=\"ipQuantity()\" class=\"card-link\">Show Less</a>\n              </div>\n              <div *ngIf=\"result.ip == 'FA'\" class=\"card-footer\">\n                <p class=\"lead\">\n                  Total Count: <strong>0</strong></p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div Class=\"card text-white mb-3 bg-dark\">\n              <div *ngIf=\"result.type == 'ip'\" class=\"card-header\">\n                <h4>\n                  <fa-icon [icon]=\"faGlobe\" class=\"icon-card\"></fa-icon>&nbsp;&nbsp;&nbsp;Resolved Domains\n                </h4>\n              </div>\n              <div *ngIf=\"result.type == 'domain'\" class=\"card-header\">\n                <h4>\n                  <fa-icon [icon]=\"faGlobe\" class=\"icon-card\"></fa-icon>&nbsp;&nbsp;&nbsp;Related URLs\n                </h4>\n              </div>\n              <div class=\"card-body\">\n                <table class=\"table table-striped\" *ngIf=\"result.url.list\">\n                  <thead>\n                    <tr>\n                      <th scope=\"col\">URL</th>\n                      <th scope=\"col\">Date</th>\n                    </tr>\n                  </thead>\n                  <tbody *ngIf=\"result.type == 'ip'\">\n                    <tr *ngFor=\"let item of result.url.list | slice:0:quantity_url\">\n                      <td><a href=\"../search/domain/{{item.domain}}\">{{ item.domain }}</a></td>\n                      <td>{{ item.date }}</td>\n                    </tr>\n                  </tbody>\n                  <tbody *ngIf=\"result.type == 'domain'\">\n                    <tr *ngFor=\"let item of result.url.list | slice:0:quantity_url\">\n                      <td>{{ item.url }}</td>\n                      <td>{{ item.date }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n                <div *ngIf=\"result.url == 'FA'\">\n                  <p class=\"lead\"> Something went wrong and we were unable to gather URL/Domain information at this time. Please try again later.</p>\n                </div>\n              </div>\n              <div *ngIf=\"result.url != 'FA'\" class=\"card-footer\">\n                <p class=\"lead\">\n                  Total Count: <strong>{{ result.url.count }}</strong></p>\n                <a *ngIf=\"result.url.count> 4 && quantity_url == 4\" href=\"javascript:void(0)\" (click)=\"urlQuantity()\" class=\"card-link\">Show More</a>\n                <a *ngIf=\"result.url.count> 4 && quantity_url > 4\" href=\"javascript:void(0)\" (click)=\"urlQuantity()\" class=\"card-link\">Show Less</a>\n              </div>\n              <div *ngIf=\"result.url == 'FA'\" class=\"card-footer\">\n                <p class=\"lead\">\n                  Total Count: <strong>0</strong></p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ipinfo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ipinfo.service */ "./src/app/ipinfo.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _searchshare_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../searchshare.service */ "./src/app/searchshare.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _country_code_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../country-code.service */ "./src/app/country-code.service.ts");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SearchComponent = /** @class */ (function () {
    function SearchComponent(ipinfoService, countryCode, ngProgress, route, router, titleService, searchTerm, location) {
        var _this = this;
        this.ipinfoService = ipinfoService;
        this.countryCode = countryCode;
        this.route = route;
        this.router = router;
        this.titleService = titleService;
        this.searchTerm = searchTerm;
        this.location = location;
        this.faGlobeAmericas = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faGlobeAmericas"];
        this.faChartLine = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faChartLine"];
        this.faMapMarkerAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faMapMarkerAlt"];
        this.faMapSigns = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faMapSigns"];
        this.faBuilding = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faBuilding"];
        this.faExclamationTriangle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faExclamationTriangle"];
        this.faBug = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faBug"];
        this.faGlobe = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faGlobe"];
        this.faKeycdn = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faKeycdn"];
        this.faCalendarAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faCalendarAlt"];
        this.faNetworkWired = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faNetworkWired"];
        this.faFileInvoice = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faFileInvoice"];
        this.faExclamation = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faExclamation"];
        this.thresholdConfig = {
            '0': { color: 'green' },
            '3': { color: 'yellow' },
            '5': { color: 'orange' },
            '8': { color: 'red' }
        };
        this.quantity_blacklist = 4;
        this.quantity_malware = 4;
        this.quantity_url = 4;
        this.quantity_ip = 4;
        this.score = 0;
        this.isLoaded = false;
        this.confidence = { score: '0', issues: 0 };
        this.bg = "bg-info";
        this.border = "border-info";
        this.result = [];
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.ip = this.route.snapshot.paramMap.get('ip');
        this.domain = this.route.snapshot.paramMap.get('domain');
        if (this.ip) {
            var checker = new RegExp('^((([1-9]|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.)((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.)((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.)((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])))$');
            if (!checker.test(this.ip)) {
                this.router.navigate(['/error/418'], { replaceUrl: true });
            }
            else {
                this.titleService.setTitle("scanning...");
                this.type = 'ip';
                this.search_term = this.ip;
            }
        }
        else if (this.domain) {
            var checker = new RegExp('(^(?:([^:/\\s]*)\\.)*((?:[^.:/\\s]+)+(?:\\.[^.:/\\d]+){1})(?:\\/.*)*$)');
            if (!checker.test(this.domain))
                this.router.navigate(['/error/418'], { replaceUrl: true });
            else {
                this.titleService.setTitle("scanning...");
                this.type = 'domain';
                this.search_term = this.domain;
            }
        }
        // Get an instance of NgProgressRef
        this.progressBar = ngProgress.ref();
        this.header = ngProgress.ref("header");
        // // Get progress bar events (optional)
        this.progressBar.started.subscribe(function () { return _this.header.start(); });
        this.progressBar.completed.subscribe(function () { _this.header.complete(); });
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoaded = false;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["timer"])(500, 2000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(7)).subscribe(function (x) {
            if (x == 0)
                _this.loading = "......Searching WHOIS Database......";
            if (x == 1)
                _this.loading = "......Scanning Blacklists......";
            if (x == 2)
                _this.loading = "......Scanning Blacklists......";
            if (x == 3)
                _this.loading = "......Looking up GeoLocation......";
            if (x == 4)
                _this.loading = "......Identifying Potential Botnets......";
            if (x == 5)
                _this.loading = "......Looking for Adware......";
            if (x == 6)
                _this.loading = "......Calculating Threat Level......";
        });
        this.ipinfoService.getData(this.search_term, this.type).subscribe(function (results) {
            _this.result = results;
            _this.titleService.setTitle(_this.result[_this.type]);
            _this.searchTerm.changeMessage(_this.result[_this.type]);
            var url = 'search/' + _this.type + '/' + _this.result[_this.type];
            _this.location.replaceState(url);
            console.log(_this.result);
            _this.score = _this.result.score.score;
            _this.confidence.score = (((_this.result.score.confidence) + 5) * 20).toString();
            if (_this.result.c2 && _this.result.c2.feed) {
                var c2 = new RegExp('Master Indicator Feed for (\\w*)');
                var c2_name = c2.exec(_this.result.c2.feed);
                _this.result.c2.name = c2_name[1].charAt(0).toUpperCase() + c2_name[1].slice(1);
            }
            if (_this.result.whois)
                _this.result.whois.length = Object.keys(_this.result.whois).length;
            if (!_this.result.location || !_this.result.location.lon || !_this.result.location.lat)
                _this.result.location = { lat: false, lon: false };
            if (!_this.result.blacklist)
                _this.result.blacklist = [];
            if (!_this.result.malware.count && _this.result.malware != 'FA')
                _this.result.malware.count = 0;
            if (!_this.result.url.count && _this.result.url != 'FA')
                _this.result.url.count = 0;
            if (!_this.result.ip.count && _this.result.ip != 'FA' && typeof _this.result.ip === 'object')
                _this.result.ip.count = 0;
            if (_this.result.malware && _this.result.malware.count < _this.quantity_malware)
                _this.quantity_malware = _this.result.malware.count;
            if (_this.result.blacklist && _this.result.blacklist.count < _this.quantity_blacklist)
                _this.quantity_blacklist = _this.result.blacklist.count;
            if (_this.result.url && _this.result.url.count < _this.quantity_url)
                _this.quantity_url = _this.result.url.count;
            if (_this.result.ip && _this.result.ip.count < _this.quantity_ip)
                _this.quantity_ip = _this.result.ip.count;
            if (_this.result.asn_country_code)
                _this.result.asn_country = _this.countryCode.getCountryName(_this.result.asn_country_code);
            if (_this.result.whois && _this.result.whois.country)
                _this.result.whois.country_full = _this.countryCode.getCountryName(_this.result.whois.country);
            if (!_this.result.category)
                _this.result.category = { category: ["nothing"] };
            else {
                _this.confidence.malware = (_this.result.category.category.includes("Malware")) ? true : false;
                _this.confidence.adware = (_this.result.category.category.includes("Adware")) ? true : false;
                _this.confidence.exploit = (_this.result.category.category.includes("Browser Exploit")) ? true : false;
                _this.confidence.hyjack = (_this.result.category.category.includes("System Hyjacking")) ? true : false;
                _this.confidence.phishing = (_this.result.category.category.includes("Phishing")) ? true : false;
                _this.confidence.tor = (_this.result.category.category.includes("TOR exit node")) ? true : false;
            }
            if (_this.result.score.old || !_this.result.score.trend || _this.result.score.limitedData || _this.result.category.category.length > 1) {
                _this.confidence.isReduced = true;
                if (_this.result.score.old) {
                    _this.confidence.old = true;
                    _this.confidence.issues++;
                }
                if (!_this.result.score.trend) {
                    _this.confidence.trend = true;
                    _this.confidence.issues++;
                }
                if (_this.result.score.limitedData) {
                    _this.confidence.data = true;
                    _this.confidence.issues++;
                }
                if (_this.result.category.category.length > 1) {
                    _this.confidence.category = true;
                    _this.confidence.issues++;
                }
            }
            if (_this.confidence.score < 95 && !_this.confidence.isReduced) {
                _this.confidence.isReduced = true;
                _this.confidence.country = true;
                _this.confidence.issues = 1;
            }
            if (_this.confidence.score > 95) {
                _this.confidence.isReduced = false;
                _this.confidence.country = true;
                _this.confidence.issues = 0;
            }
            if (_this.score > 6) {
                _this.bg = "bg-warning";
                _this.border = "border-warning";
            }
            if (_this.score > 8) {
                _this.bg = "bg-danger";
                _this.border = "border-danger";
            }
            _this.isLoaded = true;
        }, function (error) {
            console.log('oops', error);
            console.log(error.status);
            if (error.status == 429)
                setTimeout(function () {
                    _this.router.navigate(['/error/429'], { replaceUrl: true });
                });
            else if (error.status == 404)
                setTimeout(function () {
                    _this.router.navigate(['/error/404'], { replaceUrl: true });
                });
            else if (error.status == 421)
                setTimeout(function () {
                    _this.router.navigate(['/error/421'], { replaceUrl: true });
                });
            else if (error.status == 403)
                setTimeout(function () {
                    _this.router.navigate(['/error/403'], { replaceUrl: true });
                });
            else
                setTimeout(function () {
                    _this.router.navigate(['/error/503'], { replaceUrl: true });
                });
        });
    };
    SearchComponent.prototype.blacklistQuantity = function () {
        if (this.quantity_blacklist == 4) {
            this.quantity_blacklist = Math.min(10, this.result.blacklist.length);
        }
        else if (this.quantity_blacklist > 4) {
            this.quantity_blacklist = 4;
        }
    };
    SearchComponent.prototype.malwareQuantity = function () {
        if (this.quantity_malware == 4) {
            this.quantity_malware = Math.min(10, this.result.malware.count);
        }
        else if (this.quantity_malware > 4) {
            this.quantity_malware = 4;
        }
    };
    SearchComponent.prototype.urlQuantity = function () {
        if (this.quantity_url == 4) {
            this.quantity_url = Math.min(10, this.result.url.count);
        }
        else if (this.quantity_url > 4) {
            this.quantity_url = 4;
        }
    };
    SearchComponent.prototype.ipQuantity = function () {
        if (this.quantity_ip == 4) {
            this.quantity_ip = Math.min(10, this.result.ip.count);
        }
        else if (this.quantity_ip > 4) {
            this.quantity_ip = 4;
        }
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [_ipinfo_service__WEBPACK_IMPORTED_MODULE_1__["IpinfoService"], _country_code_service__WEBPACK_IMPORTED_MODULE_5__["CountryCodeService"], _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_6__["NgProgress"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"], _searchshare_service__WEBPACK_IMPORTED_MODULE_3__["SearchshareService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/searchshare.service.ts":
/*!****************************************!*\
  !*** ./src/app/searchshare.service.ts ***!
  \****************************************/
/*! exports provided: SearchshareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchshareService", function() { return SearchshareService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchshareService = /** @class */ (function () {
    function SearchshareService() {
        this.searchSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.currentSearch = this.searchSource.asObservable();
    }
    SearchshareService.prototype.changeMessage = function (search) {
        this.searchSource.next(search);
    };
    SearchshareService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SearchshareService);
    return SearchshareService;
}());



/***/ }),

/***/ "./src/app/support/support.component.html":
/*!************************************************!*\
  !*** ./src/app/support/support.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"jumbotron\">\n            <h1 class=\"display-3\">Support</h1>\n            <h1 class=\"display-3 text-info\">IOCSCAN<wbr>.IO</h1>\n            <br>\n            <br>\n            <br>\n            <p class=\"lead\">This site has and always will be free to access. If you get a lot of use out of this site, or you simply want to send your appreciation then you would be my hero. This site is run and managed by me in my spare time, and it does cost money to keep the lights on, the servers running, and the ramen flowing. All funds received will go towards improving and running the site. </p>\n            <hr class=\"my-4\">\n            <p>Click below if you are feeling generous or if you just like clicking buttons.</p>\n            <p class=\"lead\">\n                <a class=\"btn btn-warning btn-lg\" placement=\"bottom\" ngbTooltip=\"Superheros Do Exist!\" href=\"https://donorbox.org/donate-to-iocscan-io\" role=\"button\"><img style=\"max-width:25px;\"src=\"white_logo.png\"> &nbsp;Donate</a>\n            </p>\n        </div>\n    </div>\n</div>\n    "

/***/ }),

/***/ "./src/app/support/support.component.scss":
/*!************************************************!*\
  !*** ./src/app/support/support.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/support/support.component.ts":
/*!**********************************************!*\
  !*** ./src/app/support/support.component.ts ***!
  \**********************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _searchshare_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../searchshare.service */ "./src/app/searchshare.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupportComponent = /** @class */ (function () {
    function SupportComponent(titleService, searchTerm) {
        this.titleService = titleService;
        this.searchTerm = searchTerm;
        this.titleService.setTitle("iocscan");
        this.searchTerm.changeMessage('');
    }
    SupportComponent.prototype.ngOnInit = function () {
    };
    SupportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ioc-support',
            template: __webpack_require__(/*! ./support.component.html */ "./src/app/support/support.component.html"),
            styles: [__webpack_require__(/*! ./support.component.scss */ "./src/app/support/support.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"], _searchshare_service__WEBPACK_IMPORTED_MODULE_2__["SearchshareService"]])
    ], SupportComponent);
    return SupportComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ec2-user/x24scan/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map