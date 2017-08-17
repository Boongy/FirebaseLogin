webpackJsonp([1],{

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorePageModule", function() { return StorePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(408);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StorePageModule = (function () {
    function StorePageModule() {
    }
    return StorePageModule;
}());
StorePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__store__["a" /* StorePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__store__["a" /* StorePage */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__store__["a" /* StorePage */]
        ]
    })
], StorePageModule);

//# sourceMappingURL=store.module.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var StorePage = (function () {
    function StorePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StorePage');
    };
    return StorePage;
}());
StorePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-store',template:/*ion-inline-start:"c:\users\mason\ionApps\clicker\src\pages\store\store.html"*/'<!--\n  Generated template for the StorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Store {{(profileData | async)?.username}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n  <ion-content class="card-background-page">\n\n    <ion-card>\n      <img src="assets/images/hotdog.png"/>\n      <div class="card-title">Meme</div>\n      <div class="card-subtitle">41 Listings</div>\n    </ion-card>\n\n    <ion-card>\n      <img src="assets/images/hentaiboys.jpg"/>\n      <div class="card-title">Hentai</div>\n      <div class="card-subtitle">64 Listings</div>\n    </ion-card>\n\n    <ion-card>\n      <img src="assets/images/lean.jpg"/>\n      <div class="card-title">Lean</div>\n      <div class="card-subtitle">72 Listings</div>\n    </ion-card>\n\n    <ion-card>\n      <img src="assets/images/putin.jpg"/>\n      <div class="card-title">Putin</div>\n      <div class="card-subtitle">28 Listings</div>\n    </ion-card>\n\n  </ion-content>\n\n</ion-content>\n'/*ion-inline-end:"c:\users\mason\ionApps\clicker\src\pages\store\store.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], StorePage);

//# sourceMappingURL=store.js.map

/***/ })

});
//# sourceMappingURL=1.js.map