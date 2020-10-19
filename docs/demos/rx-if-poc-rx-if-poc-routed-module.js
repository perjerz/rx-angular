(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rx-if-poc-rx-if-poc-routed-module"],{

/***/ "DT1T":
/*!******************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/rx-if-poc/rx-if-poc.routes.ts ***!
  \******************************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _rx_if_poc_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rx-if-poc.component */ "Q1ST");

const ROUTES = [
    {
        path: '',
        component: _rx_if_poc_component__WEBPACK_IMPORTED_MODULE_0__["RxIfPocComponent"]
    }
];


/***/ }),

/***/ "cCWh":
/*!*********************************************************!*\
  !*** ./src/app/shared/debug-helper/visualizer/index.ts ***!
  \*********************************************************/
/*! exports provided: VisualizerModule, VisualizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _visualizer_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visualizer.module */ "WoFG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizerModule", function() { return _visualizer_module__WEBPACK_IMPORTED_MODULE_0__["VisualizerModule"]; });

/* harmony import */ var _visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visualizer/visualizer.component */ "KD49");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizerComponent", function() { return _visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_1__["VisualizerComponent"]; });





/***/ }),

/***/ "vr47":
/*!*************************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/rx-if-poc/rx-if-poc.routed.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: RxIfPocRoutedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxIfPocRoutedModule", function() { return RxIfPocRoutedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _rx_if_poc_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rx-if-poc.routes */ "DT1T");
/* harmony import */ var _rx_if_poc_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rx-if-poc.module */ "nTN4");






class RxIfPocRoutedModule {
}
RxIfPocRoutedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RxIfPocRoutedModule });
RxIfPocRoutedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RxIfPocRoutedModule_Factory(t) { return new (t || RxIfPocRoutedModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_rx_if_poc_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"]),
            _rx_if_poc_module__WEBPACK_IMPORTED_MODULE_3__["RxIfPocModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RxIfPocRoutedModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _rx_if_poc_module__WEBPACK_IMPORTED_MODULE_3__["RxIfPocModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxIfPocRoutedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_rx_if_poc_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"]),
                    _rx_if_poc_module__WEBPACK_IMPORTED_MODULE_3__["RxIfPocModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=rx-if-poc-rx-if-poc-routed-module.js.map