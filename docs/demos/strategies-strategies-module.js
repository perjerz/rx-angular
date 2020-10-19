(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["strategies-strategies-module"],{

/***/ "8Xbu":
/*!*******************************************************************!*\
  !*** ./src/app/features/template/strategies/strategies.module.ts ***!
  \*******************************************************************/
/*! exports provided: StrategiesDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategiesDemoModule", function() { return StrategiesDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _strategies_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./strategies.routes */ "vOFc");






class StrategiesDemoModule {
}
StrategiesDemoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StrategiesDemoModule });
StrategiesDemoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StrategiesDemoModule_Factory(t) { return new (t || StrategiesDemoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_strategies_routes__WEBPACK_IMPORTED_MODULE_3__["ROUTES"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StrategiesDemoModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StrategiesDemoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_strategies_routes__WEBPACK_IMPORTED_MODULE_3__["ROUTES"])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "vOFc":
/*!*******************************************************************!*\
  !*** ./src/app/features/template/strategies/strategies.routes.ts ***!
  \*******************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
const ROUTES = [
    {
        path: '',
        redirectTo: 'renderer'
    },
    {
        path: 'renderer',
        loadChildren: () => Promise.all(/*! import() | render-queue-render-queue-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("render-queue-render-queue-module")]).then(__webpack_require__.bind(null, /*! ./render-queue/render-queue.module */ "i0od")).then(m => m.RenderQueueModule)
    },
    {
        path: 'virtual-scroll-demo',
        loadChildren: () => Promise.all(/*! import() | virtual-scroll-demo-virtual-scroll-demo-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basic-example-basic-example-module~basics-tutorial-basics-module~coalescing-coalescing-modul~e15a2079"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~8f2352fb"), __webpack_require__.e("virtual-scroll-demo-virtual-scroll-demo-module")]).then(__webpack_require__.bind(null, /*! ./virtual-scroll-demo/virtual-scroll-demo.module */ "FjdO")).then(m => m.VirtualScrollDemoModule)
    }
];


/***/ })

}]);
//# sourceMappingURL=strategies-strategies-module.js.map