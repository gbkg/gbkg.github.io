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

module.exports = "<div class=\"row\">\n<p style=\"margin-left: 45%\">\n        <mat-form-field appearance=\"legacy\">\n          <mat-label>Search</mat-label>\n          <input matInput placeholder=\"City\" [(ngModel)]='weather.city'>\n          <mat-icon matSuffix style=\"cursor: pointer\" (click)='getLocation()'>search</mat-icon>\n        </mat-form-field>\n        <span style=\"color: red\" *ngIf='weather.falseLocationFlag'>*No such location</span>\n      </p>\n      <div class=\"box\">\n          <div class=\"smallBox\" style=\"display: inline-block\">\n              <p>{{weather.city}}</p>\n        <p *ngIf='!temperatureToggle'>{{temperatur}} C</p>\n        <p *ngIf='temperatureToggle'>{{farTemperature}} F</p>\n        <button mat-button (click)='loading()'>Temperature toggle</button>\n    </div>\n\n\n    <!--Loading-->\n\n    <div class=\"loading\" *ngIf='loadingP'>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n        <h2 class=\"HEROLO\">HEROLO</h2>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n        <div class=\"obj\"></div>\n      </div>\n\n    <!--Loading-->\n\n<!--favorites-->\n\n    <div class='container' style=\"display: inline-block; padding-left: 50%; padding-top: 20px; position: absolute\">\n\n            <div class='checkboxes-container'>\n              <div class='control-group'>\n                <input class='red-heart-checkbox' id='red-check2' type='checkbox' (click)='addToFavorite()' [(ngModel)]='myFav'>\n                <label for='red-check2'>\n                </label>\n              </div>\n            </div>\n          </div>\n          \n          <!--favorites-->\n\n        </div>\n<!-- *ngIf='flag'-->\n<h1 style=\"position: absolute; bottom: 300px; right: 700px; display: inline-block\" >Wind Speed: {{windSpeed}} Km/h</h1><br>\n<h1 style=\"position: absolute; bottom: 250px; right: 800px; display: inline-block\" >{{weatherText}}</h1><br>\n    <div style=\"position: absolute;bottom: 100px; right: 300px;\">\n      <table>\n        <tr>\n        <td *ngFor='let i of daysArray'>\n            <div class=\"smallBox\"  style=\"text-align: center;\">\n                <span style=\"size: 50px; font-size: 25px;\">{{i[\"day\"]}}</span><br>\n                <span style=\"size: 50px; font-size: 25px;\">{{i[\"date\"]}}</span><br>\n                <span style=\"size: 50px; font-size: 25px;\" *ngIf='!temperatureToggle'>{{i[\"temperatur\"]}} C</span>\n                <span style=\"size: 50px; font-size: 25px;\" *ngIf='temperatureToggle'>{{i[\"fahrenheitTemp\"]}} F</span>\n            </div>\n          </td>\n        </tr>\n\n          </table>\n        </div>\n  \n      </div>\n\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'accuWeather';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./favorites/favorites.component */ "./src/app/favorites/favorites.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ "./src/app/weather.service.ts");



var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(weather) {
        this.weather = weather;
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        this.weather.arrayFavorites = JSON.parse(localStorage.getItem('favorites'));
        this.weather.cityFlag = false;
    };
    FavoritesComponent.prototype.removeFavorite = function (city) {
        for (var i = 0; i < this.weather.arrayFavorites.length; i++) {
            if (city == this.weather.arrayFavorites[i]['city']) {
                this.weather.arrayFavorites[i] = this.weather.arrayFavorites[this.weather.arrayFavorites.length - 1];
                this.weather.arrayFavorites.pop();
                var tempFav = JSON.stringify(this.weather.arrayFavorites);
                localStorage.setItem('favorites', tempFav);
                return;
            }
        }
    };
    FavoritesComponent.prototype.info = function (city) {
        this.weather.city = city;
        this.weather.cityFlag = true;
        this.weather.pageFlag = true;
    };
    FavoritesComponent.ctorParameters = function () { return [
        { type: _weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"] }
    ]; };
    FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! raw-loader!./favorites.component.html */ "./node_modules/raw-loader/index.js!./src/app/favorites/favorites.component.html"),
            styles: [__webpack_require__(/*! ./favorites.component.css */ "./src/app/favorites/favorites.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\r\n    border-style: solid;\r\n    height: 700px;\r\n    width: 80%;\r\n    margin-left: 150px;\r\n}\r\n\r\n.smallBox{\r\n    border-style: groove;\r\n    height: 150px;\r\n    width: 150px;\r\n    margin-right: 50px;\r\n    margin-top: 20px;\r\n    \r\n}\r\n\r\n/*favorites*/\r\n\r\n.red-heart-checkbox {\r\n    visibility: hidden;\r\n  }\r\n\r\n.red-heart-checkbox + label {\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    font-size: 30px;\r\n    padding-left: 15px;\r\n    transition: all 0.2s;\r\n  }\r\n\r\n.red-heart-checkbox:checked + label:before {\r\n    content: \"\";\r\n    color: #f00;\r\n  }\r\n\r\n.red-heart-checkbox + label:before {\r\n    width: 31.5px;\r\n    height: 30px;\r\n    content: \"\";\r\n    position: absolute;\r\n    margin-left: -48px;\r\n    margin-top: 3px;\r\n    font-family: FontAwesome;\r\n    font-size: 30px;\r\n    content: \"\";\r\n    transition: all 0.3s;\r\n    color: #888;\r\n  }\r\n\r\n.red-heart-checkbox + label:hover:before {\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n  }\r\n\r\n.container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100%;\r\n    left: 500px;\r\n  }\r\n\r\n.control-group {\r\n    margin: 3px;\r\n  }\r\n\r\n/*LOADING*/\r\n\r\n.load{\r\n    margin: 0;\r\n    padding: 0;\r\n    background: grey;\r\n  }\r\n\r\n.loading{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n    height: 40px;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n.obj{\r\n    width: 5px;\r\n    height: 40px;\r\n    background: rgb(91, 91, 204);\r\n    margin: 0.3px;\r\n    border-radius: 10px;\r\n    -webkit-animation: loading 0.8s infinite;\r\n            animation: loading 0.8s infinite;\r\n  }\r\n\r\n.obj:nth-child(2){\r\n    -webkit-animation-delay: 0.1s;\r\n            animation-delay: 0.1s;\r\n  }\r\n\r\n.obj:nth-child(3){\r\n    -webkit-animation-delay: 0.2s;\r\n            animation-delay: 0.2s;\r\n  }\r\n\r\n.obj:nth-child(4){\r\n    -webkit-animation-delay: 0.3s;\r\n            animation-delay: 0.3s;\r\n  }\r\n\r\n.obj:nth-child(5){\r\n    -webkit-animation-delay: 0.4s;\r\n            animation-delay: 0.4s;\r\n  }\r\n\r\n.obj:nth-child(6){\r\n    -webkit-animation-delay: 0.5s;\r\n            animation-delay: 0.5s;\r\n  }\r\n\r\n.obj:nth-child(7){\r\n    -webkit-animation-delay: 0.6s;\r\n            animation-delay: 0.6s;\r\n  }\r\n\r\n.obj:nth-child(8){\r\n    -webkit-animation-delay: 0.7s;\r\n            animation-delay: 0.7s;\r\n  }\r\n\r\n.obj:nth-child(10){\r\n    -webkit-animation-delay: 0.1s;\r\n            animation-delay: 0.1s;\r\n  }\r\n\r\n.obj:nth-child(11){\r\n    -webkit-animation-delay: 0.2s;\r\n            animation-delay: 0.2s;\r\n  }\r\n\r\n.obj:nth-child(12){\r\n    -webkit-animation-delay: 0.3s;\r\n            animation-delay: 0.3s;\r\n  }\r\n\r\n.obj:nth-child(13){\r\n    -webkit-animation-delay: 0.4s;\r\n            animation-delay: 0.4s;\r\n  }\r\n\r\n.obj:nth-child(14){\r\n    -webkit-animation-delay: 0.5s;\r\n            animation-delay: 0.5s;\r\n  }\r\n\r\n.obj:nth-child(15){\r\n    -webkit-animation-delay: 0.6s;\r\n            animation-delay: 0.6s;\r\n  }\r\n\r\n.obj:nth-child(16){\r\n    -webkit-animation-delay: 0.7s;\r\n            animation-delay: 0.7s;\r\n  }\r\n\r\n@-webkit-keyframes loading{\r\n    0%{\r\n      height: 0;\r\n    }\r\n  \r\n    50%{\r\n      height: 40px;\r\n    }\r\n  \r\n    100%{\r\n      height: 0;\r\n    }\r\n  }\r\n\r\n@keyframes loading{\r\n    0%{\r\n      height: 0;\r\n    }\r\n  \r\n    50%{\r\n      height: 40px;\r\n    }\r\n  \r\n    100%{\r\n      height: 0;\r\n    }\r\n  }\r\n\r\n.HEROLO{\r\n    color: rgb(91, 91, 204);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCOztBQUVwQjs7QUFFQSxZQUFZOztBQUVaO0lBQ0ksa0JBQWtCO0VBQ3BCOztBQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUV6QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7QUFDQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0FBQ0E7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsV0FBVztFQUNiOztBQUNBO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztFQUNiOztBQUVBO0lBQ0UsV0FBVztFQUNiOztBQUdBLFVBQVU7O0FBRVY7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHVDQUErQjtZQUEvQiwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHdDQUFnQztZQUFoQyxnQ0FBZ0M7RUFDbEM7O0FBRUE7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCO0VBQ3ZCOztBQUtBO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFO01BQ0UsU0FBUztJQUNYOztJQUVBO01BQ0UsWUFBWTtJQUNkOztJQUVBO01BQ0UsU0FBUztJQUNYO0VBQ0Y7O0FBWkE7SUFDRTtNQUNFLFNBQVM7SUFDWDs7SUFFQTtNQUNFLFlBQVk7SUFDZDs7SUFFQTtNQUNFLFNBQVM7SUFDWDtFQUNGOztBQUdBO0lBQ0UsdUJBQXVCO0VBQ3pCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94e1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG59XHJcblxyXG4uc21hbGxCb3h7XHJcbiAgICBib3JkZXItc3R5bGU6IGdyb292ZTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi8qZmF2b3JpdGVzKi9cclxuXHJcbi5yZWQtaGVhcnQtY2hlY2tib3gge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuICAucmVkLWhlYXJ0LWNoZWNrYm94ICsgbGFiZWwge1xyXG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gIH1cclxuICAucmVkLWhlYXJ0LWNoZWNrYm94OmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCLvgIRcIjtcclxuICAgIGNvbG9yOiAjZjAwO1xyXG4gIH1cclxuICAucmVkLWhlYXJ0LWNoZWNrYm94ICsgbGFiZWw6YmVmb3JlIHtcclxuICAgIHdpZHRoOiAzMS41cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC00OHB4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29udGVudDogXCLvgopcIjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgfVxyXG4gIC5yZWQtaGVhcnQtY2hlY2tib3ggKyBsYWJlbDpob3ZlcjpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogNTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250cm9sLWdyb3VwIHtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gIH1cclxuXHJcblxyXG4gIC8qTE9BRElORyovXHJcblxyXG4gIC5sb2Fke1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2FkaW5ne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5vYmp7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDkxLCA5MSwgMjA0KTtcclxuICAgIG1hcmdpbjogMC4zcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYW5pbWF0aW9uOiBsb2FkaW5nIDAuOHMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5vYmo6bnRoLWNoaWxkKDIpe1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xyXG4gIH1cclxuICBcclxuICAub2JqOm50aC1jaGlsZCgzKXtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4ycztcclxuICB9XHJcbiAgXHJcbiAgLm9iajpudGgtY2hpbGQoNCl7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbiAgfVxyXG4gIFxyXG4gIC5vYmo6bnRoLWNoaWxkKDUpe1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gIH1cclxuICBcclxuICAub2JqOm50aC1jaGlsZCg2KXtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC41cztcclxuICB9XHJcbiAgXHJcbiAgLm9iajpudGgtY2hpbGQoNyl7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgfVxyXG4gIFxyXG4gIC5vYmo6bnRoLWNoaWxkKDgpe1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjdzO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBcclxuICAub2JqOm50aC1jaGlsZCgxMCl7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5vYmo6bnRoLWNoaWxkKDExKXtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4ycztcclxuICB9XHJcbiAgXHJcbiAgLm9iajpudGgtY2hpbGQoMTIpe1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG4gIH1cclxuICBcclxuICAub2JqOm50aC1jaGlsZCgxMyl7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5vYmo6bnRoLWNoaWxkKDE0KXtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC41cztcclxuICB9XHJcbiAgXHJcbiAgLm9iajpudGgtY2hpbGQoMTUpe1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gIH1cclxuICBcclxuICAub2JqOm50aC1jaGlsZCgxNil7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuN3M7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgbG9hZGluZ3tcclxuICAgIDAle1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICA1MCV7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuICBcclxuICAgIDEwMCV7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLkhFUk9MT3tcclxuICAgIGNvbG9yOiByZ2IoOTEsIDkxLCAyMDQpO1xyXG4gIH0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ "./src/app/weather.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(weather) {
        this.weather = weather;
    }
    HomeComponent.prototype.ngOnInit = function () {
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
            for (var i = 0; i < this.favoritesArray.length; i++) {
                if (this.favoritesArray[i]['city'] == this.weather.city) {
                    this.myFav = true;
                }
                else {
                    this.myFav = false;
                }
            }
        }
        this.temperatureToggle = false;
    };
    HomeComponent.prototype.getLocation = function () {
        var _this = this;
        this.daysArray = [];
        this.weather.falseLocationFlag = false;
        this.weather.location(this.weather.city)
            .subscribe(function (res) {
            var temp = res[0].Key;
        });
        this.weather.weather(this.weather.city)
            .subscribe(function (res) {
            _this.temperatur = res[0].RealFeelTemperature.Metric.Value;
            _this.farTemperature = parseInt(_this.temperatur) * 9 / 5;
            _this.farTemperature = parseFloat(_this.farTemperature.toFixed(1));
            _this.windSpeed = res[0].Wind.Speed.Metric.Value;
            _this.weatherText = res[0].WeatherText;
        });
        this.weather.fiveDayWeather(this.weather.city)
            .subscribe(function (res) {
            for (var i = 0; i < res["DailyForecasts"].length; i++) {
                var tempDay = res["DailyForecasts"][i].Date; //real date
                var tempTemperatur = res["DailyForecasts"][i].Temperature.Maximum.Value;
                var tempFahrenheitTemp = (tempTemperatur * 9 / 5).toFixed(1);
                tempDay = tempDay.slice(0, 10); //sliced date
                var myDay = _this.weather.createDay(tempDay);
                var myDate = _this.weather.createDate(tempDay);
                var myWeather = { day: myDay, date: myDate, temperatur: tempTemperatur, fahrenheitTemp: tempFahrenheitTemp };
                _this.daysArray.push(myWeather);
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
    };
    HomeComponent.prototype.addToFavorite = function () {
        this.weather.enterFavorite(this.weather.city, this.temperatur, this.windSpeed);
    };
    HomeComponent.prototype.changeUnit = function () {
        this.temperatureToggle = !this.temperatureToggle;
        this.loadingP = false;
    };
    HomeComponent.prototype.loading = function () {
        var _this = this;
        this.loadingP = true;
        setTimeout(function () { _this.changeUnit(); }, 2000);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]])
    ], HomeComponent);
    return HomeComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ "./src/app/weather.service.ts");



var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(weather) {
        this.weather = weather;
    }
    MainPageComponent.prototype.ngOnInit = function () {
        this.weather.pageFlag = true;
        this.weather.restorePage();
    };
    MainPageComponent.prototype.pageChange = function (page) {
        if (page == 0) {
            this.weather.pageFlag = true;
        }
        else {
            this.weather.pageFlag = false;
        }
        localStorage.set('page', JSON.stringify(this.weather.pageFlag));
    };
    MainPageComponent.ctorParameters = function () { return [
        { type: _weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"] }
    ]; };
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! raw-loader!./main-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/main-page/main-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]])
    ], MainPageComponent);
    return MainPageComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
        this._locationUrl = '';
        this._weatherUrl = '';
        this._fiveDayWeatherUrl = '';
        this.arrayFavorites = [];
        this.falseLocationFlag = false;
        this.cityFlag = false;
    }
    WeatherService.prototype.location = function (city) {
        if (city == 'tel aviv') {
            this._locationUrl = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&q=tel%20aviv&language=en-us';
        }
        else if (city == 'amsterdam') {
            this._locationUrl = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&q=amsterdam&language=en-us';
        }
        else if (city == 'paris') {
            this._locationUrl = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&q=paris&language=en-us';
        }
        else {
            this.falseLocationFlag = true;
        }
        return this.http.get(this._locationUrl);
    };
    WeatherService.prototype.weather = function (city) {
        if (city == 'tel aviv') {
            this._weatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1/215793?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&language=en-us&details=true';
        }
        if (city == 'amsterdam') {
            this._weatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1/249758?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&language=en-us&details=true';
        }
        if (city == 'paris') {
            this._weatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1/623?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&language=en-us&details=true';
        }
        return this.http.get(this._weatherUrl);
    };
    WeatherService.prototype.fiveDayWeather = function (city) {
        if (city == 'tel aviv') {
            this._fiveDayWeatherUrl = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/215793?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&language=en-us&details=false&metric=true';
        }
        if (city == 'amsterdam') {
            this._fiveDayWeatherUrl = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/249758?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&language=en-us&details=false&metric=true';
        }
        if (city == 'paris') {
            this._fiveDayWeatherUrl = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/623?apikey=AZs6g1tBMmFOQLqTGXFsYzAYWEeOAG8b&language=en-us&details=false&metric=true';
        }
        return this.http.get(this._fiveDayWeatherUrl);
    };
    WeatherService.prototype.enterFavorite = function (city, temperature, claudes) {
        var pushFlag = true;
        for (var i = 0; i < this.arrayFavorites.length; i++) {
            if (this.arrayFavorites[i].city == city) {
                this.arrayFavorites[i] = this.arrayFavorites[this.arrayFavorites.length - 1];
                this.arrayFavorites.pop();
                var array = JSON.stringify(this.arrayFavorites);
                localStorage.setItem('favorites', array);
                pushFlag = false;
            }
        }
        if (pushFlag == true) {
            var myFavorite = { city: city, temperature: temperature, cloudes: claudes };
            this.arrayFavorites.push(myFavorite);
            var array = JSON.stringify(this.arrayFavorites);
            localStorage.setItem('favorites', array);
        }
    };
    WeatherService.prototype.restorePage = function () {
        if (localStorage.getItem('page'))
            this.pageFlag = JSON.parse(localStorage.getItem('page'));
    };
    WeatherService.prototype.createDay = function (newDate) {
        var date = new Date(newDate);
        var dayNumber = date.getDay();
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
    };
    WeatherService.prototype.createDate = function (newDate) {
        var date = new Date(newDate);
        var month = date.getMonth() + 1;
        var myDate = date.getDate() + '/' + month + '/' + date.getFullYear();
        return myDate;
    };
    WeatherService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WeatherService);
    return WeatherService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Herolo\gabrielKagansky.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map