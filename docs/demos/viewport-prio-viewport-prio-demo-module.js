(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewport-prio-viewport-prio-demo-module"],{

/***/ "1jDZ":
/*!*************************************************************************!*\
  !*** ./src/app/features/template/viewport-prio/viewport-prio.routes.ts ***!
  \*************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
const ROUTES = [
    {
        path: '',
        redirectTo: 'basic-example'
    },
    {
        path: 'basic-example',
        loadChildren: () => Promise.all(/*! import() | basic-example-basic-example-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~lazy-loading-components-lazy~43dd5952"), __webpack_require__.e("default~basic-example-basic-example-module~basics-tutorial-basics-module~coalescing-coalescing-modul~e15a2079"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~8f2352fb"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~f5eefc1d"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~7c850767"), __webpack_require__.e("basic-example-basic-example-module")]).then(__webpack_require__.bind(null, /*! ./basic-example/basic-example.module */ "441b")).then(m => m.BasicExampleModule)
    }
];


/***/ }),

/***/ "KD5p":
/*!******************************************************************************!*\
  !*** ./src/app/features/template/viewport-prio/viewport-prio-demo.module.ts ***!
  \******************************************************************************/
/*! exports provided: ViewportPrioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportPrioModule", function() { return ViewportPrioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _viewport_prio_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewport-prio.routes */ "1jDZ");






class ViewportPrioModule {
}
ViewportPrioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewportPrioModule });
ViewportPrioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewportPrioModule_Factory(t) { return new (t || ViewportPrioModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_viewport_prio_routes__WEBPACK_IMPORTED_MODULE_3__["ROUTES"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewportPrioModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewportPrioModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_viewport_prio_routes__WEBPACK_IMPORTED_MODULE_3__["ROUTES"])
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=viewport-prio-viewport-prio-demo-module.js.map