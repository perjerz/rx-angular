(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-performance-performance-shell-module"],{

/***/ "1nMJ":
/*!******************************************************************!*\
  !*** ./src/app/features/performance/performance-shell.module.ts ***!
  \******************************************************************/
/*! exports provided: PerformanceShellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceShellModule", function() { return PerformanceShellModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");




const ROUTES = [
    {
        path: 'rx-let-vs-push',
        loadChildren: () => Promise.all(/*! import() | rx-let-vs-push-rx-let-vs-push-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("common"), __webpack_require__.e("rx-let-vs-push-rx-let-vs-push-module")]).then(__webpack_require__.bind(null, /*! ./rx-let-vs-push/rx-let-vs-push.module */ "DUEo")).then((m) => m.RxLetVsPushModule),
    },
    {
        path: 'alphas-compare',
        loadChildren: () => Promise.all(/*! import() | alphas-compare-alphas-compare-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~alphas-compare-alphas-compare-module~lazy-loading-components-lazy-loading-components-module~~0c0396e9"), __webpack_require__.e("common"), __webpack_require__.e("alphas-compare-alphas-compare-module")]).then(__webpack_require__.bind(null, /*! ./alphas-compare/alphas-compare.module */ "q75x")).then((m) => m.AlphasCompareModule),
    },
    {
        path: 'nested-component-structure',
        loadChildren: () => Promise.all(/*! import() | nested-component-structure-nested-component-structure-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~lazy-loading-components-lazy~43dd5952"), __webpack_require__.e("default~basic-example-basic-example-module~basics-tutorial-basics-module~coalescing-coalescing-modul~e15a2079"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~8f2352fb"), __webpack_require__.e("default~basics-tutorial-basics-module~error-handling-error-handing-module~http-errors-http-error-mod~32c13eff"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~f5eefc1d"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~7c850767"), __webpack_require__.e("default~lazy-loading-components-lazy-loading-components-module~nested-component-structure-nested-com~d385b1d5"), __webpack_require__.e("default~nested-component-structure-nested-component-structure-module~passing-values-passing-values-m~32122c97"), __webpack_require__.e("default~nested-component-structure-nested-component-structure-module~passing-values-passing-values-m~cd4d53ae"), __webpack_require__.e("nested-component-structure-nested-component-structure-module")]).then(__webpack_require__.bind(null, /*! ./nested-component-structure/nested-component-structure.module */ "2lzS")).then((m) => m.NestedComponentStructureModule),
    },
    {
        path: 'sibling-component-structure',
        loadChildren: () => Promise.all(/*! import() | sibling-component-structure-sibling-component-structure-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~lazy-loading-components-lazy~43dd5952"), __webpack_require__.e("default~basic-example-basic-example-module~basics-tutorial-basics-module~coalescing-coalescing-modul~e15a2079"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~8f2352fb"), __webpack_require__.e("default~basics-tutorial-basics-module~error-handling-error-handing-module~http-errors-http-error-mod~32c13eff"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~f5eefc1d"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~7c850767"), __webpack_require__.e("default~lazy-loading-components-lazy-loading-components-module~nested-component-structure-nested-com~d385b1d5"), __webpack_require__.e("default~nested-component-structure-nested-component-structure-module~passing-values-passing-values-m~32122c97"), __webpack_require__.e("default~nested-component-structure-nested-component-structure-module~passing-values-passing-values-m~cd4d53ae"), __webpack_require__.e("sibling-component-structure-sibling-component-structure-module")]).then(__webpack_require__.bind(null, /*! ./sibling-component-structure/sibling-component-structure.module */ "hbFO")).then((m) => m.SiblingComponentStructureModule),
    }
];
class PerformanceShellModule {
}
PerformanceShellModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PerformanceShellModule });
PerformanceShellModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PerformanceShellModule_Factory(t) { return new (t || PerformanceShellModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ROUTES)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PerformanceShellModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerformanceShellModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ROUTES)],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=features-performance-performance-shell-module.js.map