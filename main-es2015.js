(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-page></app-main-page>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/favorites/favorites.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/favorites/favorites.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n    <table>\n        <td *ngFor='let i of weather.arrayFavorites' style=\"cursor: pointer\" (click)='info(i[\"city\"])'>\n            <div class=\"smallBox\" style=\"margin-left: 40%; text-align: center\">\n                {{i['city']}}<br>\n                {{i['temperature']}} C<br>\n                {{i['cloudes']}}<br><br>\n                <button mat-button (click)='removeFavorite(i[\"city\"])'>Remove</button>\n            </div>\n        </td>\n    </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<p style=\"margin-left: 45%\">\n        <mat-form-field appearance=\"legacy\">\n          <mat-label>Search</mat-label>\n          <input matInput placeholder=\"City\" [(ngModel)]='weather.city'>\n          <mat-icon matSuffix style=\"cursor: pointer\" (click)='getLocation()'>search</mat-icon>\n        </mat-form-field>\n        <span style=\"color: red\" *ngIf='weather.falseLocationFlag'>*No such location</span>\n      </p>\n      <div class=\"box\">\n          <div class=\"smallBox\" style=\"display: inline-block\">\n              <p>{{weather.city}}</p>\n        <p *ngIf='!temperatureToggle'>{{temperatur}} C</p>\n        <p *ngIf='temperatureToggle'>{{farTemperature}} F</p>\n        <button mat-button (click)='loading()'>Temperature toggle</button>\n    </div>\n\n\n    <!--Loading-->\n\n    <div class=\"loading\" *ngIf='loadingP'>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n        <h2 class=\"HEROLO\">HEROLO</h2>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n      </div>\n\n    <!--Loading-->\n\n<!--favorites-->\n\n    <div class='container' style=\"display: inline-block; padding-left: 50%; padding-top: 20px; position: absolute\">\n\n            <div class='checkboxes-container'>\n              <div class='control-group'>\n                <input class='red-heart-checkbox' id='red-check2' type='checkbox' (click)='addToFavorite()' [(ngModel)]='myFav'>\n                <label for='red-check2'>\n                </label>\n              </div>\n            </div>\n          </div>\n          \n          <!--favorites-->\n\n        </div>\n<!-- *ngIf='flag'-->\n<h1 style=\"position: absolute; bottom: 200px; right: 700px; display: inline-block\" >Wind Speed: {{windSpeed}} Km/h</h1><br>\n<h1 style=\"position: absolute; bottom: 150px; right: 800px; display: inline-block\" >{{weatherText}}</h1><br>\n    <div style=\"position: absolute;bottom: 5px; right: 200px;\">\n      <table>\n        <tr>\n        <td *ngFor='let i of daysArray'>\n            <div class=\"smallBox\"  style=\"text-align: center;\">\n                <span style=\"size: 50px; font-size: 25px;\">{{i[\"day\"]}}</span><br>\n                <span style=\"size: 50px; font-size: 25px;\">{{i[\"date\"]}}</span><br>\n                <span style=\"size: 50px; font-size: 25px;\" *ngIf='!temperatureToggle'>{{i[\"temperatur\"]}} C</span>\n                <span style=\"size: 50px; font-size: 25px;\" *ngIf='temperatureToggle'>{{i[\"fahrenheitTemp\"]}} F</span>\n            </div>\n          </td>\n        </tr>\n\n          </table>\n        </div>\n  \n      </div>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main-page/main-page.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main-page/main-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar color=\"white\">\n    <mat-toolbar-row>\n      <span>Herolo weather Task</span>\n      <span>\n      <mat-tab-group style=\"margin-left: 900px;\" #tabRef (selectedTabChange)=\"pageChange(tabRef.selectedIndex)\">\n        <mat-tab label=\"Home\"></mat-tab>\n        <mat-tab label=\"Favorites\"></mat-tab>\n      </mat-tab-group>\n    </span>\n    </mat-toolbar-row>\n</mat-toolbar>\n\n    <app-home *ngIf='weather.pageFlag'></app-home>\n    <app-favorites *ngIf='!weather.pageFlag'></app-favorites>\n\n\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'accuWeather';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./favorites/favorites.component */ "./src/app/favorites/favorites.component.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
            _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_14__["MainPageComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
            _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_16__["FavoritesComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/favorites/favorites.component.css":
/*!***************************************************!*\
  !*** ./src/app/favorites/favorites.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\r\n    border-style: solid;\r\n    height: 500px;\r\n    width: 80%;\r\n    margin-left: 150px;\r\n    margin-top: 40px;\r\n}\r\n\r\n.smallBox{\r\n    border-style: groove;\r\n    height: 150px;\r\n    width: 120px;\r\n    margin-right: 50px;\r\n    margin-top: 20px;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveHtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5zbWFsbEJveHtcclxuICAgIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/favorites/favorites.component.ts":
/*!**************************************************!*\
  !*** ./src/app/favorites/favorites.component.ts ***!
  \**************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ "./src/app/weather.service.ts");



let FavoritesComponent = class FavoritesComponent {
    constructor(weather) {
        this.weather = weather;
    }
    ngOnInit() {
        this.weather.arrayFavorites = JSON.parse(localStorage.getItem('favorites'));
        this.weather.cityFlag = false;
    }
    removeFavorite(city) {
        for (let i = 0; i < this.weather.arrayFavorites.length; i++) {
            if (city == this.weather.arrayFavorites[i]['city']) {
                this.weather.arrayFavorites[i] = this.weather.arrayFavorites[this.weather.arrayFavorites.length - 1];
                this.weather.arrayFavorites.pop();
                let tempFav = JSON.stringify(this.weather.arrayFavorites);
                localStorage.setItem('favorites', tempFav);
                return;
            }
        }
    }
    info(city) {
        this.weather.city = city;
        this.weather.cityFlag = true;
        this.weather.pageFlag = true;
    }
};
FavoritesComponent.ctorParameters = () => [
    { type: _weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"] }
];
FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorites',
        template: __webpack_require__(/*! raw-loader!./favorites.component.html */ "./node_modules/raw-loader/index.js!./src/app/favorites/favorites.component.html"),
        styles: [__webpack_require__(/*! ./favorites.component.css */ "./src/app/favorites/favorites.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]])
], FavoritesComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\r\n    border-style: solid;\r\n    height: 700px;\r\n    width: 80%;\r\n    margin-left: 150px;\r\n}\r\n\r\n.smallBox{\r\n    border-style: groove;\r\n    height: 150px;\r\n    width: 150px;\r\n    margin-right: 50px;\r\n    margin-top: 20px;\r\n    text-align: center;\r\n    \r\n}\r\n\r\n/*favorites*/\r\n\r\n.red-heart-checkbox {\r\n    visibility: hidden;\r\n  }\r\n\r\n.red-heart-checkbox + label {\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    font-size: 30px;\r\n    padding-left: 15px;\r\n    transition: all 0.2s;\r\n  }\r\n\r\n.red-heart-checkbox:checked + label:before {\r\n    content: \"\";\r\n    color: #f00;\r\n  }\r\n\r\n.red-heart-checkbox + label:before {\r\n    width: 31.5px;\r\n    height: 30px;\r\n    content: \"\";\r\n    position: absolute;\r\n    margin-left: -48px;\r\n    margin-top: 3px;\r\n    font-family: FontAwesome;\r\n    font-size: 30px;\r\n    content: \"\";\r\n    transition: all 0.3s;\r\n    color: #888;\r\n  }\r\n\r\n.red-heart-checkbox + label:hover:before {\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n  }\r\n\r\n.container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100%;\r\n    left: 500px;\r\n  }\r\n\r\n.control-group {\r\n    margin: 3px;\r\n  }\r\n\r\n/*LOADING*/\r\n\r\n.load{\r\n    margin: 0;\r\n    padding: 0;\r\n    background: grey;\r\n  }\r\n\r\n.loading{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n    height: 40px;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n.obj{\r\n    width: 5px;\r\n    height: 40px;\r\n    background: rgb(91, 91, 204);\r\n    margin: 0.3px;\r\n    border-radius: 10px;\r\n    -webkit-animation: loading 0.8s infinite;\r\n            animation: loading 0.8s infinite;\r\n  }\r\n\r\n.obj:nth-child(2){\r\n    -webkit-animation-delay: 0.1s;\r\n            animation-delay: 0.1s;\r\n  }\r\n\r\n.obj:nth-child(3){\r\n    -webkit-animation-delay: 0.2s;\r\n            animation-delay: 0.2s;\r\n  }\r\n\r\n.obj:nth-child(4){\r\n    -webkit-animation-delay: 0.3s;\r\n            animation-delay: 0.3s;\r\n  }\r\n\r\n.obj:nth-child(5){\r\n    -webkit-animation-delay: 0.4s;\r\n            animation-delay: 0.4s;\r\n  }\r\n\r\n.obj:nth-child(6){\r\n    -webkit-animation-delay: 0.5s;\r\n            animation-delay: 0.5s;\r\n  }\r\n\r\n.obj:nth-child(7){\r\n    -webkit-animation-delay: 0.6s;\r\n            animation-delay: 0.6s;\r\n  }\r\n\r\n.obj:nth-child(8){\r\n    -webkit-animation-delay: 0.7s;\r\n            animation-delay: 0.7s;\r\n  }\r\n\r\n.obj:nth-child(10){\r\n    -webkit-animation-delay: 0.1s;\r\n            animation-delay: 0.1s;\r\n  }\r\n\r\n.obj:nth-child(11){\r\n    -webkit-animation-delay: 0.2s;\r\n            animation-delay: 0.2s;\r\n  }\r\n\r\n.obj:nth-child(12){\r\n    -webkit-animation-delay: 0.3s;\r\n            animation-delay: 0.3s;\r\n  }\r\n\r\n.obj:nth-child(13){\r\n    -webkit-animation-delay: 0.4s;\r\n            animation-delay: 0.4s;\r\n  }\r\n\r\n.obj:nth-child(14){\r\n    -webkit-animation-delay: 0.5s;\r\n            animation-delay: 0.5s;\r\n  }\r\n\r\n.obj:nth-child(15){\r\n    -webkit-animation-delay: 0.6s;\r\n            animation-delay: 0.6s;\r\n  }\r\n\r\n.obj:nth-child(16){\r\n    -webkit-animation-delay: 0.7s;\r\n            animation-delay: 0.7s;\r\n  }\r\n\r\n@-webkit-keyframes loading{\r\n    0%{\r\n      height: 0;\r\n    }\r\n  \r\n    50%{\r\n      height: 40px;\r\n    }\r\n  \r\n    100%{\r\n      height: 0;\r\n    }\r\n  }\r\n\r\n@keyframes loading{\r\n    0%{\r\n      height: 0;\r\n    }\r\n  \r\n    50%{\r\n      height: 40px;\r\n    }\r\n  \r\n    100%{\r\n      height: 0;\r\n    }\r\n  }\r\n\r\n.HEROLO{\r\n    color: rgb(91, 91, 204);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjs7QUFFdEI7O0FBRUEsWUFBWTs7QUFFWjtJQUNJLGtCQUFrQjtFQUNwQjs7QUFDQTtJQUNFLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFFekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQkFBb0I7RUFDdEI7O0FBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiOztBQUNBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLFdBQVc7RUFDYjs7QUFDQTtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7RUFDYjs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFHQSxVQUFVOztBQUVWO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtFQUN2Qjs7QUFLQTtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRTtNQUNFLFNBQVM7SUFDWDs7SUFFQTtNQUNFLFlBQVk7SUFDZDs7SUFFQTtNQUNFLFNBQVM7SUFDWDtFQUNGOztBQVpBO0lBQ0U7TUFDRSxTQUFTO0lBQ1g7O0lBRUE7TUFDRSxZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxTQUFTO0lBQ1g7RUFDRjs7QUFHQTtJQUNFLHVCQUF1QjtFQUN6QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveHtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxufVxyXG5cclxuLnNtYWxsQm94e1xyXG4gICAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG4vKmZhdm9yaXRlcyovXHJcblxyXG4ucmVkLWhlYXJ0LWNoZWNrYm94IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgLnJlZC1oZWFydC1jaGVja2JveCArIGxhYmVsIHtcclxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICB9XHJcbiAgLnJlZC1oZWFydC1jaGVja2JveDpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwi74CEXCI7XHJcbiAgICBjb2xvcjogI2YwMDtcclxuICB9XHJcbiAgLnJlZC1oZWFydC1jaGVja2JveCArIGxhYmVsOmJlZm9yZSB7XHJcbiAgICB3aWR0aDogMzEuNXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNDhweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbnRlbnQ6IFwi74KKXCI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIGNvbG9yOiAjODg4O1xyXG4gIH1cclxuICAucmVkLWhlYXJ0LWNoZWNrYm94ICsgbGFiZWw6aG92ZXI6YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDUwMHB4O1xyXG4gIH1cclxuICBcclxuICAuY29udHJvbC1ncm91cCB7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICB9XHJcblxyXG5cclxuICAvKkxPQURJTkcqL1xyXG5cclxuICAubG9hZHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gIH1cclxuICBcclxuICAubG9hZGluZ3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAub2Jqe1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYig5MSwgOTEsIDIwNCk7XHJcbiAgICBtYXJnaW46IDAuM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGFuaW1hdGlvbjogbG9hZGluZyAwLjhzIGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICAub2JqOm50aC1jaGlsZCgyKXtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4xcztcclxuICB9XHJcbiAgXHJcbiAgLm9iajpudGgtY2hpbGQoMyl7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgfVxyXG4gIFxyXG4gIC5vYmo6bnRoLWNoaWxkKDQpe1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG4gIH1cclxuICBcclxuICAub2JqOm50aC1jaGlsZCg1KXtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICB9XHJcbiAgXHJcbiAgLm9iajpudGgtY2hpbGQoNil7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5vYmo6bnRoLWNoaWxkKDcpe1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gIH1cclxuICBcclxuICAub2JqOm50aC1jaGlsZCg4KXtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC43cztcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLm9iajpudGgtY2hpbGQoMTApe1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xyXG4gIH1cclxuICBcclxuICAub2JqOm50aC1jaGlsZCgxMSl7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgfVxyXG4gIFxyXG4gIC5vYmo6bnRoLWNoaWxkKDEyKXtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4zcztcclxuICB9XHJcbiAgXHJcbiAgLm9iajpudGgtY2hpbGQoMTMpe1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gIH1cclxuICBcclxuICAub2JqOm50aC1jaGlsZCgxNCl7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5vYmo6bnRoLWNoaWxkKDE1KXtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICB9XHJcbiAgXHJcbiAgLm9iajpudGgtY2hpbGQoMTYpe1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjdzO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGxvYWRpbmd7XHJcbiAgICAwJXtcclxuICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgNTAle1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAxMDAle1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5IRVJPTE97XHJcbiAgICBjb2xvcjogcmdiKDkxLCA5MSwgMjA0KTtcclxuICB9Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ "./src/app/weather.service.ts");



let HomeComponent = class HomeComponent {
    constructor(weather) {
        this.weather = weather;
    }
    ngOnInit() {
        this.loadingP = false;
        this.weather.falseLocationFlag = false;
        this.daysArray = [];
        if (this.weather.cityFlag == false) {
            this.weather.city = 'tel aviv';
        }
        ;
        if (localStorage.getItem('favorites')) {
            this.favoritesArray = JSON.parse(localStorage.getItem('favorites'));
        }
        else {
            this.favoritesArray = '';
        }
        ;
        this.getLocation();
        this.weatherText = '';
        this.myFav = false;
        this.temperatur = '';
        this.farTemperature = 0;
        this.windSpeed = '';
        if (this.favoritesArray.length) {
            for (let i = 0; i < this.favoritesArray.length; i++) {
                if (this.favoritesArray[i]['city'] == this.weather.city) {
                    this.myFav = true;
                }
                else {
                    this.myFav = false;
                }
            }
        }
        this.temperatureToggle = false;
    }
    getLocation() {
        this.daysArray = [];
        this.weather.falseLocationFlag = false;
        this.weather.location(this.weather.city)
            .subscribe(res => {
            var temp = res[0].Key;
        });
        this.weather.weather(this.weather.city)
            .subscribe(res => {
            this.temperatur = res[0].RealFeelTemperature.Metric.Value;
            this.farTemperature = parseInt(this.temperatur) * 9 / 5;
            this.farTemperature = parseFloat(this.farTemperature.toFixed(1));
            this.windSpeed = res[0].Wind.Speed.Metric.Value;
            this.weatherText = res[0].WeatherText;
        });
        this.weather.fiveDayWeather(this.weather.city)
            .subscribe(res => {
            for (let i = 0; i < res["DailyForecasts"].length; i++) {
                let tempDay = res["DailyForecasts"][i].Date; //real date
                let tempTemperatur = res["DailyForecasts"][i].Temperature.Maximum.Value;
                let tempFahrenheitTemp = (tempTemperatur * 9 / 5).toFixed(1);
                tempDay = tempDay.slice(0, 10); //sliced date
                let myDay = this.weather.createDay(tempDay);
                let myDate = this.weather.createDate(tempDay);
                let myWeather = { day: myDay, date: myDate, temperatur: tempTemperatur, fahrenheitTemp: tempFahrenheitTemp };
                this.daysArray.push(myWeather);
            }
        });
        localStorage.setItem('city', this.weather.city);
        if (this.favoritesArray.length) {
            if (this.favoritesArray[0]['city'] == this.weather.city) {
                this.myFav = true;
            }
            else {
                this.myFav = false;
            }
        }
        //this.flag = true;
    }
    addToFavorite() {
        this.weather.enterFavorite(this.weather.city, this.temperatur, this.windSpeed);
    }
    changeUnit() {
        this.temperatureToggle = !this.temperatureToggle;
        this.loadingP = false;
    }
    loading() {
        this.loadingP = true;
        setTimeout(() => { this.changeUnit(); }, 2000);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/main-page/main-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-page/main-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ "./src/app/weather.service.ts");



let MainPageComponent = class MainPageComponent {
    constructor(weather) {
        this.weather = weather;
    }
    ngOnInit() {
        this.weather.pageFlag = true;
        this.weather.restorePage();
    }
    pageChange(page) {
        if (page == 0) {
            this.weather.pageFlag = true;
        }
        else {
            this.weather.pageFlag = false;
        }
        localStorage.set('page', JSON.stringify(this.weather.pageFlag));
    }
};
MainPageComponent.ctorParameters = () => [
    { type: _weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"] }
];
MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-page',
        template: __webpack_require__(/*! raw-loader!./main-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/main-page/main-page.component.html"),
        styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/main-page/main-page.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]])
], MainPageComponent);



/***/ }),

/***/ "./src/app/weather.service.ts":
/*!************************************!*\
  !*** ./src/app/weather.service.ts ***!
  \************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let WeatherService = class WeatherService {
    constructor(http) {
        this.http = http;
        this._locationUrl = '';
        this._weatherUrl = '';
        this._fiveDayWeatherUrl = '';
        this.arrayFavorites = [];
        this.falseLocationFlag = false;
        this.cityFlag = false;
    }
    location(city) {
        if (city == 'tel aviv') {
            this._locationUrl = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&q=tel%20aviv&language=en-us';
        }
        else if (city == 'amsterdam') {
            this._locationUrl = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&q=amsterdam&language=en-us';
        }
        else if (city == 'paris') {
            this._locationUrl = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&q=paris&language=en-us';
        }
        else {
            this.falseLocationFlag = true;
        }
        return this.http.get(this._locationUrl);
    }
    weather(city) {
        if (city == 'tel aviv') {
            this._weatherUrl = 'https://dataservice.accuweather.com/currentconditions/v1/215793?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&language=en-us&details=true';
        }
        if (city == 'amsterdam') {
            this._weatherUrl = 'https://dataservice.accuweather.com/currentconditions/v1/249758?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&language=en-us&details=true';
        }
        if (city == 'paris') {
            this._weatherUrl = 'https://dataservice.accuweather.com/currentconditions/v1/623?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&language=en-us&details=true';
        }
        return this.http.get(this._weatherUrl);
    }
    fiveDayWeather(city) {
        if (city == 'tel aviv') {
            this._fiveDayWeatherUrl = 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/215793?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&language=en-us&details=false&metric=true';
        }
        if (city == 'amsterdam') {
            this._fiveDayWeatherUrl = 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/249758?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&language=en-us&details=false&metric=true';
        }
        if (city == 'paris') {
            this._fiveDayWeatherUrl = 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/623?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&language=en-us&details=false&metric=true';
        }
        return this.http.get(this._fiveDayWeatherUrl);
    }
    enterFavorite(city, temperature, claudes) {
        let pushFlag = true;
        for (let i = 0; i < this.arrayFavorites.length; i++) {
            if (this.arrayFavorites[i].city == city) {
                this.arrayFavorites[i] = this.arrayFavorites[this.arrayFavorites.length - 1];
                this.arrayFavorites.pop();
                let array = JSON.stringify(this.arrayFavorites);
                localStorage.setItem('favorites', array);
                pushFlag = false;
            }
        }
        if (pushFlag == true) {
            let myFavorite = { city: city, temperature: temperature, cloudes: claudes };
            this.arrayFavorites.push(myFavorite);
            let array = JSON.stringify(this.arrayFavorites);
            localStorage.setItem('favorites', array);
        }
    }
    restorePage() {
        if (localStorage.getItem('page'))
            this.pageFlag = JSON.parse(localStorage.getItem('page'));
    }
    createDay(newDate) {
        let date = new Date(newDate);
        let dayNumber = date.getDay();
        if (dayNumber == 0) {
            return 'Sunday';
        }
        if (dayNumber == 1) {
            return 'Monday';
        }
        if (dayNumber == 2) {
            return 'Tuesday';
        }
        if (dayNumber == 3) {
            return 'Wednesday';
        }
        if (dayNumber == 4) {
            return 'Thursday';
        }
        if (dayNumber == 5) {
            return 'Friday';
        }
        if (dayNumber == 6) {
            return 'Saturday';
        }
    }
    createDate(newDate) {
        let date = new Date(newDate);
        let month = date.getMonth() + 1;
        let myDate = date.getDate() + '/' + month + '/' + date.getFullYear();
        return myDate;
    }
};
WeatherService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], WeatherService);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gabi\Desktop\accuWeather\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map